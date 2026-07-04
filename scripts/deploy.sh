#!/bin/bash
set -euo pipefail

# Build y copia el sitio estático a la raíz del repo (compatible con GitHub Pages legacy)
npm run build:pages

# Copiar archivos del build sin sobrescribir código fuente
shopt -s dotglob
for item in out/*; do
  name=$(basename "$item")
  case "$name" in
    .git|.github|node_modules|src|public|out|package.json|package-lock.json|next.config.ts|tsconfig.json|postcss.config.mjs|README.md|.gitignore|scripts)
      continue
      ;;
  esac
  rm -rf "$name" 2>/dev/null || true
  cp -r "$item" "./$name"
done

echo "✓ Deploy listo en raíz del repo"
