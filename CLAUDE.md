# CLAUDE.md — Portafolio de Benjamín Burgos Navarrete

> **REGLA PERMANENTE:** Al terminar cualquier tarea que cambie el proyecto, actualiza este archivo: mueve ítems entre Hecho/En progreso/Pendiente, agrega la decisión si hubo una, y añade una línea al Registro de cambios. Mantén el archivo conciso; si una sección crece mucho, resúmela.

> **Rama `rediseno`:** aquí vive la dirección B ("editorial oscuro") para compararla con `main`. Si se descarta, `main` conserva el diseño Console UI.

## Resumen del proyecto

- **Qué es:** portafolio web personal de una sola página.
- **Para quién:** reclutadores.
- **Objetivo:** conseguir el primer trabajo como desarrollador.
- **Publicación:** Vercel (primero la URL gratuita; dominio propio **Por confirmar**).

## Stack y comandos

- HTML + CSS + JavaScript puro (vanilla), sin frameworks, sin dependencias y sin paso de build. Se mantiene así por ahora.
- Fuentes de Google Fonts: Cinzel (solo el nombre), Geist (texto) y Geist Mono (etiquetas, fechas y estados).
- **Instalar:** no hace falta.
- **Dev:** abrir `index.html` en el navegador o servir la carpeta con cualquier servidor estático (por ejemplo `npx serve .`).
- **Build:** no hay.
- **Deploy:** Vercel como sitio estático, conectado al repo `github.com/devburgos27/portafolio` (rama `main`). Preset "Other", sin comando de build y con la raíz del repo como directorio de salida; no hace falta `vercel.json`. Cada push a `main` publica. URL: **Por confirmar** (se anota cuando esté publicado).

## Estructura del proyecto

```
index.html   Todo el contenido: cabecera fija, hero, sobre mí, proyectos, habilidades, trayectoria (experiencia y educación), contacto
style.css    Tema completo; tokens semánticos en :root, bloques separados por comentarios "/* ---------- X ---------- */"
script.js    Una IIFE: navegación activa por sección (clase active + aria-current)
assets/      CV en PDF, favicon.svg, apple-touch-icon.png, og-image.png (1200×630) y proyectos/ (capturas en WebP)
favicon.ico  Favicon en la raíz (evita el 404 de /favicon.ico)
CLAUDE.md    Este archivo
.gitignore   Ignora .vercel/, .env, archivos del SO/editor y node_modules/
```

## Convenciones

- **Idioma:** contenido, comentarios y commits en español. Versión en inglés a futuro.
- **Identidad visual (rama `rediseno`):** editorial oscuro. Se mantienen el fondo oscuro con retícula de puntos y la rosa azul (inspirada en Ado) como marca; un solo acento (`--accent`, el azul de la rosa). Sin caja de consola, relieves neumórficos, brasas ni brillos. No introducir colores sueltos: usar o agregar tokens en `:root`.
- **Forma:** controles y bloques con `--radius` (10px), etiquetas con `--radius-sm` (6px). Controles de al menos 44px de alto; bordes de controles con `--line-strong` (3.47:1).
- **CSS:** clases en kebab-case (`project-card`, `tech-tag`, `status-panel`); los modificadores de estado van como clases (`status-live`, `status-dev`, `active`, `visible`).
- **JS:** cada funcionalidad en una IIFE con nombre y encabezado numerado. Respetar `prefersReducedMotion` en toda animación nueva.
- **Proyectos:** el proyecto en línea va en `article.project-featured` con captura (`.project-shot`, WebP con `width`/`height` y `alt`). Los demás van como `article.project-row` dentro de `ul.project-list`: `.project-head` (h3 + `.status`), descripción y `.project-meta` (`ul.tech-tags` + enlace `.link`). Estados: `status-live` "En línea" / `status-dev` "En desarrollo". Sin enlace: `<span class="link link-disabled">Enlace próximamente</span>`. Todo enlace externo lleva `target="_blank" rel="noopener"`. Los proyectos en desarrollo muestran la etiqueta "En desarrollo".
- **Accesibilidad:** elementos decorativos con `aria-hidden="true"`; foco visible, enlace "Saltar al contenido", `<main id="contenido">`, cada sección con `aria-labelledby` y soporte de movimiento reducido. Bajo 520px el nombre de la marca se oculta visualmente pero sigue siendo el texto del enlace.
- **Textos:** sin inventar logros ni cifras; lo que falte se marca con un comentario `<!-- ...: Por confirmar -->` en el HTML, no en el texto visible.

