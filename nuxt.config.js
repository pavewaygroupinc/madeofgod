import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'universal',

    env: {
        VUE_APP_GOOGLE_MAPS_API_KEY: "AIzaSyDhRkiIlUfldIFQrD5lh9HWjl-IEnyBel0",
        appName: 'Made Of God',
        appDeveloper: "PaveWay Technologies",
        appDeveloperWebsite: "https://pavewaytechnologies.com"
    },

    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + 'Made Of God',
        title: 'Made Of God',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous' }
        ],
        script: [{
            // src: `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}&libraries=places`
        }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#d88d06' },
    /*
     ** Global CSS
     */
    css: [
        'sweetalert2/dist/sweetalert2.min.css',
        'swiper/dist/css/swiper.css',
        '~/assets/app.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/moment',
        '@/plugins/filters',
        '@/plugins/google-maps',
        { src: '~/plugins/lodash', ssr: false },
        { src: '~/plugins/swiper', ssr: false },
        { src: '@/plugins/masonry', ssr: false },
        { src: '@/plugins/youtube', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/vuetify',
        'vue-sweetalert2/nuxt',
        'nuxt-validate'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    webfontloader: {
        custom: {
            families: [
                'Sen:400,700,800'
            ],

            urls: [
                'https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap'
            ]
        }
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            light: true,
            themes: {
                light: {
                    primary: '#FE0000',
                    accent: colors.grey.lighten3,
                    secondary: '#030200',
                    info: colors.teal.darken1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        },
        defaultAssets: {
            font: {
                family: 'Sen'
            }
        },
        treeShake: true,
        options: {
            customProperties: true
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}