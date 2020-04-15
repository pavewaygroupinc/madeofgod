<template>
	<v-container fluid grid-list-xl>
    	<v-layout row wrap>
        	<v-flex md8>
                <section class="music-library--area section-padding-100">
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
						:trackInfo="getTrackInfo" 
					/>
					<music-list :playlist="playlist"
						:selectedTrack="selectedTrack"
						@selecttrack="selectTrack"
						@playtrack="play" 
					/>
                </section>
            </v-flex>
            <v-flex md4>
                <section class="">
					<artist-card v-if="getTrackInfo.artist" :profile="$options.filters.getProfileById(getTrackInfo.artist)" />
                </section>
            </v-flex>
        </v-layout>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex'
	import {Howl, Howler} from 'howler'
	import MusicList from './MusicList.vue'
	import PlayerControls from './PlayerControls.vue'
	import ArtistCard from './ArtistCard'
	export default {
	    data () {
	      return {
	        playlist: this.$options.filters.getSongs(),
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
			ArtistCard,
			PlayerControls
		},

	    computed: {
	    	...mapGetters({}),
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
