<template>
    <section class="top-songs py-4">
      <v-container fluid grid-list-xs>
        <div class="section-heading">
          <h1 class="secondary--text heading--title">
            Recently Added
          </h1>
        </div>
        <!-- <masonry class="hidden-sm-and-down"
            :cols="{default: 4, 1000: 4, 700: 1, 400: 1}"
            :gutter="{default: '30px', 700: '15px'}"
        >
            <profile-card :profile="profile" v-for="(profile, index) in latestProfiles" :key="index"/>
        </masonry> -->
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <profile-card class="swiper-slide" :profile="profile" v-for="(profile, index) in latestProfiles" :key="index"/>
          </div>
          <v-btn class="swiper-button-prev" slot="button-prev" icon>
            <v-icon size="60">keyboard_arrow_left</v-icon>
          </v-btn>
          <v-btn class="swiper-button-next" slot="button-next" icon>
            <v-icon size="60">keyboard_arrow_right</v-icon>
          </v-btn>
        </div>
        <!-- <div v-swiper:mySwiper="options" class="hidden-md-and-up">
          <div class="swiper-wrapper">
            <profile-card class="swiper-slide" :profile="profile" v-for="(profile, index) in latestProfiles" :key="index"/>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div> -->
      </v-container>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileCard from '@/components/ProfilePost'
export default {
    data() {
    return {
      swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1024: {
              slidesPerView: 4,
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
        },
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
