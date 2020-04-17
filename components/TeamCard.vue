<template>
  <v-card
    class="single-team--content my-4 elevation-10"
    flat
  >    
    <img class="team-img lazyload" :data-src="team.thumbnail" :alt="team.name" />
    <v-card-title>
      {{team.name}}
    </v-card-title>

    <v-card-text>
      <div>Job Title</div>
      <div class="subtitle-1 font-weight-bold">
        {{team.job_title}}
      </div>

      <div v-html="$md.render(team.body)" />
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="pb-0 pt-6">Social Connect</v-card-title>

    <v-card-actions class="mx-3">
        <v-btn small dark fab color="blue" v-if="team.facebook" tag="a" :href="team.facebook">
            <v-icon>fab fa-facebook-f</v-icon>
        </v-btn>
        <v-btn small dark fab color="blue" v-if="team.twitter" tag="a" :href="team.twitter">
            <v-icon>fab fa-twitter</v-icon>
        </v-btn>
        <v-btn small dark fab color="purple" v-if="team.instagram" tag="a" :href="team.instagram">
            <v-icon>fab fa-instagram</v-icon>
        </v-btn>
        <v-btn small dark fab color="blue" v-if="team.linkedin" tag="a" :href="team.linkedin">
            <v-icon>fab fa-linkedin-in</v-icon>
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: {
        team: {
            type: Object,
            required: true
        }
    },
    data() {
        return {}
    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.single-team--content {
  .team-img {
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
    --aspect-ratio-w: 4;
    object-fit: cover;
    width: 100%;
    &:hover {
      transform: scale(1.04);
      -webkit-transition: all 2s ease-in-out;
      -moz-transition: all 2s ease-in-out;
      -o-transition: all 2s ease-in-out;
      -ms-transition: all 2s ease-in-out;
      transition: all 2s ease-in-out;
    }
  }
}
</style>