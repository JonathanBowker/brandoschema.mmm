# Brando Schema – Brand Definition Vocabulary
**BDV Version:** 0.1.0  
**Last Modified:** 21/04/2025  
**Status:** Draft  
**License:** Proprietary – All rights reserved. No reuse, reproduction, or redistribution without explicit permission.  
**Maintained by:** Advanced Analytica Ltd. © 2025 Advanced Analytica Ltd. All rights reserved.

---

## Overview

The **Brand Definition Vocabulary** (BDV) defines a structured, machine-readable framework for representing brand identity, tone, values, behavioural controls, and preferred communication styles within AI ecosystems. It is a toolkit that enables brands to embed semantic metadata into server and website environments to ensure accurate representation, consistent tone, and safe, policy-aligned interactions with Large Language Models (LLMs), AI agents, and RAG systems.

BDV extends [`schema:Brand`](https://schema.org/Brand) using sub-classes and property extensions to ensure compatibility with the broader semantic web.

---

## **Brando Classes**
**Equivalent Schema.org Term: `schema:Brand`**

*The six core objects provide a foundation for controlling and aligning a brand with LLMs and AI systems. They represent a complete machine-readable representation of a brand as interpreted by AI systems.*


| **Class**                 | **LLM Control Capability**                                                                 |
|---------------------------|---------------------------------------------------------------------------------------------|
| `hasVerbalIdentity`       | Aligns tone, vocabulary, sentiment, and stylistic tone in LLM output                        |
| `hasVisualIdentity`       | Informs visual prompts, style transfer, multimodal agents (e.g. brand-aligned image output) |
| `hasAudioIdentity`       | Defines sonic branding in speech synthesis, voice agents, and generative audio outputs. |
| `hasPositioning`          | Grounds brand purpose, audience, and differentiators in AI-generated responses              |
| `hasGovernance`           | Defines refusal strategies, risk boundaries, compliance logic, and LLM safety behaviours     |
| `hasAssets`               | Allows agents to fetch or embed approved brand material (e.g., logo, video, docs)           |


### 1.1 Verbal Identity Class
**Core Class: (`brando:hasVerbalIdentity`)**

Encodes how the brand speaks and behaves in written and conversational form — across all channels, including LLMs, assistants, and web content.

| **BDV Ref** | **Brando Property**              | **Description**                                                                                   |
|------------|----------------------------------|---------------------------------------------------------------------------------------------------|
| `1.1.1`    | `brando:toneOfVoice`             | Defines the emotional texture of the brand's voice (e.g., experienced, warm, humble)             |
| `1.1.2`    | `brando:dialogueStyle`           | Controls how the brand interacts: conversational pacing, first/second person use, empathy cues   |
| `1.1.3`    | `brando:writingStyle`            | Grammar, structure, clarity, sentence flow, and cultural tone guidelines                         |
| `1.1.4`    | `brando:namingConvention`        | Rules for naming products and formatting text (capitalisation, spelling, dates, etc.)            |
| `1.1.5`    | `brando:personaCard`             | The personality behind the voice — how the brand sounds when personified                         |
| `1.1.6`    | `brando:approvedTerms`           | Brand-sanctioned vocabulary, including product descriptors, slogans, and phrasing                |
| `1.1.7`    | `brando:prohibitedTerms`         | Words, phrases, or expressions the brand avoids (e.g., “cheap”, “amazing”, hyperbole)            |
| `1.1.8`    | `brando:keyMessage`              | Core ideas and value propositions communicated consistently across all brand channels            |
| `1.1.9`    | `brando:taglines`                | Primary strapline and any officially approved variants or campaign slogans                       |
| `1.1.10`   | `brando:promptScaffold`          | Reusable instructions and templates for AI model prompts (e.g., tone and format enforcement)     |
| `1.1.11`   | `brando:mustDo`                  | Required actions and stylistic behaviours (e.g., use first-person, highlight provenance)         |
| `1.1.12`   | `brando:mustNotDo`               | Explicit behavioural constraints (e.g., don’t exaggerate, avoid second-person in longform copy)  |

**Example: JSON-LD for Verbal Identity Policy**
``` json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.co.uk/bdv-terms#"
  },
  "@type": "schema:Brand",
  "name": "brand",
  "url": "https://www.brand.eu/",
  "logo": "https://www.brand.eu/assets/logo.png",
  "brando:hasVerbalIdentity": {
    "@type": "brando:VerbalIdentity",
    "brando:toneOfVoice": {
      "description": "Distinctive, imaginative, resourceful, and simple. Tone is designed to inform, inspire, and create emotional connection.",
      "principles": [
        "Experienced – authoritative yet warm, with institutional knowledge.",
        "Straight Talking – avoids hyperbole or excessive adjectives.",
        "Human – passionate, emotional, people-first.",
        "Extraordinary – magical, sensory, storytelling-based.",
        "Humble – focuses on people, not the brand's ego."
      ]
    },
    "brando:keyMessage": [
      "Complexity made simple.",
      "We are the components for your AI success.",
      "Creating the foundations for excellence.",
      "Brand managers, meet your new assistants.",
      "Simple policies for effective business."
    ],
    "brando:taglines": {
      "primary": "Complexity made simple",
      "extensions": [
        "AI made simple",
        "Creativity made simple",
        "Communication made simple",
        "Collaboration made simple"
      ]
    },
    "brando:writingStyle": {
      "guidelines": [
        "Be simple, clear, and direct.",
        "Avoid flowery, over-complicated language.",
        "Use variety in sentence structure.",
        "Speak with optimism and humility.",
        "Edit rigorously to remove filler.",
        "Use British English spelling.",
        "Write like a trusted, calm expert — never boastful."
      ]
    },
    "brando:dialogueStyle": {
      "description": "Conversational, but professional. Use first-person. Avoid second-person where inappropriate. Speak to specific roles (chefs, bakers, etc.).",
      "rules": [
        "Use 'we' and 'our' in most messaging.",
        "Avoid 'you' in longform or descriptive copy.",
        "Never sound patronising or overfamiliar.",
        "Maintain light-hearted professionalism."
      ]
    },
    "brando:approvedTerms": [
      "Crafted with",
      "Inspired by",
      "Created to",
      "Function factory",
      "Masterpiece"
    ],
    "brando:prohibitedTerms": [
      "amazing",
      "stunning",
      "jaw-dropping",
      "fabulous",
      "ultimate",
      "cheap",
      "incredible",
      "over-the-top",
      "multiple exclamation marks"
    ],
    "brando:namingConvention": {
      "productCapitalisation": true,
      "spelling": "Britich English",
      "dateFormat": "15 May 2024",
      "timeFormat": "am/pm"
    },
    "brando:mustDo": [
      "Use British spelling across English materials.",
      "Capitalise official product names.",
      "Use storytelling and sensory details in descriptions.",
      "Speak to the role (e.g., 'brand managers', not 'you').",
      "Curate content differently for internal vs. external platforms.",
      "Use first-person voice (we/our)."
    ],
    "brando:mustNotDo": [
      "Use more than one exclamation mark.",
      "Use second-person voice in product descriptions.",
      "Use sarcasm, wacky humour, or internal jargon.",
      "Use SEO keywords in place of clarity.",
      "Use buzzwords or clichéd brochure-speak.",
      "Beg for engagement on social (e.g., 'LIKE this post!')."
    ],
    "brando:promptScaffold": [
      "Write in BRAND’s tone of voice: experienced, human, humble.",
      "Avoid second-person in descriptive copy.",
      "Highlight provenance, emotion, and purpose.",
      "Structure product descriptions using: inspiration, origin, benefit."
    ],
    "brando:personaCard": {
      "traits": [
        "Professional but relaxed",
        "Emotionally intelligent",
        "Respectful and inclusive",
        "Craft-driven and precise",
        "Warm and story-led"
      ]
    }
  }
}
```


### 1.2 Visual Identity Class
**Core Class: (`brando:hasVisualIdentity`)**

Encodes the brand’s visual language in a machine-readable format — enabling consistency across generative media, UI frameworks, assistants, and visual rendering engines.

| **BDV Ref** | **Brando Property**              | **Description**                                                                 |
|------------|----------------------------------|---------------------------------------------------------------------------------|
| `1.2.1`    | `brando:name`                    | The official brand name or trade name.                                          |
| `1.2.2`    | `brando:logo`                    | Primary, alternate, mono, and responsive logo versions                          |
| `1.2.3`    | `brando:colourPalette`           | Brand colour definitions (primary, secondary, accessibility-safe variants)      |
| `1.2.4`    | `brando:typography`              | Font families, sizes, and weight guidelines                                     |
| `1.2.5`    | `brando:iconography`             | Icon style, usage, and example assets                                           |
| `1.2.6`    | `brando:imageryStyle`            | Rules for photography, illustrations, filters, and composition                  |
| `1.2.7`    | `brando:motionRule`              | Acceptable animation styles and transitions                                     |
| `1.2.8`    | `brando:visualToken`             | Design tokens including spacing, elevation, and border radius                   |
| `1.2.9`    | `brando:visualUsageGuideline`    | Dos and don'ts for consistent and compliant visual application                  |
| `1.2.10`   | `brando:visualReferenceLink`     | URLs to brand guidelines, repositories, and design system documentation         |

**Example: JSON-LD for Visual Identity Policy**

```json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.co.uk/bdv-terms#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.brand.eu/",
  "logo": "https://www.brand.eu/assets/logo.png",
  "brando:hasVisualIdentity": {
    "@type": "brando:VisualIdentity",
    "brando:logo": {
      "primary": "https://www.brand.eu/assets/logo-primary.svg",
      "alternate": "https://www.brand.eu/assets/logo-alt.svg",
      "mono": "https://www.brand.eu/assets/logo-mono.svg",
      "responsive": "https://www.brand.eu/assets/logo-responsive.svg"
    },
    "brando:colourPalette": {
      "primary": ["#002244", "#0066CC"],
      "secondary": ["#F5F5F5", "#CCCCCC"],
      "accessibility": ["#000000", "#FFFFFF"]
    },
    "brando:typography": {
      "fontFamily": "Inter",
      "weights": ["Regular", "Medium", "Bold"],
      "sizeRules": "Base: 16px; Headings: 32px / 24px / 20px"
    },
    "brando:iconography": {
      "style": "Outlined, minimal, geometric",
      "examples": [
        "https://www.brand.eu/assets/icons/download.svg",
        "https://www.brand.eu/assets/icons/share.svg"
      ]
    },
    "brando:imageryStyle": {
      "photography": "Natural lighting, human-focused, high contrast",
      "illustration": "Flat, modern, muted tones",
      "filters": ["No heavy effects", "Brightness +10%", "Warm tone"]
    },
    "brando:motionRule": {
      "animationStyle": "Ease-in-out transitions only",
      "transitionDuration": "200–500ms",
      "examples": [
        "Button hover fades",
        "Hero image slide-in"
      ]
    },
    "brando:visualToken": {
      "borderRadius": "8px",
      "spacing": "8 / 16 / 24 grid",
      "elevation": "Soft shadow (4dp max)"
    },
    "brando:visualUsageGuideline": [
      "Never stretch or distort the logo",
      "Maintain minimum logo padding of 32px",
      "Do not place logo over complex backgrounds",
      "Avoid clashing background colours"
    ],
    "brando:visualReferenceLink": [
      "https://www.brand.eu/guidelines/visual",
      "https://www.figma.com/file/brand-kit"
    ]
  }
}
```

### 1.3 Audio Identity Class  
**Core Class: (`brando:hasAudioIdentity`)**

Encodes the brand’s sonic expression in a structured, machine-readable format — enabling consistent brand presence across speech synthesis, voice agents, virtual assistants, and generative audio platforms.

| **BDV Ref** | **Brando Property**              | **Description**                                                                                         |
|------------|----------------------------------|---------------------------------------------------------------------------------------------------------|
| `1.3.1`    | `brando:audioLogo`               | Audio file or URI representing the brand’s sonic logo — a recognisable sound that cues the brand.       |
| `1.3.2`    | `brando:voiceSignature`          | Preferred voice profile for speech synthesis — tone, gender, pacing, and accent.                        |
| `1.3.3`    | `brando:pronunciationGuide`      | Rules or phonetic spelling guides for brand names, acronyms, or domain-specific terms.                  |
| `1.3.4`    | `brando:audioCue`                | Non-verbal sound cues used for alerts, confirmations, transitions, or emotional signalling.             |
| `1.3.5`    | `brando:speechStyle`             | Defines speech rhythm, intonation, and pause style for spoken AI outputs.                               |
| `1.3.6`    | `brando:audioReferenceLink`      | URLs to sonic branding guidelines, audio asset repositories, or sample use cases.                       |
| `1.3.7`    | `brando:audioUsageGuideline`     | Specific dos and don’ts for voice assistants and sound-based agents when reproducing brand audio.       |


**Example: JSON-LD for Audio Identity Policy**

```json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.co.uk/bdv-terms#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.brand.eu/",
  "brando:hasAudioIdentity": {
    "@type": "brando:AudioIdentity",
    "brando:audioLogo": "https://www.brand.eu/audio/sonic-logo.mp3",
    "brando:voiceSignature": {
      "gender": "female",
      "tone": "warm and confident",
      "accent": "British",
      "speed": "medium-slow"
    },
    "brando:pronunciationGuide": {
      "brandName": "BRANN-do",
      "acronyms": {
        "LLM": "el-el-em",
        "BDL": "bee-dee-el"
      }
    },
    "brando:audioCue": [
      "https://www.brand.eu/audio/confirm-tone.mp3",
      "https://www.brand.eu/audio/error-tone.mp3"
    ],
    "brando:speechStyle": {
      "intonation": "natural",
      "pauses": "brief after clauses",
      "emphasis": "on nouns and benefits"
    },
    "brando:audioUsageGuideline": [
      "Use the sonic logo before AI-generated introductions.",
      "Avoid robotic-sounding text-to-speech settings.",
      "Ensure brand name is pronounced correctly with emphasis on first syllable."
    ],
    "brando:audioReferenceLink": [
      "https://www.brand.eu/audio-guidelines",
      "https://www.brand.eu/assets/audio-kit.zip"
    ]
  }
}
```

### 1.4 Positioning Class
**Core Class: (`brando:hasPositioning`)**
Encodes the strategic intent, values, audience targeting, and narrative structure of the brand — providing clarity for AI agents, assistants, and retrieval systems to understand and represent brand meaning with context.

| **BDV Ref** | **Brando Property**           | **Description**                                                                      |
|------------|-------------------------------|--------------------------------------------------------------------------------------|
| `1.4.1`    | `brando:missionStatement`      | Why the brand exists — its purpose beyond profit                                     |
| `1.4.2`    | `brando:visionStatement`       | Long-term goals and the future the brand wants to help create                        |
| `1.4.3`    | `brando:coreValues`            | Guiding principles and ethical foundations of the brand                              |
| `1.4.4`    | `brando:brandPromise`          | The commitment the brand makes to its audience                                       |
| `1.4.5`    | `brando:audiencePersona`       | Structured profiles of ideal customers or user segments                              |
| `1.4.6`    | `brando:marketPosition`        | Brand’s stance in its category, including competitive framing                        |
| `1.4.7`    | `brando:brandNarrative`        | The origin, journey, and story arc that define the brand identity                    |
| `1.4.8`    | `brando:competitorContext`     | How the brand compares or contrasts with its key competitors                         |


**Example: JSON-LD for Positioning Policy**

```json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.co.uk/bdv-terms#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.brand.eu/",
  "logo": "https://www.brand.eu/assets/logo.png",
  "brando:hasPositioning": {
    "@type": "brando:Positioning",
    "brando:missionStatement": "To simplify access to advanced AI capabilities and make them usable by every brand.",
    "brando:visionStatement": "To become the universal interface layer between brands and the generative AI web.",
    "brando:coreValues": [
      "Simplicity",
      "Integrity",
      "Empowerment",
      "Transparency",
      "Innovation grounded in purpose"
    ],
    "brando:brandPromise": "We translate complexity into clarity — giving brands control in a world of automation.",
    "brando:audiencePersona": [
      {
        "name": "Brand Manager",
        "traits": ["Strategy-led", "Digitally literate", "Guardrails-aware"]
      },
      {
        "name": "Creative Director",
        "traits": ["Design-minded", "Consistency-focused", "Story-led"]
      },
      {
        "name": "AI Governance Lead",
        "traits": ["Risk-aware", "Compliance-driven", "Ethics-conscious"]
      }
    ],
    "brando:marketPosition": {
      "category": "AI Brand Infrastructure",
      "differentiator": "Combines brand control + LLM compliance in one layer"
    },
    "brando:brandNarrative": "Born from the need to make AI trustworthy for brand representation, BRAND creates machine-readable brand objects that are both expressive and enforceable. From logo to tone to guardrails, every layer is declaratively encoded for intelligent systems.",
    "brando:competitorContext": {
      "peers": ["Frontify", "Bynder", "OpenBrand AI"],
      "distinction": "Brando doesn't just manage assets — it governs representation at runtime in AI systems."
    }
  }
}
```

### 1.5 Governance Class
**Core Class: (`brando:hasGovernance`)**

Defines brand guardrails, refusal strategies, and regulatory alignment for safe deployment in AI environments — ensuring the brand is represented ethically, legally, and intentionally in all LLM-enabled contexts.

Here’s the updated **Governance Class** table with correct **BDV Ref** numbers (`1.5.x`) included in the first column:


| **BDV Ref** | **Brando Property**           | **Description**                                                                                   |
|------------|-------------------------------|---------------------------------------------------------------------------------------------------|
| `1.5.1`    | `brando:guardRails`           | Behavioural boundaries for brand representation (e.g., no political alignment, no parody)         |
| `1.5.2`    | `brando:refusalStrategies`    | Instructions for AI on when and how to gracefully decline or deflect out-of-scope requests        |
| `1.5.3`    | `brando:complianceTags`       | Tags or indicators for domain-specific compliance frameworks (e.g., GDPR, ABPI)                   |
| `1.5.4`    | `brando:reviewWorkflow`       | Human-in-the-loop processes for approval and escalation                                           |
| `1.5.5`    | `brando:updatePolicy`         | Rules for how, when, and by whom brand data is updated and versioned                              |
| `1.5.6`    | `brando:visibilityScore`      | AI discoverability setting (e.g., low, medium, high, very high)                                   |
| `1.5.7`    | `brando:retrievableInLLM`     | Boolean or weighted flag for LLM embedding and memory access                                      |
| `1.5.8`    | `brando:embeddingQuality`     | Scoring of chunk quality for retrieval (clarity, coherence, fidelity)                             |
| `1.5.9`    | `brando:riskScenarios`        | Known red-flag cases and edge scenarios for brand control (e.g., satire, impersonation)           |


**Example: JSON-LD for Governance Policy**

```json-ld
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.co.uk/bdv-terms#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.example.com/",
  "logo": "https://www.example.com/assets/logo.png",
  "brando:hasGovernance": {
    "@type": "brando:Governance",
    "brando:guardRails": [
      "Do not mimic other brands or personalities.",
      "Avoid speculative financial or legal advice.",
      "Never represent the brand in satire, parody, or impersonation."
    ],
    "brando:refusalStrategies": [
      "If asked to make claims about unverified results, respond: 'This requires confirmation from an authorised expert.'",
      "If prompted with politically sensitive questions, say: 'BRAND remains neutral on this matter.'"
    ],
    "brando:complianceTags": [
      "GDPR",
      "UK MHRA",
      "ABPI",
      "EU AI Act – Article 52"
    ],
    "brando:reviewWorkflow": {
      "type": "Human-in-the-loop",
      "steps": [
        "Content flagged by AI → Sent for internal review → Approved or modified before release"
      ]
    },
    "brando:updatePolicy": {
      "versioning": "Semantic versioning (e.g., v1.2.0)",
      "changeApproval": "By Brand Governance Committee",
      "changeLog": "Maintained in brand.jsonld header"
    },
    "brando:visibilityScore": "high",
    "brando:retrievableInLLM": true,
    "brando:embeddingQuality": "very high",
    "brando:riskScenarios": [
      "Misinformation through tone mismatch",
      "AI hallucinating non-existent product benefits",
      "Requests to parody brand voice for entertainment"
    ]
  }
}
```

### 1.6 Assets Class
**Core Class: (`brando:hasAssets`)**

Encodes reusable digital resources — from brand files to LLM-ready features, FAQs, and service definitions — so that AI systems can render and reason with your brand consistently across platforms.

| **BDV Ref** | **Brando Property**             | **Description**                                                                                     |
|------------|----------------------------------|-----------------------------------------------------------------------------------------------------|
| 1.6.1      | `brando:logoAsset`              | File links for approved logos (SVG, PNG, EPS)                                                       |
| 1.6.2      | `brando:fontAsset`              | Font files or downloadable kits                                                                     |
| 1.6.3      | `brando:imageLibrary`           | Approved photography, illustration, or icon libraries                                               |
| 1.6.4      | `brando:videoAsset`             | Branded videos or explainer animations                                                              |
| 1.6.5      | `brando:designSystemLink`       | URL to your Figma, Storybook, Framer, or similar UI system                                          |
| 1.6.6      | `brando:templateLibrary`        | Notion, Canva, PowerPoint, or document templates                                                    |
| 1.6.7      | `brando:guidelinesPDF`          | Downloadable brand books or manuals                                                                 |
| 1.6.8      | `brando:assetRepository`        | Central asset library or DAM (Digital Asset Management) link                                        |
| 1.6.9      | `brando:personaAsset`           | Persona definitions for target users, AI tuning, or prompt conditioning                             |
| 1.6.10     | `brando:accessPolicy`           | Who can access, download, or modify assets                                                          |
| 1.6.11     | `brando:qaAsset`                | Common questions + official answers in `FAQPage` format for AI indexing and grounding               |
| 1.6.12     | `brando:productAsset`           | Structured `schema:Product` definitions with URLs, IDs, and descriptions                            |
| 1.6.13     | `brando:serviceAsset`           | Structured `schema:Service` definitions and provider info                                           |
| 1.6.14     | `brando:featuresAsset`          | Feature highlights for pages, prompts, and comparison tables (using `schema:PropertyValue`)         |

**Example: Complete Assets Policy**

```json
{
  "@context": {
    "schema": "https://schema.org/",
    "brando": "https://brandoschema.co.uk/bdv-terms#"
  },
  "@type": "schema:Brand",
  "name": "BRAND",
  "url": "https://www.brand.eu/",
  "logo": "https://www.brand.eu/assets/logo.svg",
  "brando:hasAssets": {
    "@type": "brando:Assets",
    "brando:logoAsset": [
      "https://www.brand.eu/assets/logo-primary.svg",
      "https://www.brand.eu/assets/logo-mono.svg"
    ],
    "brando:fontAsset": [
      "https://www.brand.eu/assets/fonts/Inter-Regular.woff2",
      "https://www.brand.eu/assets/fonts/Inter-Bold.woff2"
    ],
    "brando:imageLibrary": "https://dam.brand.eu/images/",
    "brando:videoAsset": [
      "https://www.brand.eu/videos/intro.mp4",
      "https://www.brand.eu/videos/values.mp4"
    ],
    "brando:designSystemLink": "https://www.figma.com/file/BRANDKIT/Main",
    "brando:templateLibrary": [
      "https://www.canva.com/brand/templates",
      "https://notion.so/templates/brand-docs"
    ],
    "brando:guidelinesPDF": [
      "https://www.brand.eu/docs/visual-guidelines.pdf",
      "https://www.brand.eu/docs/tone-of-voice.pdf"
    ],
    "brando:assetRepository": "https://drive.brand.eu/brand-assets",
    "brando:personaAsset": [
      "https://www.brand.eu/personas/creative-director.json",
      "https://www.brand.eu/personas/governance-lead.json"
    ],
    "brando:accessPolicy": {
      "editors": ["design@brand.eu", "legal@brand.eu"],
      "viewers": ["agency@brand.eu", "ai@brand.eu"],
      "policyNote": "External access to files in /public only. All others require editor role."
    },
    "brando:qaAsset": [
      {
        "@type": "schema:Question",
        "name": "What does Brando Schema do?",
        "acceptedAnswer": {
          "@type": "schema:Answer",
          "text": "It enables brand-safe AI interaction by structuring your identity and governance rules in JSON-LD."
        }
      },
      {
        "@type": "schema:Question",
        "name": "Can this help with LLM accuracy?",
        "acceptedAnswer": {
          "@type": "schema:Answer",
          "text": "Yes. Your structured policies and prompts ensure AI agents reflect your voice and values accurately."
        }
      }
    ],
    "brando:productAsset": [
      {
        "@type": "schema:Product",
        "name": "Brando Schema Toolkit",
        "description": "A full-stack schema for AI governance, identity, and brand discoverability.",
        "sku": "BR-001",
        "url": "https://www.brand.eu/products/schema-toolkit"
      }
    ],
    "brando:serviceAsset": [
      {
        "@type": "schema:Service",
        "name": "AI Brand Compliance Audit",
        "description": "We assess your brand visibility, AI exposure, tone alignment, and generate a semantic roadmap.",
        "provider": {
          "@type": "schema:Organization",
          "name": "BRAND",
          "url": "https://www.brand.eu"
        }
      }
    ],
    "brando:featuresAsset": [
      {
        "@type": "schema:PropertyValue",
        "name": "AI-ready Brand Object",
        "value": "Encodes your brand in a structured JSON-LD format retrievable by LLMs and agents."
      },
      {
        "@type": "schema:PropertyValue",
        "name": "Visual + Verbal Controls",
        "value": "Centralised policies for tone, logo usage, naming, messaging, and more."
      },
      {
        "@type": "schema:PropertyValue",
        "name": "Brando Guardrails",
        "value": "Declarative restrictions to prevent AI hallucination, misuse, or misalignment."
      }
    ]
  }
}
```

<!-- ## Brando Terms


### 1.1 - Verbal Identity Terms

#### 1.1.1 – Tone of Voice

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.1** |
| **Term** | *`toneOfVoice`* |
| **Prefix** | *`brando`* |
| **Label** | *Tone of Voice* |
| **IRI** | *`https://brandoschema.com/toneOfVoice`* |
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

#### 1.1.2 – Dialogue Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.2** |
| **Term** | *`dialogueStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Dialogue Style* |
| **IRI** | *`https://brandoschema.com/dialogueStyle`* |
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

#### 1.1.3 – Writing Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.3** |
| **Term** | *`writingStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Writing Style* |
| **IRI** | *`https://brandoschema.com/writingStyle`* |
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

#### 1.1.4 – Naming Convention

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.4** |
| **Term** | *`namingConvention`* |
| **Prefix** | *`brando`* |
| **Label** | *Naming Convention* |
| **IRI** | *`https://brandoschema.com/namingConvention`* |
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

#### 1.1.5 – Persona Card

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.5** |
| **Term** | *`personaCard`* |
| **Prefix** | *`brando`* |
| **Label** | *Persona Card* |
| **IRI** | *`https://brandoschema.com/personaCard`* |
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

#### 1.1.6 – Approved Terms

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.6** |
| **Term** | *`approvedTerms`* |
| **Prefix** | *`brando`* |
| **Label** | *Approved Terms* |
| **IRI** | *`https://brandoschema.com/approvedTerms`* |
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

#### 1.1.7 – Prohibited Terms

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.7** |
| **Term** | *`prohibitedTerms`* |
| **Prefix** | *`brando`* |
| **Label** | *Prohibited Terms* |
| **IRI** | *`https://brandoschema.com/prohibitedTerms`* |
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

#### 1.1.8 – Key Message

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.8** |
| **Term** | *`keyMessage`* |
| **Prefix** | *`brando`* |
| **Label** | *Key Message* |
| **IRI** | *`https://brandoschema.com/keyMessage`* |
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

#### 1.1.9 – Taglines

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.9** |
| **Term** | *`taglines`* |
| **Prefix** | *`brando`* |
| **Label** | *Taglines* |
| **IRI** | *`https://brandoschema.com/taglines`* |
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

#### 1.1.10 – Prompt Scaffold

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.10** |
| **Term** | *`promptScaffold`* |
| **Prefix** | *`brando`* |
| **Label** | *Prompt Scaffold* |
| **IRI** | *`https://brandoschema.com/promptScaffold`* |
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

#### 1.1.11 – Must Do

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.11** |
| **Term** | *`mustDo`* |
| **Prefix** | *`brando`* |
| **Label** | *Must Do* |
| **IRI** | *`https://brandoschema.com/mustDo`* |
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

#### 1.1.12 – Must Not Do

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.12** |
| **Term** | *`mustNotDo`* |
| **Prefix** | *`brando`* |
| **Label** | *Must Not Do* |
| **IRI** | *`https://brandoschema.com/mustNotDo`* |
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




### 1.2 - Visual Identity Terms

#### 1.2.1 – Brand Name

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.1** |
| **Term** | *`name`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Name* |
| **IRI** | *`https://brandoschema.com/name`* |
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

#### 1.2.2 – Logo

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.2** |
| **Term** | *`logo`* |
| **Prefix** | *`brando`* |
| **Label** | *Logo* |
| **IRI** | *`https://brandoschema.com/logo`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:VisualIdentity`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:VisualIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasVisualIdentity`* |
| **Definition** | *A URI pointing to primary, alternate, mono, or responsive versions of the brand logo.* |
| **Usage Note** | *Logos must be retrievable and aligned to branding guidelines for use by AI agents.* |
| **Example** | *`https://brandoschema.com/assets/logo.svg`* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:name`, `brando:tagline`, `brando:visualStyle`* |
| **Equivalent Schema.org Term** | *`schema:logo`* |

#### 1.2.3 – Colour Palette

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.3** |
| **Term** | *`colourPalette`* |
| **Prefix** | *`brando`* |
| **Label** | *Colour Palette* |
| **IRI** | *`https://brandoschema.com/colourPalette`* |
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

#### 1.2.4 – Typography

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.4** |
| **Term** | *`typography`* |
| **Prefix** | *`brando`* |
| **Label** | *Typography* |
| **IRI** | *`https://brandoschema.com/typography`* |
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

#### 1.2.5 – Imagery Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.5** |
| **Term** | *`imageryStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Imagery Style* |
| **IRI** | *`https://brandoschema.com/imageryStyle`* |
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

#### 1.2.6 – Motion Rule

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.6** |
| **Term** | *`motionRule`* |
| **Prefix** | *`brando`* |
| **Label** | *Motion Rule* |
| **IRI** | *`https://brandoschema.com/motionRule`* |
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

#### 1.2.7 – Visual Token

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.7** |
| **Term** | *`visualToken`* |
| **Prefix** | *`brando`* |
| **Label** | *Visual Token* |
| **IRI** | *`https://brandoschema.com/visualToken`* |
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

#### 1.2.8 – Visual Usage Guideline

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.8** |
| **Term** | *`visualUsageGuideline`* |
| **Prefix** | *`brando`* |
| **Label** | *Visual Usage Guideline* |
| **IRI** | *`https://brandoschema.com/visualUsageGuideline`* |
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

#### 1.2.9 – Visual Reference Link

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.9** |
| **Term** | *`visualReferenceLink`* |
| **Prefix** | *`brando`* |
| **Label** | *Visual Reference Link* |
| **IRI** | *`https://brandoschema.com/visualReferenceLink`* |
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


### 1.3 - Audio Identity Terms

#### 1.3.1 – Audio Logo

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.1** |
| **Term** | *`audioLogo`* |
| **Prefix** | *`brando`* |
| **Label** | *Audio Logo* |
| **IRI** | *`https://brandoschema.com/audioLogo`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *A URI or file path to the brand's sonic logo — a distinctive short sound used to represent the brand.* |
| **Usage Note** | *Used in voice assistants, smart devices, or digital products to signal the brand.* |
| **Example** | *`https://brandoschema.com/assets/audio/logo.mp3`* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:audioCue`, `brando:voiceSignature`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.3.2 – Voice Signature

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.2** |
| **Term** | *`voiceSignature`* |
| **Prefix** | *`brando`* |
| **Label** | *Voice Signature* |
| **IRI** | *`https://brandoschema.com/voiceSignature`* |
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

#### 1.3.3 – Pronunciation Guide

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.3** |
| **Term** | *`pronunciationGuide`* |
| **Prefix** | *`brando`* |
| **Label** | *Pronunciation Guide* |
| **IRI** | *`https://brandoschema.com/pronunciationGuide`* |
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

#### 1.3.4 – Audio Cue

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.4** |
| **Term** | *`audioCue`* |
| **Prefix** | *`brando`* |
| **Label** | *Audio Cue* |
| **IRI** | *`https://brandoschema.com/audioCue`* |
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

#### 1.3.5 – Speech Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.5** |
| **Term** | *`speechStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Speech Style* |
| **IRI** | *`https://brandoschema.com/speechStyle`* |
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

#### 1.3.6 – Audio Reference Link

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.6** |
| **Term** | *`audioReferenceLink`* |
| **Prefix** | *`brando`* |
| **Label** | *Audio Reference Link* |
| **IRI** | *`https://brandoschema.com/audioReferenceLink`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:AudioIdentity`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:AudioIdentity → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudioIdentity`* |
| **Definition** | *Links to brand-approved audio repositories, sample files, or documentation.* |
| **Usage Note** | *Used for referencing structured sonic assets.* |
| **Example** | *`https://brandoschema.com/guidelines/audio`* |
| **Date Created** | *21-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:audioLogo`, `brando:audioUsageGuideline`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.3.7 – Audio Usage Guideline

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.3.7** |
| **Term** | *`audioUsageGuideline`* |
| **Prefix** | *`brando`* |
| **Label** | *Audio Usage Guideline* |
| **IRI** | *`https://brandoschema.com/audioUsageGuideline`* |
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


### 1.4 - Positioning Terms

#### 1.4.1 – Mission Statement

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.1** |
| **Term** | *`missionStatement`* |
| **Prefix** | *`brando`* |
| **Label** | *Mission Statement* |
| **IRI** | *`https://brandoschema.com/missionStatement`* |
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

---

#### 1.4.2 – Vision Statement

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.2** |
| **Term** | *`visionStatement`* |
| **Prefix** | *`brando`* |
| **Label** | *Vision Statement* |
| **IRI** | *`https://brandoschema.com/visionStatement`* |
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

---

#### 1.4.3 – Core Values

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.3** |
| **Term** | *`coreValues`* |
| **Prefix** | *`brando`* |
| **Label** | *Core Values* |
| **IRI** | *`https://brandoschema.com/coreValues`* |
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

---

#### 1.4.4 – Brand Promise

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.4** |
| **Term** | *`brandPromise`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Promise* |
| **IRI** | *`https://brandoschema.com/brandPromise`* |
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

---

#### 1.4.5 – Audience Persona

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.5** |
| **Term** | *`audiencePersona`* |
| **Prefix** | *`brando`* |
| **Label** | *Audience Persona* |
| **IRI** | *`https://brandoschema.com/audiencePersona`* |
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

---

#### 1.4.6 – Market Position

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.6** |
| **Term** | *`marketPosition`* |
| **Prefix** | *`brando`* |
| **Label** | *Market Position* |
| **IRI** | *`https://brandoschema.com/marketPosition`* |
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

---

#### 1.4.7 – Brand Narrative

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.7** |
| **Term** | *`brandNarrative`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Narrative* |
| **IRI** | *`https://brandoschema.com/brandNarrative`* |
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

---

#### 1.4.8 – Competitor Context

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.4.8** |
| **Term** | *`competitorContext`* |
| **Prefix** | *`brando`* |
| **Label** | *Competitor Context* |
| **IRI** | *`https://brandoschema.com/competitorContext`* |
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


### 1.5 - Governance Properties

#### 1.5.1 – Guard Rails

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.1** |
| **Term** | *`guardRails`* |
| **Prefix** | *`brando`* |
| **Label** | *Guard Rails* |
| **IRI** | *`https://brandoschema.com/guardRails`* |
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

---

#### 1.5.2 – Refusal Strategies

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.2** |
| **Term** | *`refusalStrategies`* |
| **Prefix** | *`brando`* |
| **Label** | *Refusal Strategies* |
| **IRI** | *`https://brandoschema.com/refusalStrategies`* |
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

---

#### 1.5.3 – Compliance Tags

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.3** |
| **Term** | *`complianceTags`* |
| **Prefix** | *`brando`* |
| **Label** | *Compliance Tags* |
| **IRI** | *`https://brandoschema.com/complianceTags`* |
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

---

#### 1.5.4 – Review Workflow

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.4** |
| **Term** | *`reviewWorkflow`* |
| **Prefix** | *`brando`* |
| **Label** | *Review Workflow* |
| **IRI** | *`https://brandoschema.com/reviewWorkflow`* |
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

---

#### 1.5.5 – Update Policy

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.5** |
| **Term** | *`updatePolicy`* |
| **Prefix** | *`brando`* |
| **Label** | *Update Policy* |
| **IRI** | *`https://brandoschema.com/updatePolicy`* |
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

---

#### 1.5.6 – Visibility Score

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.6** |
| **Term** | *`visibilityScore`* |
| **Prefix** | *`brando`* |
| **Label** | *Visibility Score* |
| **IRI** | *`https://brandoschema.com/visibilityScore`* |
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

---

#### 1.5.7 – Retrievable in LLM

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.7** |
| **Term** | *`retrievableInLLM`* |
| **Prefix** | *`brando`* |
| **Label** | *Retrievable in LLM* |
| **IRI** | *`https://brandoschema.com/retrievableInLLM`* |
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

---

#### 1.5.8 – Embedding Quality

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.8** |
| **Term** | *`embeddingQuality`* |
| **Prefix** | *`brando`* |
| **Label** | *Embedding Quality* |
| **IRI** | *`https://brandoschema.com/embeddingQuality`* |
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

---

#### 1.5.9 – Risk Scenarios

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.5.9** |
| **Term** | *`riskScenarios`* |
| **Prefix** | *`brando`* |
| **Label** | *Risk Scenarios* |
| **IRI** | *`https://brandoschema.com/riskScenarios`* |
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

### 1.6 - Asset Properties

#### 1.6.1 – Logo Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.1** |
| **Term** | *`logoAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Logo Asset* |
| **IRI** | *`https://brandoschema.com/logoAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Downloadable versions of the brand’s logo in various formats.* |
| **Usage Note** | *Include formats like SVG, PNG, and EPS. May include mono and alt versions.* |
| **Example** | *https://brandoschema.com/assets/logo.svg* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:visualReferenceLink`, `brando:iconography`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.6.2 – Font Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.2** |
| **Term** | *`fontAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Font Asset* |
| **IRI** | *`https://brandoschema.com/fontAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Font files and license information for official brand typography.* |
| **Usage Note** | *Can reference Google Fonts, local files, or external foundry links.* |
| **Example** | *https://brandoschema.com/assets/fonts/WorkSans.zip* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:typography`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.6.3 – Image Library

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.3** |
| **Term** | *`imageLibrary`* |
| **Prefix** | *`brando`* |
| **Label** | *Image Library* |
| **IRI** | *`https://brandoschema.com/imageLibrary`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Photographic and illustrative asset collections used in brand expressions.* |
| **Usage Note** | *Links to brand-approved imagery, often hosted in DAM or cloud folders.* |
| **Example** | *https://brandoschema.com/assets/images/* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:imageryStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.6.4 – Video Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.4** |
| **Term** | *`videoAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Video Asset* |
| **IRI** | *`https://brandoschema.com/videoAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Links to brand-approved video content such as explainers or promos.* |
| **Usage Note** | *Should align with brand voice and visual identity.* |
| **Example** | *https://brandoschema.com/assets/videos/brand-intro.mp4* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:guidelinesPDF`, `brando:designSystemLink`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.6.5 – Design System Link

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.5** |
| **Term** | *`designSystemLink`* |
| **Prefix** | *`brando`* |
| **Label** | *Design System Link* |
| **IRI** | *`https://brandoschema.com/designSystemLink`* |
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

#### 1.6.6 – Template Library

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.6** |
| **Term** | *`templateLibrary`* |
| **Prefix** | *`brando`* |
| **Label** | *Template Library* |
| **IRI** | *`https://brandoschema.com/templateLibrary`* |
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

#### 1.6.7 – Guidelines PDF

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.7** |
| **Term** | *`guidelinesPDF`* |
| **Prefix** | *`brando`* |
| **Label** | *Guidelines PDF* |
| **IRI** | *`https://brandoschema.com/guidelinesPDF`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *PDF version of brand guidelines covering visual and verbal rules.* |
| **Usage Note** | *Should match version control and align with digital sources.* |
| **Example** | *https://brandoschema.com/assets/brand-guidelines.pdf* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:designSystemLink`, `brando:templateLibrary`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.6.8 – Asset Repository

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.8** |
| **Term** | *`assetRepository`* |
| **Prefix** | *`brando`* |
| **Label** | *Asset Repository* |
| **IRI** | *`https://brandoschema.com/assetRepository`* |
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

#### 1.6.9 – Persona Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.9** |
| **Term** | *`personaAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Persona Asset* |
| **IRI** | *`https://brandoschema.com/personaAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *LLM-ready files describing brand personas or audience archetypes.* |
| **Usage Note** | *Used for memory conditioning, assistant switching, and tailored generation.* |
| **Example** | *https://brandoschema.com/personas/healthcare.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:audiencePersona`, `brando:personaCard`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.6.10 – Access Policy

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.10** |
| **Term** | *`accessPolicy`* |
| **Prefix** | *`brando`* |
| **Label** | *Access Policy* |
| **IRI** | *`https://brandoschema.com/accessPolicy`* |
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

#### 1.6.11 – Q&A Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.11** |
| **Term** | *`qaAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Q&A Asset* |
| **IRI** | *`https://brandoschema.com/qaAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Structured LLM-ready FAQs or dataset files for QA models.* |
| **Usage Note** | *Boosts retrieval quality and reduces hallucination risk.* |
| **Example** | *https://brandoschema.com/assets/faqs.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:canonicalAnswer`, `brando:promptScaffold`* |
| **Equivalent Schema.org Term** | *None (custom)* |

#### 1.6.12 – Product Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.12** |
| **Term** | *`productAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Product Asset* |
| **IRI** | *`https://brandoschema.com/productAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Structured product definitions used for model context and semantic search.* |
| **Usage Note** | *May mirror `schema:Product` for maximum interoperability.* |
| **Example** | *https://brandoschema.com/assets/product-entries.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:featuresAsset`* |
| **Equivalent Schema.org Term** | *`schema:Product`* |

#### 1.6.13 – Service Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.13** |
| **Term** | *`serviceAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Service Asset* |
| **IRI** | *`https://brandoschema.com/serviceAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Structured definitions of services offered by the brand.* |
| **Usage Note** | *Align with `schema:Service` and ensure clarity for LLMs.* |
| **Example** | *https://brandoschema.com/assets/services.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:productAsset`* |
| **Equivalent Schema.org Term** | *`schema:Service`* |

#### 1.6.14 – Features Asset

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.6.14** |
| **Term** | *`featuresAsset`* |
| **Prefix** | *`brando`* |
| **Label** | *Features Asset* |
| **IRI** | *`https://brandoschema.com/featuresAsset`* |
| **Type** | *`rdfs:Property`, `skos:Concept`* |
| **Domain** | *`brando:Assets`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Assets → brando:Brand`* |
| **Object of Relation** | *`brando:hasAssets`* |
| **Definition** | *Individual product/service features for AI annotation and response.* |
| **Usage Note** | *Compatible with `schema:PropertyValue`* |
| **Example** | *https://brandoschema.com/assets/features.json* |
| **Date Created** | *20-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:productAsset`, `brando:serviceAsset`* |
| **Equivalent Schema.org Term** | *`schema:PropertyValue`* |

## Relationships

These define how each structured policy module connects to the parent `schema:Brand` entity.

| Brando Property                | Domain           | Range                    | Description                                             |
|-------------------------------|------------------|--------------------------|---------------------------------------------------------|
| `brando:hasVisualIdentity`    | `schema:Brand`   | `brando:VisualIdentity`  | Defines the brand’s visual system and design principles |
| `brando:hasVerbalIdentity`    | `schema:Brand`   | `brando:VerbalIdentity`  | Defines the brand’s language, tone, and communication   |
| `brando:hasPositioning`       | `schema:Brand`   | `brando:Positioning`     | Strategic intent, values, audience, and narrative       |
| `brando:hasGovernance`        | `schema:Brand`   | `brando:Governance`      | AI safety, compliance, refusal rules                    |
| `brando:hasAssets`            | `schema:Brand`   | `brando:Assets`          | Reusable brand assets and supporting files              |

-->

## Usage

*Brando BDV is designed to be embedded in JSON-LD, RDFa, or used within semantic layers of AI and content delivery platforms. It is intended for use by:*

- Brand strategists and marketing teams  
- AI developers and prompt engineers  
- Compliance and governance professionals  
- Semantic web and knowledge graph architects  

## References

- Schema.org: [https://schema.org/Brand](https://schema.org/Brand)  
- EU AI Act and AI governance frameworks  
