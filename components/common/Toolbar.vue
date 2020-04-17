<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      app
      width="256"
      color="white"
      light
    >
      <img :data-src="settings.site_logo" class="lazyload" :alt="settings.site_title" style="height: 12rem">
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/profile">
          <v-list-item-icon>
            <v-icon>shop_two</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profiles</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/music-library">
          <v-list-item-icon>
            <v-icon>shop_two</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Music Library</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/blog">
          <v-list-item-icon>
            <v-icon>library_books</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Blogs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about-us">
          <v-list-item-icon>
            <v-icon>account_box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about-us/contact">
          <v-list-item-icon>
            <v-icon>place</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      color="primary"
      dark
      app
      fixed
      height="85"
    >
      <nuxt-link to="/" class="toolbar-logo">
        <img :data-src="settings.site_logo" class="lazyload" :alt="settings.site_title" />
      </nuxt-link>
      <v-btn text to="/" class="hidden-sm-and-down white--text">Home</v-btn>
      <v-btn text to="/profile" class="hidden-sm-and-down white--text">Profiles</v-btn>
      <v-btn text to="/music-library" class="hidden-sm-and-down white--text">Music Library</v-btn>
      <v-btn text to="/blog" class="hidden-sm-and-down white--text">Blogs</v-btn>
      <v-btn text to="/about-us" class="hidden-sm-and-down white--text">About Us</v-btn>
      <v-btn text to="/about-us/contact" class="hidden-sm-and-down white--text">Contact</v-btn>
      <v-spacer />
      <v-btn aria-label="Social Button" icon class="hidden-sm-and-down" v-for="(social, index) in settings.connect" :key="index" tag="a" target="_Blank" :href="social.url">
        <v-icon color="white">{{social.icon}}</v-icon>
      </v-btn>
      <v-spacer class="hidden-md-and-up"/>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      mini: false
    }
  },

  computed: {
    ...mapGetters([
      'settings'
    ])
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/breakpoints.scss";
.toolbar-logo {
  width: 230px;
  margin-right: 12px;
  img {
    width: 100%;
  }
}
.navbar-link {
    font-weight: 600;
    text-transform: capitalize;
    color: #fff;
    font-size: 16px;
    padding: 0 12px;
    display: block;
    height: 35px;
    line-height: 34px;
}
.navbar-link:focus, .navbar-link:hover {
    color: #d88d06;
}
</style>
