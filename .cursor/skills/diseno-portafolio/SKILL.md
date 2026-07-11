# Skill: Diseño editorial portafolio (estilo INKY)

Usar este skill cuando el usuario pida cambios visuales, rediseño, o mejoras de UI/UX en el sitio portafolio de Fernando Hidalgo.

## Referencia visual

Estilo editorial inspirado en INKY Tattoo Studio:
- Secciones que **alternan fondo claro y teal oscuro** (impacto visual al hacer scroll)
- Tipografía **display gigante** tipo pincel/brush
- **Círculos sólidos** de color detrás de fotos (la imagen sobresale del círculo)
- Fotos en **escala de grises** con alto contraste
- Trazos decorativos tipo pincel entre secciones
- Nav minimalista en **mayúsculas** con mucho letter-spacing
- Botones **pill** (redondeados completos)
- Layout **asimétrico**: texto a un lado, imagen al otro

## Paleta de colores (PaletteCentral — gallo ilustrado)

| Token | Valor | Uso |
|-------|-------|-----|
| `ink-black` | `#2D2430` | Fondos oscuros (carbón), texto en secciones claras |
| `ink-white` | `#EBE8E4` | Fondos claros (crema) |
| `brand-pink` | `#FF4E2B` | Acento primario — naranja-rojo (títulos oscuros, círculos, CTAs) |
| `brand-purple` | `#00A88E` | Acento secundario — teal vibrante (círculos alternos, hovers) |
| `brand-olive` | `#FFA500` | Acento terciario — amarillo dorado (tech labels, terminal) |
| `brand-muted` | `#6B6574` | Texto secundario — gris púrpura suave |
| `brand-coral` | `#FF929E` | Acento suave — coral (detalles, prompt terminal) |

## Tipografía

| Rol | Fuente | Clase CSS |
|-----|--------|-----------|
| Display / títulos hero | Rubik Wet Paint | `.title-hero`, `.title-display` |
| Navegación / labels | Bebas Neue | `.font-nav` |
| Cuerpo | Roboto | `.font-body`, `.prose-body-normal` |

## Reglas de composición

1. **Hero siempre en fondo claro** (`section-light`) con título mínimo `clamp(4.5rem, 16vw, 11rem)`
2. **Alternar** `section-light` → `section-dark` → `section-light` en cada scroll
3. **Círculos decorativos** mínimo `22rem` en hero — naranja `#FF4E2B` o teal `#00A88E`
4. **Brush strokes** entre secciones en naranja o teal
5. **No usar** la paleta anterior (teal oscuro `#10383A` / dorado `#DAA112`)
6. En secciones oscuras (carbón): texto blanco, botones `btn-pill-light` o `btn-pill-accent`
7. En secciones claras: texto carbón `#2D2430`, botones `btn-pill-dark` o `btn-pill-outline`

## Despliegue

Tras cambios visuales, siempre ejecutar:
```bash
bash scripts/deploy.sh
git add -A && git commit -m "Deploy site [skip ci]" && git push
```

GitHub Pages usa modo legacy (archivos en raíz de `master`). El commit `[skip ci]` evita bucles en CI.
