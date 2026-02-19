#!/usr/bin/env python3
"""
VAS Project Report PDF Generator
Generates a formatted PDF report of all project activities.
"""

from fpdf import FPDF
from pathlib import Path

OUTPUT_PATH = Path(__file__).parent.parent / "Reporte_Actividades_VAS.pdf"

FONT_REGULAR  = "/Library/Fonts/Arial Unicode.ttf"
FONT_BOLD     = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_ITALIC   = "/System/Library/Fonts/Supplemental/Arial Italic.ttf"

# Brand colours
NAVY   = (29, 29, 63)      # #1D1D3F
GOLD   = (176, 153, 72)    # #B09948
WHITE  = (255, 255, 255)
LIGHT  = (248, 246, 241)   # #F8F6F1 neutral-50
GRAY   = (100, 100, 110)
BLACK  = (20, 20, 30)
RULE   = (220, 216, 208)


class VASReport(FPDF):

    def header(self):
        # Navy top bar
        self.set_fill_color(*NAVY)
        self.rect(0, 0, 210, 14, "F")
        # Gold accent line
        self.set_fill_color(*GOLD)
        self.rect(0, 14, 210, 1.2, "F")

    def footer(self):
        self.set_y(-14)
        self.set_fill_color(*NAVY)
        self.rect(0, self.get_y(), 210, 14, "F")
        self.set_font("regular", size=8)
        self.set_text_color(*WHITE)
        self.cell(0, 14, "Venezuela Advisory Services  |  Novanet Studio  |  Febrero 2026",
                  align="C")

    # ── helpers ──────────────────────────────────────────────────────────────

    def add_fonts(self):
        self.add_font("regular", style="",  fname=FONT_REGULAR,  uni=True)
        self.add_font("bold",    style="",  fname=FONT_BOLD,     uni=True)
        self.add_font("italic",  style="",  fname=FONT_ITALIC,   uni=True)

    def h_space(self, mm=4):
        self.ln(mm)

    def rule(self):
        self.set_draw_color(*RULE)
        self.set_line_width(0.3)
        self.line(14, self.get_y(), 196, self.get_y())
        self.ln(3)

    def cover_page(self):
        self.add_page()

        # Full navy hero block
        self.set_fill_color(*NAVY)
        self.rect(0, 16, 210, 100, "F")

        # Gold decorative bar left edge
        self.set_fill_color(*GOLD)
        self.rect(0, 16, 5, 100, "F")

        # Main title
        self.set_xy(14, 36)
        self.set_font("bold", size=26)
        self.set_text_color(*WHITE)
        self.multi_cell(180, 12, "Reporte de Actividades", align="L")

        self.set_xy(14, 62)
        self.set_font("bold", size=20)
        self.set_text_color(*GOLD)
        self.multi_cell(180, 10, "Proyecto VAS", align="L")

        self.set_xy(14, 80)
        self.set_font("regular", size=12)
        self.set_text_color(200, 200, 220)
        self.multi_cell(180, 7, "Venezuela Advisory Services", align="L")

        # Meta block below hero
        self.set_xy(14, 128)
        self.set_font("bold", size=10)
        self.set_text_color(*NAVY)

        meta = [
            ("Fecha",       "Febrero 2026"),
            ("Preparado por", "Equipo de Desarrollo — Novanet"),
            ("Cliente",     "Venezuela Advisory Services (VAS)"),
            ("Estado",      "Proyecto Completado"),
        ]
        for label, value in meta:
            self.set_font("bold", size=9)
            self.set_text_color(*GOLD)
            self.cell(45, 7, label + ":", ln=0)
            self.set_font("regular", size=9)
            self.set_text_color(*BLACK)
            self.cell(0, 7, value, ln=1)

        # URL pill
        self.set_xy(14, 175)
        self.set_fill_color(*NAVY)
        self.set_text_color(*WHITE)
        self.set_font("bold", size=9)
        self.cell(0, 9, "  https://vas-venezuela-advisory.netlify.app  ",
                  border=0, ln=1, fill=True)

    def section_title(self, number, title):
        self.h_space(6)
        # Coloured number badge
        self.set_fill_color(*NAVY)
        self.set_text_color(*WHITE)
        self.set_font("bold", size=11)
        x = self.get_x()
        y = self.get_y()
        self.rect(14, y, 8, 8, "F")
        self.set_xy(14, y)
        self.cell(8, 8, str(number), align="C")
        # Section title
        self.set_xy(24, y)
        self.set_text_color(*NAVY)
        self.set_font("bold", size=13)
        self.cell(0, 8, title, ln=1)
        # Gold underline
        self.set_fill_color(*GOLD)
        self.rect(14, self.get_y(), 182, 0.8, "F")
        self.ln(4)

    def body(self, text, indent=14):
        self.set_font("regular", size=9.5)
        self.set_text_color(*BLACK)
        self.set_x(indent)
        self.multi_cell(196 - indent, 5.5, text)
        self.ln(1)

    def bullet(self, text, indent=18):
        self.set_font("regular", size=9.5)
        self.set_text_color(*BLACK)
        self.set_x(indent)
        self.cell(5, 5.5, "•", ln=0)
        self.set_x(indent + 5)
        self.multi_cell(196 - indent - 5, 5.5, text)

    def sub_heading(self, text):
        self.h_space(3)
        self.set_font("bold", size=10)
        self.set_text_color(*NAVY)
        self.set_x(14)
        self.cell(0, 6, text, ln=1)
        self.ln(1)

    def kv(self, label, value):
        """Key-value line."""
        self.set_x(18)
        self.set_font("bold", size=9)
        self.set_text_color(*GRAY)
        self.cell(42, 5.5, label + ":", ln=0)
        self.set_font("regular", size=9)
        self.set_text_color(*BLACK)
        self.multi_cell(0, 5.5, value)

    def table(self, headers, rows, col_widths):
        # Header row
        self.set_fill_color(*NAVY)
        self.set_text_color(*WHITE)
        self.set_font("bold", size=9)
        self.set_x(14)
        for h, w in zip(headers, col_widths):
            self.cell(w, 7, h, border=0, fill=True, align="L")
        self.ln()

        # Data rows
        for i, row in enumerate(rows):
            fill = i % 2 == 0
            self.set_fill_color(*LIGHT) if fill else self.set_fill_color(*WHITE)
            self.set_text_color(*BLACK)
            self.set_font("regular", size=8.5)
            self.set_x(14)

            # Find max height for this row
            max_lines = 1
            for cell_text, w in zip(row, col_widths):
                # Estimate lines
                chars_per_line = int(w / 2.1)
                lines = max(1, len(cell_text) // chars_per_line + 1) if len(cell_text) > chars_per_line else 1
                max_lines = max(max_lines, lines)

            row_h = max_lines * 5.5
            y_before = self.get_y()
            x_start = 14

            for j, (cell_text, w) in enumerate(zip(row, col_widths)):
                self.set_xy(x_start, y_before)
                self.set_fill_color(*LIGHT) if fill else self.set_fill_color(*WHITE)
                self.multi_cell(w, row_h / max_lines, cell_text, border=0, fill=True)
                x_start += w

            self.set_y(y_before + row_h)

        self.ln(2)

    # ── sections ─────────────────────────────────────────────────────────────

    def section_content(self):
        self.section_title(1, "Optimización de Contenido")

        self.body(
            "Se procesó el documento de briefing de la empresa mediante la API de Claude "
            "(claude-opus-4-6) para extraer y estructurar el contenido de marketing en el "
            "archivo vas-content.json. El proceso combinó extracción automatizada de PDF con "
            "revisión editorial para garantizar tono profesional y coherencia de marca."
        )

        self.sub_heading("Contenido generado y estructurado:")
        items = [
            "Mensajes principales: titular, subtitular y llamadas a la acción del hero",
            "Propuesta de valor: 4 diferenciadores clave de la empresa",
            "Catálogo de servicios: 6 categorías de servicio con descripción detallada",
            "Proceso de trabajo: flujo de 4 pasos (Consulta → Estrategia → Ejecución → Soporte)",
            "Información de contacto e información institucional",
            "Voz de marca definida: profesional, directa y orientada a la ejecución práctica",
        ]
        for item in items:
            self.bullet(item)

        self.h_space(3)
        self.table(
            ["Atributo", "Detalle"],
            [
                ["Audiencia objetivo", "Ejecutivos internacionales, directores regionales, gerentes de compliance"],
                ["Tono de comunicación", "Profesional, confiable, directo y orientado a resultados"],
                ["Fuente del contenido", "Briefing corporativo PDF procesado con IA (Claude claude-opus-4-6)"],
                ["Formato de salida", "JSON estructurado → migrado a 6 archivos de traducción"],
            ],
            [52, 130],
        )

    def section_logo(self):
        self.section_title(2, "Creación del Logotipo")

        self.body(
            "Se desarrolló la identidad visual de VAS en un proceso iterativo de dos etapas: "
            "generación de conceptos mediante inteligencia artificial y vectorización profesional "
            "para producción."
        )

        self.sub_heading("Etapa 1 — Generación de conceptos con DALL-E 3")
        self.body(
            "Se generaron 7 mockups conceptuales bajo la dirección creativa de una marca "
            "de arquitectura corporativa, explorando dos líneas:",
            indent=18,
        )
        self.bullet("Serie Bridge/Gateway: formas que evocan un portal de entrada al mercado venezolano")
        self.bullet("Serie Abstract Mark: marcas geométricas con peso estructural y presencia corporativa")

        self.h_space(2)
        self.sub_heading("Etapa 2 — Vectorización y activos de producción (SVG)")

        self.table(
            ["Archivo", "Uso"],
            [
                ["logo-primary.svg", "Versión principal — sobre fondos claros"],
                ["logo-white.svg",   "Versión blanca — para fondos oscuros (header, footer)"],
                ["logo-icon.svg",    "Ícono reducido — favicon del navegador"],
            ],
            [68, 114],
        )

        self.sub_heading("Paleta de identidad visual:")
        self.kv("Azul marino #1D1D3F", "Color principal — autoridad, confianza, presencia internacional")
        self.kv("Dorado #B09948",      "Color de acento — referencia bandera venezolana, servicios premium")
        self.kv("Tipografía display",  "Montserrat (600, 700) — titulares y etiquetas")
        self.kv("Tipografía de cuerpo","DM Sans (400, 500, 600) — texto de lectura")

    def section_landing(self):
        self.section_title(3, "Diseño y Desarrollo del Landing Page")

        self.sub_heading("Stack tecnológico")
        self.table(
            ["Tecnología", "Versión / Detalle"],
            [
                ["Framework",       "Nuxt 3.21 (Vue 3.5, Vite 7, Nitro 2)"],
                ["Estilos",         "Tailwind CSS con design tokens personalizados"],
                ["Fuentes web",     "@nuxt/fonts — Montserrat + DM Sans (Google Fonts)"],
                ["Imágenes",        "@nuxt/image — WebP optimizado, calidad 80"],
                ["Despliegue",      "Netlify — generación estática (nuxt generate)"],
                ["Lenguaje",        "TypeScript 5.7"],
            ],
            [52, 130],
        )

        self.sub_heading("Secciones desarrolladas")
        self.table(
            ["Sección", "Descripción"],
            [
                ["Hero",          "Titular, subtitular, 2 CTAs y tira de estadísticas clave"],
                ["About",         "Misión, 3 pilares estratégicos y tarjeta flotante On-the-ground"],
                ["Why Choose VAS","4 tarjetas de diferenciación numeradas (01–04)"],
                ["Our Services",  "Grilla de 6 servicios: empresa, permisos, legal, representación, bienes raíces, talento"],
                ["How It Works",  "Proceso de 4 pasos con indicadores visuales numerados"],
                ["CTA Banner",    "Banner de conversión en dorado con llamada directa a contacto"],
                ["Contact",       "Formulario con validación en tiempo real + datos de contacto directos"],
            ],
            [48, 134],
        )

        self.sub_heading("Características técnicas destacadas:")
        features = [
            "Header fijo con cambio de estado al hacer scroll (transparente → sólido navy)",
            "Menú responsive con versión móvil colapsable",
            "Formulario de contacto con validación por campo, estados de carga y modal de confirmación",
            "Honeypot anti-spam integrado (Netlify Forms)",
            "SEO optimizado: título, descripción, Open Graph y Twitter Card por idioma",
            "Generación estática (SSG) para máximo rendimiento en CDN global",
            "Favicon SVG personalizado con ícono de marca",
        ]
        for f in features:
            self.bullet(f)

    def section_i18n(self):
        self.section_title(4, "Internacionalización (i18n) — 6 Idiomas")

        self.body(
            "Se implementó soporte multilingüe completo mediante el módulo @nuxtjs/i18n v10 "
            "con estrategia no_prefix. Todo el contenido del sitio fue migrado de un único "
            "archivo JSON a seis archivos de traducción independientes, cubriendo todos los "
            "textos visibles: navegación, secciones, formulario, errores de validación y SEO."
        )

        self.h_space(2)
        self.table(
            ["Código", "Idioma", "Particularidad"],
            [
                ["en",    "English",                  "Idioma base del sistema"],
                ["es",    "Español",                  "—"],
                ["fr",    "Français",                 "—"],
                ["de",    "Deutsch",                  "—"],
                ["he",    "Hebreo (עברית)",            "Dirección RTL automática — <html dir=\"rtl\">"],
                ["zh-TW", "Chino Tradicional (中文繁)", "—"],
            ],
            [20, 54, 108],
        )

        self.sub_heading("Características de la implementación:")
        feats = [
            "Cambio de idioma reactivo sin modificar la URL (no_prefix strategy)",
            "Selector de idioma en footer: ícono de globo + menú desplegable animado",
            "Persistencia de idioma seleccionado mediante cookie (i18n_redirected)",
            "Detección automática del idioma del navegador en la primera visita",
            'Soporte RTL completo para hebreo: atributo dir="rtl" aplicado al <html>',
            "Meta tags SEO reactivos por idioma (título, descripción, Open Graph)",
            "Arrays de contenido (servicios, proceso, diferenciadores) totalmente traducidos",
        ]
        for f in feats:
            self.bullet(f)

    def section_deploy(self):
        self.section_title(5, "Publicación en Producción")

        self.body(
            "El sitio fue publicado en Netlify mediante el CLI oficial, utilizando generación "
            "estática para máximo rendimiento. El formulario de contacto opera sin backend "
            "propio gracias a la integración nativa de Netlify Forms."
        )

        self.h_space(2)
        self.table(
            ["Parámetro", "Valor"],
            [
                ["URL de producción",  "https://vas-venezuela-advisory.netlify.app"],
                ["Plataforma",         "Netlify (CDN global)"],
                ["Tipo de build",      "Generación estática — nuxt generate"],
                ["Directorio de salida",".output/public"],
                ["Node.js en build",   "v20 LTS"],
                ["Formulario",         "Netlify Forms (sin servidor propio)"],
                ["Tiempo de build",    "~10 segundos"],
                ["Archivos publicados","25 assets + 6 archivos de mensajes i18n"],
            ],
            [55, 127],
        )

    def summary_page(self):
        self.add_page()
        self.h_space(8)

        # Summary box
        self.set_fill_color(*LIGHT)
        self.set_draw_color(*GOLD)
        self.set_line_width(0.6)
        self.rect(14, self.get_y(), 182, 8, "F")
        self.set_font("bold", size=12)
        self.set_text_color(*NAVY)
        self.set_x(14)
        self.cell(182, 8, "  Resumen Ejecutivo del Proyecto", ln=1)
        self.ln(2)

        self.table(
            ["Actividad", "Resultado"],
            [
                ["Optimización de contenido", "Briefing PDF procesado con IA → contenido estructurado en 6 idiomas"],
                ["Identidad visual",          "7 conceptos de logo generados → 3 activos SVG finales de producción"],
                ["Landing page",              "7 secciones + 4 componentes UI + header/footer responsive"],
                ["Internacionalización",      "6 idiomas: EN, ES, FR, DE, HE (RTL), ZH-TW"],
                ["SEO",                       "Meta tags reactivos por idioma, Open Graph y Twitter Card"],
                ["Formulario de contacto",    "Validación en tiempo real + integración Netlify Forms"],
                ["Despliegue",                "Producción en Netlify CDN — https://vas-venezuela-advisory.netlify.app"],
            ],
            [68, 114],
        )

        self.h_space(5)
        self.rule()

        self.set_font("italic", size=9)
        self.set_text_color(*GRAY)
        self.set_x(14)
        self.multi_cell(
            182, 5.5,
            "Todas las actividades descritas fueron ejecutadas de forma íntegra durante el período "
            "del proyecto. El sitio se encuentra en producción y disponible públicamente en la URL indicada.",
        )


def main():
    pdf = VASReport()
    pdf.add_fonts()
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.set_margins(0, 16, 0)

    # Cover
    pdf.cover_page()

    # Content pages
    pdf.add_page()
    pdf.h_space(6)
    pdf.section_content()
    pdf.section_logo()

    pdf.add_page()
    pdf.h_space(6)
    pdf.section_landing()

    pdf.add_page()
    pdf.h_space(6)
    pdf.section_i18n()
    pdf.section_deploy()

    pdf.summary_page()

    pdf.output(str(OUTPUT_PATH))
    print(f"PDF generado: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
