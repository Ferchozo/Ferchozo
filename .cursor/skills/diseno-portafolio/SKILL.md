# Skill: Diseño editorial portafolio (estilo INKY)

Usar este skill cuando el usuario pida cambios visuales, rediseño, o mejoras de UI/UX en el sitio portafolio de Fernando Hidalgo.

## Referencia visual

Estilo editorial inspirado en INKY Tattoo Studio:
- Secciones que **alternan fondo claro y negro** (impacto visual al hacer scroll)
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
| `ink-black` | `#0a0a0a` | Fondos oscuros, texto en secciones claras |
| `ink-white` | `#f5f2eb` | Fondos claros (crema, no blanco puro) |
| `brand-pink` | `#ff4081` | Círculos, títulos, acentos primarios |
| `brand-purple` | `#6200ea` | Acentos secundarios, círculos alternos |
| `brand-muted` | `#6b6b6b` | Texto secundario en secciones claras |

## Tipografía

| Rol | Fuente | Clase CSS |
|-----|--------|-----------|
| Display / títulos hero | Rubik Wet Paint | `.title-hero`, `.title-display` |
| Navegación / labels | Bebas Neue | `.font-nav` |
| Cuerpo | Roboto | `.font-body`, `.prose-body-normal` |

## Reglas de composición

1. **Hero siempre en fondo claro** (`section-light`) con título mínimo `clamp(4.5rem, 16vw, 11rem)`
2. **Alternar** `section-light` → `section-dark` → `section-light` en cada scroll
3. **Círculos decorativos** mínimo `22rem` en hero, color sólido (sin gradiente)
4. **Brush strokes** entre secciones con SVG en rosa o morado
5. **No usar** solo variaciones de gris oscuro — el contraste claro/negro es obligatorio
6. En secciones oscuras: texto blanco, botones `btn-pill-light` o `btn-pill-accent`
7. En secciones claras: texto negro, botones `btn-pill-dark` o `btn-pill-outline`

## Componentes del proyecto

- `src/components/BrushStroke.tsx` — trazos decorativos
- `src/components/HeroImage.tsx` — foto con círculo detrás
- `src/components/SectionTitle.tsx` — títulos display
- `src/app/globals.css` — tokens y clases utilitarias

## Despliegue

Tras cambios visuales, siempre ejecutar:
```bash
bash scripts/deploy.sh
git add -A && git commit -m "Deploy site [skip ci]" && git push
```

GitHub Pages usa modo legacy (archivos en raíz de `master`). El commit `[skip ci]` evita bucles en CI.

## Anti-patrones (evitar)

- Fondos todos del mismo tono oscuro (#1c1c1c, #252525) — no hay contraste
- Títulos pequeños (< 3rem en hero)
- Círculos pequeños o con gradiente suave
- Cambiar la paleta rosa/morado sin consultar al usuario
