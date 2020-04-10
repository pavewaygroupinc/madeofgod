<template>
    <div class="page-container">
        <v-container>
            <header class="static-page font-weight-bold black--text" v-if="template != 'about'">
                <h2 style="font-size: 45px;">{{title}}</h2>
                <v-divider class="divider-style" style="width: 100px; background-color: $primary-color; color: $primary-color;"></v-divider>
            </header>
            <div class="text-center">
                <img :src="thumbnail" v-if="thumbnail != 'default'" />
            </div>
            <article class="article-style mt-5" v-html="$md.render(body)"/>
            <div v-if="template == 'about'">
                <h1 class="text-center mb-5">Our Experts</h1>
                <v-card tile v-for="(author, index) in authors" :key="index" class="mb-10 elevation-5 pa-5">
                    <v-container grid-list-xl>
                        <v-layout row wrap>
                            <v-flex md2 xs12>
                                <img :src="author.thumbnail" />
                            </v-flex>
                            <v-flex md10 xs12>
                                <v-layout row wrap>
                                    <v-flex md8>
                                        <h2>{{author.name}}</h2>
                                    </v-flex>
                                    <v-flex md4 class="text-right">
                                        <v-btn v-if="author.facebook" :href="author.facebook" target="_Blank" icon small class="blue" dark>
                                            <v-icon small>fab fa-facebook-f</v-icon>
                                        </v-btn>
                                        <v-btn v-if="author.twitter" :href="author.twitter" target="_Blank" icon small class="blue" dark>
                                            <v-icon small>fab fa-twitter</v-icon>
                                        </v-btn>
                                        <v-btn v-if="author.instagram" :href="author.instagram" target="_Blank" icon small class="purple" dark>
                                            <v-icon small>fab fa-instagram</v-icon>
                                        </v-btn>
                                        <v-btn v-if="author.linkedin" :href="author.linkedin" target="_Blank" icon small class="blue" dark>
                                            <v-icon small>fab fa-linkedin</v-icon>
                                        </v-btn>
                                    </v-flex>
                                    <v-flex xs12>
                                        <div v-html="$md.render(author.body)" />
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        title: {
            type: String,
            default: 'Page Title'
        },
        template: {
            type: String,
            default: 'default'
        },
        thumbnail: {
            type: String,
            default: 'default'
        },
        body: {
            type: String,
            default: 'Page content'
        }
    },
    computed: {
        ...mapGetters([
            'authors'
        ])
    },
}
</script>

<style lang="scss" scoped>
@import "~/assets/breakpoints.scss";
@import "~/assets/variables.scss";
.page-container {
    @media (max-width: $ml), (max-width: $sm) {}
}
.article-style{
    padding-bottom: 50px !important;
}
.divider-style {
    width: 100px;
    background-color: $primary-color;
}
</style>