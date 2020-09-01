<template>
    <section class="single-post--container py-4">
      <div class="section-heading">
        <h1 class="secondary--text heading--title">
          Latest Posts
        </h1>
      </div>
      <v-container fluid grid-list-xl>
        <masonry class="hidden-sm-and-down"
          :cols="{default: 4, 1000: 4, 700: 1, 400: 1}"
          :gutter="{default: '30px', 700: '15px'}"
        >
            <blog-post :post="post" v-for="(post, index) in latestPosts" :key="index" />
        </masonry>
        <div v-swiper:mySwiper="options" class="hidden-md-and-up">
          <div class="swiper-wrapper">
            <blog-post class="swiper-slide" :post="post" v-for="(post, index) in latestPosts" :key="index" />
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </v-container>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import BlogPost from '@/components/BlogPost'
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
    BlogPost
  },

  computed: {
    ...mapGetters([
      'latestPosts'
    ])
  },
}
</script>

<style lang="scss" scoped>

</style>
