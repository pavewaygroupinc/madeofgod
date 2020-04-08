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
      <v-container fluid grid-list-xl >
          <v-layout row wrap>
            <blog-post :post="post" v-for="(post, index) in 4" :key="index" />
          </v-layout>
      </v-container>
    </section>
    <recently-added />
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
import RecentlyAdded from '@/components/RecentlyAdded'
export default {
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
    RecentlyAdded
  },

  data() {
    return {
      appName: process.env.appName
    }
  },

  computed: {
    ...mapGetters({})
  }
};
</script>

<style lang="scss" scoped>

</style>
