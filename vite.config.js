import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'PukangUI',
            fileName: (format) => format === 'es' ? 'pukang-ui.es.js' : 'pukang-ui.umd.cjs',
            cssFileName: 'pukang-ui'
        },
        cssCodeSplit: false, // 所有样式打包成同一个css
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: { vue: 'Vue' },
                exports: 'named'
            }
        }
    }
})
