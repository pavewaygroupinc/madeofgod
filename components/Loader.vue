<template>
  <v-dialog
    v-model="dialog"
    persistent
    width="300"
  >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          {{message}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters({
      dialog: 'loader/loader',
      message: 'loader/message'
    })
  }
};
</script>