<template>
    <section class="top-songs section-padding-100">
      <v-container fluid grid-list-xs>
        <div class="section-heading">
          <h1 class="secondary--text">
            Recently Added
          </h1>
        </div>
        <v-layout row wrap>
          <v-flex sm6 xs12 md3>
            <v-card
              class="mx-auto single-music-player"
              flat
            >
              <v-img
                class="white--text align-end"
                src="/music/music1.jpg"
                contain
              >
                <v-card-text class="music-info">
                  <v-layout>
                    <v-flex xs6>
                      <div>Whisper</div>

                      <div>Prosper Menko</div>
                    </v-flex>
                    <v-flex xs6 class="text-right">
                      <v-btn color="primary" dark icon class="music-play-button">
                        <v-icon large>play_circle_outline</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-img>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 md3>
            <v-card
              class="mx-auto single-music-player"
              flat
            >
              <v-img
                class="white--text align-end"
                src="/music/music2.jpg"
                contain
              >
                <v-card-text class="music-info">
                  <v-layout>
                    <v-flex xs6>
                      <div>Whisper</div>

                      <div>Prosper Menko</div>
                    </v-flex>
                    <v-flex xs6 class="text-right">
                      <v-btn color="primary" dark icon class="music-play-button">
                        <v-icon large>play_circle_outline</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-img>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 md3>
            <v-card
              class="mx-auto single-music-player"
              flat
            >
              <v-img
                class="white--text align-end"
                src="/music/music3.jpg"
                contain
              >
                <v-card-text class="music-info">
                  <v-layout>
                    <v-flex xs6>
                      <div>Whisper</div>

                      <div>Prosper Menko</div>
                    </v-flex>
                    <v-flex xs6 class="text-right">
                      <v-btn color="primary" dark icon class="music-play-button">
                        <v-icon large>play_circle_outline</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-img>
            </v-card>
          </v-flex>
          <v-flex sm6 xs12 md3>
            <v-card
              class="mx-auto single-music-player"
              flat
            >
              <v-img
                class="white--text align-end"
                src="/music/music4.jpg"
                contain
              >
                <v-card-text class="music-info">
                  <v-layout>
                    <v-flex xs6>
                      <div>Whisper</div>

                      <div>Prosper Menko</div>
                    </v-flex>
                    <v-flex xs6 class="text-right">
                      <v-btn color="primary" dark icon class="music-play-button">
                        <v-icon large>play_circle_outline</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "~/assets/breakpoints.scss";
.section-heading {
    h1 {
        @media (max-width: $ml) {
            font-size: 2.5em;
        }
    }
}
</style>