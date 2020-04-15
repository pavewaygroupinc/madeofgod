import colors from 'vuetify/es5/util/colors'
var siteInfo = require('./content/_data/settings.json')
var glob = require('glob')
var path = require('path')
var fs = require('fs')

changeThemeColor()

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
    '/blog': 'blog/posts/*.json',
    '/profile': 'profiles/posts/*.json'
        // '/genre': 'genres/posts/*.json',
        // '/': 'page/posts/*.json',
        // '/category': 'categories/posts/*.json'
});

console.log(dynamicRoutes)

export default {
    mode: 'universal',

    pageTransition: { mode: "in-out" },

    env: {
        appName: siteInfo.site_title,
        appDescription: siteInfo.site_description,
        appUrl: siteInfo.site_url,
        siteLogo: siteInfo.site_logo,
        mobileLogo: siteInfo.mobile_logo
    },

    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + siteInfo.site_title,
        title: siteInfo.site_title || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: siteInfo.seo_description || '' },
            { hid: 'keywords', name: 'keywords', content: siteInfo.seo_keywords || '' },
            { hid: 'author', name: 'author', content: siteInfo.seo_title },
            { hid: "twittertitle", name: "twitter:title", content: siteInfo.seo_title },
            { hid: "twitterdesc", name: "twitter:description", content: siteInfo.seo_description || '' },
            { hid: "twitterdesc", name: "twitter:image", content: siteInfo.site_logo },
            { name: "twitter:card", content: `summary_large_image` },
            { hid: "twitterhashtags", name: "twitter:hashtags", content: siteInfo.seo_keywords },
            { hid: 'fbapp_id', property: 'fb:app_id', content: siteInfo.facebook_app_id },
            { hid: 'ogtype', property: 'og:type', content: "website" },
            { hid: 'ogtitle', property: 'og:title', content: siteInfo.seo_title },
            { hid: 'ogsite_name', property: 'og:site_name', content: siteInfo.site_title },
            { hid: 'ogimage', property: 'og:image', content: siteInfo.site_logo },
            { hid: 'ogdescription', property: 'og:description', content: siteInfo.seo_description },
            { hid: 'ogurl', property: 'og:url', content: siteInfo.site_url }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: siteInfo.site_favicon },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { rel: 'preload', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', as: 'style' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous' }
        ],
        script: []
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: siteInfo.site_primary_color },
    /*
     ** Global CSS
     */
    css: [
        'swiper/dist/css/swiper.css',
        "@/assets/app.scss"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/disqus',
        "~/plugins/moment",
        '@/plugins/filters',
        { src: '~/plugins/lodash', ssr: false },
        { src: '~/plugins/swiper', ssr: false },
        { src: '~/plugins/social', ssr: false },
        { src: '@/plugins/masonry', ssr: false },
        { src: '@/plugins/youtube', ssr: false },
        { src: '~/plugins/agile', ssr: false }
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
        '@nuxtjs/markdownit',
        '@nuxtjs/vuetify',
        // "nuxt-compress",
        // 'nuxt-purgecss'
        // 'nuxt-responsive-loader'
    ],

    "nuxt-compress": {
        gzip: {
            cache: true
        },
        brotli: {
            threshold: 10240
        }
    },

    markdownit: {
        injected: true,
        preset: 'default',
        breaks: true,
        html: true
    },

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    webfontloader: {
        custom: {
            families: [
                'Montserrat:100,200,300,400,500,600,700,800,900'
            ],

            urls: [
                'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap&subset=latin-ext,vietnamese'
            ]
        }
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        // rtl: siteInfo.enable_rtl,
        theme: {
            light: true,
            themes: {
                light: {
                    primary: siteInfo.site_primary_color,
                    accent: colors.grey.lighten3,
                    secondary: siteInfo.site_secondary_color,
                    info: colors.teal.darken1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        },
        defaultAssets: {
            font: {
                family: 'Montserrat'
            }
        },
        treeShake: true,
        options: {
            customProperties: true
        }
    },

    manifest: {
        name: siteInfo.site_title,
        short_name: siteInfo.site_title,
        description: siteInfo.site_description,
        lang: 'en'
    },
    workbox: {
        runtimeCaching: [{
            urlPattern: '/images/uploads/.*',
            handler: 'cacheFirst',
            strategyOptions: {
                cacheName: 'image-cache',
                cacheExpiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 86400
                }
            }
        }]
    },

    /*
     ** Route config for pre-rendering
     */
    router: {
        middleware: ['drawer']
    },

    generate: {
        routes: dynamicRoutes
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */

        extractCSS: true,
        // cache: true,
        // optimizeCSS: true,
        extend(config, ctx) {
            // Add this to your build config
            config.module.rules.push({
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: {
                    vue: true
                }
            })
        }
    }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
    return [].concat(
        ...Object.keys(urlFilepathTable).map(url => {
            var filepathGlob = urlFilepathTable[url];
            return glob
                .sync(filepathGlob, { cwd: 'content' })
                .map(filepath => `${url}/${path.basename(filepath, '.json')}`)
        })
    );
}

async function changeThemeColor() {
    console.log('Attempting to change them color')
    try {
        let data = fs.readFileSync('assets/color.txt', 'utf8')

        let colors = data.toString().split(',')

        console.log(colors)

        const replace = require('replace-in-file')
        const options = {
            files: 'assets/variables.scss',
            from: [new RegExp(colors[0], "g"), new RegExp(colors[1], "g")],
            to: [siteInfo.site_primary_color, siteInfo.site_secondary_color],
            countMatches: true
        }

        try {
            const results = await replace(options)
            console.log('Replacement results:', results)
            fs.writeFile('assets/color.txt', `${siteInfo.site_primary_color},${siteInfo.site_secondary_color}`, 'utf8', callback => (error) => console.log(error))
            console.log('Color changed')
        } catch (error) {
            console.error('Error occurred:', error);
        }
    } catch (e) {
        console.log('Error:', e.stack);
    }
}