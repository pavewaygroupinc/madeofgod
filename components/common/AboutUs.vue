<template>
    <section class="about-us section-padding-100 bg-img bg-overlay">
      <div class="section-heading">
        <h1 class="">
          About Us
        </h1>
        <!-- <p class="team-desc">
          Sed porta cursus enim, vitae maximus felis luctus iaculis.
        </p> -->
      </div>
      <v-container grid-list-xl mt-12 class="about--content">
        <v-layout row wrap>
          <v-flex sm12 md6>
            <v-img src="/madeofgod.jpg" alt="Ubangoh loretha" />
          </v-flex>
          <v-flex sm12 md6>
            <h2>
              Hello, <br />
              welcome on board.
            </h2>
            <p>
              This is MadeofGod t.v.,  a place where the source of gospel infotainment lies. Here, we make visions collide and create artistic dreams by casting your ideas to life.
              So please, allow us spice up your world with infotainment beyond the reel.
            </p>
            <blockquote class="white--text font-italic font-weight-black subtitle pl-1" style="border-left: #fff solid 5px;">
              Your number one online portal for Christian Infotainment..
            </blockquote>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
</template>

<script>
export default {
    
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