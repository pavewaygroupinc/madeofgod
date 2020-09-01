<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + settings.blog_banner + ')' }">
            <div class="bradcumbContent">
                <h2>News</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <section class="single-post--container">
            <v-container fluid grid-list-xl>
                <v-layout row wrap>
                    <v-flex md8>
                        <section class="section-padding-100">
                            <v-container>
                                <loading v-if="overlay" />
                                <div v-else>
                                    <v-alert type="info" v-if="posts.length == 0">
                                        No news articles found.
                                    </v-alert>
                                    <masonry v-else
                                        :cols="{default: 3, 1000: 3, 700: 1, 400: 1}"
                                        :gutter="{default: '10px', 700: '15px'}"
                                    >
                                        <blog-post :post="post" v-for="(post, index) in posts" :key="index"/>
                                    </masonry>
                                </div>
                            </v-container>
                        </section>
                    </v-flex>
                    <v-flex md4>
                        <section class="search--container section-padding-100 bg-img">
                            <v-container fluid grid-list-xl mt-12 class="search--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <div class="search-your-shows-content">
                                            <h2>Filter results</h2>
                                            <div class="search-form">
                                                <v-form class="justify-content-center">
                                                    <v-layout wrap row>
                                                        <v-flex>
                                                            <v-select v-model="search_category" solo label="Article category" :items="categories" item-text="title" item-value="title" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-text-field v-model="search_title" solo label="Article title" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-btn @click.stop="resetFilter">Reset</v-btn>
                                                            <button type="button" @click.prevent="filterPosts" class="btn musica-btn m-2">Search</button>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-form>
                                            </div>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </section>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BlogPost from '@/components/BlogPost'
import Loading from '@/components/common/Loading'
export default {
    async asyncData({ params, app, payload, route, store }) {
        store.dispatch('getPosts')
    },
    head() {
        return {
            title: 'Blogs'
        }
    },

    layout: 'contact',

    components: {
        Loading,
        BlogPost
    },

    data() {
        return {
            search_category: null,
            search_title: null
        }
    },

    computed: {
        ...mapGetters([
            'posts',
            'overlay',
            'settings',
            'categories'
        ])
    },

    methods: {
        filterPosts() {
            if(!this.search_category && !this.search_title) {
                alert("Filter fields empty");
            } else {
                this.$store.dispatch('filterPosts', {category: this.search_category, title: this.search_title})
            }
        },

        resetFilter() {
            this.search_category = null
            this.search_title =  null
            this.$store.dispatch('getPosts')
        }
    },
};
</script>

<style lang="scss" scoped>
.search--container {
    padding-top: 0;
}
</style>
