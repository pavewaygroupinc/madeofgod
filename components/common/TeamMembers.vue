<template>
  <section class="our-team">
    <h1 class="team-heading">
      The Team
    </h1>
    <p class="team-desc">
      Sed porta cursus enim, vitae maximus felis luctus iaculis.
    </p>
    <v-container mt-10>
      <masonry
        :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
        :gutter="{default: '30px', 700: '15px'}"
      >
        <team-card :team="author" v-for="(author, index) in authors" :key="index"/>
       </masonry>        
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamCard from '@/components/TeamCard'
export default {
  data() {
    return { }
  },

  components: {
    TeamCard
  },

  computed: {
    ...mapGetters([
      'authors'
    ])
  }
}
</script>

<style lang="scss" scoped></style>