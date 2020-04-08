<template>
    <div>
        <section class="team-breadcumb bg-overlay2 bg-img">
            <div class="bradcumbContent">
                <h2>The Team</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <v-container grid-list-xl mt-12 class="team--content">
            <v-layout row wrap>
                <v-flex sm12 md6>
                    <v-img src="/ceo.jpg" alt="Prince Mabrice" />
                </v-flex>
                <v-flex sm12 md6>
                    <h2>
                      Hello, <br />
                      It’s Prince Mabrice
                    </h2>
                    <p>
                      Nulla pretium tincidunt felis, nec sollicitudin mauris lobortis in. Aliquam eu feugiat ligula, 
                      laoreet efficitur nulla. Morbi nec neque porta, elementum massa at, vehicula nunc. Nulla facilisi. 
                      Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                      Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                      Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                      luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-xl mt-12 class="team--content">
            <v-layout row wrap>
                <v-flex sm12 md6>
                    <h2>
                      Hello, <br />
                      It’s Mbiarrambang Alain
                    </h2>
                    <p>
                      Nulla pretium tincidunt felis, nec sollicitudin mauris lobortis in. Aliquam eu feugiat ligula, 
                      laoreet efficitur nulla. Morbi nec neque porta, elementum massa at, vehicula nunc. Nulla facilisi. 
                      Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                      Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                      Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                      luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </v-flex>
                <v-flex sm12 md6>
                    <v-img src="/ceo.jpg" alt="Prince Mabrice" />
                </v-flex>
            </v-layout>
        </v-container>
        <section class="team-banner section-padding-100 bg-img bg-overlay2 mt-12">
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
            title: 'Contact'
        }
    },
  components: {},

    data() {
        return {
            appName: process.env.appName
        }
    },

    computed: {
        ...mapGetters({})
    }
};
</script>

<style lang="scss" scoped>
.team-breadcumb {
    background-image: url(/about.jpg);
    position: relative;
    z-index: 10;
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
.team--content {
  h2 {
    margin-bottom: 35px;
    color: #262626;
    line-height: 1.3;
    font-weight: 700;
    font-size: 2rem;
  }
  
  p {
    color: #6a6a6a;
    font-size: 1.1rem;
    line-height: 2;
    font-weight: 500;
  }
}
.our-team {
  margin-top: 8rem;
  .team-heading {
    color: #262626;
    font-size: 48px;
    line-height: 1.3;
    margin-bottom: .5rem;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
  }
  .team-desc {
    color: #c1c1c1;
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
  }
  .team-name {
    color: #262626;
    font-size: 1.3rem;
    line-height: 1.3;
    margin-bottom: .5rem;
    text-transform: capitalize;
    font-weight: 800;
  }
  .team-position {
    color: #414040;
    font-size: 0.9rem;
    line-height: 1.3;
    margin-bottom: .5rem;
    text-transform: capitalize;
    font-weight: 800;
  }
  .team-email {
    color: #c1c1c1;
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.3;
    font-weight: 700;
  }
}
.swiper-container {
  height: auto!important;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  height: 200px;
}
.team-banner {
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
