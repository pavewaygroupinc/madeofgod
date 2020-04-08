<template>
    <section class="our-team">
        <h1 class="team-heading">
            The Team
        </h1>
        <p class="team-desc">
            Sed porta cursus enim, vitae maximus felis luctus iaculis.
        </p>
        <v-container mt-10>
            <v-layout>
              <div v-swiper:mySwiper="options">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(team, index) in 17" :key="index">
                    <v-card flat>
                      <v-layout row wrap>
                        <v-flex md5 sm12 xs12>
                          <img src="/madeofgod.jpg" style="width:125px; height: 125px; border-radius: 5px;">
                        </v-flex>
                        <v-flex md7 sm12 xs12>
                          <h1 class="team-name">Mbirrambang Alain</h1>
                          <h2 class="team-position">Cheif Executive Office</h2>
                          <h3 class="team-email">cosmasalain@gmail.com</h3>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </div>
                </div>
                <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
              </div>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
    return {
      appName: process.env.appName,
      options: {
        loop: true,
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
			  mousewheel: true,
              // pagination: {
              //   el: '.swiper-pagination',
              //   dynamicBullets: true,
              //   clickable: true
              // }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-container {
  height: auto!important;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  height: 200px;
}
</style>