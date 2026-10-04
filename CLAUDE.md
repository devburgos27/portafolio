# CLAUDE.md — Portafolio de Benjamín Burgos Navarrete

> **REGLA PERMANENTE:** Al terminar cualquier tarea que cambie el proyecto, actualiza este archivo: mueve ítems entre Hecho/En progreso/Pendiente, agrega la decisión si hubo una, y añade una línea al Registro de cambios. Mantén el archivo conciso; si una sección crece mucho, resúmela. El commit lo hace el dueño, no Claude.
>
> **Nunca hagas commit ni push.** Cuando termines un cambio, dime qué archivos cambiaste y sugiéreme un mensaje de commit.

## Resumen del proyecto

- **Qué es:** portafolio web personal de una sola página.
- **Para quién:** reclutadores.
- **Objetivo:** conseguir el primer trabajo como desarrollador.
- **Publicación:** Vercel en https://portafolio-alpha-one-11.vercel.app/ (dominio propio **Por confirmar**).

## Stack y comandos

- HTML + CSS + JavaScript puro (vanilla), sin frameworks, sin dependencias y sin paso de build. Se mantiene así por ahora.
- Fuentes de Google Fonts: Cinzel (solo el nombre), Geist (texto) y Geist Mono (etiquetas, fechas y estados).
- **Instalar:** no hace falta.
- **Dev:** abrir `index.html` en el navegador o servir la carpeta con cualquier servidor estático (por ejemplo `npx serve .`).
- **Build:** no hay.
- **Deploy:** Vercel como sitio estático, conectado al repo `github.com/devburgos27/portafolio` (rama `main`). Preset "Other", sin comando de build y con la raíz del repo como directorio de salida; no hace falta `vercel.json`. Cada push a `main` publica; cada rama recibe su propia vista previa. URL: https://portafolio-alpha-one-11.vercel.app/

## Estructura del proyecto

```
index.html   Todo el contenido: cabecera fija, hero, sobre mí, proyectos, habilidades, trayectoria (experiencia y educación), Goblin Tech (servicios freelance), contacto y pie
style.css    Tema completo; tokens semánticos en :root, bloques separados por comentarios "/* ---------- X ---------- */"
script.js    Una IIFE: navegación activa por sección (clase active + aria-current)
assets/      CV en PDF, favicon.svg, apple-touch-icon.png, og-image.png (1200×630), goblin-tech.webp (marca de Goblin Tech) y proyectos/ (capturas en WebP)
favicon.ico  Favicon en la raíz (evita el 404 de /favicon.ico)
CLAUDE.md    Este archivo
.gitignore   Ignora .vercel/, .env, archivos del SO/editor y node_modules/
```

## Convenciones

- **Idioma:** contenido, comentarios y commits en español. Versión en inglés a futuro.
- **Commits:** sin atribución de ningún tipo (ni `Co-Authored-By` ni "Generated with…"). El único autor es devburgos27.
- **Identidad visual:** editorial oscuro. Fondo oscuro con retícula de puntos y la rosa azul (inspirada en Ado) como marca; un solo acento (`--accent`, el azul de la rosa). Sin caja de consola, relieves neumórficos, brasas ni brillos. No introducir colores sueltos: usar o agregar tokens en `:root`.
- **Forma:** controles y bloques con `--radius` (10px), etiquetas con `--radius-sm` (6px). Controles de al menos 44px de alto; bordes de controles con `--line-strong` (3.47:1).
- **CSS:** clases en kebab-case (`project-row`, `tech-tags`, `skill-group`); los modificadores de estado van como clases (`status-live`, `status-dev`, `active`, `link-disabled`). Cortes responsivos en 900px, 700px y 520px.
- **JS:** cada funcionalidad en una IIFE con nombre y encabezado numerado. Respetar `prefers-reduced-motion` en toda animación nueva.
- **Proyectos:** los proyectos en línea van en `article.project-featured` con captura (`.project-shot`, WebP de 1200×500 con `width`/`height` y `alt`; si hay vista de escritorio y de móvil, van lado a lado sobre fondo `--surface-raised`); si tienen sitio y repo, los dos enlaces van en `.project-links` (`.btn` "Ver proyecto" + `.link` "Ver repositorio"). Los demás van como `article.project-row` dentro de `ul.project-list`: `.project-head` (h3 + `.status`), descripción y `.project-meta` (`ul.tech-tags` + enlace `.link`). Estados: `status-live` "En línea" / `status-dev` "En desarrollo". Sin enlace: `<span class="link link-disabled">Enlace próximamente</span>`. Todo enlace externo lleva `target="_blank" rel="noopener"`.
- **Goblin Tech:** sección `#goblin-tech` con `.freelance-head` (logo `.freelance-logo` + `.eyebrow` + nombre en Cinzel `.freelance-name`) y `.service-card` con `ul.service-list` (solo nombres de servicios, sin precios). El verde del logo es parte de la imagen de la marca; no se lleva a los tokens.
- **Accesibilidad:** elementos decorativos con `aria-hidden="true"`; foco visible, enlace "Saltar al contenido", `<main id="contenido">`, cada sección con `aria-labelledby` y soporte de movimiento reducido. Bajo 520px el nombre de la marca se oculta visualmente pero sigue siendo el texto del enlace.
- **Textos:** sin inventar logros ni cifras; lo que falte se marca con un comentario `<!-- ...: Por confirmar -->` en el HTML, no en el texto visible.

