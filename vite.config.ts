import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to dynamically serve /src/main.tsx during development while keeping production bundles in index.html
function devHtmlTransform() {
  return {
    name: 'dev-html-transform',
    transformIndexHtml(html: string, ctx: { server?: any }) {
      if (ctx.server) {
        return html
          .replace(/<script type="module" crossorigin src="\.\/assets\/index-.*?\.js"><\/script>/, '<script type="module" src="/src/main.tsx"></script>')
          .replace(/<link rel="stylesheet" crossorigin href="\.\/assets\/index-.*?\.css">/, '');
      }
      return html;
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), devHtmlTransform()],
  server: {
    port: 3000,
    host: true,
  },
})

