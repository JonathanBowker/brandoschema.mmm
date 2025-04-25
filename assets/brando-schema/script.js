// Wait for the DOM to fully load before executing any D3 operations
document.addEventListener('DOMContentLoaded', function () {

    // Select the <svg> element and extract its width and height
    const svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    // Define margins and calculate the usable space for the tree layout
    const margin = { top: 20, right: 120, bottom: 20, left: 120 },
        treeWidth = width - margin.right - margin.left,
        treeHeight = height - margin.top - margin.bottom;

    // Append a <g> group to the SVG and translate it to accommodate the margin
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create a D3 tree layout with the given dimensions
    const treeLayout = d3.tree().size([treeHeight, treeWidth]);

    // Create a floating tooltip with styles and hover persistence logic
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("background", "#111")
        .style("color", "#fff")
        .style("padding", "10px")
        .style("border-radius", "6px")
        .style("font-family", "Arial, sans-serif")
        .style("font-size", "14px")
        .style("max-width", "400px")
        .style("pointer-events", "auto") // Let tooltip be clickable
        .on("mouseover", () => tooltip.interrupted = true)  // Prevent hide when hovered
        .on("mouseout", () => {                              // Hide only after mouse leaves
            tooltip.interrupted = false;
            tooltip.transition().duration(500).style("opacity", 0);
        });

    let i = 0;               // Unique node ID counter
    let duration = 500;      // Duration for transitions

    // Load the schema JSON data
    d3.json("brando-schema.json").then(function (data) {
        // Convert raw JSON into a D3 hierarchy
        const root = d3.hierarchy(data, d => d.children);
        root.x0 = treeHeight / 2;
        root.y0 = 0;

        // Collapse all children initially
        root.children.forEach(collapse);

        // Render the initial tree
        update(root);

        // Recursively collapse all child nodes
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }

        // Core rendering and interaction function
        function update(source) {
            const treeData = treeLayout(root);     // Compute layout
            const nodes = treeData.descendants();  // All nodes
            const links = treeData.links();        // All links

            // Set horizontal spacing based on depth
            nodes.forEach(d => d.y = d.depth * 180);

            // Node data join
            const node = g.selectAll('.node')
                .data(nodes, d => d.id || (d.id = ++i));

            // Enter phase: new nodes
            const nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr('id', d => `node-${d.id}`)
                .attr('transform', d => `translate(${source.y0},${source.x0})`)
                .on('click', click)
                .on('mouseover', function (event, d) {
                    if (d.data.url || d.data.definition) {
                        tooltip.transition().duration(200).style("opacity", 0.95);

                        const link = d.data.url
                            ? `<strong>URL</strong>: <a href="${d.data.url}" target="_blank" style="color:#fff;text-decoration:underline;">${d.data.url}</a><br/>` 
                            : '';

                        const definition = d.data.definition 
                            ? `<div style="margin-top:4px;font-size:0.95em;"><strong>Definition</strong>: ${d.data.definition}</div>` 
                            : '';

                        tooltip.html(`<strong>Term</strong>: ${d.data.name}<br/>${link}${definition}`)
                            .style("left", (event.pageX + 15) + "px")
                            .style("top", (event.pageY - 28) + "px");
                    }
                })
                .on('mouseout', function () {
                    // Delay fade out unless user hovers the tooltip
                    setTimeout(() => {
                        if (!tooltip.interrupted) {
                            tooltip.transition().duration(500).style("opacity", 0);
                        }
                    }, 200);
                });

            // Draw circle on each node
            nodeEnter.append('circle')
                .attr('r', 7)
                .style('fill', d => d._children ? '#8200fa' : '#fff'); // Purple for collapsed

            // Add node text
            nodeEnter.append('text')
                .attr('dy', '.35em')
                .attr('x', d => d.children || d._children ? -18 : 18)
                .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
                .text(d => d.data.name);

            // Merge enter and update selections
            const nodeUpdate = nodeEnter.merge(node);

            nodeUpdate.transition()
                .duration(duration)
                .ease(d3.easeCubic)
                .attr('transform', d => `translate(${d.y},${d.x})`);

            nodeUpdate.select('circle')
                .attr('r', 7)
                .style('fill', d => d._children ? '#8200fa' : '#fff');

            // Exit phase: remove unused nodes
            const nodeExit = node.exit().transition()
                .duration(duration)
                .ease(d3.easeCubic)
                .attr('transform', d => `translate(${source.y},${source.x})`)
                .remove();

            nodeExit.select('circle').attr('r', 1e-6);
            nodeExit.select('text').style('fill-opacity', 1e-6);

            // ==== Links between nodes ====
            const link = g.selectAll('.link')
                .data(links, d => d.target.id);

            // Enter new links
            const linkEnter = link.enter().insert('path', 'g')
                .attr('class', 'link')
                .attr('d', d => {
                    const o = { x: source.x0, y: source.y0 };
                    return diagonal(o, o);
                });

            const linkUpdate = linkEnter.merge(link);

            // Animate updated link positions
            linkUpdate.transition()
                .duration(duration)
                .ease(d3.easeCubic)
                .attr('d', d => diagonal(d.source, d.target));

            // Exit old links
            link.exit().transition()
                .duration(duration)
                .ease(d3.easeCubic)
                .attr('d', d => {
                    const o = { x: source.x, y: source.y };
                    return diagonal(o, o);
                })
                .remove();

            // Store current position for next transition
            nodes.forEach(d => {
                d.x0 = d.x;
                d.y0 = d.y;
            });

            // Create curved path between nodes (Bezier curve)
            function diagonal(s, d) {
                return `M ${s.y} ${s.x}
                        C ${(s.y + d.y) / 2} ${s.x},
                          ${(s.y + d.y) / 2} ${d.x},
                          ${d.y} ${d.x}`;
            }

            // Handle click to toggle children visibility
            function click(event, d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    // Collapse all siblings at same level
                    if (d.parent) {
                        d.parent.children.forEach(function (sibling) {
                            if (sibling !== d && sibling.children) {
                                sibling._children = sibling.children;
                                sibling.children = null;
                            }
                        });
                    }
                    d.children = d._children;
                    d._children = null;
                }

                // Fade all other nodes
                g.selectAll('.node')
                    .transition()
                    .duration(500)
                    .style('opacity', 0.1);

                // Keep clicked node visible
                d3.select(this)
                    .transition()
                    .duration(500)
                    .style('opacity', 1);

                fadeToFullOpacity(d);  // Reveal ancestors + descendants
                update(d);             // Re-render tree from clicked node
            }

            // Restore full opacity to clicked node's family
            function fadeToFullOpacity(d) {
                let current = d;
                while (current) {
                    d3.select(`#node-${current.id}`)
                        .transition()
                        .duration(500)
                        .style('opacity', 1);
                    current = current.parent;
                }

                if (d.children || d._children) {
                    (d.children || d._children).forEach(child => {
                        d3.select(`#node-${child.id}`)
                            .transition()
                            .duration(500)
                            .style('opacity', 1);
                        fadeToFullOpacity(child); // Recursive
                    });
                }
            }
        }
    }).catch(function (error) {
        // Log loading errors
        console.error("Error loading the JSON data:", error);
    });
});