## Estado actual

**Hecho**
- Página única con cabecera fija y 7 secciones (hero, sobre mí, proyectos, habilidades, trayectoria, Goblin Tech, contacto), diseño editorial oscuro, responsive y con movimiento reducido.
- Prioridades 1 y 2: inconsistencias corregidas (ubicación en Temuco, enlaces, etiquetas) y tarjetas de los 4 proyectos con estado "En línea" / "En desarrollo".
- Prioridad 3: publicado en Vercel (2026-09-26).
- PokeTracker v1 en línea y destacado con captura, sitio y repo (2026-09-26).
- Prioridad 4: "Descargar CV" y "Contactar" en el hero; CV en `assets/`; textos reescritos con datos reales; datos clave (ubicación, disponibilidad, modalidad, inglés) en "Sobre mí".
- Prioridad 6: favicon (SVG, ICO y apple-touch-icon), Open Graph con URL absoluta, `og:url`, `canonical` y `theme-color`.
- Auditoría del 2026-09-26 resuelta: CTA en el hero, navegación en todos los anchos, contraste AA, textos de al menos 12.8px, sin canvas ni controles falsos, sin tarjeta huérfana, pie limpio.
- PokeTracker actualizado: captura compuesta escritorio + móvil, descripción y tecnologías nuevas (2026-10-04).
- Marca freelance Goblin Tech: sección con logo y servicios, botón "Ver precios y contacto en Facebook", entrada "Fundador" en Trayectoria (Sept 2026 a la fecha) y línea en el pie (2026-10-03).

**En progreso**
- Nada por ahora.

**Pendiente**: ver Próximos pasos.

**Problemas conocidos**
- Sistema de Biblioteca: tecnologías y enlace **Por confirmar**. El CV dice Angular y MongoDB; falta confirmar que es el mismo proyecto.
- Cpexity: tecnologías y tareas concretas **Por confirmar** (hoy dice solo "Desarrollo de aplicaciones como parte del equipo").
- El CV en PDF dice "Neltume, Chile"; el sitio dice Temuco. Hay que actualizar el PDF.
- Ruta Viva y Sistema de Biblioteca no tienen captura (prioridad 5).

## Próximos pasos (en orden de prioridad)

1. ~~Corregir inconsistencias~~ (hecho el 2026-09-26).
2. ~~Agregar PokeTracker y Biblioteca, quitar estrellas, etiquetas "En desarrollo"~~ (hecho el 2026-09-26; faltan tecnologías y enlaces, ver Problemas conocidos).
3. ~~Publicar en Vercel con la URL gratuita~~ (hecho el 2026-09-26).
4. ~~Contacto claro y CV descargable en PDF~~ (hecho el 2026-09-26).
5. Capturas de cada proyecto (Arte Xebi y PokeTracker hechas; faltan Ruta Viva y Sistema de Biblioteca).
6. ~~Favicon y etiquetas Open Graph~~ (hecho el 2026-09-26).
7. README en los repos de cada proyecto (*fuera de este repo, solo como recordatorio*).
8. Conectar dominio propio (**Por confirmar** cuál).
9. Versión en inglés.

