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

## Paleta de colores (NO cambiar sin permiso)

| Token | Valor | Uso |
|-------|-------|-----|
| `ink-black` | `#10383A` | Fondos oscuros (teal profundo), texto en secciones claras |
| `ink-white` | `#EEF1F0` | Fondos claros (gris verdoso suave) |
| `brand-pink` | `#DAA112` | Acento primario — amarillo dorado (títulos, círculos, CTAs) |
| `brand-purple` | `#809276` | Acento secundario — verde salvia (círculos alternos, hovers) |
| `brand-olive` | `#666E51` | Acento terciario — oliva (tech labels, detalles) |
| `brand-muted` | `#768886` | Texto secundario — gris azulado |

## Tipografía

| Rol | Fuente | Clase CSS |
|-----|--------|-----------|
| Display / títulos hero | Rubik Wet Paint | `.title-hero`, `.title-display` |
| Navegación / labels | Bebas Neue | `.font-nav` |
| Cuerpo | Roboto | `.font-body`, `.prose-body-normal` |

## Reglas de composición

1. **Hero siempre en fondo claro** (`section-light`) con título mínimo `clamp(4.5rem, 16vw, 11rem)`
2. **Alternar** `section-light` → `section-dark` → `section-light` en cada scroll
3. **Círculos decorativos** mínimo `22rem` en hero — amarillo `#DAA112` o salvia `#809276`
4. **Brush strokes** entre secciones en amarillo o salvia
5. **No usar** rosa/morado de la paleta anterior
6. En secciones oscuras (teal): texto blanco, botones `btn-pill-light` o `btn-pill-accent`
7. En secciones claras: texto teal `#10383A`, botones `btn-pill-dark` o `btn-pill-outline`

## Despliegue

Tras cambios visuales, siempre ejecutar:
```bash
bash scripts/deploy.sh
git add -A && git commit -m "Deploy site [skip ci]" && git push
```

GitHub Pages usa modo legacy (archivos en raíz de `master`). El commit `[skip ci]` evita bucles en CI.
