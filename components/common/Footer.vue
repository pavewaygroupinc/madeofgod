<template>
    <v-footer
        height="auto"
        class="white px-0 pb-0"
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
                    <form method="post" ref="newsletter" action="/#newsletter" netlify netlify-honeypot="bot-field" name="newsletter" v-on:submit.prevent class="subscribe-form mt-6">
                        <input type="hidden" name="form-name" value="newsletter" />
                        <input type="email" name="email-address" id="emailAddress">
                        <button type="submit" value="Subscribe" class="primary darken-3" @click="submit">subscribe</button>
                    </form>
                </v-flex>
            </v-layout>
        </v-container>
        <v-card
            class="flex"
            flat
            tile
        >

            <v-card-actions class="primary darken-3 justify-center">
                <span class="mr-3 white--text">Powered by: <a class="white--text" href="https://pavewaytechnologies.com" style="text-decoration: none;" target="_blank" rel="noopener">PaveWay Technologies</a></span>
            </v-card-actions>
        </v-card>

        <v-dialog
            v-model="dialog"
            max-width="290"
        >
            <v-card>
                <v-card-title class="headline">Made of God Tv</v-card-title>

                <v-card-text>
                    Thanks for subscribing!
                </v-card-text>

                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="primary darken-1"
                        text
                        @click="dialog = false"
                    >
                        Okay
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
      return {
          dialog: false
      }
    },

    computed: {
        ...mapGetters([
            'settings'
        ])
    },

    methods: {
        submit() {
            const formRef = this.$refs.newsletter
            console.log(formRef)
            const formData = new FormData(formRef);
                fetch(formRef.action, {
                method: 'POST',
                headers: {
                    'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: new URLSearchParams(formData).toString()
                })
                .then(res => {
                    if (res) {
                        this.dialog = true
                    }
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.footer-logo {
    width: 100px;
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