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
                    <v-flex md8>
                        <section class="section-padding-100">
                            <v-container>
                                <masonry
                                    :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
                                    :gutter="{default: '30px', 700: '15px'}"
                                >
                                    <profile-card v-for="(item, index) in 12" :key="index"/>
                                </masonry>
                            </v-container>
                        </section>
                    </v-flex>
                    <v-flex md4>
                        <section class="search--container section-padding-100 bg-img">
                            <v-container fluid grid-list-xl mt-12 class="search--content">
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
import ProfileCard from '@/components/ProfileCard'
export default {
  head() {
    return {
      title: 'Artist Profiles'
    }
  },
  
  components: {
      ProfileCard
  },

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
</style>
