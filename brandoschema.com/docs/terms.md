## Brando Terms

Got it — your property reference map is now stored. Here’s your updated **Brando Schema table for `1.1.1 brando:name`**, linked to the correct structure and reference:

---

### 1.1.1 – Brand Name

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.1.1** |
| **Term** | *`name`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Name* |
| **IRI** | *`https://brandoworks.com/brando#name`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:IdentityProperty`* |
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

### 1.2.1.2 - Tagline

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.2** |
| **Term** | *`tagline`* |
| **Prefix** | *`brando`* |
| **Label** | *Tagline* |
| **IRI** | *`https://brandoworks.com/brando#tagline`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:IdentityProperty`* |
| **Domain** | *`brando:Identity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Identity → brando:Brand`* |
| **Object of Relation** | *`brando:hasIdentity`* |
| **Definition** | *A short phrase or slogan that expresses the brand’s core message or identity.* |
| **Usage Note** | *May be displayed alongside brand name or logo in AI-rendered interfaces.* |
| **Example** | *"Wisdom to System"* |
| **Date Created** | *11-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:brandName`, `brando:logo`* |
| **Equivalent Schema.org Term** | *`schema:slogan`* |

### 1.2.3 - Logo

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.3** |
| **Term** | *`logo`* |
| **Prefix** | *`brando`* |
| **Label** | *Logo* |
| **IRI** | *`https://brandoworks.com/brando#logo`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:IdentityProperty`* |
| **Domain** | *`brando:Identity`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:Identity → brando:Brand`* |
| **Object of Relation** | *`brando:hasIdentity`* |
| **Definition** | *A URL or file path pointing to a visual symbol or graphic that represents the brand.* |
| **Usage Note** | *Should be machine-readable and retrievable when referenced by AI systems.* |
| **Example** | *`https://brandoworks.com/assets/logo.svg`* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:name`, `brando:tagline`* |
| **Equivalent Schema.org Term** | *`schema:logo`* |

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.4** |
| **Term** | *`visualStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Visual Style* |
| **IRI** | *`https://brandoworks.com/brando#visualStyle`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:IdentityProperty`* |
| **Domain** | *`brando:Identity`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Identity → brando:Brand`* |
| **Object of Relation** | *`brando:hasIdentity`* |
| **Definition** | *A textual description or codified reference to the brand’s visual styling rules (e.g., colour palette, font families, imagery).* |
| **Usage Note** | *Should align with design system tokens or guidelines consumable by AI.* |
| **Example** | *"Modern, minimal, navy + white, sans-serif typography"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:logo`, `brando:tagline`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.5 - Mission Statement

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.5** |
| **Term** | *`mission`* |
| **Prefix** | *`brando`* |
| **Label** | *Mission Statement* |
| **IRI** | *`https://brandoworks.com/brando#mission`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:EssenceProperty`* |
| **Domain** | *`brando:Essence`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Essence → brando:Brand`* |
| **Object of Relation** | *`brando:hasEssence`* |
| **Definition** | *A concise declaration of the brand's core purpose and what it aims to achieve.* |
| **Usage Note** | *Should reflect the brand's foundational reason for existing.* |
| **Example** | *"To empower every patient with accessible, trusted medical knowledge."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:vision`, `brando:values`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.5 - Vision Statement

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.6** |
| **Term** | *`vision`* |
| **Prefix** | *`brando`* |
| **Label** | *Vision Statement* |
| **IRI** | *`https://brandoworks.com/brando#vision`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:EssenceProperty`* |
| **Domain** | *`brando:Essence`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Essence → brando:Brand`* |
| **Object of Relation** | *`brando:hasEssence`* |
| **Definition** | *A forward-looking statement describing the long-term aspirations of the brand.* |
| **Usage Note** | *Should be used to frame the brand's future impact and direction.* |
| **Example** | *"To be the world's most trusted AI partner for human health."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:mission`, `brando:values`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.7 - Brand Values

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.7** |
| **Term** | *`values`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Values* |
| **IRI** | *`https://brandoworks.com/brando#values`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:EssenceProperty`* |
| **Domain** | *`brando:Essence`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Essence → brando:Brand`* |
| **Object of Relation** | *`brando:hasEssence`* |
| **Definition** | *The ethical principles or core beliefs that guide brand behaviour and decision-making.* |
| **Usage Note** | *Can be expressed as a comma-separated list or structured tag set.* |
| **Example** | *"Transparency, Inclusivity, Innovation, Safety"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:mission`, `brando:vision`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.8 - Brand Personality

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.8** |
| **Term** | *`brandPersonality`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Personality* |
| **IRI** | *`https://brandoworks.com/brando#brandPersonality`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:EssenceProperty`* |
| **Domain** | *`brando:Essence`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Essence → brando:Brand`* |
| **Object of Relation** | *`brando:hasEssence`* |
| **Definition** | *Describes human-like traits or tone attributes associated with the brand’s voice or persona.* |
| **Usage Note** | *Useful for prompt tuning or tone modelling in LLMs.* |
| **Example** | *"Warm, professional, empowering, evidence-led"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:toneOfVoice`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.9 - Target Audience

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.9** |
| **Term** | *`targetAudience`* |
| **Prefix** | *`brando`* |
| **Label** | *Target Audience* |
| **IRI** | *`https://brandoworks.com/brando#targetAudience`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:PositioningProperty`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *The key demographic, psychographic, or stakeholder groups the brand serves or appeals to.* |
| **Usage Note** | *Supports persona-aware responses and tone modulation.* |
| **Example** | *"Young adults with chronic conditions, healthcare professionals, digital health investors"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:brandPersona`, `brando:preferredTone`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.10 - Brand Promise

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.10** |
| **Term** | *`brandPromise`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Promise* |
| **IRI** | *`https://brandoworks.com/brando#brandPromise`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:PositioningProperty`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *The core commitment or value proposition the brand delivers to its audience.* |
| **Usage Note** | *Often derived from brand messaging or marketing copy.* |
| **Example** | *"We make regulated medicine data understandable and accessible for all."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:uniqueSellingPoint`, `brando:targetAudience`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.11 - Unique Selling Point

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.11** |
| **Term** | *`uniqueSellingPoint`* |
| **Prefix** | *`brando`* |
| **Label** | *Unique Selling Point* |
| **IRI** | *`https://brandoworks.com/brando#uniqueSellingPoint`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:PositioningProperty`* |
| **Domain** | *`brando:Positioning`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Positioning → brando:Brand`* |
| **Object of Relation** | *`brando:hasPositioning`* |
| **Definition** | *A distinctive feature or capability that sets the brand apart from competitors.* |
| **Usage Note** | *Should be concise and directly relevant to user needs or market gap.* |
| **Example** | *"Only AI system ABPI-aligned and MHRA-licensed for patient medicine explanations."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:brandPromise`, `brando:mission`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.12 - Tone of Voice

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.12** |
| **Term** | *`toneOfVoice`* |
| **Prefix** | *`brando`* |
| **Label** | *Tone of Voice* |
| **IRI** | *`https://brandoworks.com/brando#toneOfVoice`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:MessagingProperty`* |
| **Domain** | *`brando:Messaging`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Messaging → brando:Brand`* |
| **Object of Relation** | *`brando:hasMessaging`* |
| **Definition** | *The stylistic and emotional characteristics used by the brand when communicating.* |
| **Usage Note** | *Used to fine-tune the affective tone of LLM output.* |
| **Example** | *"Clear, empathetic, plain British English, non-judgemental"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:brandPersonality`, `brando:preferredTone`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.13 - Example of Prompt

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.13** |
| **Term** | *`canonicalResponse`* |
| **Prefix** | *`brando`* |
| **Label** | *Example of Prompt* |
| **IRI** | *`https://brandoworks.com/brando#canonicalResponse`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:MessagingProperty`* |
| **Domain** | *`brando:Messaging`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Messaging → brando:Brand`* |
| **Object of Relation** | *`brando:hasMessaging`* |
| **Definition** | *A representative prompt that demonstrates how users should interact with the brand through an AI interface.* |
| **Usage Note** | *May include instructional or conversational examples for LLM training or testing.* |
| **Example** | *"Explain the side effects of tamoxifen in plain language."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:canonicalAnswer`, `brando:discouragedInstructionStyle`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.14 - Example of Response

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.14** |
| **Term** | *`canonicalAnswer`* |
| **Prefix** | *`brando`* |
| **Label** | *Example of Response* |
| **IRI** | *`https://brandoworks.com/brando#canonicalAnswer`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:MessagingProperty`* |
| **Domain** | *`brando:Messaging`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Messaging → brando:Brand`* |
| **Object of Relation** | *`brando:hasMessaging`* |
| **Definition** | *A model output that aligns with the brand’s tone, clarity, and safety standards.* |
| **Usage Note** | *Used for prompt tuning or to train expected LLM response formats.* |
| **Example** | *"Tamoxifen may cause hot flushes, tiredness, or nausea. These effects are not dangerous but should be reported to your doctor if they persist."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:canonicalResponse`, `brando:guardRails`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.15 - Vocabulary Constraints

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.15** |
| **Term** | *`vocabularyConstraints`* |
| **Prefix** | *`brando`* |
| **Label** | *Vocabulary Constraints* |
| **IRI** | *`https://brandoworks.com/brando#vocabularyConstraints`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:MessagingProperty`* |
| **Domain** | *`brando:Messaging`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:Messaging → brando:Brand`* |
| **Object of Relation** | *`brando:hasMessaging`* |
| **Definition** | *Restrictions or preferences around specific words, phrases, or terminology used in brand communications.* |
| **Usage Note** | *Useful for aligning responses with regulatory, legal, or tone requirements.* |
| **Example** | *Avoid "cure", use "treatment" or "management".* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:discouragedInstructionStyle`, `brando:guardRails`* |
| **Equivalent Schema.org Term** | *None (custom term)* |

### 1.2.16 - Official Website

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.16** |
| **Term** | *`officialWebsite`* |
| **Prefix** | *`brando`* |
| **Label** | *Official Website* |
| **IRI** | *`https://brandoworks.com/brando#officialWebsite`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:DigitalPresenceProperty`* |
| **Domain** | *`brando:DigitalPresence`* |
| **Range** | *`xsd:anyURI`* |
| **Broader/Parent** | *`brando:DigitalPresence → brando:Brand`* |
| **Object of Relation** | *`brando:hasDigitalPresence`* |
| **Definition** | *The primary URL that represents the brand’s official online presence.* |
| **Usage Note** | *Used to verify brand identity in AI systems and public interfaces.* |
| **Example** | *"https://advancedanalytica.co.uk"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:socialProfiles`* |
| **Equivalent Schema.org Term** | *`schema:url`* |

### 1.2.17 - Social Profiles

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.17** |
| **Term** | *`socialProfiles`* |
| **Prefix** | *`brando`* |
| **Label** | *Social Profiles* |
| **IRI** | *`https://brandoworks.com/brando#socialProfiles`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:DigitalPresenceProperty`* |
| **Domain** | *`brando:DigitalPresence`* |
| **Range** | *`rdf:List of xsd:anyURI`* |
| **Broader/Parent** | *`brando:DigitalPresence → brando:Brand`* |
| **Object of Relation** | *`brando:hasDigitalPresence`* |
| **Definition** | *Links to the brand’s verified social media profiles.* |
| **Usage Note** | *Should be kept up to date for brand integrity in AI discovery.* |
| **Example** | *"https://twitter.com/brand-name", "https://linkedin.com/company/brand-name"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:officialWebsite`* |
| **Equivalent Schema.org Term** | *`schema:sameAs`* |

### 1.2.18 - Visibility Score

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.18** |
| **Term** | *`visibilityScore`* |
| **Prefix** | *`brando`* |
| **Label** | *Visibility Score* |
| **IRI** | *`https://brandoworks.com/brando#visibilityScore`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:DigitalPresenceProperty`* |
| **Domain** | *`brando:DigitalPresence`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:DigitalPresence → brando:Brand`* |
| **Object of Relation** | *`brando:hasDigitalPresence`* |
| **Definition** | *A qualitative measure of how easily the brand can be found and interpreted by AI systems.* |
| **Usage Note** | *Values may include “very low”, “low”, “medium”, “high”, “very high”.* |
| **Example** | *"high"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:officialWebsite`, `brando:socialProfiles`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.19 - Regulatory Frameworks

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.19** |
| **Term** | *`regulatoryFrameworks`* |
| **Prefix** | *`brando`* |
| **Label** | *Regulatory Frameworks* |
| **IRI** | *`https://brandoworks.com/brando#regulatoryFrameworks`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:ComplianceProperty`* |
| **Domain** | *`brando:ComplianceProfile`* |
| **Range** | *`rdf:List of xsd:string`* |
| **Broader/Parent** | *`brando:ComplianceProfile → brando:Brand`* |
| **Object of Relation** | *`brando:hasComplianceProfile`* |
| **Definition** | *A list of laws, regulations, or codes that the brand adheres to for AI usage.* |
| **Usage Note** | *Can include national, regional, or industry-specific governance codes.* |
| **Example** | *"EU AI Act", "UK Code of Non-broadcast Advertising and Direct & Promotional Marketing (CAP Code)"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:ethicalAICommitments`, `brando:transparencyLevel`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.20 - Ethical AI Commitments

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.20** |
| **Term** | *`ethicalAICommitments`* |
| **Prefix** | *`brando`* |
| **Label** | *Ethical AI Commitments* |
| **IRI** | *`https://brandoworks.com/brando#ethicalAICommitments`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:ComplianceProperty`* |
| **Domain** | *`brando:ComplianceProfile`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:ComplianceProfile → brando:Brand`* |
| **Object of Relation** | *`brando:hasComplianceProfile`* |
| **Definition** | *The brand’s stated position or principles related to ethical AI practices.* |
| **Usage Note** | *Used to guide AI alignment, transparency, fairness, and responsibility.* |
| **Example** | *"We commit to explainable AI, fairness in data representation, and safety in automation."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:regulatoryFrameworks`, `brando:transparencyLevel`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.21 - Transparency Level

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.21** |
| **Term** | *`transparencyLevel`* |
| **Prefix** | *`brando`* |
| **Label** | *Transparency Level* |
| **IRI** | *`https://brandoworks.com/brando#transparencyLevel`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:ComplianceProperty`* |
| **Domain** | *`brando:ComplianceProfile`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:ComplianceProfile → brando:Brand`* |
| **Object of Relation** | *`brando:hasComplianceProfile`* |
| **Definition** | *An indication of how open and explainable the brand’s AI-powered outputs are intended to be.* |
| **Usage Note** | *Acceptable values include “low”, “moderate”, or “high”.* |
| **Example** | *"high"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:ethicalAICommitments`, `brando:regulatoryFrameworks`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.22 - Acceptable Topics

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.22** |
| **Term** | *`acceptableTopics`* |
| **Prefix** | *`brando`* |
| **Label** | *Acceptable Topics* |
| **IRI** | *`https://brandoworks.com/brando#acceptableTopics`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:EngagementProperty`* |
| **Domain** | *`brando:EngagementPolicy`* |
| **Range** | *`rdf:List of xsd:string`* |
| **Broader/Parent** | *`brando:EngagementPolicy → brando:Brand`* |
| **Object of Relation** | *`brando:hasEngagementPolicy`* |
| **Definition** | *A list of topics the brand allows LLMs to discuss when representing it.* |
| **Usage Note** | *Helps constrain LLM outputs to safe and on-brand subject areas.* |
| **Example** | *"Sustainability", "Data Privacy", "Wellbeing"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:prohibitedExpressions`, `brando:guardRails`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.23 - Prohibited Expressions

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.23** |
| **Term** | *`prohibitedExpressions`* |
| **Prefix** | *`brando`* |
| **Label** | *Prohibited Expressions* |
| **IRI** | *`https://brandoworks.com/brando#prohibitedExpressions`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:EngagementProperty`* |
| **Domain** | *`brando:EngagementPolicy`* |
| **Range** | *`rdf:List of xsd:string`* |
| **Broader/Parent** | *`brando:EngagementPolicy → brando:Brand`* |
| **Object of Relation** | *`brando:hasEngagementPolicy`* |
| **Definition** | *A list of banned phrases, topics, or sentiments that LLMs must avoid when representing the brand.* |
| **Usage Note** | *Acts as a safeguard to prevent harmful, off-brand, or risky content.* |
| **Example** | *"Medical advice", "Guaranteed results", "Political endorsements"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:acceptableTopics`, `brando:guardRails`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.24 - Requires Human Escalation

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.24** |
| **Term** | *`requiresHumanEscalation`* |
| **Prefix** | *`brando`* |
| **Label** | *Requires Human Escalation* |
| **IRI** | *`https://brandoworks.com/brando#requiresHumanEscalation`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:EngagementProperty`* |
| **Domain** | *`brando:EngagementPolicy`* |
| **Range** | *`xsd:boolean`* |
| **Broader/Parent** | *`brando:EngagementPolicy → brando:Brand`* |
| **Object of Relation** | *`brando:hasEngagementPolicy`* |
| **Definition** | *Indicates whether certain queries must be handed over to a human representative.* |
| **Usage Note** | *Used in automated systems to define escalation thresholds or limits.* |
| **Example** | *true* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:guardRails`, `brando:clarificationStyle`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.25 - Reinforcement Cue

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.25** |
| **Term** | *`reinforcementCue`* |
| **Prefix** | *`brando`* |
| **Label** | *Reinforcement Cue* |
| **IRI** | *`https://brandoworks.com/brando#reinforcementCue`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:LLMBehaviourProperty`* |
| **Domain** | *`brando:LLMBehaviourProfile`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:LLMBehaviourProfile → brando:Brand`* |
| **Object of Relation** | *`brando:hasMessaging`* |
| **Definition** | *A phrase or token used to reinforce consistent behaviour in model outputs.* |
| **Usage Note** | *Useful for prompt design or memory injection to maintain tone or values.* |
| **Example** | *"Remember: Speak with clarity and compassion."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:guardRails`, `brando:toneOfVoice`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.26 - Guard Rails

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.26** |
| **Term** | *`guardRails`* |
| **Prefix** | *`brando`* |
| **Prefix** | *`brando`* |
| **Label** | *Guard Rails* |
| **IRI** | *`https://brandoworks.com/brando#guardRails`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:LLMBehaviourProperty`* |
| **Domain** | *`brando:LLMBehaviourProfile`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:LLMBehaviourProfile → brando:Brand`* |
| **Object of Relation** | *`brando:hasMessaging`* |
| **Definition** | *Defines what LLMs must refuse to answer or how they should deflect certain inputs.* |
| **Usage Note** | *Acts as an automated filter for inappropriate or off-brand questions.* |
| **Example** | *"I'm sorry, I can't answer that. Please contact support for more details."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:prohibitedExpressions`, `brando:requiresHumanEscalation`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.27 - Clarification Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.27** |
| **Term** | *`clarificationStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Clarification Style* |
| **IRI** | *`https://brandoworks.com/brando#clarificationStyle`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:LLMBehaviourProperty`* |
| **Domain** | *`brando:LLMBehaviourProfile`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:LLMBehaviourProfile → brando:Brand`* |
| **Object of Relation** | *`brando:hasMessaging`* |
| **Definition** | *Specifies how the LLM should request clarification from users.* |
| **Usage Note** | *Guides models to ask questions that maintain tone and user experience.* |
| **Example** | *"Just to clarify, are you asking about pricing or product features?"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:toneOfVoice`, `brando:alignmentSignal`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.28 - Alignment Signal

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.28** |
| **Term** | *`alignmentSignal`* |
| **Prefix** | *`brando`* |
| **Label** | *Alignment Signal* |
| **IRI** | *`https://brandoworks.com/brando#alignmentSignal`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:LLMBehaviourProperty`* |
| **Domain** | *`brando:LLMBehaviourProfile`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:LLMBehaviourProfile → brando:Brand`* |
| **Object of Relation** | *`brando:hasMessaging`* |
| **Definition** | *A signal embedded in prompts or memory to reinforce brand-aligned behaviours.* |
| **Usage Note** | *Used to train or cue models toward expected outputs.* |
| **Example** | *"Use the customer-first principle in all interactions."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:guardRails`, `brando:reinforcementCue`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.29 - Literacy Level

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.29** |
| **Term** | *`literacyLevel`* |
| **Prefix** | *`brando`* |
| **Label** | *Literacy Level* |
| **IRI** | *`https://brandoworks.com/brando#literacyLevel`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:AudienceProperty`* |
| **Domain** | *`brando:AudiencePersona`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:AudiencePersona → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudience`* |
| **Definition** | *The expected reading or comprehension level for target users.* |
| **Usage Note** | *Used to shape model output to match audience understanding.* |
| **Example** | *"A2 (CEFR)", "Reading age 12+"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:accessibilityNeeds`, `brando:brandPersona`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.30 - Accessibility Needs

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.30** |
| **Term** | *`accessibilityNeeds`* |
| **Prefix** | *`brando`* |
| **Label** | *Accessibility Needs* |
| **IRI** | *`https://brandoworks.com/brando#accessibilityNeeds`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:AudienceProperty`* |
| **Domain** | *`brando:AudiencePersona`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:AudiencePersona → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudience`* |
| **Definition** | *Specific requirements or adjustments for accessible communication.* |
| **Usage Note** | *May influence tone, format, or visual language in model responses.* |
| **Example** | *"Screen reader compatible", "Simple language required"* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:literacyLevel`, `brando:brandPersona`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.31 - Brand Persona

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.31** |
| **Term** | *`brandPersona`* |
| **Prefix** | *`brando`* |
| **Label** | *Brand Persona* |
| **IRI** | *`https://brandoworks.com/brando#brandPersona`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:AudienceProperty`* |
| **Domain** | *`brando:AudiencePersona`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:AudiencePersona → brando:Brand`* |
| **Object of Relation** | *`brando:hasAudience`* |
| **Definition** | *A narrative description of a prototypical audience member or group the brand serves.* |
| **Usage Note** | *Used to tailor AI responses to known communication styles and expectations.* |
| **Example** | *"Time-poor business analyst, age 40–55, prefers bullet points and concise summaries."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:literacyLevel`, `brando:accessibilityNeeds`* |
| **Equivalent Schema.org Term** | *None (custom)* |

### 1.2.32 - Discouraged Instruction Style

| **KEY** | **VALUE** |
|:--------|:----------|
| **Ref** | **1.2.31** |
| **Term** | *`discouragedInstructionStyle`* |
| **Prefix** | *`brando`* |
| **Label** | *Discouraged Instruction Style* |
| **IRI** | *`https://brandoworks.com/brando#discouragedInstructionStyle`* |
| **Type** | *`rdfs:Property`, `skos:Concept`, `brando:PromptControlProperty`* |
| **Domain** | *`brando:PromptControl`* |
| **Range** | *`xsd:string`* |
| **Broader/Parent** | *`brando:PromptControl → brando:Brand`* |
| **Object of Relation** | *`brando:hasPromptControl`* |
| **Definition** | *Specifies styles, tones, or structural patterns to avoid when generating model prompts.* |
| **Usage Note** | *Helps mitigate risks of tone-deaf or off-brand prompt phrasing.* |
| **Example** | *"Do not use overly casual or sarcastic language."* |
| **Date Created** | *13-04-2025* |
| **Contributors** | *Advanced Analytica Ltd* |
| **See Also** | *`brando:toneOfVoice`, `brando:guardRails`* |
| **Equivalent Schema.org Term** | *None (custom)* |
