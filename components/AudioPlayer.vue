<template>
    <div class="featured-album-area section-padding-100">
        <v-container>
            <v-layout row>
                <v-flex xs12>
                    <v-container class="featured-album-content">
                        <v-layout row wrap>
                            <v-flex md6>
                                <img :data-src="about.thumbnail" class=" lazyload" />
                            </v-flex>
                            <v-flex sm6>
                                <div class="album-songs h-100">
                                    <v-container grid-list-xl>
                                        <v-layout row wrap>
                                            <v-flex md8>
                                                <h6 class="headline font-weight-black" style="color: #c5afd9;">Featured songs</h6>
                                                <!-- <h4>Love is all Around</h4> -->
                                            </v-flex>
                                            <v-flex md4>
                                                <nuxt-link to="/music-library" class="btn buy-ticket-btn">Go to Library</nuxt-link>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                    <v-container grid-list-xl tabindex="1" style="overflow: hidden; outline: none;">
                                        <music-list
                                            :playlist="playlist"
                                            :selectedTrack="selectedTrack"
                                            @selecttrack="selectTrack"
                                            @playtrack="play" 
                                        />
                                    </v-container>

                                    <v-container class="player">
                                        <player-controls :loop="loop"
                                            :shuffle="shuffle"
                                            :progress="progress"
                                            @playtrack="play"
                                            @pausetrack="pause"
                                            @stoptrack="stop"
                                            @skiptrack="skip"
                                            @toggleloop="toggleLoop"
                                            @toggleshuffle="toggleShuffle"
                                            @updateseek="setSeek"
                                            :trackInfo="getTrackInfo" />
                                    </v-container>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {Howl, Howler} from 'howler'
import MusicList from './music/MusicList'
import PlayerControls from './music/PlayerControls'
export default {
	    data () {
	      return {
	        playlist: this.$options.filters.getLatestSongs(),
	        selectedTrack: null,
	        index: 0,
	        playing: false,
	        loop: false,
	        shuffle: false,
	        seek: 0
	      }
	    },

		components: {
			MusicList,
			PlayerControls
		},

	    computed: {
	    	...mapGetters([
				'about'
			]),
	      currentTrack () {
	        return this.playlist[this.index]
	      },
	      progress () {
	        if (this.currentTrack.howl.duration() === 0) return 0
	        return this.seek / this.currentTrack.howl.duration()
	      },
	      getTrackInfo () {
	        let artist = this.currentTrack.profile,
	            title = this.currentTrack.title,
	            seek = this.seek,
	            artwork = this.currentTrack.thumbnail,
                duration = this.currentTrack.howl.duration(),
                date = this.currentTrack.date
	        return {
	          artist,
	          title,
	          seek,
	          artwork,
              duration,
              date
	        }
	      }
	    },
	    watch: {
	    	songs(songs) {
	    		if (songs) {
	    			this.playlist = JSON.parse(JSON.stringify(songs))
	    		}
	    	},

	      playing(playing) {
	        this.seek = this.currentTrack.howl.seek()
	        let updateSeek
	        if (playing) {
	          updateSeek = setInterval(() => {
	            this.seek = this.currentTrack.howl.seek()
	          }, 250)
	        } else {
	          clearInterval(updateSeek)
	        }
	      },
	    },
	created () {
	    this.playlist.forEach( (track) => {
	        track.howl = new Howl({
                src: track.src,
                // html5: true,
                // preload: true,
                // usingWebAudio: true,
                onend: () => {
                    if (this.loop) {
                    this.play(this.index)
                    } else {
                    this.skip('next')
                    }
                }
	        })
	    })
    },
    
	mounted() {},

	    methods: {
	      selectTrack (track) {
	        this.selectedTrack = track
	      },
	      play (index) {
	        let selectedTrackIndex = this.playlist.findIndex(track => track === this.selectedTrack)

	        if (typeof index === 'number') {
	          index = index
	        } else if (this.selectedTrack) {
	          if (this.selectedTrack != this.currentTrack) {
	            this.stop()
	          }
	          index = selectedTrackIndex
	        } else {
	          index = this.index
	        }

	        let track = this.playlist[index].howl

	        if (track.playing()) {
	          return
	        } else {
	          track.play()
	        }
	        
	        this.selectedTrack = this.playlist[index]
	        this.playing = true
	        this.index = index
	      },
	      pause () {
	        this.currentTrack.howl.pause()
	        this.playing = false
	      },
	      stop () {
	        this.currentTrack.howl.stop()
	        this.playing = false
	      },
	      skip (direction) {
	        let index = 0,
	            lastIndex = this.playlist.length - 1

	        if (this.shuffle) {
	          index = Math.round(Math.random() * lastIndex)
	          while (index === this.index) {
	            index = Math.round(Math.random() * lastIndex)
	          }
	        } else if (direction === "next") {
	          index = this.index + 1
	          if (index >= this.playlist.length) {
	            index = 0
	          }
	        } else {
	          index = this.index - 1
	          if (index < 0) {
	            index = this.playlist.length - 1
	          }
	        }

	        this.skipTo(index)
	      },
	      skipTo (index) {
	        if (this.currentTrack) {
	          this.currentTrack.howl.stop()
	        }

	        this.play(index)
	      },
	      toggleLoop (value) {
	        this.loop = value
	      },
	      toggleShuffle (value) {
	        this.shuffle = value
	      },
	      setSeek (percents) {
	        let track = this.currentTrack.howl

	        if (track.playing()) {
	          track.seek((track.duration() / 100) * percents)
	        }
	      }
	    }
	};
</script>

<style lang="scss" scoped>
.featured-album-area {
    // position: relative;
    // z-index: 1;
    background-color: #0c0527;
}

.featured-album-content {
    // position: relative;
    // z-index: 2;
    background-color: #27203f;
    // width: 100%;
	// height: 570px;
	
	img {
		object-fit: cover;
		width: 100%;
	}

    .playlist-title {
        font-weight: 500;
        color: rgba(255,255,255,.5);
        z-index: auto;
        margin-bottom: 0;
        font-size: 1rem;
    }

    .playlist-timer {
        color: rgba(255,255,255,.5);
    }
}
</style>