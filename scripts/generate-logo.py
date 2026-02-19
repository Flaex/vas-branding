#!/usr/bin/env python3
"""
VAS Logo Generation Script
Uses DALL-E 3 to generate logo concept images for Venezuela Advisory Services.
Saves concept images to /VAS/assets/logo-concepts/ for review.
After selecting best concept, vectorize in Figma and export to /VAS/landing/public/
"""

import os
import urllib.request
from pathlib import Path
from openai import OpenAI

# Paths
SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR.parent / "assets" / "logo-concepts"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

LOGO_PROMPTS = [
    {
        "name": "concept-bridge-v3",
        "prompt": (
            "Emblem-only corporate logo mark with strong architectural abstraction, white background, centered. "
            "Abstract reinterpretation of an architectural gateway or structural arch: "
            "bold rectilinear and angular planes arranged to evoke the cross-section of a monumental entry — "
            "think structural beams, load-bearing forms, or an abstracted facade with a central void or opening. "
            "The mark conveys solidity, authority, and passage through pure architectural geometry. "
            "Deep navy blue #1B2A4A as the dominant structural mass, "
            "gold #C9963A as a precise architectural accent — a threshold line, a keystone, or a reveal plane. "
            "Flat vector, two colors only, no gradients, no shadows, no text, no letters. "
            "Influenced by brutalist architecture, Peter Zumthor, and Tadao Ando — "
            "massive, considered, and quietly powerful."
        )
    },
    {
        "name": "concept-abstract-mark-v3b",
        "prompt": (
            "Emblem-only corporate logo mark with architectural abstraction, white background, centered. "
            "Extremely reduced composition: no more than two or three bold geometric elements total. "
            "Two large rectilinear or angular planes that intersect or overlap at a single precise point, "
            "creating one deliberate negative space or void between them. "
            "The mark reads instantly as a unified whole — not a collection of parts. "
            "Maximum tension from minimum elements, like a Tadao Ando wall meeting a single beam of light. "
            "Deep navy blue #1B2A4A as the dominant mass, gold #C9963A as a single thin intersecting plane or edge. "
            "Flat vector, two colors only, no gradients, no shadows, no text, no letters. "
            "Severe, reductive, architectural."
        )
    },
]


def generate_concept(name: str, prompt: str) -> Path:
    print(f"  Generating: {name}...")
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="hd",
        style="natural",
        n=1,
    )
    image_url = response.data[0].url
    output_file = OUTPUT_DIR / f"{name}.png"
    urllib.request.urlretrieve(image_url, output_file)
    print(f"  Saved: {output_file}")
    return output_file


def main():
    print(f"Generating {len(LOGO_PROMPTS)} logo concepts for VAS...")
    print(f"Output directory: {OUTPUT_DIR}\n")

    generated = []
    for concept in LOGO_PROMPTS:
        try:
            path = generate_concept(concept["name"], concept["prompt"])
            generated.append(path)
        except Exception as e:
            print(f"  Error generating {concept['name']}: {e}")

    print(f"\nDone! Generated {len(generated)}/{len(LOGO_PROMPTS)} concepts.")
    print("\nNote: DALL-E 3 may not render text (VAS / Venezuela Advisory Services) perfectly.")
    print("Use the output as a layout and design reference, then finalize typography in Figma.")
    print("\nNext steps:")
    print("1. Open the images in /VAS/assets/logo-concepts/")
    print("   - concept-bridge.png       (horizontal lockup)")
    print("   - concept-abstract-mark.png (vertical lockup)")
    print("2. Select the preferred concept and direction")
    print("3. Recreate the emblem as a true vector in Figma or Illustrator")
    print("4. Apply final typography: VAS in Montserrat Black, wording in Montserrat Regular")
    print("5. Export logo files to /VAS/landing/public/:")
    print("   - logo-primary.svg  (full color: emblem + VAS + wording)")
    print("   - logo-white.svg    (all-white version for dark backgrounds)")
    print("   - logo-icon.svg     (emblem only, for favicon and small sizes)")
    print("   - favicon.ico")


if __name__ == "__main__":
    main()
