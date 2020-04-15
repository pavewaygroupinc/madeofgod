<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + settings.music_banner + ')' }">
            <div class="bradcumbContent">
                <h2>Music Library</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <music-player />
        <section class="featured-profile-area section-padding-100">
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="section-heading">
                            <h2>
                                FEATURED Artists
                            </h2>
                            <h6>
                                Catch all our featured artists
                            </h6>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout>
                <div v-swiper:mySwiper="options">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide single-featured-profile" v-for="(profile, index) in featuredProfiles" :key="index">
                            <nuxt-link :to="profile._path">
                                <v-img :src="profile.thumbnail" height="650" width="350">
                                    <v-layout column fill-height align-center justify-end>
                                        <div class="featured-profile-content">
                                            <div class="profile-text">
                                                <h4>{{ $options.filters.getGenreById(profile.genre).title }}</h4>
                                                <p>{{profile.name}}</p>
                                                <nuxt-link :to="profile._path" class="buy-ticket-btn">Read More</nuxt-link>
                                            </div>
                                            <div class="bg-gradients"></div>
                                        </div>
                                    </v-layout>
                                </v-img>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </div>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MusicPlayer from '@/components/music'
export default {
    head() {
        return {
            title: 'Music Store'
        }
    },

    layout: 'contact',
    
    components: {
        MusicPlayer
    },

    data() {
        return {
            options: {
                slidesPerView: 3,
                spaceBetween: 30,
                mousewheel: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                    },
                    640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                    },
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
                }
            }
        }
    },

    computed: {
        ...mapGetters([
            'settings',
            'featuredProfiles'
        ])
    }
};
</script>

<style lang="scss" scoped></style>
