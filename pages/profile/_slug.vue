<template>
    <div>
        <div v-if="!isEmbedded">
            <v-container :fluid="$vuetify.breakpoint.smAndDown" grid-list-xs class="post-section-banner">
                <v-layout ma-0 row wrap>
                    <v-flex md8 sm12 xs12>
                        <!-- <profile-slider :images="gallery" :thumbnail="thumbnail" /> -->
                        <div class="breadcrumbs-wrap hidden-sm-and-down">
                            <ul class="breadcrumbs">
                                <li>
                                    <nuxt-link to="/">Home</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/profile">Profile</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="`/genre/${$options.filters.getGenreById(genreId).slug}`">{{$options.filters.getGenreById(genreId).title}}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                        
                        <v-lazy>
                            <div class="section-items-banner-bg bg-overlay" style="height: 600px; background-size: contain;" v-bind:style="{ backgroundImage: 'url(' + thumbnail + ')' }" />
                        </v-lazy>
                        <section class="profile-author-section mt-md-3">
                            <v-layout row wrap class="mb-8">
                                <v-flex md1 sm2 xs2 class="author-img">
                                    <v-avatar size="50">
                                        <img :data-src="author.thumbnail" class="lazyload" :alt="author.name" />
                                    </v-avatar>
                                </v-flex>
                                <v-flex md3 sm3 xs10 class="text-left pl-md-2 mt-0 author-info">
                                    <div class="author-name font-weight-bold">BY {{author.name}}</div>
                                    <div class="published-time font-weight-regular">Published <span>{{update | publishTime }}</span></div>
                                </v-flex>
                            </v-layout>
                            <h1 class="banner-bg-title display-1 font-weight-black">{{name}}</h1>
                            <div class="blog-content mt-12" v-html="$md.render(body)" />
                            <div class="comments">
                                <vue-disqus shortname="made-of-god"/>
                            </div>
                        </section>
                    </v-flex>
                    <v-flex md4 sm12 xs12 class="px-5">
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
                                <a class="embed-button" @click.stop="dialog = true">
                                    <span>
                                        <i class="fa fa-code" aria-hidden="true"></i> Embed
                                    </span>
                                    <i class="fa fa-code hover-icon-code" aria-hidden="true"></i>
                                </a>
                            </div>
                            <v-card tile class="elevation-13">
                                <v-app-bar
                                    dark
                                    color="black"
                                >
                                    <v-spacer/>
                                    <v-toolbar-title class="display-1">Overview</v-toolbar-title>
                                    <v-spacer/>
                                </v-app-bar>
                                <v-card-text>
                                    <div class="py-2">
                                        <v-layout row wrap>
                                            <v-flex md4>
                                                <h5 class="subtitle-1 gray--text">
                                                    Genre
                                                </h5>
                                            </v-flex>
                                            <v-flex md8>
                                                <h3 class="subtitle-1 font-weight-regular black--text">
                                                    <nuxt-link class="text-capitalize" :to="genre._path">#{{genre.title}} </nuxt-link>
                                                </h3>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                    <div class="py-2">
                                        <v-layout row wrap>
                                            <v-flex md4>
                                                <h5 class="subtitle-1 gray--text">
                                                    Country
                                                </h5>
                                            </v-flex>
                                            <v-flex md8>
                                                <h3 class="subtitle-1 text-capitalize font-weight-regular black--text">
                                                    {{country}}
                                                </h3>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                    <div class="py-2">
                                        <v-layout row wrap>
                                            <v-flex md4>
                                                <h5 class="subtitle-1 gray--text">
                                                    City
                                                </h5>
                                            </v-flex>
                                            <v-flex md8>
                                                <h3 class="subtitle-1 text-capitalize font-weight-regular black--text">
                                                    {{city}}
                                                </h3>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                    <div class="py-2">
                                        <v-layout row wrap>
                                            <v-flex md4>
                                                <h5 class="subtitle-1 gray--text">
                                                    Gender
                                                </h5>
                                            </v-flex>
                                            <v-flex md8>
                                                <h3 class="subtitle-1 text-capitalize font-weight-regular black--text">
                                                    {{gender}}
                                                </h3>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container class="spinner-field" grid-list-xl>
                <div class="title-design-wrap">
                        <h2 class="section-title">Related Reads</h2>
                </div>
                <v-layout row wrap class="blog-post-items posts-container mb-10">
                    <profile-post :profile="profile" v-for="(profile, index) in relatedProfiles" :key="index" />
                </v-layout>
            </v-container>
            <v-dialog
                v-model="dialog"
                content-class="embed-modal"
            >

                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click.stop="dialog = false"></button>
                <v-card class="embed-modal-content" tile>
                    <v-card-text>
                        <h2 class="embed-title">Embed This Profile</h2>
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
                                <span class="gfl-embed-title">{{name}}</span>
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
import ProfilePost from '@/components/ProfilePost'
import ProfileSlider from '@/components/ProfileSlider'
export default {
    async asyncData ({ params, query, app, payload, route, store }) {
        let post = await import("~/content/profiles/posts/" + params.slug + ".json")
        store.dispatch('getProfiles')
        return {
            name: post.name,
            body: post.body,
            date: post.date,
            city: post.city,
            label: post.label,
            gender: post.gender,
            genreId: post.genre,
            update: post.update,
            country: post.country,
            authorId: post.author,
            summary: post.summary,
            thumbnail: post.thumbnail,
            dimension: post.dimension,
            seo_title: post.seo_title,
            ratings: post.editorrating,
            gallery: post.galleryImages,
            seo_keywords: post.seo_keywords,
            seo_description: post.seo_description
        }
    },

    head() {
        return {
            title: this.title,
            meta: [
                { hid: 'keywords', name: 'keywords', content: this.seo_keywords || '' },
                { hid: 'description', name: 'description', content: this.seo_description },
                { hid: "twittertitle", name: "twitter:title", content: this.seo_title },
                { hid: "twitterdesc", name: "twitter:description", content: this.seo_description || '' },
                { hid: "twitterdesc", name: "twitter:image", content: this.thumbnail },
                { hid: "twitterhashtags", name: "twitter:hashtags", content: this.seo_keywords },
                { hid: 'ogtype', property: 'og:type', content: "profile" },
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

    components: {
        ProfilePost,
        ProfileSlider
    },

    computed: {
        ...mapGetters([
            'settings'
        ]),
        isEmbedded() {
            return this.$route.query.hasOwnProperty('content_embed') ? true : false
        },
        relatedProfiles() {
            return this.$store.getters.relatedProfiles(this.genreId, this.name)
        },
        author() {
            return this.$options.filters.getAuthorById(this.authorId)
        },
        genre() {
            return this.$options.filters.getGenreById(this.genreId)
        }
    },
}
</script>

<style scoped lang="scss">
@import "~/assets/breakpoints.scss";
@import "~/assets/variables.scss";
.profile-author-section {
    @media (max-width: $ml), (max-width: $sm) {
        padding: 0 14px;
    }
}
.author-info {
    text-align: left;
}
.author-name {
    margin-bottom: 3px;
    font-size: 13px;
    text-transform: uppercase;
    color: #000;
    transition: all .15s;
}
.published-time {
    font-size: 14px;
    color: #000;
    transition: all .15s;
}
</style>