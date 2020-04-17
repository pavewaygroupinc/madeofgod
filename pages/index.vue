<template>
  <div>
    <section class="hero-area">
      <home-slider />
      <div class="bg-gradients"></div>
    </section>
    <about-us />
    <section class="single-post--container section-padding-100">
      <div class="section-heading">
        <h1 class="secondary--text heading--title">
          Latest Posts
        </h1>
      </div>
      <v-container fluid grid-list-xl>
        <masonry
          :cols="{default: 4, 1000: 4, 700: 1, 400: 1}"
          :gutter="{default: '30px', 700: '15px'}"
        >
            <blog-post :post="post" v-for="(post, index) in latestPosts" :key="index" />
        </masonry>
      </v-container>
    </section>
    <section class="top-songs section-padding-100">
      <v-container fluid grid-list-xs>
        <div class="section-heading">
          <h1 class="secondary--text">
            Recently Added
          </h1>
        </div>
        <masonry
            :cols="{default: 4, 1000: 4, 700: 1, 400: 1}"
            :gutter="{default: '30px', 700: '15px'}"
        >
            <profile-card :profile="profile" v-for="(profile, index) in latestProfiles" :key="index"/>
        </masonry>
      </v-container>
    </section>
    <audio-player/>
    <!-- <v-container fluid>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card
              class="mx-auto single-music-player"
              flat
              height="430px"
            >
              <v-img
                class="white--text align-center bg-img bg-overlay2"
                src="/concert.jpg"
                height="100%"
              >
                <v-layout column fill-height justify-center align-center class="">
                  <h2 class="display-3 font-weight-black">Shows & Concerts</h2>
                  <h4 class="font-weight-bold title">Search for the best shows & concerts</h4>
                </v-layout>
              </v-img>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card
              class="mx-auto single-music-player"
              flat
              height="430px"
            >
              <v-img
                class="white--text align-center bg-img bg-overlay2"
                src="/about.jpg"
                height="100%"
              >
                <v-layout column fill-height justify-center align-center class="">
                  <h2 class="display-3 font-weight-black">Shows & Concerts</h2>
                  <h4 class="font-weight-bold title">Search for the best shows & concerts</h4>
                </v-layout>
              </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BlogPost from '@/components/BlogPost'
import HomeSlider from '@/components/HomeSlider'
import AboutUs from '@/components/common/AboutUs'
import AudioPlayer from '@/components/AudioPlayer'
import ProfileCard from '@/components/ProfileCard'
export default {
  async asyncData ({ params, app, payload, route, store, context }) {
    // store.dispatch('getSongs')
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  components: {
    AboutUs,
    BlogPost,
    HomeSlider,
    AudioPlayer,
    ProfileCard
  },

  data() {
    return {
      appName: process.env.appName
    }
  },

  computed: {
    ...mapGetters([
      'latestPosts',
      'latestProfiles'
    ])
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>

</style>
