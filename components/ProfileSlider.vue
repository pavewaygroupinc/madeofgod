<template>
  <div>
    <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1" :mobileFirst="true">
      <div class="slide slide-gradient" v-for="(image, index) in computedImages" :key="index" :class="`slide--${index}`" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
        <!-- <img :src="image"/> -->
      </div>
      <template slot="prevButton"><i class="fas fa-arrow-left" :style="{color: $vuetify.theme.primary}"></i></template>
      <template slot="nextButton"><i class="fas fa-arrow-right" :style="{color: $vuetify.theme.primary}"></i></template>
    </agile>
    <agile class="thumbnails hidden-sm-and-down" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
      <div class="slide slide--thumbniail" v-for="(image, index) in computedImages" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
        <img :src="image"/>
      </div>
    </agile>
  </div>
</template>

<script>
export default {
  props: {
        thumbnail: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        }
  },
  data() {
    return {
      asNavFor1: [],
			asNavFor2: [],
			options1: {
				dots: false,
				fade: true,
				navButtons: true
			},
			
			options2: {
				autoplay: false,
				centerMode: true,
				dots: false,
				navButtons: false,
				slidesToShow: 3,
				responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },
                    
          {
            breakpoint: 1000,
            settings: {
              navButtons: false
            }
          }
        ]
				
			}
    }
  },

    computed: {
        computedImages() {
            let imgs = this.images.map(image => image)
            imgs.push(this.thumbnail)
            return imgs.reverse()
        }
    },
    mounted() {
        this.asNavFor1.push(this.$refs.thumbnails)
	    this.asNavFor2.push(this.$refs.main)
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/breakpoints.scss";
.main {
  margin-bottom: 30px;
  @media (max-width: $ml) {
    margin-bottom: 0;
  }
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__dot {
  margin: 0 10px;
  &:hover {
    button {
      background-color: #888;
    }
  }

  button {
    background-color: #eee;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    width: 10px;
  }
}
.agile__dot--current {
  button {
    background-color: #888;
  }
}

.slide {
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: -webkit-box;
  display: flex;
  height: 530px;
  -webkit-box-pack: center;
  justify-content: center;
  background-size: cover;
  background-position: center;

  @media (max-width: $ml) {
    height: 350px;
  }

  img {
    width: 100%;
  }
}
.slide-gradient {
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: -moz-linear-gradient(to right,rgba(16,17,18,.1) 0%,rgba(16,17,18,0) 20%,rgba(16,17,18,0) 80%,rgba(16,17,18,.1) 100%,rgba(16,17,18,0) 100%);
    background: -webkit-linear-gradient(to right,rgba(16,17,18,.1) 0%,rgba(16,17,18,0) 20%,rgba(16,17,18,0) 80%,rgba(16,17,18,.1) 100%,rgba(16,17,18,0) 100%);
    background: linear-gradient(to right,rgba(16,17,18,.1) 0%,rgba(16,17,18,0) 20%,rgba(16,17,18,0) 80%,rgba(16,17,18,.1) 100%,rgba(16,17,18,0) 100%);
    z-index: 1;
    pointer-events: none;
  }
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.75;
  }

  img {
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    width: 100%;
    @media screen and (max-width: $ml) {
      // -o-object-fit: contain;
      // object-fit: contain;
    }
  }
}
</style>