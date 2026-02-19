#!/usr/bin/env python3
"""
VAS Content Generation Script
Reads the company PDF brief and uses Claude API to generate
structured marketing website content saved to vas-content.json
"""

import anthropic
import base64
import json
import os
from pathlib import Path

# Paths
SCRIPT_DIR = Path(__file__).parent
PDF_PATH = SCRIPT_DIR.parent / "assets" / "Contenido landing page.docx.pdf"
OUTPUT_PATH = SCRIPT_DIR.parent / "landing" / "content" / "vas-content.json"

client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))


def load_pdf() -> str:
    with open(PDF_PATH, "rb") as f:
        return base64.standard_b64encode(f.read()).decode("utf-8")


def extract_structured_content(pdf_data: str) -> dict:
    """Step 1: Extract structured JSON from PDF."""
    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=4096,
        messages=[{
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "base64",
                        "media_type": "application/pdf",
                        "data": pdf_data
                    },
                    "cache_control": {"type": "ephemeral"}
                },
                {
                    "type": "text",
                    "text": """You are extracting structured content from a company marketing brief.
Return ONLY a valid JSON object (no markdown, no code fences) with exactly these fields:
{
  "company_name": "string",
  "tagline": "string",
  "hero_headline": "string (8-12 words, value proposition)",
  "hero_subheadline": "string (20-30 words, expands on headline)",
  "hero_cta_primary": "string (3-4 words)",
  "hero_cta_secondary": "string (3-4 words)",
  "about_headline": "string",
  "about_body": "string (2-3 sentences)",
  "why_us": [
    {"title": "string", "description": "string (2 sentences)"}
  ],
  "services": [
    {"title": "string", "description": "string", "icon": "string (emoji or icon name)"}
  ],
  "how_it_works": [
    {"step": 1, "title": "string", "description": "string"}
  ],
  "cta_headline": "string",
  "cta_body": "string",
  "cta_button": "string",
  "contact_email": "string",
  "contact_phone": "string",
  "brand_voice": "string",
  "industry": "string",
  "footer_tagline": "string"
}"""
                }
            ]
        }]
    )
    raw = response.content[0].text.strip()
    # Strip markdown code fences if present
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]
    return json.loads(raw.strip())


def enrich_section(pdf_data: str, section: str, instructions: str, base_content: dict) -> dict:
    """Step 2: Enrich a specific section with polished copy."""
    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "base64",
                        "media_type": "application/pdf",
                        "data": pdf_data
                    },
                    "cache_control": {"type": "ephemeral"}
                },
                {
                    "type": "text",
                    "text": f"""You are a senior B2B marketing copywriter for professional services targeting international corporations.

Company: {base_content.get('company_name')}
Brand voice: {base_content.get('brand_voice')}
Industry: {base_content.get('industry')}

{instructions}

Return ONLY valid JSON (no markdown, no code fences)."""
                }
            ]
        }]
    )
    raw = response.content[0].text.strip()
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]
    return json.loads(raw.strip())


def main():
    print("Loading PDF...")
    pdf_data = load_pdf()

    print("Extracting structured content from PDF...")
    content = extract_structured_content(pdf_data)
    print(f"  Extracted content for: {content.get('company_name')}")

    print("Enriching Hero section copy...")
    try:
        hero_enriched = enrich_section(
            pdf_data, "hero",
            """Write polished hero section copy. Return JSON:
{
  "hero_headline": "8-12 words, strong value proposition, action-oriented",
  "hero_subheadline": "25-35 words, expands headline with credibility and reassurance",
  "hero_cta_primary": "3-4 words, low-friction action",
  "hero_cta_secondary": "3-4 words, softer alternative"
}""",
            content
        )
        content.update(hero_enriched)
    except Exception as e:
        print(f"  Warning: Hero enrichment failed ({e}), using extracted values")

    print("Saving content to vas-content.json...")
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(content, f, indent=2, ensure_ascii=False)

    print(f"Done! Content saved to {OUTPUT_PATH}")
    print(json.dumps(content, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