## Estado actual

**Hecho**
- Estructura de una página con 7 secciones y navegación lateral.
- Tema visual completo, responsive (cortes en 900px y 600px), soporte de movimiento reducido.
- Tarjetas de Arte Xebi, Ruta Viva, PokeTracker y Sistema de Biblioteca; experiencia (Cpexity y Museo y Memoria Neltume); educación; contacto (correo, teléfono, LinkedIn, GitHub).
- Prioridad 1 (inconsistencias): ubicación unificada en Temuco, enlace de Ruta Viva corregido, etiqueta WordPress quitada de Arte Xebi y variable sin usar borrada de `script.js`.
- Prioridad 2 (proyectos): nueva descripción de Ruta Viva, tarjetas de PokeTracker y Biblioteca, estrellas eliminadas (HTML y CSS) y etiqueta "En desarrollo" en los 3 proyectos en curso.
- Prioridad 4: hero con "Descargar CV" y "Contactar" y línea de disponibilidad; CV en `assets/`; "Sobre mí", proyectos y experiencia reescritos con datos reales.
- Prioridad 6: favicon (SVG, ICO y apple-touch-icon), Open Graph y `theme-color` (falta la URL absoluta, ver Problemas conocidos).
- Accesibilidad rápida de la auditoría: `aria-hidden` en adornos, texto accesible y contraste 3.47:1 en el riel, `<main>`, enlace para saltar al contenido, rol del hero en el HTML, Cinzel Decorative y controles falsos `◀◀ ▶ ▮▮` eliminados, scroll `passive`.

**En progreso**
- Prioridad 3: el repo ya está listo para Vercel (con `.gitignore`). Commits subidos a GitHub (2026-09-26). Falta crear el proyecto en Vercel y anotar la URL.

**Pendiente**: ver Próximos pasos.

**Problemas conocidos**
- PokeTracker: enlace **Por confirmar** (muestra el botón deshabilitado "Enlace próximamente").
- Sistema de Biblioteca: tecnologías y enlace **Por confirmar**. El CV dice Angular y MongoDB; falta confirmar que es el mismo proyecto.
- Cpexity: tecnologías y tareas concretas **Por confirmar** (hoy dice solo "Desarrollo de aplicaciones como parte del equipo").
- El CV en PDF dice "Neltume, Chile"; el sitio dice Temuco. Hay que actualizar el PDF.
- Open Graph usa rutas relativas (`assets/og-image.png`); al tener la URL de Vercel hay que cambiarlas a absolutas y agregar `og:url`.
- Solo Arte Xebi tiene captura; los proyectos en desarrollo no tienen una (prioridad 5).
- En la rama `rediseno` quedan resueltos los pendientes de la auditoría: navegación en todos los anchos, sin canvas, textos de al menos 12.8px, sin tarjeta huérfana y pie sin "Console UI adaptation".

## Próximos pasos (en orden de prioridad)

1. ~~Corregir inconsistencias~~ (hecho el 2026-09-26).
2. ~~Agregar PokeTracker y Biblioteca, quitar estrellas, etiquetas "En desarrollo"~~ (hecho el 2026-09-26; faltan tecnologías y enlaces, ver Problemas conocidos).
3. Publicar en Vercel con la URL gratuita. *(En progreso: faltan los pasos manuales en GitHub y Vercel.)*
4. ~~Contacto claro y CV descargable en PDF~~ (hecho el 2026-09-26).
5. Capturas de cada proyecto.
6. ~~Favicon y etiquetas Open Graph~~ (hecho el 2026-09-26; falta pasar a URL absoluta).
7. README en los repos de cada proyecto (*fuera de este repo, solo como recordatorio*).
8. Conectar dominio propio (**Por confirmar** cuál).
9. Versión en inglés.

