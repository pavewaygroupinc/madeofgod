<template>
    <v-footer
        height="auto"
        class="white pt-12"
    >
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md4>
                    <img :data-src="settings.mobile_logo" class="footer-logo lazyload" :alt="settings.site_title" />
                    <p>
                        Made of God media/Tv is a platform created to catapult talents in the gospel sector to great heights.
                    </p>
                    <p>
                        {{settings.site_title}} {{ new Date().getFullYear() }} @ All rights reserved
                    </p>
                </v-flex>
                <v-flex md2>
                    <h3 class="headline font-weight-black">
                        About
                    </h3>

                    <div class="footer-link-container py-3">
                        <nuxt-link to="/about-us" class="footer-link">
                            About us
                        </nuxt-link>
                        <nuxt-link to="/about-us/contact" class="footer-link">
                            Contact us
                        </nuxt-link>
                        <nuxt-link to="/about-us/team" class="footer-link">
                            The team
                        </nuxt-link>
                    </div>
                </v-flex>
                <v-flex md2>
                    <h3 class="headline font-weight-black">
                        Other Links
                    </h3>

                    <div class="footer-link-container py-3">
                        <nuxt-link to="/privacy-policy" class="footer-link">
                            Privacy Policy
                        </nuxt-link>
                        <nuxt-link to="/comment-policy" class="footer-link">
                            Comment Policy
                        </nuxt-link>
                        <nuxt-link to="/submitting" class="footer-link">
                            Submitting
                        </nuxt-link>
                    </div>
                </v-flex>
                <v-flex md4>
                    <h3 class="headline font-weight-black">
                        Subscribe
                    </h3>
                    <form action="#" method="post" class="subscribe-form mt-6">
                        <input type="email" name="subscribe-email" id="subscribeemail">
                        <button type="submit">subscribe</button>
                    </form>
                </v-flex>
                <v-flex xs12>
                    <v-card
                        class="flex"
                        flat
                        tile
                    >

                            <v-card-actions class="grey darken-3 justify-center">
                                <span class="mr-3 white--text">Powered by: <a href="https://pavewaytechnologies.com" class="" style="text-decoration: none; color: #00C853 !important;" target="_blank" rel="noopener">PaveWay Technologies</a></span>
                            </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
      return {}
    },

    computed: {
        ...mapGetters([
            'settings'
        ])
    }
};
</script>

<style lang="scss" scoped>
.footer-logo {
    width: 100%;
}
.footer-link-container {
    .footer-link {
        text-decoration: none;
        display: block;
        // padding: 0.2rem;
        color: #6a6a6a;
        font-size: 14px;
        margin-bottom: 15px;
        font-weight: 600;
    }
}
.subscribe-form {
    position: relative;
    z-index: 1;
    input {
        width: 100%;
        height: 47px;
        background-color: #f3f3f3;
        border: none;
        padding: 0 15px;
    }
    button {
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
        background: #d88d06;
        // background: -webkit-linear-gradient(to right,#d88d06,#000000);
        // background: linear-gradient(to right,#d88d06,#000000);
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        border: none;
        width: 110px;
        height: 47px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
    }
}
</style>