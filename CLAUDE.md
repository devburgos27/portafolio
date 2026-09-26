# CLAUDE.md — Portafolio de Benjamín Burgos Navarrete

> **REGLA PERMANENTE:** Al terminar cualquier tarea que cambie el proyecto, actualiza este archivo: mueve ítems entre Hecho/En progreso/Pendiente, agrega la decisión si hubo una, y añade una línea al Registro de cambios. Mantén el archivo conciso; si una sección crece mucho, resúmela.

## Resumen del proyecto

- **Qué es:** portafolio web personal de una sola página.
- **Para quién:** reclutadores.
- **Objetivo:** conseguir el primer trabajo como desarrollador.
- **Publicación:** Vercel en https://portafolio-alpha-one-11.vercel.app/ (dominio propio **Por confirmar**).

## Stack y comandos

- HTML + CSS + JavaScript puro (vanilla), sin frameworks, sin dependencias y sin paso de build. Se mantiene así por ahora.
- Fuentes de Google Fonts: Cinzel e Inter.
- **Instalar:** no hace falta.
- **Dev:** abrir `index.html` en el navegador o servir la carpeta con cualquier servidor estático (por ejemplo `npx serve .`).
- **Build:** no hay.
- **Deploy:** Vercel como sitio estático, conectado al repo `github.com/devburgos27/portafolio` (rama `main`). Preset "Other", sin comando de build y con la raíz del repo como directorio de salida; no hace falta `vercel.json`. Cada push a `main` publica; cada rama recibe su propia vista previa. URL: https://portafolio-alpha-one-11.vercel.app/

## Estructura del proyecto

```
index.html   Todo el contenido: hero, sobre mí, habilidades, proyectos, experiencia, educación, contacto
style.css    Tema completo; variables en :root, bloques separados por comentarios "/* ---------- X ---------- */"
script.js    Funciones IIFE: brasas en canvas, texto tipeado, nav lateral activa, botón volver arriba
assets/      CV en PDF, favicon.svg, apple-touch-icon.png y og-image.png (1200×630)
favicon.ico  Favicon en la raíz (evita el 404 de /favicon.ico)
CLAUDE.md    Este archivo
.gitignore   Ignora .vercel/, .env, archivos del SO/editor y node_modules/
```

## Convenciones

- **Idioma:** contenido, comentarios y commits en español. Versión en inglés a futuro.
- **Identidad visual (mantener):** "Console UI" neumórfico (referencias de Pinterest) + gótico oscuro con rosa (inspirado en Ado). Paleta oscura con acentos azules, definida con variables en `:root`. No introducir colores sueltos: usar o agregar variables.
- **CSS:** clases en kebab-case (`project-card`, `tech-tag`, `status-panel`); los modificadores de estado van como clases (`status-live`, `status-dev`, `active`, `visible`).
- **JS:** cada funcionalidad en una IIFE con nombre y encabezado numerado. Respetar `prefersReducedMotion` en toda animación nueva.
- **Tarjetas de proyecto:** `article.project-card` con h3, descripción, `.tech-tags`, botón `.btn` y un `.control-details` que solo contiene el estado en `.status-panel` (`status-live` "En línea" / `status-dev` "En desarrollo"). Si todavía no hay enlace, usar `<span class="btn btn-disabled">Enlace próximamente</span>`. Todo enlace externo lleva `target="_blank" rel="noopener"`. Los proyectos en desarrollo muestran la etiqueta "En desarrollo".
- **Accesibilidad:** elementos decorativos con `aria-hidden="true"` (incluidos los `❦` de los h2 y los íconos de contacto); foco visible, enlace "Saltar al contenido", `<main id="contenido">`, clase `.visually-hidden` y soporte de movimiento reducido. Los enlaces del riel llevan su texto en `.rail-label`.
- **Textos:** sin inventar logros ni cifras; lo que falte se marca con un comentario `<!-- ...: Por confirmar -->` en el HTML, no en el texto visible.

## Estado actual

