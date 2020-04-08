<template>
    <div>
        <section class="profile-breadcumb bg-overlay2 bg-img">
            <div class="bradcumbContent">
                <h2>Artist Profiles</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <section class="profiles-container">
            <v-container fluid grid-list-xl>
                <v-layout row wrap>
                    <v-flex md4>
                        <section class="music-search--container section-padding-100 bg-img">
                            <v-container fluid grid-list-xl mt-12 class="music-search--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <div class="search-your-shows-content">
                                            <h2>Filter results</h2>
                                            <div class="search-form">
                                                <v-form class="justify-content-center">
                                                    <v-layout wrap row>
                                                        <v-flex>
                                                            <v-text-field solo label="Artist genre" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-text-field solo label="Artist location" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-text-field solo label="Artist name" />
                                                        </v-flex>
                                                        <!-- <v-flex>
                                                            <v-text-field solo label="Price Range" />
                                                        </v-flex> -->
                                                        <v-flex>
                                                            <button type="submit" class="btn musica-btn m-2">Search</button>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-form>
                                            </div>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </section>
                    </v-flex>
                    <v-flex md8>

                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="profile-banner section-padding-100 bg-img bg-overlay2 mt-12">
            <v-container>
                <v-layout>
                    <v-flex xs8>
                        <h3>
                            Unique Way to see a
                        </h3>
                        <h1>
                            Music Concert
                        </h1>
                        <p>
                            Morbi quis venenatis augue, a tincidunt libero. Sed id porttitor elit, eu ultricies mauris.
                        </p>
                        <v-btn color="primary" class="contact-us-btn mt-8" :to="{name:'contact'}">
                            Contact us
                        </v-btn>
                    </v-flex>
                    <v-flex xs4></v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: 'Artist Profiles'
    }
  },
  
  components: {},

  data() {
    return {
      
    }
  },

    computed: {
        ...mapGetters({})
    }
};
</script>

<style lang="scss" scoped>
.profile-breadcumb {
    background-image: url(/about.jpg);
    position: relative;
    z-index: 3;
    width: 100%;
    height: 345px;
    .bradcumbContent {
        position: absolute;
        width: 392px;
        height: 78px;
        bottom: -39px;
        left: 50%;
        margin-left: -196px;
        z-index: 100;
        background: #FE0000;
        background: -webkit-linear-gradient(to right,#FE0000,#0c0527);
        background: linear-gradient(to right,#FE0000,#0c0527);
        text-align: center;
        h2 {
            font-size: 36px;
            color: #fff;
            margin-bottom: 0;
            line-height: 78px;
            font-weight: 900;
        }
    }
}
.profile-banner {
    background-image: url(/concert.jpg);

    h3, h1, p {
        color: #fff;
        margin-bottom: 0;
        line-height: 1.3;
        font-weight: 700;
        font-size: 1.5rem;
    }
    
    h1 {
        font-size: 60px;
        font-weight: 900;
        color: #fff;
    }

    p {
        font-weight: 600;
        color: #fff;
        margin-bottom: 0;
    }
}
.music-search--container {
    position: relative;
    z-index: 1;
    width: 100%;
    background-image: url(/bg-6.jpg);
    position: sticky;
    top: 129px;

    .search-your-shows-content {
        position: relative;
        z-index: 1;
        margin: 100px 7% 150px;
        padding: 60px 30px;
        background: #FE0000;
        background: -webkit-linear-gradient(to right,#FE0000,#0c0527);
        background: linear-gradient(to right,#FE0000,#0c0527);
        opacity: .8;

        h2 {
            font-size: 38px;
            color: #fff;
            font-weight: 900;
            text-align: center;
            margin-bottom: 50px;
            line-height: 1.3;
        }

        .musica-btn {
            background: #FE0000;
            background: -webkit-linear-gradient(to right,#FE0000,#0c0527);
            background: linear-gradient(to right,#FE0000,#0c0527);
            -webkit-transition-duration: 500ms;
            transition-duration: 500ms;
            position: relative;
            z-index: 1;
            display: inline-block;
            min-width: 133px;
            height: 50px;
            color: #fff;
            border: none;
            border-radius: 0;
            padding: 0 20px;
            font-size: 12px;
            line-height: 42px;
            font-weight: 700;
            text-transform: uppercase;
        }

        .musica-btn:hover, .musica-btn:focus {
            font-size: 12px;
            font-weight: 700;
            box-shadow: 0 0 50px 0 rgba(0,0,0,.3);
            color: #fff;
        }
    }
}
</style>
