# CLAUDE.md — Portafolio de Benjamín Burgos Navarrete

> **REGLA PERMANENTE:** Al terminar cualquier tarea que cambie el proyecto, actualiza este archivo: mueve ítems entre Hecho/En progreso/Pendiente, agrega la decisión si hubo una, y añade una línea al Registro de cambios. Mantén el archivo conciso; si una sección crece mucho, resúmela.

## Resumen del proyecto

- **Qué es:** portafolio web personal de una sola página.
- **Para quién:** reclutadores.
- **Objetivo:** conseguir el primer trabajo como desarrollador.
- **Publicación:** Vercel (primero la URL gratuita; dominio propio **Por confirmar**).

## Stack y comandos

- HTML + CSS + JavaScript puro (vanilla), sin frameworks, sin dependencias y sin paso de build. Se mantiene así por ahora.
- Fuentes de Google Fonts: Cinzel, Cinzel Decorative e Inter.
- **Instalar:** no hace falta.
- **Dev:** abrir `index.html` en el navegador o servir la carpeta con cualquier servidor estático (por ejemplo `npx serve .`).
- **Build:** no hay.
- **Deploy:** Vercel como sitio estático, conectado al repo `github.com/devburgos27/portafolio` (rama `main`). Preset "Other", sin comando de build y con la raíz del repo como directorio de salida; no hace falta `vercel.json`. Cada push a `main` publica. URL: **Por confirmar** (se anota cuando esté publicado).

## Estructura del proyecto

```
index.html   Todo el contenido: hero, sobre mí, habilidades, proyectos, experiencia, educación, contacto
style.css    Tema completo; variables en :root, bloques separados por comentarios "/* ---------- X ---------- */"
script.js    Funciones IIFE: brasas en canvas, texto tipeado, nav lateral activa, botón volver arriba
CLAUDE.md    Este archivo
.gitignore   Ignora .vercel/, .env, archivos del SO/editor y node_modules/
```

## Convenciones

- **Idioma:** contenido, comentarios y commits en español. Versión en inglés a futuro.
- **Identidad visual (mantener):** "Console UI" neumórfico (referencias de Pinterest) + gótico oscuro con rosa (inspirado en Ado). Paleta oscura con acentos azules, definida con variables en `:root`. No introducir colores sueltos: usar o agregar variables.
- **CSS:** clases en kebab-case (`project-card`, `tech-tag`, `status-panel`); los modificadores de estado van como clases (`status-live`, `status-dev`, `active`, `visible`).
- **JS:** cada funcionalidad en una IIFE con nombre y encabezado numerado. Respetar `prefersReducedMotion` en toda animación nueva.
- **Tarjetas de proyecto:** `article.project-card` con h3, descripción, `.tech-tags`, botón `.btn` y un estado en `.status-panel` (`status-live` "En línea" / `status-dev` "En desarrollo"). Si todavía no hay enlace, usar `<span class="btn btn-disabled">Enlace próximamente</span>`. Todo enlace externo lleva `target="_blank" rel="noopener"`. Los proyectos en desarrollo muestran la etiqueta "En desarrollo".
- **Accesibilidad:** elementos decorativos con `aria-hidden="true"`; foco visible y soporte de movimiento reducido ya implementados.

## Estado actual

**Hecho**
- Estructura de una página con 7 secciones y navegación lateral.
- Tema visual completo, responsive (cortes en 900px y 600px), soporte de movimiento reducido.
- Tarjetas de Arte Xebi, Ruta Viva, PokeTracker y Sistema de Biblioteca; experiencia (Cpexity y Museo y Memoria Neltume); educación; contacto (correo, teléfono, LinkedIn, GitHub).
- Prioridad 1 (inconsistencias): ubicación unificada en Temuco, enlace de Ruta Viva corregido, etiqueta WordPress quitada de Arte Xebi y variable sin usar borrada de `script.js`.
- Prioridad 2 (proyectos): nueva descripción de Ruta Viva, tarjetas de PokeTracker y Biblioteca, estrellas eliminadas (HTML y CSS) y etiqueta "En desarrollo" en los 3 proyectos en curso.

**En progreso**
- Prioridad 3: el repo ya está listo para Vercel (con `.gitignore`). Falta que Benjamín haga push y cree el proyecto en Vercel.

**Pendiente**: ver Próximos pasos.

**Problemas conocidos**
- PokeTracker: enlace **Por confirmar** (muestra el botón deshabilitado "Enlace próximamente").
- Sistema de Biblioteca: tecnologías y enlace **Por confirmar** (sin `.tech-tags` y con el botón deshabilitado).

## Próximos pasos (en orden de prioridad)

1. ~~Corregir inconsistencias~~ (hecho el 2026-09-26).
2. ~~Agregar PokeTracker y Biblioteca, quitar estrellas, etiquetas "En desarrollo"~~ (hecho el 2026-09-26; faltan tecnologías y enlaces, ver Problemas conocidos).
3. Publicar en Vercel con la URL gratuita. *(En progreso: faltan los pasos manuales en GitHub y Vercel.)*
4. Contacto claro (correo, LinkedIn, GitHub) y CV descargable en PDF.
5. Capturas de cada proyecto.
6. Favicon y etiquetas Open Graph.
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
- **2026-09-26:** los proyectos sin enlace muestran un botón deshabilitado (`.btn-disabled`) en lugar de quitarlo. Motivo: mantener todas las tarjetas con la misma estructura.

## Registro de cambios

- **2026-09-26:** se preparan el `.gitignore` y la documentación para el deploy en Vercel; se ajusta la descripción de Arte Xebi y se agregan las tecnologías de PokeTracker.
- **2026-09-26:** se agregan PokeTracker y Sistema de Biblioteca, se cambia la descripción de Ruta Viva, se quitan las estrellas y se agregan las etiquetas "En desarrollo".
- **2026-09-26:** se corrigen inconsistencias: ubicación en Temuco, enlace de Ruta Viva, etiquetas de Arte Xebi y variable sin usar en script.js.
- **2026-09-26:** se crea CLAUDE.md con la documentación inicial del proyecto.
- **2026-09-15 (commit `77ddeeb`):** primer commit del portafolio (index.html, style.css, script.js).
