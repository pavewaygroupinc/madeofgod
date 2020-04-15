<template>
    <div>
        <div v-if="!isEmbedded">
            <v-container :fluid="$vuetify.breakpoint.smAndDown" class="post-section-banner">
                <div class="breadcrumbs-wrap hidden-sm-and-down">
                    <ul class="breadcrumbs">
                        <li>
                            <nuxt-link to="/">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/blog">Blog</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="`/category/${$options.filters.getCategoryById(category).slug}`">{{$options.filters.getCategoryById(category).title}}</nuxt-link>
                        </li>
                    </ul>
                </div>
                
                <v-lazy>
                    <div class="section-items-banner-bg" v-bind:style="{ backgroundImage: 'url(' + thumbnail + ')' }">
                        <div class="section-items-banner-bg-text">
                            <div class="update-date text-uppercase font-weight-black subtitle-1">
                                Last updated: <span>{{ update | lastlyUpdated }}</span>
                            </div>
                            <h1 class="banner-bg-title">{{title}}</h1>
                        </div>
                    </div>
                </v-lazy>
            </v-container>
            <section class="blog-section">
                <v-container class="remove-padding">
                    <v-layout row wrap>
                        <v-flex sm12 md8 xs12>
                            <v-container grid-list-xl>
                                <v-layout row wrap class="author-section">
                                    <v-flex lg1 md2 xs2 class="author-img">
                                        <v-avatar size="50">
                                            <img :src="author.thumbnail" :alt="author.name" />
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex lg11 md10 xs10 class="pt-5 author-info">
                                        <div class="author-name font-weight-bold">BY {{author.name}}</div>
                                        <div class="published-time font-weight-regular">Published <span>{{update | publishTime }}</span></div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-divider />
                            <div class="blog-content" v-html="$md.render(body)" />
                            <div class="comments">
                                <vue-disqus shortname="made-of-god"/>
                            </div>
                        </v-flex>
                        <v-flex md4 sm12 xs12 class="sharing-section">
                            <div class="sticky-sidebar">
                                <div>
                                    <div class="title-design-wrap mb-1">
                                        <h2 class="section-title">Share</h2>
                                    </div>
                                </div>
                                <div class="share-follow-btns-wrap">
                                    <div class="social-share-container">
                                        <a target="_blank" ref="nofollow" :href="seo_title | facebookSharer($route.fullPath, seo_description)" class="share-btn">
                                            <v-icon small color="#3a579a" class="social-icon mr-3">fab fa-facebook-f</v-icon>
                                            <v-icon size="44" color="#3a579a" class="social-send-icon">fab fa-telegram</v-icon>
                                            <v-icon size="30" color="#fff" class="hover-icon">fab fa-telegram-plane</v-icon>
                                        </a>
                                        <a target="_blank" ref="nofollow" :href="seo_title | twitterSharer($route.fullPath)" class="share-btn">
                                            <v-icon small color="#00abf0" class="social-icon mr-1">fab fa-twitter</v-icon>
                                            <v-icon size="44" color="#00abf0" class="social-send-icon">fab fa-telegram</v-icon>
                                            <v-icon size="30" color="#fff" class="hover-icon">fab fa-telegram-plane</v-icon>
                                        </a>
                                        <a target="_blank" ref="nofollow" :href="seo_title | pintressSharer($route.fullPath)" class="share-btn">
                                            <v-icon small color="#cd1c1f" class="social-icon mr-2">fab fa-pinterest-p</v-icon>
                                            <v-icon size="44" color="#cd1c1f" class="social-send-icon">fab fa-telegram</v-icon>
                                            <v-icon size="30" color="#fff" class="hover-icon">fab fa-telegram-plane</v-icon>
                                        </a>
                                    </div>
                                    <a  @click.stop="dialog = true" class="embed-button">
                                        <span>
                                            <i class="fa fa-code" aria-hidden="true"></i> Embed
                                        </span>
                                        <i class="fa fa-code hover-icon-code" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>
            <v-container class="spinner-field" grid-list-xl>
                <div class="title-design-wrap">
                        <h2 class="section-title">Related Reads</h2>
                </div>
                <v-layout row wrap class="blog-post-items posts-container mb-10">
                    <v-flex md4 v-for="(post, index) in relatedPosts" :key="index">
                        <blog-post :post="post" />
                    </v-flex>
                </v-layout>
            </v-container>
            <v-dialog
                v-model="dialog"
                content-class="embed-modal"
            >

                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click.stop="dialog = false"></button>
                <v-card class="embed-modal-content" tile>
                    <v-card-text>
                        <h2 class="embed-title">Embed This Blog Post</h2>
                        <div class="embed-preview"> 
                            <iframe :src="$route.fullPath | getEmbededUrl" width="600px" height="320px"></iframe>
                        </div>
                        <div class="embed-code-title">Copy Code</div>
                        <textarea name="" id="" cols="30" rows="10" readonly="">&lt;iframe src="{{$route.fullPath | getEmbededUrl}}" width="600px" height="320px"&gt;&lt;/iframe&gt;</textarea>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <div v-else class="gfl-embed-wrap">
            <div class="gfl-embed">
                <div class="gfl-embed-content">
                    <a  v-bind:style="{ backgroundImage: 'url(' + thumbnail + ')' }" :href="$route.fullPath" target="_blank">
                        <span>
                            <h1>
                                <span class="gfl-embed-title">{{title}}</span>
                                <span class="gfl-embed-by">
                                    <img src="                            ">See More on {{settings.site_title}}
                                </span>
                            </h1>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import { mapGetters } from 'vuex'
