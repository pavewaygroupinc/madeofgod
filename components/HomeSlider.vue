<template>
    <div>
        <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
            <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`">
                <img :data-src="slide.thumbnail" class="slide-img lazyload" :alt="slide.title" />
                <v-layout class="hero-slides-content text-center column fill-height justify-center align-center">
                    <h2>{{slide.title}} <span>{{slide.title}}</span></h2>
                    <p>
                        <i>{{slide.subtitle}}</i>
                    </p>
                    <v-btn rounded dark color="secondary" tag="a" :href="slide.link" large class="text-capitalize btn-discover">Discover More</v-btn>
                </v-layout>
            </div>
        </agile>
        <!-- <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
                <img :src="slide.thumbnail"/>
            </div>
            <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
            <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
        </agile> -->
    </div>
</template>

<script>import { mapGetters } from 'vuex';
export default {
    data () {
		return {
			asNavFor1: [],
			asNavFor2: [],
			options1: {
				dots: false,
				fade: true,
				navButtons: false
			},
			
			options2: {
				autoplay: true,
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
                        navButtons: true
                    }
                }
            ]
				
			},
		}
    },
    
    computed: {
        ...mapGetters([
            'slides'
        ])
    },
	mounted () {
		// this.asNavFor1.push(this.$refs.thumbnails)
		// this.asNavFor2.push(this.$refs.main)
	}
    
}
</script>

<style lang="css" scoped>
.main {
  /* margin-bottom: 10px; */
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
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
.agile__dot--current button, .agile__dot:hover button {
  background-color: #888;
}

.slide {
  -webkit-box-align: center;
          align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: -webkit-box;
  display: flex;
  height: 700px;
  -webkit-box-pack: center;
          justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
@keyframes zoomimage {
    0%   {
      /* transform: scale(0.04); */
    }

    100% {
        transform: scale(1.04);
        -webkit-transition: all 2s ease-in-out;
        -moz-transition: all 2s ease-in-out;
        -o-transition: all 2s ease-in-out;
        -ms-transition: all 2s ease-in-out;
        transition: all 2s ease-in-out;
    }
}
.slide img {
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    width: 100%;
}
.slide-img {
    animation: zoomimage 5s infinite 0.1s ease-in-out;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
}
</style>