## Decisiones tomadas

- **2026-09-26:** mantener HTML/CSS/JS puro, sin framework ni build. Motivo: sitio simple, fácil de publicar en Vercel.
- **2026-09-26:** hosting en Vercel; primero la URL gratuita y después el dominio propio. Motivo: publicar cuanto antes.
- **2026-09-26:** mantener la identidad visual Console UI + gótico/rosa. Motivo: estilo personal elegido.
- **2026-09-26:** quitar las estrellas de las tarjetas. Motivo: eran decorativas y podían leerse como una calificación.
- **2026-09-26:** contenido solo en español por ahora. Motivo: la versión en inglés queda como prioridad 9.
- **2026-09-26:** la ubicación oficial es Temuco. Motivo: lo confirmó el dueño del portafolio.
- **2026-09-26:** las etiquetas de Arte Xebi quedan en HTML5, CSS3 y JavaScript. Motivo: el sitio publicado es estático y no usa WordPress.
- **2026-09-26:** el estado de cada proyecto se muestra solo en `.status-panel` ("En línea" / "En desarrollo"), sin el "(en desarrollo)" que había en el título. Motivo: evitar mostrar la misma etiqueta dos veces.
- **2026-09-26:** las etiquetas de PokeTracker son HTML5, CSS3, JavaScript, Supabase y Pokémon TCG API. Motivo: resumir su stack (JS vanilla con módulos ES; Supabase con PostgreSQL, Auth por enlace mágico y RLS; datos de pokemontcg.io, con TCGdex como respaldo).
- **2026-09-26:** deploy en Vercel sin `vercel.json` ni build. Motivo: es un sitio estático y Vercel lo sirve tal cual.
- **2026-09-26:** quitar los controles `◀◀ ▶ ▮▮` de las tarjetas. Motivo: parecían botones y no hacían nada.
- **2026-09-26:** el CV vive en `assets/CV-Benjamin-Burgos-Navarrete.pdf` y se enlaza con `download` desde el hero. Motivo: nombre estable y sin número de versión.
- **2026-09-26:** el rediseño (dirección B, "editorial oscuro") se trabaja en la rama `rediseno` para compararlo con `main` antes de decidir.
- **2026-09-26:** los proyectos sin enlace muestran un botón deshabilitado (`.btn-disabled`) en lugar de quitarlo. Motivo: mantener todas las tarjetas con la misma estructura.

## Registro de cambios

- **2026-09-26 (rama `rediseno`):** dirección B "editorial oscuro": cabecera fija con navegación, hero alineado a la izquierda con la rosa, datos clave en "Sobre mí", Arte Xebi destacado con captura, habilidades agrupadas, trayectoria en dos columnas y contacto con el correo grande. Se quitan canvas, texto tipeado, riel y botón volver arriba.
- **2026-09-26:** puntos 1 a 4 de la auditoría en `main`: CTA y disponibilidad en el hero, CV descargable, textos reescritos con datos reales, favicon, Open Graph y correcciones de accesibilidad.
- **2026-09-26:** auditoría completa (accesibilidad, responsivo, rendimiento, SEO, código y contenido); los hallazgos quedan en Problemas conocidos. No se cambió código.
- **2026-09-26:** se preparan el `.gitignore` y la documentación para el deploy en Vercel; se ajusta la descripción de Arte Xebi y se agregan las tecnologías de PokeTracker.
- **2026-09-26:** se agregan PokeTracker y Sistema de Biblioteca, se cambia la descripción de Ruta Viva, se quitan las estrellas y se agregan las etiquetas "En desarrollo".
- **2026-09-26:** se corrigen inconsistencias: ubicación en Temuco, enlace de Ruta Viva, etiquetas de Arte Xebi y variable sin usar en script.js.
- **2026-09-26:** se crea CLAUDE.md con la documentación inicial del proyecto.
- **2026-09-15 (commit `77ddeeb`):** primer commit del portafolio (index.html, style.css, script.js).
