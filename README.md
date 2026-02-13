# Infografía (HTML + CSS + JS)

Estructura modular para mantener el proyecto escalable:

- `index.html` (punto de entrada)
- `contenido-infografia.html` (contenido principal de la infografía)
- `styles.css`
- `script.js`

Ubicación: `public/infografia/`.

## Cómo subirlo en tu hosting (arroba)

1. Entra al administrador de archivos de tu hosting.
2. Abre la carpeta pública del dominio (normalmente `public_html`).
3. Sube estos archivos desde `public/infografia/`:
   - `index.html`
   - `contenido-infografia.html`
   - `styles.css`
   - `script.js`
4. Verifica que queden en la misma carpeta.
5. Abre tu dominio y limpia caché si no ves cambios.

## Importante

- No necesitas Node.js, npm, ni backend.
- El `index.html` carga el contenido desde `contenido-infografia.html` para organizar mejor el mantenimiento.
