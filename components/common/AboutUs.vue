<template>
    <section class="about-us section-padding-100 bg-img bg-overlay">
      <div class="section-heading">
        <h1 class="">
          About Us
        </h1>
      </div>
      <v-container grid-list-xl mt-12 class="about--content">
        <v-layout row wrap>
          <v-flex sm12 md6>
            <v-img :src="about.thumbnail" :alt="about.title" />
          </v-flex>
          <v-flex sm12 md6>
            <h2>
              Hello, <br />
              welcome on board.
            </h2>
            <div v-html="$md.render(about.body)" />
            <!-- <blockquote class="white--text font-italic font-weight-black subtitle pl-1" style="border-left: #fff solid 5px;">
              Your number one online portal for Christian Infotainment..
            </blockquote> -->
          </v-flex>
        </v-layout>
      </v-container>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {

  computed: {
    ...mapGetters([
      'about'
    ])
  }
    
}
</script>

<style lang="scss">
@import "~/assets/breakpoints.scss";
.about-us {

  .about--content {
    h2 {
      color: #fff;
    }
      
    p {
      color: #fff;
    }
  }
} 
</style>