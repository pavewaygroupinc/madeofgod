<template>
  <v-card
    class="single-profile--content my-4 elevation-10"
    flat
    width="400"
  >
    <nuxt-link :to="profile._path">
        <img :data-src="profile.thumbnail" class="profile-img lazyload" :alt="profile.name" />
    </nuxt-link>

    <div class="share-count">
      <span class="share-icon"> 
        <v-btn rounded fab small color="primary">
          <v-icon>share</v-icon> 
        </v-btn>
      </span>
      <social-sharing :url="profile._path | getFullUrl"
        :title="profile.seo_title"
        :description="profile.seo_description"
        inline-template>
        <div class="share-social-list">
          <network network="facebook" class="social_icon" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #3a579a; border-radius: 100px; cursor: pointer;">
            <i class="fab fa-facebook-f white--text" style="font-size: 1.6em; transform: translate(90%, 25%);"></i>
          </network>
          <network network="twitter" class="et_social_icon my-1" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #00abf0; border-radius: 100px; cursor: pointer;">
            <i class="fab fa-twitter white--text" style="font-size: 1.6em; transform: translate(30%, 25%)"></i>
          </network>
          <network network="pinterest" class="et_social_icon" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #cd1c1f; border-radius: 100px; cursor: pointer;">
            <i class="fab fa-pinterest-p white--text" style="font-size: 1.6em; transform: translate(50%, 30%)"></i>
          </network>
        </div>
      </social-sharing>
    </div>

    <v-card-title>
      <nuxt-link :to="profile._path">{{profile.name}}</nuxt-link>
    </v-card-title>

    <v-card-text>
      <div>Genre</div>
      <div class="subtitle-1">
        <nuxt-link :to="`/genre/${$options.filters.slugify($options.filters.getGenreById(profile.genre).title)}`">{{$options.filters.getGenreById(profile.genre).title}}</nuxt-link>
      </div>

      <div v-text="profile.summary"/>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="pb-0 pt-6">Other Info</v-card-title>

    <v-card-actions class="mx-3">
      <span>
        Gender: <strong>{{profile.gender}}</strong>
      </span>
      <v-spacer/>
      <span>
        Country: <strong>{{profile.country}}</strong>
      </span>
    </v-card-actions>

    <v-card-actions class="mx-3">
      <nuxt-link :to="profile._path">Read more</nuxt-link>
      <v-spacer/>
      <v-avatar size="36px">
        <img
          :src="$options.filters.getAuthorById(profile.author).thumbnail"
          :alt="$options.filters.getAuthorById(profile.author).name"
        >
    </v-avatar>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
        profile: {
            type: Object,
            required: true
        }
    },
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style lang="scss" scoped>
.single-profile--content {
  .profile-img {
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
    height: 400px;
    width: 400px;
    object-fit: cover;
    object-position: top;
    -webkit-object-fit: cover;
    -moz-object-fit: cover;
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