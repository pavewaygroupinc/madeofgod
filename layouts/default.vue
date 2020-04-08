<template>
  <v-app id="app">
    <app-toolbar />
    <v-content>
      <nuxt />
      <snackbar />
      <loader />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Loader from '@/components/Loader.vue'
import Snackbar from '@/components/Snackbar.vue'
import AppFooter from '@/components/common/Footer.vue'
import AppToolbar from '@/components/common/Toolbar.vue'
export default {
  data() {
    return {}
  },

  watch: {},

  computed: {
    ...mapGetters({})
  },

  components: {
    AppToolbar,
    AppFooter,
    Snackbar,
    Loader
  },

  mounted() {}
};
</script>

<style lang="scss" scoped></style>

