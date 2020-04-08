<template>
    <div>
        <section class="music-breadcumb bg-overlay2 bg-img">
            <div class="bradcumbContent">
                <h2>Music Store</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <section class="music-search--container section-padding-100 bg-img">
            <v-container fluid grid-list-xl mt-12 class="music-search--content">
                <v-layout row wrap>
                    <v-flex sm12>
                        <div class="search-your-shows-content">
                            <h2>Search Your Music</h2>
                            <div class="search-form">
                                <v-form class="justify-content-center">
                                    <v-layout>
                                        <v-flex>
                                            <v-text-field solo label="Your Country" />
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field solo label="City" />
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field solo label="Date" />
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field solo label="Price Range" />
                                        </v-flex>
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
        <section class="trending-music-area section-padding-100">
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="section-heading">
                            <h2>
                                TRENDING SONGS
                            </h2>
                            <h6>
                                Sed porta cursus enim, vitae maximus felis luctus iaculis.
                            </h6>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card flat color="transparent" class="trending-music-content">
                            <v-layout row wrap class="single-trending-music">
                                <!-- <v-flex>
                                    <div class="music-date">
                                        <h2>17 <span>July</span></h2>
                                    </div>
                                </v-flex> -->
                                <v-flex>
                                    <div class="music-desc d-flex align-items-center">
                                        <div class="music-img">
                                            <v-img src="/music/s1.jpg">
                                                <v-layout class="bg-overlay2" column fill-height justify-center align-center>
                                                    <v-btn color="primary" dark icon>
                                                        <v-icon>play_circle_outline</v-icon>
                                                    </v-btn>
                                                </v-layout>
                                            </v-img>
                                        </div>
                                        <div class="music-name">
                                            <h6>Electric castle Festival</h6>
                                            <p>Cluj, Romania</p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="music-location">
                                        <p>At the Castle</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="music-time">
                                        <p>20:30</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="buy-tickets">
                                        <a href="#" class="btn buy-ticket-btn">Buy Song</a>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card flat color="transparent" class="trending-music-content">
                            <v-layout row wrap class="single-trending-music">
                                <!-- <v-flex>
                                    <div class="music-date">
                                        <h2>17 <span>July</span></h2>
                                    </div>
                                </v-flex> -->
                                <v-flex>
                                    <div class="music-desc d-flex align-items-center">
                                        <div class="music-img">
                                            <v-img src="/music/s2.jpg">
                                                <v-layout class="bg-overlay2" column fill-height justify-center align-center>
                                                    <v-btn color="primary" dark icon>
                                                        <v-icon>play_circle_outline</v-icon>
                                                    </v-btn>
                                                </v-layout>
                                            </v-img>
                                        </div>
                                        <div class="music-name">
                                            <h6>Electric castle Festival</h6>
                                            <p>Cluj, Romania</p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="music-location">
                                        <p>At the Castle</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="music-time">
                                        <p>20:30</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="buy-tickets">
                                        <a href="#" class="btn buy-ticket-btn">Buy Song</a>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card flat color="transparent" class="trending-music-content">
                            <v-layout row wrap class="single-trending-music">
                                <!-- <v-flex>
                                    <div class="music-date">
                                        <h2>17 <span>July</span></h2>
                                    </div>
                                </v-flex> -->
                                <v-flex>
                                    <div class="music-desc d-flex align-items-center">
                                        <div class="music-img">
                                            <v-img src="/music/s3.jpg">
                                                <v-layout class="bg-overlay2" column fill-height justify-center align-center>
                                                    <v-btn color="primary" dark icon>
                                                        <v-icon>play_circle_outline</v-icon>
                                                    </v-btn>
                                                </v-layout>
                                            </v-img>
                                        </div>
                                        <div class="music-name">
                                            <h6>Electric castle Festival</h6>
                                            <p>Cluj, Romania</p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="music-location">
                                        <p>At the Castle</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="music-time">
                                        <p>20:30</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="buy-tickets">
                                        <a href="#" class="btn buy-ticket-btn">Buy Song</a>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card flat color="transparent" class="trending-music-content">
                            <v-layout row wrap class="single-trending-music">
                                <!-- <v-flex>
                                    <div class="music-date">
                                        <h2>17 <span>July</span></h2>
                                    </div>
                                </v-flex> -->
                                <v-flex>
                                    <div class="music-desc d-flex align-items-center">
                                        <div class="music-img">
                                            <v-img src="/music/s4.jpg">
                                                <v-layout class="bg-overlay2" column fill-height justify-center align-center>
                                                    <v-btn color="primary" dark icon>
                                                        <v-icon>play_circle_outline</v-icon>
                                                    </v-btn>
                                                </v-layout>
                                            </v-img>
                                        </div>
                                        <div class="music-name">
                                            <h6>Electric castle Festival</h6>
                                            <p>Cluj, Romania</p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="music-location">
                                        <p>At the Castle</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="music-time">
                                        <p>20:30</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="buy-tickets">
                                        <a href="#" class="btn buy-ticket-btn">Buy Song</a>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="featured-music-area section-padding-100">
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="section-heading">
                            <h2>
                                FEATURED SONGS
                            </h2>
                            <h6>
                                Sed porta cursus enim, vitae maximus felis luctus iaculis.
                            </h6>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout>
                <div v-swiper:mySwiper="options">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide single-featured-music">
                            <v-img src="/music/fs1.jpg" height="650" width="350">
                                <v-layout column fill-height align-center justify-end>
                                    <div class="featured-music-content">
                                        <div class="music-text">
                                            <h4>Perfection</h4>
                                            <p>Rozey</p>
                                            <a href="#" class="buy-ticket-btn">Buy Song</a>
                                        </div>
                                        <div class="bg-gradients"></div>
                                    </div>
                                </v-layout>
                            </v-img>
                        </div>
                        <div class="swiper-slide single-featured-music">
                            <v-img src="/music/fs2.jpg" height="650" width="350">
                                <v-layout column fill-height align-center justify-end>
                                    <div class="featured-music-content">
                                        <div class="music-text">
                                            <h4>I Have Moved</h4>
                                            <p>Testimony x Isreal Strong</p>
                                            <a href="#" class="buy-ticket-btn">Buy Song</a>
                                        </div>
                                        <div class="bg-gradients"></div>
                                    </div>
                                </v-layout>
                            </v-img>
                        </div>
                        <div class="swiper-slide single-featured-music">
                            <v-img src="/music/fs3.jpg" height="650" width="350">
                                <v-layout column fill-height align-center justify-end>
                                    <div class="featured-music-content">
                                        <div class="music-text">
                                            <h4>Walking On Water</h4>
                                            <p>Martin PK</p>
                                            <a href="#" class="buy-ticket-btn">Buy Song</a>
                                        </div>
                                        <div class="bg-gradients"></div>
                                    </div>
                                </v-layout>
                            </v-img>
                        </div>
                        <div class="swiper-slide single-featured-music">
                            <v-img src="/music/fs4.jpg" height="650" width="350">
                                <v-layout column fill-height align-center justify-end>
                                    <div class="featured-music-content">
                                        <div class="music-text">
                                            <h4>whisper</h4>
                                            <p>Prosper Menko</p>
                                            <a href="#" class="buy-ticket-btn">Buy Song</a>
                                        </div>
                                        <div class="bg-gradients"></div>
                                    </div>
                                </v-layout>
                            </v-img>
                        </div>
                    </div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </div>
                </v-layout>
            </v-container>
        </section>
        <section class="music-banner section-padding-100 bg-img bg-overlay2 mt-12">
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
                        <v-btn color="primary" class="contact-us-btn mt-8" :to="{name:'music.catalogue'}">
                            View Catalogue
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
            title: 'Music Store'
        }
    },
  components: {},

    data() {
        return {
            appName: process.env.appName,
            options: {
                slidesPerView: 3,
                spaceBetween: 30,
                mousewheel: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },

    computed: {
        ...mapGetters({})
    }
};
</script>

<style lang="scss" scoped>
.music-breadcumb {
    background-image: url(/music.jpg);
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
.music-search--container {
    position: relative;
    z-index: 1;
    width: 100%;
    background-image: url(/bg-6.jpg);

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
            font-size: 48px;
            color: #fff;
            font-weight: 900;
            text-transform: uppercase;
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
.trending-music-area {
    position: relative;
    z-index: 1;
    background-color: #0c0527;

    .section-heading {
        h2 {
            font-size: 48px;
            color: #fff;
            text-transform: uppercase;
            font-weight: 900;
        }

        h6 {
            font-size: 16px;
            margin-bottom: 0;
            color: #c5afd9;
            font-weight: 700;
        }
    }

    .trending-music-content {
        .single-trending-music {
            :first-child {
                padding-top: 0;
            }
            position: relative;
            z-index: 1;
            border-bottom: 1px solid #49445d;
            padding: 25px 0 25px 7rem;
            .music-date {
                h2 {
                    font-size: 48px;
                    color: #fff;
                    text-align: center;
                    margin-bottom: 0;
                    line-height: 1;
                    span {
                        font-size: 16px;
                        color: #fff;
                        font-weight: 500;
                        display: block;
                        line-height: 1.3;
                    }
                }
            }
            .music-desc {
                .music-img {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 84px;
                    flex: 0 0 84px;
                    max-width: 84px;
                    width: 84px;
                    margin-right: 15px;
                }
                .music-name {
                    h6 {
                        font-weight: 900;
                        color: #fff;
                        text-transform: uppercase;
                        margin-bottom: 0;
                    }
                    p {
                        margin-bottom: 0;
                        color: #fff;
                    }
                }
            }
            .music-location {
                p {
                    margin-bottom: 0;
                    color: #fff;
                }
            }
            .music-time {
                p {
                    margin-bottom: 0;
                    color: #fff;
                }
            }
            .buy-tickets {
                .buy-ticket-btn:hover, 
                .buy-ticket-btn:focus {
                    box-shadow: 0 0 60px rgba(255,255,255,.5);
                }
            }
        }
    }
}
.featured-music-area {
    position: relative;
    z-index: 1;

    .section-heading {
        h2 {
            font-size: 48px;
            color: #262626;
            text-transform: uppercase;
            font-weight: 900;
        }

        h6 {
            font-size: 16px;
            margin-bottom: 0;
            color: #c1c1c1;
            font-weight: 700;
        }
    }

    .single-featured-music {
        .featured-music-content {
            -webkit-transition-duration: 800ms;
            transition-duration: 800ms;
            position: absolute;
            background-color: #fff;
            width: calc(100% - 60px);
            bottom: 30px;
            left: 30px;
            z-index: 99;
            .music-text {
                padding: 30px 35px 15px;
                h4 {
                    -webkit-transition-duration: 500ms;
                    transition-duration: 500ms;
                    font-weight: 900;
                    margin-bottom: 0;
                    line-height: 1;
                }
                p {
                    color: #72728c;
                    font-style: italic;
                    font-size: 14px;
                    margin-bottom: 4px;
                }
            }
        }
    }
    .single-featured-music:hover {
        .v-image__image {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
        .featured-music-content {
            bottom: 80px;
        }
    }
}
.swiper-container {
  height: auto!important;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
//   width: 350px;
}
.music-banner {
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
