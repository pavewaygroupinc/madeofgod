<template>
  <v-layout row>
    <v-flex xs12>
      <v-card color="transparent" tile flat>
        <v-toolbar dark color="transparent" class="elevation-1">
          <v-spacer></v-spacer>
          <v-text-field 
            clearable 
            prepend-icon="search" 
            placeholder="Quick search"
            v-model="searchString" 
            @input="searchPlaylist">
            </v-text-field>
        </v-toolbar>

        <div
          id="scroll-target"
          style="max-height: 550px" 
          class="overflow-y-auto">
          <v-list two-line class="transparent" dark style="height: 550px;" v-scroll:#scroll-target>
            <v-list-item 
              v-for="(track, index) in playlist" 
              :key="track.title"
              v-show="track.display"
              class="mb-1"
              :class="[{selected: track === selectedTrack}, {even: index % 2 == 0}]">
              <v-list-item-avatar tile size="60">
                <img class="lazyload" :data-src="track.thumbnail" :alt="track.title" />
              </v-list-item-avatar>

              <v-list-item-content class="pl-3" @click="selectTrack(track)" @dblclick="playTrack()" style="cursor: pointer;">
                <v-list-item-title>{{ track.title }}</v-list-item-title>
                <v-list-item-title>{{ track.howl.duration() | minutes }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon dark v-if="track == selectedTrack">bar_chart</v-icon>
                <v-btn color="white" aria-label="Download Button" icon tag="a" :href="track.src" download target="_blank" rel="noopener">
                  <v-icon>get_app</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      playlist: Array,
      selectedTrack: Object
    },
    methods: {
      selectTrack (track) {
        this.$emit('selecttrack', track)
      },
      playTrack(index) {
        this.$emit('playtrack', index)
      },
      searchPlaylist () {
        this.playlist.forEach((track) => {
          if (this.searchString) {
            if (!track.title.toLowerCase().includes(this.searchString.toLowerCase())) {
              track.display = false
            } else {
              track.display = true
            }
          } else if (this.searchString === "" || this.searchString === null) {
            track.display = true
          }
        })
      },
      downloadItem ({ url, label }) {
        this.$axios.get(url, { responseType: 'blob' })
          .then(response => {
            const blob = new Blob([response.data], { type: 'audio/mpeg' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = label
            link.click()
            URL.revokeObjectURL(link.href)
          }).catch(console.error)
      }
    },
    data () {
      return {
        searchString: "",
      }
    }
  };
</script>

<style scoped>
  .selected {
    background-color:  orange !important;
  }
  .even {
    /*background-color: #505050*/
  }
  .playlist {
    overflow: auto
  }
</style>
