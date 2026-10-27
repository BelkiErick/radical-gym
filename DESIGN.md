# Radical Gym — refinamiento visual

Mantener marca naranja/violeta, fotos propias, membresía USD 30/mes y camisetas USD 15. Sitio estático existente, sin migración de plataforma.

UI/UX Pro Max: recomendaciones de fitness/dark mode, accesibilidad táctil y navegación responsive. Objetivos de toque de 44 px, foco visible, contraste y movimiento reducido.

Referencias de interacción de 21st.dev, reimplementadas en HTML/CSS/JS sin copiar código de componentes ni incorporar dependencias React:
- https://21st.dev/community/components/explore/floating-navigation-bar
- https://docs.21st.dev/@jahed/components/spotlight-card
- https://21st.dev/community/components/explore/spotlight-buttons

Cambios: barra flotante y sección activa, portada tipográfica y pase mensual, progreso de lectura, luz discreta en membresía, dos productos únicos y galería Diseño/En movimiento, bloque editorial de ropa, CTA móvil contextual, cinta pausable, tarjetas de FAQ y contacto.

Validación: sintaxis JS, controles con teclado, galería original y Halloween, menú móvil, anchos 320/768/1024/1440, imágenes y ausencia de desbordamiento. Publicar conservando audiencia privada.

## Adaptación de referencia — 2026-10-27

Se eliminan la navegación flotante, el progreso fijo y el CTA móvil fijo. La portada usa composición de 120svh, texto sticky, título RADICAL en cuatro capas, personaje de la referencia y desplazamiento horizontal de palabras ligado al scroll. Marquee blanco de 18 segundos con cuatro copias y pausa accesible. Colores de capas adaptados a violeta Radical; fondo naranja de la referencia. Se conserva la tecnología estática y el contenido existente del gimnasio, porque se pidió acoplar el diseño a la web.

Recursos proporcionados en la referencia del usuario:
- Personaje: https://motionsites.org/assets/prompt-media/5beca75a42bb5e535db3.webp
- Bamboly Demo: https://motionsites.org/assets/prompt-media/c2d5cb94eece9bbb06e2.woff2

Verificación: 320, 390, 768 y 1440 px sin overflow; título único y dentro del viewport; fuente y personaje cargados; ficha de producto y pausa funcionan; sin errores de consola. La ilustración es decorativa y no representa instalaciones ni personal del gimnasio.

## Retrato del dueño

Se sustituye el personaje ilustrado de referencia por `assets/radical-owner.png`, generado a partir de la foto facilitada por el usuario. Fondo transparente y acabado 3D sutil; tamaño ajustado a escritorio y móvil. El original de la foto no se publica. Verificación visual a 1440 y 390 px, sin desbordamiento.