## Decisiones tomadas

- **2026-09-26:** Claude nunca hace commit ni push; el dueño los hace a mano (bloqueados también con `permissions.deny` en `~/.claude/settings.json`). Motivo: control total del historial.
- **2026-09-26:** commits sin atribución; hay que reescribir el historial de `main` para quitar `Co-Authored-By` (pendiente, lo hace el dueño). Motivo: el dueño no quiere colaboradores extra en GitHub.
- **2026-09-26:** mantener HTML/CSS/JS puro, sin framework ni build. Motivo: sitio simple, fácil de publicar en Vercel.
- **2026-09-26:** hosting en Vercel; primero la URL gratuita y después el dominio propio. Motivo: publicar cuanto antes.
- **2026-09-26:** ~~mantener la identidad visual Console UI + gótico/rosa~~ (reemplazada por el rediseño, ver más abajo).
- **2026-09-26:** quitar las estrellas de las tarjetas. Motivo: eran decorativas y podían leerse como una calificación.
- **2026-09-26:** contenido solo en español por ahora. Motivo: la versión en inglés queda como prioridad 9.
- **2026-09-26:** la ubicación oficial es Temuco. Motivo: lo confirmó el dueño del portafolio.
- **2026-09-26:** las etiquetas de Arte Xebi quedan en HTML5, CSS3 y JavaScript. Motivo: el sitio publicado es estático y no usa WordPress.
- **2026-09-26:** el estado de cada proyecto se muestra solo en `.status` ("En línea" / "En desarrollo"), no en el título. Motivo: evitar mostrar la misma etiqueta dos veces.
- **2026-09-26:** PokeTracker v1 va destacado, antes de Arte Xebi. Motivo: está en línea y es el proyecto que muestra más stack (login con Google, PostgreSQL con RLS en Supabase, API GraphQL), que es lo que un reclutador busca en un primer puesto de desarrollador; las filas quedan para lo que está en desarrollo.
- **2026-09-26:** ~~las etiquetas de PokeTracker v1 son HTML5, CSS3, JavaScript, Supabase, PostgreSQL, GraphQL, Google OAuth y Vercel~~ (reemplazada el 2026-10-04).
- **2026-10-04:** las etiquetas de PokeTracker son HTML5, CSS3, JavaScript, Bootstrap 5, Supabase, PostgreSQL, GraphQL, Google OAuth, TCGdex API y Vercel. Motivo: stack actual que confirmó el dueño; GraphQL se mantiene porque `js/api.js` del repo consulta la API GraphQL de TCGdex.
- **2026-10-04:** la captura de PokeTracker muestra escritorio y móvil lado a lado. Motivo: deja ver que la app es responsive; como la imagen ya tiene la proporción 12:5 de `.project-shot`, no se recorta en ningún ancho y no hizo falta tocar `object-position`.
- **2026-09-26:** deploy en Vercel sin `vercel.json` ni build. Motivo: es un sitio estático y Vercel lo sirve tal cual.
- **2026-09-26:** quitar los controles `◀◀ ▶ ▮▮` de las tarjetas. Motivo: parecían botones y no hacían nada.
- **2026-09-26:** el CV vive en `assets/CV-Benjamin-Burgos-Navarrete.pdf` y se enlaza con `download` desde el hero y desde Contacto. Motivo: nombre estable y sin número de versión.
- **2026-09-26:** los proyectos sin enlace muestran "Enlace próximamente" (`.link-disabled`) en lugar de quitar el enlace. Motivo: mantener todas las filas con la misma estructura.
- **2026-09-26:** se elige el rediseño "editorial oscuro" (dirección B) sobre la identidad Console UI y se fusiona en `main`. Motivo: en pocos segundos se ve quién es, qué construyó y cómo contactarlo; conserva la rosa azul como marca personal.
- **2026-10-03:** Goblin Tech va como sección propia entre Trayectoria y Contacto, sin enlace en la cabecera. Motivo: el dueño pidió no tocar header, hero ni proyectos; el portafolio sigue enfocado en reclutadores.
- **2026-10-03:** en Trayectoria, Goblin Tech va primero ("Sept 2026 a la fecha") con el formato de las demás entradas (h4 "Fundador" + `.t-org` "Goblin Tech (freelance), Temuco"). Motivo: es un trabajo vigente.
- **2026-10-03:** sin precios en el portafolio; se ven en Facebook. Motivo: lo pidió el dueño; los precios cambian y se actualizan en un solo lugar.
- **2026-10-03:** en el sitio se usa solo la cabeza del goblin, no el logotipo completo. Motivo: el logotipo trae "GOBLIN TECH" escrito y repetiría el nombre que ya está en Cinzel.

