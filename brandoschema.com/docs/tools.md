# Brando Tools

This section introduces tools that support the creation, validation, and optimisation of BDL (Brand Definition Language) metadata. These tools help ensure your brand remains machine-readable, AI-compatible, and aligned with AI safety best practices.

---

## 1. BDL Validator *(Coming Soon)*

Validate your Brando metadata against the official vocabulary.

- Verifies JSON-LD syntax and structure
- Flags missing or invalid `bdl:` fields
- Checks for broken links, logo formats, and compliance notes
- Detects issues with exclusion phrases and Sticky Guidelines

**Planned URL**: [https://brandoschema.com/tools/validator](https://brandoschema.com/tools/validator)

---

## 2. Metadata Generator *(In Development)*

An interactive tool that builds valid Brando JSON-LD.

- Define mission, tone, prompt language, exclusions
- Upload logos and branding assets
- Generates clean, copy–paste JSON
- Optional: export as `sticky_guidelines.json`

**Planned path**: `/tools/generator/`

---

## 3. Prompt Tester *(In Development)*

Test how your `bdl:preferredPrompt` and exclusions perform across:

- Simulated LLMs (ChatGPT, Claude, Gemini)
- Assistant-like scenarios
- RAG question-answer pipelines

**Output**:

- Hallucination warnings
- Prompt rewrites
- Assistant safety diagnostics

---

## 4. Vector Embedder *(Beta)*

Upload branded documents or content to generate embeddings.

- Supports `.pdf`, `.md`, `.txt`, `.html`
- Optimised for branded RAG systems
- Measures `bdl:embeddingQuality` confidence
- Useful for assistant retrieval pipelines

---

## 5. Visibility Score Calculator *(Planned)*

Check your brand metadata’s semantic visibility and LLM alignment.

- Estimates `bdl:visibilityScore` (0.0–1.0)
- Explains missing or weak schema fields
- Provides tips to boost AI discoverability

---

## 6. Developer Resources

For advanced users and implementers:

- [BDL Vocabulary Reference](vocabulary.md)
- [Live JSON-LD Examples](examples.md)
- [Prompt Design and Usage Guide](usage.md)
- [Brando GitHub Repository](https://github.com/jonathanbowker/brando-bdl)

---

## Contribute to Brando

Brando is open for collaborative development.

We welcome contributors who can help build:
- Schema validators
- Prompt testing agents
- Metadata linters
- Assistant tuning utilities

Contact [jonathan@advancedanalytica.co.uk](mailto:jonathan@advancedanalytica.co.uk) to get involved.
