<template>
    <div>
        <section class="event-breadcumb bg-overlay2 bg-img">
            <div class="bradcumbContent">
                <h2>Events</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <section class="event-search--container section-padding-100 bg-img">
            <v-container fluid grid-list-xl mt-12 class="event-search--content">
                <v-layout row wrap>
                    <v-flex sm12>
                        <div class="search-your-shows-content">
                            <h2>Search Your Events</h2>
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
        <section class="trending-event-area section-padding-100">
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="section-heading">
                            <h2>
                                UPCOMING EVENTS
                            </h2>
                            <h6>
                                Sed porta cursus enim, vitae maximus felis luctus iaculis.
                            </h6>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card flat color="transparent" class="trending-event-content">
                            <v-layout row wrap class="single-trending-event">
                                <v-flex>
                                    <div class="event-date">
                                        <h2>17 <span>July</span></h2>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-desc d-flex align-items-center">
                                        <div class="event-img">
                                            <v-img src="/event/s1.jpg"></v-img>
                                        </div>
                                        <div class="event-name">
                                            <h6>Electric castle Festival</h6>
                                            <p>Cluj, Romania</p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-location">
                                        <p>At the Castle</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-time">
                                        <p>20:30</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="buy-tickets">
                                        <a href="#" class="btn buy-ticket-btn">Buy Ticket(s)</a>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card flat color="transparent" class="trending-event-content">
                            <v-layout row wrap class="single-trending-event">
                                <v-flex>
                                    <div class="event-date">
                                        <h2>17 <span>July</span></h2>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-desc d-flex align-items-center">
                                        <div class="event-img">
                                            <v-img src="/event/s2.jpg"></v-img>
                                        </div>
                                        <div class="event-name">
                                            <h6>Electric castle Festival</h6>
                                            <p>Cluj, Romania</p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-location">
                                        <p>At the Castle</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-time">
                                        <p>20:30</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="buy-tickets">
                                        <a href="#" class="btn buy-ticket-btn">Buy Ticket(s)</a>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card flat color="transparent" class="trending-event-content">
                            <v-layout row wrap class="single-trending-event">
                                <v-flex>
                                    <div class="event-date">
                                        <h2>17 <span>July</span></h2>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-desc d-flex align-items-center">
                                        <div class="event-img">
                                            <v-img src="/event/s3.jpg"></v-img>
                                        </div>
                                        <div class="event-name">
                                            <h6>Electric castle Festival</h6>
                                            <p>Cluj, Romania</p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-location">
                                        <p>At the Castle</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-time">
                                        <p>20:30</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="buy-tickets">
                                        <a href="#" class="btn buy-ticket-btn">Buy Ticket(s)</a>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <v-card flat color="transparent" class="trending-event-content">
                            <v-layout row wrap class="single-trending-event">
                                <v-flex>
                                    <div class="event-date">
                                        <h2>17 <span>July</span></h2>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-desc d-flex align-items-center">
                                        <div class="event-img">
                                            <v-img src="/event/s4.jpg"></v-img>
                                        </div>
                                        <div class="event-name">
                                            <h6>Electric castle Festival</h6>
                                            <p>Cluj, Romania</p>
                                        </div>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-location">
                                        <p>At the Castle</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="event-time">
                                        <p>20:30</p>
                                    </div>
                                </v-flex>
                                <v-flex>
                                    <div class="buy-tickets">
                                        <a href="#" class="btn buy-ticket-btn">Buy Ticket(s)</a>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="featured-event-area section-padding-100">
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="section-heading">
                            <h2>
                                FEATURED EVENTS
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
                        <div class="swiper-slide single-featured-event">
                            <v-img src="/event/fs1.jpg" height="650" width="350">
                                <v-layout column fill-height align-center justify-end>
                                    <div class="featured-event-content">
                                        <div class="event-text">
                                            <h4>Perfection</h4>
                                            <p>Rozey</p>
                                            <a href="#" class="buy-ticket-btn">Buy Ticket(s)</a>
                                        </div>
                                        <div class="bg-gradients"></div>
                                    </div>
                                </v-layout>
                            </v-img>
                        </div>
                        <div class="swiper-slide single-featured-event">
                            <v-img src="/event/fs2.jpg" height="650" width="350">
                                <v-layout column fill-height align-center justify-end>
                                    <div class="featured-event-content">
                                        <div class="event-text">
                                            <h4>I Have Moved</h4>
                                            <p>Testimony x Isreal Strong</p>
                                            <a href="#" class="buy-ticket-btn">Buy Ticket(s)</a>
                                        </div>
                                        <div class="bg-gradients"></div>
                                    </div>
                                </v-layout>
                            </v-img>
                        </div>
                        <div class="swiper-slide single-featured-event">
                            <v-img src="/event/fs3.jpg" height="650" width="350">
                                <v-layout column fill-height align-center justify-end>
                                    <div class="featured-event-content">
                                        <div class="event-text">
                                            <h4>Walking On Water</h4>
                                            <p>Martin PK</p>
                                            <a href="#" class="buy-ticket-btn">Buy Ticket(s)</a>
                                        </div>
                                        <div class="bg-gradients"></div>
                                    </div>
                                </v-layout>
                            </v-img>
                        </div>
                        <div class="swiper-slide single-featured-event">
                            <v-img src="/event/fs4.jpg" height="650" width="350">
                                <v-layout column fill-height align-center justify-end>
                                    <div class="featured-event-content">
                                        <div class="event-text">
                                            <h4>whisper</h4>
                                            <p>Prosper Menko</p>
                                            <a href="#" class="buy-ticket-btn">Buy Ticket(s)</a>
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
        <section class="event-banner section-padding-100 bg-img bg-overlay2 mt-12">
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
                        <v-btn color="primary" class="contact-us-btn mt-8" :to="{name:'events.catalogue'}">
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
.swiper-container {
  height: auto!important;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {}

</style>
