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
                                <nuxt-link to="/profile" class="orderby-filter">All Profiles</nuxt-link> 
                                <nuxt-link :to="genre._path" class="orderby-filter" v-for="(genre, index) in genres" :key="index">{{genre.title}}</nuxt-link>
                            </div>
                        </div>
                    </div>
                </v-flex>
                <v-flex md6 sm6 xs12 class="text-center section-filter"></v-flex>
            </v-layout>
        </v-container>
        <v-container class="spinner-field" grid-list-xl>
            <masonry
                :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
                :gutter="{default: '30px', 700: '15px'}"
            >
                <profile-card :profile="profile" v-for="(profile, index) in profiles" :key="index" />
            </masonry>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hero from '@/components/common/Hero'
import ProfileCard from '@/components/ProfileCard'
export default {
    async asyncData ({ params, app, payload, route, store, context }) {
        let genre = await import(`~/content/genres/posts/${params.slug}.json`)
        store.dispatch('getProfilesByGenre', genre.id)
        return {
            title: genre.title,
            thumbnail: genre.thumbnail,
            seo_title: genre.seo_title,
            description: genre.description,
            seo_keywords: genre.seo_keywords,
            seo_description: genre.seo_description,
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
        ProfileCard
    },

    computed: {
        ...mapGetters([
            'genres',
            'profiles',
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