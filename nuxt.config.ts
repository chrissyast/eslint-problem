// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import eslintPlugin from "vite-plugin-eslint";
export default defineNuxtConfig({
    css: ['vuetify/styles'],
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        },
        plugins: [
            eslintPlugin({
                include: ['./**/*.vue']
              })
        ]
    },
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config: any) => {
                return config.plugins.push(
                    vuetify()
                );
            })
        }
    ]
})
