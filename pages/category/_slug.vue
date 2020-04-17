<template>
    <div class="posts-list-page">
        <Hero :title="title" :thumbnail="thumbnail" />
        <v-container grid-list-md class="list-page-menu-wrap">
            <v-layout row wrap>
                <v-flex md6 sm6 xs12 class="text-center">
                    <div class="filter-orderby-section">
                        <span class="orderby-filter-button font-weight-bold" @click="openOrderByFilter" :class="{active: isOrderByFilter}">{{title}}</span>
                        <div class="filter-orderby-section-filters" :class="{'active-filter': isOrderByFilter}">
                            <div class="filter-list-divider menu-center-left pt-0 font-weight-bold"> 
                                <nuxt-link to="/profile" class="orderby-filter">All Posts</nuxt-link> 
                                <nuxt-link :to="category._path" class="orderby-filter" v-for="(category, index) in categories" :key="index">{{category.title}}</nuxt-link>
                            </div>
                        </div>
                    </div>
                </v-flex>
                <v-flex md6 sm6 xs12 class="text-center section-filter"></v-flex>
            </v-layout>
        </v-container>
        <v-container class="spinner-field" grid-list-xl>
            <masonry
                :cols="{default: 3, 1000: 3, 700: 1, 400: 1}"
                :gutter="{default: '30px', 700: '15px'}"
            >
                <blog-post :post="post" v-for="(post, index) in posts" :key="index" />
            </masonry>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hero from '@/components/common/Hero'
import BlogPost from '@/components/BlogPost'
export default {
    async asyncData ({ params, app, payload, route, store, context }) {
        let category = await import(`~/content/categories/posts/${params.slug}.json`)
        store.dispatch('getPostByCategory', category.id)
        return {
            title: category.title,
            thumbnail: category.thumbnail,
            seo_title: category.seo_title,
            description: category.description,
            seo_keywords: category.seo_keywords,
            seo_description: category.seo_description,
        }
    },

    layout: 'contact',

    head() {
        return {
            title: this.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'keywords', name: 'keywords', content: this.seo_keywords || '' },
                { hid: 'description', name: 'description', content: this.seo_description },
                { hid: "twittertitle", name: "twitter:title", content: this.seo_title },
                { hid: "twitterdesc", name: "twitter:description", content: this.seo_description || '' },
                { hid: "twitterdesc", name: "twitter:image", content: this.thumbnail },
                { hid: "twitterhashtags", name: "twitter:hashtags", content: this.seo_keywords },
                { hid: 'ogtype', property: 'og:type', content: "article" },
                { hid: 'ogtitle', property: 'og:title', content: this.seo_title },
                { hid: 'ogimage', property: 'og:image', content: this.thumbnail },
                { hid: 'ogdescription', property: 'og:description', content: this.seo_description },
                { hid: 'ogurl', property: 'og:url', content: this.$options.filters.getFullUrl(this.$route.fullPath) }
            ]
        }
    },

    data() {
        return {}
    },

    components: {
        Hero,
        BlogPost
    },

    computed: {
        ...mapGetters([
            'posts',
            'categories',
            'isOrderByFilter'
        ])
    },

    methods: {
        openOrderByFilter() {
            this.$store.commit("SET_IsOrderByFilter", !this.isOrderByFilter)
        }
    },

    created() {}
}
</script>

<style lang="scss" scoped>
@import "~/assets/breakpoints.scss";
@import "~/assets/variables.scss";
.btn-details-wrap {
    margin-bottom: 66px;
    text-align: center;
}
.filter-orderby-section-filters {
    left: 0;
    text-align: left !important;
}
</style>