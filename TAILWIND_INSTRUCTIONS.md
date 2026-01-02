Tailwind integration for this Vite + React project

This project currently uses plain CSS. The new components under
`src/components` use Tailwind utility classes. To enable Tailwind:

1) Install Tailwind and peer deps

   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

2) Configure `tailwind.config.cjs` (created by the init command) to scan your files:

   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,jsx,ts,tsx}"
     ],
     theme: { extend: {} },
     plugins: [],
   }

3) In `src/main.jsx` or the top-level CSS file, add the Tailwind directives. Create
   `src/index.css` and import it from `main.jsx` (or add to existing `styles.css`):

   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   /* Move any existing global CSS into a new file or keep it, but Tailwind must be
      processed by PostCSS. */

4) Update `main.jsx` to import the CSS (example):

   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App'
   import './index.css'

   ReactDOM.createRoot(document.getElementById('root')).render(<App />)

5) Restart the dev server.

Notes
- The components added are structure-only and rely on Tailwind utility classes. If you prefer not to install Tailwind, I can convert the components to use the existing CSS system.
- After installing Tailwind, you may remove or adapt conflicting styles in `src/styles.css`.

If you'd like, I can:
- Install Tailwind in the repo and wire up configs for you now, or
- Convert the new components to use the project's existing CSS instead.

Tell me which option you prefer.