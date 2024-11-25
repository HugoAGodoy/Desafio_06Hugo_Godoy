import { resolve } from 'path'
// https://vite.dev/config/
// https://vite.dev/config/shared-options.html#css-devsourcemap
// vite.config.js
export default {
    // config options
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contacto: resolve(__dirname, 'pages/mario/mario.html'),
                nosotros: resolve(__dirname, 'pages/kombat/mkombat.html'),
            
            }
        }
    }
}