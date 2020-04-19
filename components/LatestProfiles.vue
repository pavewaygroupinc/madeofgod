<template>
    <section class="top-songs section-padding-100">
      <v-container fluid grid-list-xs>
        <div class="section-heading">
          <h1 class="secondary--text">
            Recently Added
          </h1>
        </div>
        <masonry class="hidden-sm-and-down"
            :cols="{default: 4, 1000: 4, 700: 1, 400: 1}"
            :gutter="{default: '30px', 700: '15px'}"
        >
            <profile-card :profile="profile" v-for="(profile, index) in latestProfiles" :key="index"/>
        </masonry>
        <div v-swiper:mySwiper="options" class="hidden-md-and-up">
          <div class="swiper-wrapper">
            <profile-card class="swiper-slide" :profile="profile" v-for="(profile, index) in latestProfiles" :key="index"/>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </v-container>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileCard from '@/components/ProfilePost'
export default {
    data() {
    return {
      options: {
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  
  components: {
    ProfileCard
  },

  computed: {
    ...mapGetters([
      'latestProfiles'
    ])
  },
}
</script>

<style lang="scss" scoped>

</style>
