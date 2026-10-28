# Radical Gym

Web estática de Radical Gym (Pifo), en HTML, CSS y JavaScript. No requiere instalar paquetes ni compilar.

## Vista local

Desde esta carpeta, ejecutar `node serve.mjs` y abrir http://127.0.0.1:4173.

## Archivos

- `dist/`: web completa lista para publicar, incluidas imágenes y fuentes locales.
- `serve.mjs`: servidor para la vista previa local.
- `DESIGN.md`: contenido y referencias del diseño actual.

## Publicación futura

Publicar el contenido de `dist/` en un alojamiento de archivos estáticos.
Para importarlo en Vercel: usar esta carpeta como raíz del proyecto, seleccionar Other como framework, dejar vacío el comando de compilación y establecer `dist` como directorio de salida. No necesita variables de entorno ni dependencias.

## Contenido

Membresía: USD 30/mes. Camisetas: USD 15/unidad. Consultas mediante Instagram, sin procesamiento de pagos en la web. Tallas y disponibilidad se confirman con la marca.

Fotos y diseños: Radical Club / Radical Apparel. Retrato de portada generado a partir de la foto facilitada por el usuario.

## Comprobaciones

Ejecutar `node --check dist/app.js` y `node --check dist/reference.js`. Revisar vista móvil, fichas de producto, pausa de la cinta, precios y enlaces.

## GitHub y GitHub Pages

Repositorio: https://github.com/BelkiErick/radical-gym
Web: https://belkierick.github.io/radical-gym/

El código completo está en `main`; GitHub Pages publica la raíz de `gh-pages`, que contiene solo `dist/`.
Después de guardar los cambios en un commit, actualizar con:

```bash
git push origin main
git subtree push --prefix dist origin gh-pages
```
