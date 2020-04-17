<template>
  <v-card flat color="transparent" class="white--text">
    <v-container grid-list-xs>
      <v-layout row wrap>
      <v-flex xs12 md2>
        <img
          :data-src="trackInfo.artwork"
          class="lazyload"
          :alt="trackInfo.title"
        />
      </v-flex>
      <v-flex xs12 md10>
        <div class="song-artist">Artist: {{ (trackInfo.artist) ? $options.filters.getProfileById(trackInfo.artist).name : "Unknown Artist"  }} </div>
        <div class="song-title">Title: {{ trackInfo.title }}</div>
        <div class="song-album">Date: {{$options.filters.monthDay(trackInfo.date)}}</div>
      </v-flex>
        <v-flex xs12>
          <v-card tile>
            <v-toolbar color="transparent">
              <v-toolbar-items>
                <v-icon @click="playTrack()" style="cursor: pointer;">play_arrow</v-icon>
                <v-icon @click="pauseTrack" style="cursor: pointer;">pause</v-icon>
                <v-icon @click="skipTrack('prev')" style="cursor: pointer;">skip_previous</v-icon>
                <v-icon @click="skipTrack('next')" style="cursor: pointer;">skip_next</v-icon>
              </v-toolbar-items>
              <span class="">{{ trackInfo.seek | minutes }}/{{ trackInfo.duration | minutes }}</span>
              <v-spacer/>
              <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text icon @click="toggleMute">
                  <template v-if="!this.muted">
                    <v-icon v-if="this.volume >= 0.5">volume_up</v-icon>
                    <v-icon v-else-if="this.volume > 0">volume_down</v-icon>
                    <v-icon v-else>volume_mute</v-icon>
                  </template>
                  <v-icon v-show="this.muted">volume_off</v-icon>
                </v-btn>
                <v-spacer/>
                <v-slider class="mt-3" v-model="volume" @input="updateVolume(volume)" max="1" step="0.1" style="width: 120px;" track-color="primary"/>
                <span class="mt-3 ml-2">{{ this.volume * 100 + '%' }}</span>
                <v-btn icon><v-icon>get_app</v-icon></v-btn>
              </v-toolbar-items>
            </v-toolbar>
			        <v-progress-linear
			          v-model="trackProgress"  
                @click="updateSeek($event)"
			          class="my-0"
			          color="primary"
			          height="5"
			        />
			    </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import {Howl, Howler} from 'howler'
  export default {
    props: {
      loop: Boolean,
      shuffle: Boolean,
      progress: Number,
      trackInfo: Object
    },
    data () {
      return {
        volume: 0.5,
        muted: false
      }
    },
    computed: {
      trackProgress () {
        return this.progress * 100
      },
    },
    created: function () {
      Howler.volume(this.volume)
    },
    methods: {
      playTrack(index) {
        this.$emit('playtrack', index)
      },
      pauseTrack() {
        this.$emit('pausetrack')
      },
      stopTrack() {
        this.$emit('stoptrack')
      },
      skipTrack (direction) {
          this.$emit('skiptrack', direction)
      },
      updateVolume (volume) {
        Howler.volume(volume)
      },
      toggleMute () {
        Howler.mute(!this.muted)
        this.muted = !this.muted
      },
      toggleLoop () {
        this.$emit('toggleloop', !this.loop)
      },
      toggleShuffle () {
        this.$emit('toggleshuffle', !this.shuffle)
      },
      updateSeek (event) {
        let el = document.querySelector(".progress-linear__bar"),
            mousePos = event.offsetX,
            elWidth = el.clientWidth,
            percents = (mousePos / elWidth) * 100
        this.$emit('updateseek', percents)
      }
    } 
  };
</script>

<style scoped>
	.song-artist, .song-title, .song-album {
		font-size: 14px;
    margin: 7px;
    font-weight: 600;
	}
</style>
