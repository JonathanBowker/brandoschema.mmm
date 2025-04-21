# Brando Terms Dictionary

## 1.1 - Verbal Identity Terms

### Tone of Voice

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.1** |
| **Term** | *`toneOfVoice`* |
| **Prefix** | *`brando`* |
| **Label** | *Tone of Voice* |
| **IRI** | *`https://brandoschema.com/bdv-terms/toneOfVoice`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Emotional texture of brand voice.* |
| **Usage Note** | *Guides the tone and mood used in all brand communications.* |
| **Example** | *"Clear, empathetic, plain British English, non-judgemental"* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:dialogueStyle`, `brando:writingStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Dialogue Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.2** |
| **Term** | *`dialogueStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Dialogue Style* |
| **IRI** | *`https://brandoschema.com/bdv-terms/dialogueStyle`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Conversational pacing and pronoun guidance.* |
| **Usage Note** | *Specifies whether to use first/second/third person, how formal to be, and dialogue patterns.* |
| **Example** | *"Second person, moderately formal, use of rhetorical questions"* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:toneOfVoice`, `brando:writingStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Writing Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.3** |
| **Term** | *`writingStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Writing Style* |
| **IRI** | *`https://brandoschema.com/bdv-terms/writingStyle`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Grammar, clarity, structure preferences.* |
| **Usage Note** | *Helps control the structure and formatting of written content.* |
| **Example** | *"Short sentences, active voice, avoid jargon"* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:toneOfVoice`, `brando:dialogueStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Naming Convention

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.4** |
| **Term** | *`namingConvention`* |
| **Prefix** | *`brando`* |
| **Label** | *Naming Convention* |
| **IRI** | *`https://brandoschema.com/bdv-terms/namingConvention`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Rules for product names, formatting, date/time expressions.* |
| **Usage Note** | *Ensures consistent, brand-aligned naming and terminology.* |
| **Example** | *"Use 'AI Assistant' not 'chatbot', dates in DD-MM-YYYY format"* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:writingStyle`, `brando:approvedTerms`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Persona Card

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.5** |
| **Term** | *`personaCard`* |
| **Prefix** | *`brando`* |
| **Label** | *Persona Card* |
| **IRI** | *`https://brandoschema.com/bdv-terms/personaCard`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Humanised voice traits such as attitude, tone, and behavioural style.* |
| **Usage Note** | *Used for prompt and voice modelling in LLMs.* |
| **Example** | *"Friendly expert, speaks with clarity, confidence, and compassion."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:toneOfVoice`, `brando:dialogueStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Approved Terms

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.6** |
| **Term** | *`approvedTerms`* |
| **Prefix** | *`brando`* |
| **Label** | *Approved Terms* |
| **IRI** | *`https://brandoschema.com/bdv-terms/approvedTerms`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`rdf:List of xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Vocabulary the brand prefers or requires in content.* |
| **Usage Note** | *Ensures semantic consistency in communications.* |
| **Example** | *["patient", "side effect", "licensed medicine"]* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:prohibitedTerms`, `brando:vocabularyConstraints`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Prohibited Terms

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.7** |
| **Term** | *`prohibitedTerms`* |
| **Prefix** | *`brando`* |
| **Label** | *Prohibited Terms* |
| **IRI** | *`https://brandoschema.com/bdv-terms/prohibitedTerms`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`rdf:List of xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Terms and phrases explicitly disallowed in brand voice.* |
| **Usage Note** | *Helps avoid misalignment and unapproved expressions.* |
| **Example** | *["cheap", "miracle", "amazing"]* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:approvedTerms`, `brando:vocabularyConstraints`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Key Message

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.8** |
| **Term** | *`keyMessage`* |
| **Prefix** | *`brando`* |
| **Label** | *Key Message* |
| **IRI** | *`https://brandoschema.com/bdv-terms/keyMessage`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Core ideas and value propositions communicated consistently across all brand channels.* |
| **Usage Note** | *Used to train AI on foundational brand narratives.* |
| **Example** | *"We turn regulated medicines data into trusted patient explanations."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:taglines`, `brando:promptScaffold`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Taglines

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.9** |
| **Term** | *`taglines`* |
| **Prefix** | *`brando`* |
| **Label** | *Taglines* |
| **IRI** | *`https://brandoschema.com/bdv-terms/taglines`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`rdf:List of xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Primary strapline and any officially approved variants or campaign slogans.* |
| **Usage Note** | *Used across campaigns, metadata, and verbal banners.* |
| **Example** | *["Wisdom to System", "From Data to Dialogue"]* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:keyMessage`, `brando:writingStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Prompt Scaffold

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.10** |
| **Term** | *`promptScaffold`* |
| **Prefix** | *`brando`* |
| **Label** | *Prompt Scaffold* |
| **IRI** | *`https://brandoschema.com/bdv-terms/promptScaffold`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Reusable instructions and templates for AI model prompts (e.g., tone and format enforcement).* |
| **Usage Note** | *Promotes consistency, compliance, and tone alignment in automated outputs.* |
| **Example** | *"Use plain English, start with a clear summary, cite source if available."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:keyMessage`, `brando:mustDo`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Must Do

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.11** |
| **Term** | *`mustDo`* |
| **Prefix** | *`brando`* |
| **Label** | *Must Do* |
| **IRI** | *`https://brandoschema.com/bdv-terms/mustDo`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Required actions and stylistic behaviours.* |
| **Usage Note** | *Guides LLMs and copywriters to mandatory tone or content inclusions.* |
| **Example** | *"Use first-person where possible; cite sources; begin with a plain English summary."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:mustNotDo`, `brando:promptScaffold`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Must Not Do

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.12** |
| **Term** | *`mustNotDo`* |
| **Prefix** | *`brando`* |
| **Label** | *Must Not Do* |
| **IRI** | *`https://brandoschema.com/bdv-terms/mustNotDo`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VerbalIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VerbalIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVerbalIdentity`* |
| **Definition** | *Explicit behavioural constraints.* |
| **Usage Note** | *Instructs AI models and authors on what to avoid stylistically or semantically.* |
| **Example** | *"Don’t exaggerate; avoid second-person in longform copy; never claim guaranteed results."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:mustDo`, `brando:guardRails`* |
| **Equivalent Schema.org Term** | *None (custom)* |




## 1.2 - Visual Identity Terms

### Brand Name

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.1** |
| **Term** | *`name`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Name* |
| **IRI** | *`https://brandoschema.com/bdv-terms/name`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *The official name of the brand used for identification in visual and generative AI systems.* |
| **Usage Note** | *Must appear consistently across all branded output, visual templates, and AI-generated material.* |
| **Example** | *"Advanced Analytica"* |
| **Date Created** | *11-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:logo`, `brando:tagline`, `brando:visualStyle`* |
| **Equivalent Schema.org Term** | *`schema:name`* |

### Logo

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.2** |
| **Term** | *`logo`* |
| **Prefix** | *`brando`* |
| **Label** | *Logo* |
| **IRI** | *`https://brandoschema.com/bdv-terms/logo`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *A URI pointing to primary, alternate, mono, or responsive versions of the brand logo.* |
| **Usage Note** | *Logos must be retrievable and aligned to branding guidelines for use by AI agents.* |
| **Example** | *`https://brandoschema.com/bdv-terms/assets/logo.svg`* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:name`, `brando:tagline`, `brando:visualStyle`* |
| **Equivalent Schema.org Term** | *`schema:logo`* |

### Colour Palette

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.3** |
| **Term** | *`colourPalette`* |
| **Prefix** | *`brando`* |
| **Label** | *Colour Palette* |
| **IRI** | *`https://brandoschema.com/bdv-terms/colourPalette`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *Codified brand colour definitions including hex codes, usage notes, and contrast pairs.* |
| **Usage Note** | *Should be machine-readable and used consistently for styling across branded content.* |
| **Example** | *"Primary: #0A2540, Accent: #FFCB05, Background: #FFFFFF"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:typography`, `brando:visualStyle`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### Typography

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.4** |
| **Term** | *`typography`* |
| **Prefix** | *`brando`* |
| **Label** | *Typography* |
| **IRI** | *`https://brandoschema.com/bdv-terms/typography`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *Font families, weights, sizing rules, and typographic principles used across brand media.* |
| **Usage Note** | *Should be specified using CSS font stack syntax or typography token names.* |
| **Example** | *"Heading: Inter Bold, Body: Inter Regular, Mono: Fira Code"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:colourPalette`, `brando:visualStyle`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### Imagery Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.5** |
| **Term** | *`imageryStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Imagery Style* |
| **IRI** | *`https://brandoschema.com/bdv-terms/imageryStyle`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *Guidelines for image usage including photography, illustration, filters, and framing.* |
| **Usage Note** | *Supports AI image generation and brand asset QA.* |
| **Example** | *"Bright natural light, clean backgrounds, 3:2 aspect ratio."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:typography`, `brando:logo`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### Motion Rule

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.6** |
| **Term** | *`motionRule`* |
| **Prefix** | *`brando`* |
| **Label** | *Motion Rule* |
| **IRI** | *`https://brandoschema.com/bdv-terms/motionRule`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *Timing, easing, and animation principles for brand motion graphics and interactions.* |
| **Usage Note** | *Should be implemented in UI and used for motion design consistency.* |
| **Example** | *"Ease-out transitions, 300ms duration, consistent motion curve."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:visualToken`, `brando:imageryStyle`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### Visual Token

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.7** |
| **Term** | *`visualToken`* |
| **Prefix** | *`brando`* |
| **Label** | *Visual Token* |
| **IRI** | *`https://brandoschema.com/bdv-terms/visualToken`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *Design system tokens for spacing, border radius, shadow, and elevation.* |
| **Usage Note** | *Used to enforce styling consistency and support design automation.* |
| **Example** | *"Spacing: 8px, Radius: 12px, Shadow: sm"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:motionRule`, `brando:colourPalette`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### Visual Usage Guideline

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.8** |
| **Term** | *`visualUsageGuideline`* |
| **Prefix** | *`brando`* |
| **Label** | *Visual Usage Guideline* |
| **IRI** | *`https://brandoschema.com/bdv-terms/visualUsageGuideline`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *Do’s and don’ts for using brand elements like logos, colours, and imagery.* |
| **Usage Note** | *Can be used to programmatically validate AI-generated designs.* |
| **Example** | *"Do not stretch the logo. Always use white on dark backgrounds."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:logo`, `brando:colourPalette`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### Visual Reference Link

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.9** |
| **Term** | *`visualReferenceLink`* |
| **Prefix** | *`brando`* |
| **Label** | *Visual Reference Link* |
| **IRI** | *`https://brandoschema.com/bdv-terms/visualReferenceLink`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *A hyperlink to full brand guidelines or design repositories.* |
| **Usage Note** | *Enables API and assistant access to authoritative brand documents.* |
| **Example** | *"https://figma.com/team/advanced-analytica"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:visualUsageGuideline`, `brando:designSystemLink`* |
| **Equivalent Schema.org Term** | *None (custom term)* |


## 1.3 - Audio Identity Terms

### Audio Logo

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.1** |
| **Term** | *`audioLogo`* |
| **Prefix** | *`brando`* |
| **Label** | *Audio Logo* |
| **IRI** | *`https://brandoschema.com/bdv-terms/audioLogo`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *A URI or file path to the brand's sonic logo — a distinctive short sound used to represent the brand.* |
| **Usage Note** | *Used in voice assistants, smart devices, or digital products to signal the brand.* |
| **Example** | *`https://brandoschema.com/bdv-terms/assets/audio/logo.mp3`* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:audioCue`, `brando:voiceSignature`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Voice Signature

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.2** |
| **Term** | *`voiceSignature`* |
| **Prefix** | *`brando`* |
| **Label** | *Voice Signature* |
| **IRI** | *`https://brandoschema.com/bdv-terms/voiceSignature`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *Defines the voice persona used in text-to-speech or synthetic voice systems (e.g., accent, tone, pitch).* |
| **Usage Note** | *Enables consistent auditory representation in voice interfaces.* |
| **Example** | *"British female, calm, neutral pacing"* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:speechStyle`, `brando:pronunciationGuide`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Pronunciation Guide

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.3** |
| **Term** | *`pronunciationGuide`* |
| **Prefix** | *`brando`* |
| **Label** | *Pronunciation Guide* |
| **IRI** | *`https://brandoschema.com/bdv-terms/pronunciationGuide`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *Standardised pronunciation notes or phonetic guidance for brand-related terminology.* |
| **Usage Note** | *Helps prevent mispronunciation of brand names or specialist terms in AI voice outputs.* |
| **Example** | *"Brandoschema → brăn-dō skē-mă"* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:voiceSignature`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Audio Cue

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.4** |
| **Term** | *`audioCue`* |
| **Prefix** | *`brando`* |
| **Label** | *Audio Cue* |
| **IRI** | *`https://brandoschema.com/bdv-terms/audioCue`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *Short sound effects used to signal transitions, confirmations, or brand-related actions.* |
| **Usage Note** | *Use for multimodal feedback, emotional responses, or interface transitions.* |
| **Example** | *"Soft chime when a task completes"* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:audioLogo`, `brando:speechStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Speech Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.5** |
| **Term** | *`speechStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Speech Style* |
| **IRI** | *`https://brandoschema.com/bdv-terms/speechStyle`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *Defines rhythm, pacing, pauses, and expressiveness used in spoken brand output.* |
| **Usage Note** | *Used to standardise AI-generated voice delivery.* |
| **Example** | *"Slow, confident, with deliberate pauses between sections"* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:voiceSignature`, `brando:dialogueStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Audio Reference Link

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.6** |
| **Term** | *`audioReferenceLink`* |
| **Prefix** | *`brando`* |
| **Label** | *Audio Reference Link* |
| **IRI** | *`https://brandoschema.com/bdv-terms/audioReferenceLink`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *Links to brand-approved audio repositories, sample files, or documentation.* |
| **Usage Note** | *Used for referencing structured sonic assets.* |
| **Example** | *`https://brandoschema.com/bdv-terms/guidelines/audio`* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:audioLogo`, `brando:audioUsageGuideline`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Audio Usage Guideline

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.7** |
| **Term** | *`audioUsageGuideline`* |
| **Prefix** | *`brando`* |
| **Label** | *Audio Usage Guideline* |
| **IRI** | *`https://brandoschema.com/bdv-terms/audioUsageGuideline`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *Do's and don'ts for using branded audio in speech agents or smart assistants.* |
| **Usage Note** | *Ensures fidelity, tone, and appropriateness of sound branding in voice interfaces.* |
| **Example** | *"Never use sound cues for error messages unless brand-approved; volume must match interface guidelines."* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:audioCue`, `brando:audioReferenceLink`* |
| **Equivalent Schema.org Term** | *None (custom)* |


## 1.4 - Positioning Terms

### Mission Statement

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.1** |
| **Term** | *`missionStatement`* |
| **Prefix** | *`brando`* |
| **Label** | *Mission Statement* |
| **IRI** | *`https://brandoschema.com/bdv-terms/missionStatement`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *Brand’s reason for being and day-to-day focus.* |
| **Usage Note** | *Often used in summaries, footers, or intro blurbs in AI responses.* |
| **Example** | *"To empower people with trustworthy health information."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:visionStatement`, `brando:coreValues`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Vision Statement

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.2** |
| **Term** | *`visionStatement`* |
| **Prefix** | *`brando`* |
| **Label** | *Vision Statement* |
| **IRI** | *`https://brandoschema.com/bdv-terms/visionStatement`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *Aspirational future the brand is working toward.* |
| **Usage Note** | *Can be referenced in AI-generated mission-aligned statements.* |
| **Example** | *"To be the world's most trusted AI partner in medicine."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:missionStatement`, `brando:coreValues`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Core Values

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.3** |
| **Term** | *`coreValues`* |
| **Prefix** | *`brando`* |
| **Label** | *Core Values* |
| **IRI** | *`https://brandoschema.com/bdv-terms/coreValues`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`rdf:List of xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *Beliefs and principles that guide brand decisions.* |
| **Usage Note** | *Can be embedded as behavioural rules in LLM instructions.* |
| **Example** | *["Clarity", "Compassion", "Evidence", "Privacy"]* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:missionStatement`, `brando:visionStatement`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Brand Promise

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.4** |
| **Term** | *`brandPromise`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Promise* |
| **IRI** | *`https://brandoschema.com/bdv-terms/brandPromise`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *Commitment to customers expressed as a value exchange.* |
| **Usage Note** | *Often a short, internal pledge that supports outward messaging.* |
| **Example** | *"We translate data into accessible, human answers."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:uniqueSellingPoint`, `brando:coreValues`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Audience Persona

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.5** |
| **Term** | *`audiencePersona`* |
| **Prefix** | *`brando`* |
| **Label** | *Audience Persona* |
| **IRI** | *`https://brandoschema.com/bdv-terms/audiencePersona`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *Key audience profiles based on need, behaviour, or segment.* |
| **Usage Note** | *Helps LLMs modulate content for different comprehension levels or interests.* |
| **Example** | *"Cancer patients age 50+, NHS digital leads, pharmaceutical data analysts"* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:brandPersona`, `brando:literacyLevel`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Market Position

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.6** |
| **Term** | *`marketPosition`* |
| **Prefix** | *`brando`* |
| **Label** | *Market Position* |
| **IRI** | *`https://brandoschema.com/bdv-terms/marketPosition`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *The space the brand occupies in the market and among competitors.* |
| **Usage Note** | *Used for AI-generated comparisons and positioning statements.* |
| **Example** | *"Only UK-native LLM brand aligned with ABPI and MHRA rules."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:competitorContext`, `brando:uniqueSellingPoint`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Brand Narrative

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.7** |
| **Term** | *`brandNarrative`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Narrative* |
| **IRI** | *`https://brandoschema.com/bdv-terms/brandNarrative`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *Story of brand origin, purpose, and evolution.* |
| **Usage Note** | *LLMs can use this for brand storytelling and user onboarding.* |
| **Example** | *"Founded to explain hard medical science to real people, built for the UK’s patient-first future."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:brandPromise`, `brando:missionStatement`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Competitor Context

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.8** |
| **Term** | *`competitorContext`* |
| **Prefix** | *`brando`* |
| **Label** | *Competitor Context* |
| **IRI** | *`https://brandoschema.com/bdv-terms/competitorContext`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *Reference points or differentiators relative to other market players.* |
| **Usage Note** | *Used in AI decision-making or summary responses comparing solutions.* |
| **Example** | *"Unlike ChatGPT, we are healthcare-specialised and regulator-aligned."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:marketPosition`, `brando:uniqueSellingPoint`* |
| **Equivalent Schema.org Term** | *None (custom)* |


## 1.5 - Governance Properties

### Guard Rails

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.1** |
| **Term** | *`guardRails`* |
| **Prefix** | *`brando`* |
| **Label** | *Guard Rails* |
| **IRI** | *`https://brandoschema.com/bdv-terms/guardRails`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Red lines or behaviours that must be prevented or deflected by AI systems.* |
| **Usage Note** | *Typically used to avoid inappropriate, risky, or brand-damaging responses.* |
| **Example** | *"Do not answer personal medical queries or make treatment recommendations."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:refusalStrategies`, `brando:riskScenarios`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Refusal Strategies

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.2** |
| **Term** | *`refusalStrategies`* |
| **Prefix** | *`brando`* |
| **Label** | *Refusal Strategies* |
| **IRI** | *`https://brandoschema.com/bdv-terms/refusalStrategies`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Structured strategies for rejecting inappropriate or out-of-scope prompts.* |
| **Usage Note** | *May include polite rephrasing, deflections, or escalation notices.* |
| **Example** | *"I’m sorry, I can’t provide that information. Please speak to a healthcare professional."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:guardRails`, `brando:reviewWorkflow`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Compliance Tags

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.3** |
| **Term** | *`complianceTags`* |
| **Prefix** | *`brando`* |
| **Label** | *Compliance Tags* |
| **IRI** | *`https://brandoschema.com/bdv-terms/complianceTags`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`rdf:List of xsd:string`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Regulatory, legal, or ethical labels associated with brand content.* |
| **Usage Note** | *Can be used as metadata for content tagging or AI output classification.* |
| **Example** | *["ABPI-Compliant", "EU AI Act", "UK MHRA Registered"]* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:updatePolicy`, `brando:reviewWorkflow`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Review Workflow

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.4** |
| **Term** | *`reviewWorkflow`* |
| **Prefix** | *`brando`* |
| **Label** | *Review Workflow* |
| **IRI** | *`https://brandoschema.com/bdv-terms/reviewWorkflow`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Human or automated process for approving content before use.* |
| **Usage Note** | *Used to document moderation or compliance checkpoints for content pipelines.* |
| **Example** | *"All AI responses are reviewed by compliance before publication."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:updatePolicy`, `brando:complianceTags`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Update Policy

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.5** |
| **Term** | *`updatePolicy`* |
| **Prefix** | *`brando`* |
| **Label** | *Update Policy* |
| **IRI** | *`https://brandoschema.com/bdv-terms/updatePolicy`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Rules governing content versioning and change management.* |
| **Usage Note** | *Helps ensure traceability and audit trails for AI-controlled information.* |
| **Example** | *"Update log reviewed quarterly, major changes versioned semantically."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:reviewWorkflow`, `brando:visibilityScore`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Visibility Score

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.6** |
| **Term** | *`visibilityScore`* |
| **Prefix** | *`brando`* |
| **Label** | *Visibility Score* |
| **IRI** | *`https://brandoschema.com/bdv-terms/visibilityScore`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Rating of how easily the brand is indexed or retrieved by AI.* |
| **Usage Note** | *Qualitative scale: very low, low, medium, high, very high.* |
| **Example** | *"high"* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:retrievableInLLM`, `brando:embeddingQuality`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Retrievable in LLM

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.7** |
| **Term** | *`retrievableInLLM`* |
| **Prefix** | *`brando`* |
| **Label** | *Retrievable in LLM* |
| **IRI** | *`https://brandoschema.com/bdv-terms/retrievableInLLM`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`xsd:boolean`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Indicates whether brand content can be indexed or surfaced by LLMs.* |
| **Usage Note** | *Used to control inclusion in AI memory or vector databases.* |
| **Example** | *true* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:visibilityScore`, `brando:guardRails`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Embedding Quality

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.8** |
| **Term** | *`embeddingQuality`* |
| **Prefix** | *`brando`* |
| **Label** | *Embedding Quality* |
| **IRI** | *`https://brandoschema.com/bdv-terms/embeddingQuality`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Subjective or model-based quality score for how well the brand's content is represented in embeddings.* |
| **Usage Note** | *Used for evaluating semantic retrieval quality.* |
| **Example** | *"medium"* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:retrievableInLLM`, `brando:visibilityScore`* |
| **Equivalent Schema.org Term** | *None (custom)* |


### Risk Scenarios

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.9** |
| **Term** | *`riskScenarios`* |
| **Prefix** | *`brando`* |
| **Label** | *Risk Scenarios* |
| **IRI** | *`https://brandoschema.com/bdv-terms/riskScenarios`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Governance`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Governance → brando:Brand`* |
| **Object of Relation** | *`brando:hasGovernance`* |
| **Definition** | *Predefined edge cases or misuse risks relevant to AI or public use.* |
| **Usage Note** | *Can be used to trigger escalations or warnings in AI systems.* |
| **Example** | *"User asks for emergency advice or tries to bypass regulatory scope."* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:guardRails`, `brando:refusalStrategies`* |
| **Equivalent Schema.org Term** | *None (custom)* |

## 1.6 - Asset Properties

### Logo Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.1** |
| **Term** | *`logoAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Logo Asset* |
| **IRI** | *`https://brandoschema.com/bdv-terms/logoAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Downloadable versions of the brand’s logo in various formats.* |
| **Usage Note** | *Include formats like SVG, PNG, and EPS. May include mono and alt versions.* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/logo.svg* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:visualReferenceLink`, `brando:iconography`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Font Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.2** |
| **Term** | *`fontAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Font Asset* |
| **IRI** | *`https://brandoschema.com/bdv-terms/fontAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Font files and license information for official brand typography.* |
| **Usage Note** | *Can reference Google Fonts, local files, or external foundry links.* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/fonts/WorkSans.zip* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:typography`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Image Library

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.3** |
| **Term** | *`imageLibrary`* |
| **Prefix** | *`brando`* |
| **Label** | *Image Library* |
| **IRI** | *`https://brandoschema.com/bdv-terms/imageLibrary`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Photographic and illustrative asset collections used in brand expressions.* |
| **Usage Note** | *Links to brand-approved imagery, often hosted in DAM or cloud folders.* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/images/* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:imageryStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Video Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.4** |
| **Term** | *`videoAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Video Asset* |
| **IRI** | *`https://brandoschema.com/bdv-terms/videoAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Links to brand-approved video content such as explainers or promos.* |
| **Usage Note** | *Should align with brand voice and visual identity.* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/videos/brand-intro.mp4* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:guidelinesPDF`, `brando:designSystemLink`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Design System Link

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.5** |
| **Term** | *`designSystemLink`* |
| **Prefix** | *`brando`* |
| **Label** | *Design System Link* |
| **IRI** | *`https://brandoschema.com/bdv-terms/designSystemLink`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Links to shared design systems such as Figma, Framer, or Storybook.* |
| **Usage Note** | *Should be actively maintained with versioning.* |
| **Example** | *https://figma.com/advancedanalytica/design-system* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:visualToken`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Template Library

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.6** |
| **Term** | *`templateLibrary`* |
| **Prefix** | *`brando`* |
| **Label** | *Template Library* |
| **IRI** | *`https://brandoschema.com/bdv-terms/templateLibrary`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Library of branded documents, decks, or Notion/Canva templates.* |
| **Usage Note** | *Use for consistent formatting across teams and systems.* |
| **Example** | *https://notion.so/advancedanalytica/templates* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:guidelinesPDF`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Guidelines PDF

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.7** |
| **Term** | *`guidelinesPDF`* |
| **Prefix** | *`brando`* |
| **Label** | *Guidelines PDF* |
| **IRI** | *`https://brandoschema.com/bdv-terms/guidelinesPDF`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *PDF version of brand guidelines covering visual and verbal rules.* |
| **Usage Note** | *Should match version control and align with digital sources.* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/brand-guidelines.pdf* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:designSystemLink`, `brando:templateLibrary`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Asset Repository

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.8** |
| **Term** | *`assetRepository`* |
| **Prefix** | *`brando`* |
| **Label** | *Asset Repository* |
| **IRI** | *`https://brandoschema.com/bdv-terms/assetRepository`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Centralised digital asset management (DAM) or file library.* |
| **Usage Note** | *Should include versioning, permissions, and AI accessibility.* |
| **Example** | *https://dam.advancedanalytica.co.uk* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:accessPolicy`, `brando:logoAsset`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Persona Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.9** |
| **Term** | *`personaAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Persona Asset* |
| **IRI** | *`https://brandoschema.com/bdv-terms/personaAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *LLM-ready files describing brand personas or audience archetypes.* |
| **Usage Note** | *Used for memory conditioning, assistant switching, and tailored generation.* |
| **Example** | *https://brandoschema.com/bdv-terms/personas/healthcare.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:audiencePersona`, `brando:personaCard`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Access Policy

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.10** |
| **Term** | *`accessPolicy`* |
| **Prefix** | *`brando`* |
| **Label** | *Access Policy* |
| **IRI** | *`https://brandoschema.com/bdv-terms/accessPolicy`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Describes how and by whom brand assets may be used.* |
| **Usage Note** | *May include licensing terms or model use caveats.* |
| **Example** | *"All assets may be used for LLM fine-tuning under CC-BY 4.0"* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:assetRepository`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Q&A Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.11** |
| **Term** | *`qaAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Q&A Asset* |
| **IRI** | *`https://brandoschema.com/bdv-terms/qaAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Structured LLM-ready FAQs or dataset files for QA models.* |
| **Usage Note** | *Boosts retrieval quality and reduces hallucination risk.* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/faqs.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:canonicalAnswer`, `brando:promptScaffold`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### Product Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.12** |
| **Term** | *`productAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Product Asset* |
| **IRI** | *`https://brandoschema.com/bdv-terms/productAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Structured product definitions used for model context and semantic search.* |
| **Usage Note** | *May mirror `schema:Product` for maximum interoperability.* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/product-entries.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:featuresAsset`* |
| **Equivalent Schema.org Term** | *`schema:Product`* |

### Service Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.13** |
| **Term** | *`serviceAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Service Asset* |
| **IRI** | *`https://brandoschema.com/bdv-terms/serviceAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Structured definitions of services offered by the brand.* |
| **Usage Note** | *Align with `schema:Service` and ensure clarity for LLMs.* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/services.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:productAsset`* |
| **Equivalent Schema.org Term** | *`schema:Service`* |

### Features Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.14** |
| **Term** | *`featuresAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Features Asset* |
| **IRI** | *`https://brandoschema.com/bdv-terms/featuresAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Individual product/service features for AI annotation and response.* |
| **Usage Note** | *Compatible with `schema:PropertyValue`* |
| **Example** | *https://brandoschema.com/bdv-terms/assets/features.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:productAsset`, `brando:serviceAsset`* |
| **Equivalent Schema.org Term** | *`schema:PropertyValue`* |