**Hecho**
- Estructura de una página con 7 secciones y navegación lateral.
- Tema visual completo, responsive (cortes en 900px y 600px), soporte de movimiento reducido.
- Tarjetas de Arte Xebi, Ruta Viva, PokeTracker y Sistema de Biblioteca; experiencia (Cpexity y Museo y Memoria Neltume); educación; contacto (correo, teléfono, LinkedIn, GitHub).
- Prioridad 1 (inconsistencias): ubicación unificada en Temuco, enlace de Ruta Viva corregido, etiqueta WordPress quitada de Arte Xebi y variable sin usar borrada de `script.js`.
- Prioridad 2 (proyectos): nueva descripción de Ruta Viva, tarjetas de PokeTracker y Biblioteca, estrellas eliminadas (HTML y CSS) y etiqueta "En desarrollo" en los 3 proyectos en curso.
- Prioridad 4: hero con "Descargar CV" y "Contactar" y línea de disponibilidad; CV en `assets/`; "Sobre mí", proyectos y experiencia reescritos con datos reales.
- Prioridad 6: favicon (SVG, ICO y apple-touch-icon), Open Graph con URL absoluta, `og:url`, `canonical` y `theme-color`.
- Accesibilidad rápida de la auditoría: `aria-hidden` en adornos, texto accesible y contraste 3.47:1 en el riel, `<main>`, enlace para saltar al contenido, rol del hero en el HTML, Cinzel Decorative y controles falsos `◀◀ ▶ ▮▮` eliminados, scroll `passive`.

- Prioridad 3: publicado en Vercel (2026-09-26).

**En progreso**
- Rediseño (dirección B) en la rama `rediseno`, pendiente de comparar con `main` antes de decidir.

**Pendiente**: ver Próximos pasos.

**Problemas conocidos**
- PokeTracker: enlace **Por confirmar** (muestra el botón deshabilitado "Enlace próximamente").
- Sistema de Biblioteca: tecnologías y enlace **Por confirmar**. El CV dice Angular y MongoDB; falta confirmar que es el mismo proyecto.
- Cpexity: tecnologías y tareas concretas **Por confirmar** (hoy dice solo "Desarrollo de aplicaciones como parte del equipo").
- El CV en PDF dice "Neltume, Chile"; el sitio dice Temuco. Hay que actualizar el PDF.
- Pendientes de la auditoría del 2026-09-26:
  - Medio: bajo 900px no hay navegación (el riel se oculta).
  - Medio: los proyectos no tienen capturas (prioridad 5).
  - Bajo: el canvas crea 60 gradientes por cuadro sin pausa; textos de 11 a 12px (tech-tags, estados); la cuarta tarjeta queda sola en la fila en escritorio.

## Próximos pasos (en orden de prioridad)

1. ~~Corregir inconsistencias~~ (hecho el 2026-09-26).
2. ~~Agregar PokeTracker y Biblioteca, quitar estrellas, etiquetas "En desarrollo"~~ (hecho el 2026-09-26; faltan tecnologías y enlaces, ver Problemas conocidos).
3. ~~Publicar en Vercel con la URL gratuita~~ (hecho el 2026-09-26).
4. ~~Contacto claro y CV descargable en PDF~~ (hecho el 2026-09-26).
5. Capturas de cada proyecto.
6. ~~Favicon y etiquetas Open Graph~~ (hecho el 2026-09-26).
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

- **2026-09-26:** sitio publicado en https://portafolio-alpha-one-11.vercel.app/; Open Graph con URL absoluta, `og:url` y `canonical`; se quita "Console UI adaptation" del pie.
- **2026-09-26:** puntos 1 a 4 de la auditoría en `main`: CTA y disponibilidad en el hero, CV descargable, textos reescritos con datos reales, favicon, Open Graph y correcciones de accesibilidad.
- **2026-09-26:** auditoría completa (accesibilidad, responsivo, rendimiento, SEO, código y contenido); los hallazgos quedan en Problemas conocidos. No se cambió código.
- **2026-09-26:** se preparan el `.gitignore` y la documentación para el deploy en Vercel; se ajusta la descripción de Arte Xebi y se agregan las tecnologías de PokeTracker.
- **2026-09-26:** se agregan PokeTracker y Sistema de Biblioteca, se cambia la descripción de Ruta Viva, se quitan las estrellas y se agregan las etiquetas "En desarrollo".
- **2026-09-26:** se corrigen inconsistencias: ubicación en Temuco, enlace de Ruta Viva, etiquetas de Arte Xebi y variable sin usar en script.js.
- **2026-09-26:** se crea CLAUDE.md con la documentación inicial del proyecto.
- **2026-09-15 (commit `77ddeeb`):** primer commit del portafolio (index.html, style.css, script.js).
