import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

const iconDirectory = resolve(__dirname, 'icons')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),  
    UnoCSS({
      presets: [
        presetIcons({
          collections: {
            custom: FileSystemIconLoader(iconDirectory),
            carbon: () => import('@iconify/json/json/carbon.json').then(i => i.default),
            'assets': FileSystemIconLoader(
              './assets/icons',
              svg => svg.replace(/#fff/, 'currentColor')
              )
          },
        }),
      ],
    }),
  ],
})
