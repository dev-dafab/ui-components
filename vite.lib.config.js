import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    build: {
        rollupOptions: {
            input: ['./src/lib.ts'],
        }
    }, plugins: [svelte({
        compilerOptions: {
            customElement: true,
            name: "UiMi",
            outputFilename: "ui-mi-component-library"
        },
    })]
})
