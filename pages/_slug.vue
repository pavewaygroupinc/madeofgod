<template>
    <div>
        <default-template v-if="type == 'page'" :title="title" :body="body" :template="template" :thumbnail="thumbnail" />
        <v-container class="text-center" v-else>
            <h1>404 Not Found</h1>
            <nuxt-link to="/">Home</nuxt-link>
        </v-container>
    </div>
</template>

<script>
import DefaultTemplate from '@/components/page/default'
export default {
    async asyncData ({ params, query, app, payload, route, store }) {
        try {
            let page = await import(`~/content/page/posts/${params.slug}.json`)
            return {
                id: page.id,
                type: 'page',
                date: page.date,
                body: page.body,
                title: page.title,
                template: page.template,
                thumbnail: page.thumbnail,
                seo_title: page.seo_title,
                seo_keywords: page.seo_keywords,
                seo_description: page.seo_description
            }
        } catch (error) {
            console.log('Collection 404: ' + error)
            return {
                type: '404'
            }
        }
    },

    head() {
        return {
            title: (this.type == '404') ? '404: Page Not Found' : this.$options.filters.titleTemplate(this.title)
        }
    },

    watchQuery: true,
    
    components: {},

    methods: {},

    computed: {
        isEmbedded() {
            return this.$route.query.hasOwnProperty('content_embed') ? true : false
        }
    },

    created() {}
}
</script>