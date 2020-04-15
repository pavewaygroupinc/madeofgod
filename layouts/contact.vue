<template>
  <v-app id="app">
    <app-toolbar v-if="!isEmbedded" />
    <v-content>
      <nuxt />
    </v-content>
    <section class="page-banner section-padding-100 bg-img bg-overlay2 mt-12" v-if="!isEmbedded">
      <v-container grid-list-lg>
                <v-layout row wrap>
                    <v-flex md9 xs12>
                        <h3>
                            Contact us now
                        </h3>
                        <h1>
                            Do you have a question?
                        </h1>
                        <p>
                            Morbi quis venenatis augue, a tincidunt libero. Sed id porttitor elit, eu ultricies mauris.
                        </p>
                    </v-flex>
                    <v-flex md3 xs12>
                        <nuxt-link color="primary" class="contact-us-btn btn" to="/about-us/contact">
                            Contact us
                        </nuxt-link>
                    </v-flex>
                </v-layout>
      </v-container>
    </section>
    <app-footer v-if="!isEmbedded" />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import AppFooter from '@/components/common/Footer.vue'
import AppToolbar from '@/components/common/Toolbar.vue'
export default {
  data() {
    return {}
  },

  watch: {},

  computed: {
    ...mapGetters({}),

    isEmbedded() {
      return this.$route.query.hasOwnProperty('content_embed') ? true : false
    }
  },

  components: {
    AppToolbar,
    AppFooter
  },

  mounted() {}
};
</script>

<style lang="scss" scoped></style>

