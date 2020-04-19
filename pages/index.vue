<template>
  <div>
    <section class="hero-area">
      <home-slider />
      <div class="bg-gradients"></div>
    </section>
    <about-us />
    <latest-posts />
    <latest-profiles />
    <audio-player/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeSlider from '@/components/HomeSlider'
import AboutUs from '@/components/common/AboutUs'
import AudioPlayer from '@/components/AudioPlayer'
import LatestPosts from '@/components/LatestPosts'
import LatestProfiles from '@/components/LatestProfiles'
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
    HomeSlider,
    AudioPlayer,
    LatestPosts,
    LatestProfiles
  },

  data() {
    return {}
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
