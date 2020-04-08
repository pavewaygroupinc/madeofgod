<template>
    <div v-swiper:swiper="options">
        <div class="swiper-wrapper">
          <div class="swiper-slide bg-img bg-overlay2" style="background-image: url(/slides/slide1.jpg);">
            <v-layout class="hero-slides-content text-center column fill-height justify-center align-center">
              <h2>Infotainment <span>Infotainment</span></h2>
              <p>
                <i>...gospel entertainment in style.</i>
              </p>
              <v-btn rounded dark color="secondary" large class="text-capitalize" style="font-size: 1.3em;">Discover More</v-btn>
            </v-layout>
            <h2 class="big-text">Infotainment</h2>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                // loop: true,
                slidesPerView: 1,
                spaceBetween: 0,
                // mousewheel: true,
                autoplay: true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~/assets/breakpoints.scss";
.swiper-container {
    height: auto!important;
    margin-left: auto;
    margin-right: auto;
}
.swiper-slide {
    height: 750px;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;

    @media (max-width: $ml) {
        height: 500px;
    }

    &:hover {
        -webkit-transform: scale(1.04);
        -moz-transform: scale(1.04);
        -o-transform: scale(1.04);
        -ms-transform: scale(1.04);
        transform: scale(1.04);
        -webkit-transition: all 2s ease-in-out;
        -moz-transition: all 2s ease-in-out;
        -o-transition: all 2s ease-in-out;
        -ms-transition: all 2s ease-in-out;
        transition: all 2s ease-in-out;
    }  
}
</style>