import BlogPost from '@/components/BlogPost'
export default {
    async asyncData({ params, app, payload, route, store }) {
        let post = await import("~/content/blog/posts/" + params.slug + ".json")
        store.dispatch('getPosts')
        return {
            body: post.body,
            date: post.date,
            title: post.title,
            update: post.update,
            authorId: post.author,
            summary: post.summary,
            category: post.category,
            thumbnail: post.thumbnail,
            seo_title: post.seo_title,
            seo_keywords: post.seo_keywords,
            seo_description: post.seo_description
        }
    },

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

    layout: 'contact',
    
    data() {
        return {
            dialog: false
        }
    },

    computed: {
        ...mapGetters([
            'settings'
        ]),

        isEmbedded() {
            return this.$route.query.hasOwnProperty('content_embed') ? true : false
        },

        relatedPosts() {
            return this.$store.getters.relatedPosts(this.category, this.title)
        },

        author() {
            return this.$options.filters.getAuthorById(this.authorId)
        }
    },

    components: {
        BlogPost
    },

    methods: {},

    mounted() {}
}
</script>

<style lang="scss" scoped>
@import "~/assets/breakpoints.scss";
@import "~/assets/variables.scss";
.blog-section {
    .remove-padding {
        // padding: 48px;

        @media (max-width: $ml), (max-width: $sm) {
            // padding: 25px;
        }
    }
}
.author-section {
    @media (max-width: $ml), (max-width: $sm) {
        // padding: 0 2em;
    }
}
.blog-content {
    margin-bottom: 48px;
    margin-top: 2em;
    @media (max-width: $ml), (max-width: $sm) {
        margin-bottom: 0.5em;
        padding: 2em;
    }
}
.comment-section, .sharing-section {
    @media (max-width: $ml), (max-width: $sm) {
        padding: 2em;
    }
}

.author-info {
    text-align: left;
    padding-left: 14px !important;

    .author-name {
        margin-bottom: 3px;
        font-size: 13px;
        text-transform: uppercase;
        color: #000;
        transition: all .15s;
    }

    .published-time {
        font-size: 12px;
        color: #000;
        transition: all .15s;
    }
}
.section-title {
    font-size: 25px;
}
</style>