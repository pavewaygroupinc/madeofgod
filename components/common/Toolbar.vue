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
      <img src="/logo.png" :alt="appName" style="height: 12rem">
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
        <v-list-item to="/profiles">
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
        <v-list-item to="/blogs">
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
        <img src="/logo_text.png" :alt="appName" />
      </nuxt-link>
      <v-btn text to="/" class="hidden-sm-and-down">Home</v-btn>
      <v-btn text to="/profiles" class="hidden-sm-and-down">Profiles</v-btn>
      <v-btn text to="/music-library" class="hidden-sm-and-down">Music Library</v-btn>
      <v-btn text to="/blogs" class="hidden-sm-and-down">Blogs</v-btn>
      <v-btn text to="/about-us" class="hidden-sm-and-down">About Us</v-btn>
      <v-btn text to="about-us/contact" class="hidden-sm-and-down">Contact</v-btn>
      <v-spacer />
      <v-btn icon class="hidden-sm-and-down">
        <v-icon>fab fa-facebook-f</v-icon>
      </v-btn>
      <v-btn icon class="hidden-sm-and-down">
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
      <v-btn icon class="hidden-sm-and-down">
        <v-icon>fab fa-instagram</v-icon>
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
      appName: process.env.appName,
      drawer: false,
      mini: false,
      items: [
        { icon: 'keyboard_arrow_up', 'icon-alt': 'keyboard_arrow_down',
          text: 'Home',
          model: false,
          children: [
            { icon: 'dashboard', text: 'Dashboard', to: 'dashboard' },
            { icon: 'work', text: 'Siteinfo', to: 'siteinfo' },
            { icon: 'people', text: 'Users', to: 'users' },
            { icon: 'slideshow', text: 'Slides', to: 'slides' },
            // { icon: 'account_circle', text: 'Profile', to: 'auth.profile' },
          ]
        },
        { icon: 'keyboard_arrow_up', 'icon-alt': 'keyboard_arrow_down',
          text: 'Manage',
          model: false,
          children: [
            { icon: 'event', text: 'Events', to: 'events' },
            // { icon: 'library_music', text: 'Songs', to: 'auth.songs' },
            { icon: 'collections_bookmark', text: 'Articles', to: 'articles' },
            // { icon: 'fas fa-school', text: 'Schools', to: 'erp.schools' },
            // { icon: 'location_city', text: 'Departments', to: 'erp.departments' },
          ]
        },
      ]
    }
  },

  computed: {
    ...mapGetters({})
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
