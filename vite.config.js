import legacy from '@vitejs/plugin-legacy'
import {createHtmlPlugin} from 'vite-plugin-html'

export default {
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        createHtmlPlugin({minify: true}),
    ],
}
