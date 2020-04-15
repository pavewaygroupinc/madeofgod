<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + settings.profile_banner + ')' }">
            <div class="bradcumbContent">
                <h2>Artist Profiles</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <section class="profiles-container">
            <v-container fluid grid-list-xl>
                <v-layout row wrap>
                    <v-flex md8>
                        <section class="section-padding-100">
                            <v-container>
                                <loading v-if="overlay" />
                                <div v-else>
                                    <v-alert type="info" v-if="profiles.length == 0">
                                        No profiles found.
                                    </v-alert>
                                    <masonry v-else
                                        :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
                                        :gutter="{default: '30px', 700: '15px'}"
                                    >
                                        <profile-card :profile="profile" v-for="(profile, index) in profiles" :key="index"/>
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
                                                            <v-select v-model="search_genre" solo label="Artist genre" :items="genres" item-text="title" item-value="title" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-text-field v-model="search_country" solo label="Artist country" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-text-field v-model="search_artist" solo label="Artist name" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-btn @click.stop="resetFilter">Reset</v-btn>
                                                            <button type="button" @click.prevent="filterProfiles" class="btn musica-btn m-2">Search</button>
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
import Loading from '@/components/common/Loading'
import ProfileCard from '@/components/ProfileCard'
export default {
    head() {
        return {
        title: 'Artist Profiles'
        }
    },
    
    components: {
        Loading,
        ProfileCard
    },

    data() {
        return {
        search_genre: null,
        search_country: null,
        search_artist: null
        }
    },

    layout: 'contact',

    computed: {
        ...mapGetters([
            'genres',
            'overlay',
            'settings',
            'profiles'
        ])
    },

    methods: {
        filterProfiles() {
            if(!this.search_genre && !this.search_country && !this.search_artist) {
                alert("Filter fields empty");
            } else {
                this.$store.dispatch('filterProfiles', {genre: this.search_genre, country: this.search_country, artist: this.search_artist})
            }
        },

        resetFilter() {
            this.search_genre = null
            this.search_country =  null
            this.search_artist =  null
            this.$store.dispatch('getProfiles')
        }
    },
};
</script>

<style lang="scss" scoped></style>