## Registro de cambios

- **2026-10-04:** PokeTracker con captura compuesta (escritorio y móvil, `assets/proyectos/poketracker.webp`), descripción nueva (copias físicas, progreso, exportar a Excel, caché, temas, accesibilidad AA), etiquetas Bootstrap 5 y TCGdex API, y texto alternativo nuevo. Revisado en 375, 820 y 1366px sin recortes, sin scroll horizontal ni errores de consola.
- **2026-10-03:** Goblin Tech sin precios en las tarjetas (botón "Ver precios y contacto en Facebook"), logo `assets/goblin-tech.webp` (solo la cabeza del goblin, recortada del logotipo con fondo transparente) junto al nombre e inicio en Sept 2026.
- **2026-10-03:** nueva sección Goblin Tech entre Trayectoria y Contacto (dos tarjetas de servicios con precios "desde", botón a Facebook), entrada "Fundador · Goblin Tech (freelance)" en Experiencia y enlace a la sección en el pie. Revisado en 375, 820 y 1366px sin scroll horizontal ni errores de consola.
- **2026-09-26:** PokeTracker v1 pasa a "En línea" y a tarjeta destacada con captura (`assets/proyectos/poketracker.webp`), enlaces al sitio y al repo, tecnologías finales y descripción nueva; nueva clase `.project-links` y separación entre tarjetas destacadas.
- **2026-09-26:** Claude no hace commit ni push (lo hace el dueño a mano); regla de commits sin atribución; rama local `respaldo-historial` creada antes de quitar las líneas `Co-Authored-By` del historial de `main`.
- **2026-09-26:** nueva `og-image.png` a sangre completa (sin tarjeta): nombre, subtítulo en dos líneas a 48px y "Temuco, Chile", para que se lea en la vista previa de LinkedIn en celular.
- **2026-09-26:** se fusiona la rama `rediseno` en `main` (dirección B "editorial oscuro") junto con Open Graph absoluto, `og:url`, `canonical` y el pie limpio; se borra la rama.
- **2026-09-26:** sitio publicado en https://portafolio-alpha-one-11.vercel.app/; Open Graph con URL absoluta, `og:url` y `canonical`; se quita "Console UI adaptation" del pie.
- **2026-09-26 (rama `rediseno`):** dirección B "editorial oscuro": cabecera fija con navegación, hero alineado a la izquierda con la rosa, datos clave en "Sobre mí", Arte Xebi destacado con captura, habilidades agrupadas, trayectoria en dos columnas y contacto con el correo grande. Se quitan canvas, texto tipeado, riel y botón volver arriba.
- **2026-09-26:** puntos 1 a 4 de la auditoría en `main`: CTA y disponibilidad en el hero, CV descargable, textos reescritos con datos reales, favicon, Open Graph y correcciones de accesibilidad.
- **2026-09-26:** auditoría completa (accesibilidad, responsivo, rendimiento, SEO, código y contenido). No se cambió código.
- **2026-09-26:** se preparan el `.gitignore` y la documentación para el deploy en Vercel; se ajusta la descripción de Arte Xebi y se agregan las tecnologías de PokeTracker.
- **2026-09-26:** se agregan PokeTracker y Sistema de Biblioteca, se cambia la descripción de Ruta Viva, se quitan las estrellas y se agregan las etiquetas "En desarrollo".
- **2026-09-26:** se corrigen inconsistencias: ubicación en Temuco, enlace de Ruta Viva, etiquetas de Arte Xebi y variable sin usar en script.js.
- **2026-09-26:** se crea CLAUDE.md con la documentación inicial del proyecto.
- **2026-09-15 (commit `77ddeeb`):** primer commit del portafolio (index.html, style.css, script.js).
