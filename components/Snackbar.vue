<template>
  <v-snackbar v-model="show" :color="errorSnack ? 'error' : 'info'" :timeout="0">
    {{message}}
    <v-btn dark @click.native="$store.commit('snackbar/reset')">Close</v-btn>
  </v-snackbar>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {}
  },

  watch: {},

  computed: {
    ...mapGetters({
      show: 'snackbar/show',
      message: 'snackbar/message',
      errorSnack: 'snackbar/errorSnack'
    })
  }
};
</script>