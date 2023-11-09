import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve, normalize } from 'path';

const pakDir = normalize(resolve(__dirname, 'src'));
export default defineConfig({
    build: {
        target: 'modules',
        outDir: 'es',
        minify: false,
        chunkSizeWarningLimit: 8 * 1024,
        rollupOptions: {
            plugins: [],
            external: [],
            input: ['src/index.ts'],
        },
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
        },
    },
    plugins: [dts({})],
});
