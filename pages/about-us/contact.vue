<template>
    <div>
        <section class="contact-breadcumb bg-overlay2 bg-img">
            <div class="bradcumbContent">
                <h2>Contact</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <v-container grid-list-lg mt-12>
            <v-layout row wrap>
                <v-flex sm12 md6>
                    <img src="/logo.png" class="logo" :alt="appName" />
                    <p>
                        {{appName}} {{ new Date().getFullYear() }} @ All rights reserved
                    </p>
                    <p>
                        <v-btn icon>
                            <v-icon small>fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon small>fab fa-twitter</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon small>fab fa-instagram</v-icon>
                        </v-btn>
                    </p>
                    <p>
                        Sed dapibus varius massa vel auctor. Nulla massa dui, posuere non erat in, 
                        eleifend mattis dui. Vivamus luctus luctus rhoncus. Donec sagittis nulla id 
                        finibus iaculis. Mauris odio tortor, suscipit non elit ut, imperdiet ornare erat.
                    </p>
                    <h6 class="contact-address">
                        <v-icon>fas fa-map-marker-alt</v-icon> 1481 Creekside Lane Avila Beach, CA 931
                    </h6>
                    <h6 class="contact-address">
                        <v-icon>smartphone</v-icon> +53 345 7953 32453
                    </h6>
                    <h6 class="contact-address">
                        <v-icon>email</v-icon> yourmail@gmail.com
                    </h6>
                </v-flex>
                <v-flex sm12 md6>
                    <v-form>
                        <v-text-field
                            filled
                            label="Your Name"
                            required
                        ></v-text-field>

                        <v-text-field
                            filled
                            label="Your E-mail"
                            required
                        ></v-text-field>

                        <v-text-field
                            filled
                            label="Subject"
                            required
                        ></v-text-field>

                        <v-textarea
                            filled
                            label="Message"
                        ></v-textarea>

                        <v-btn
                            color="primary"
                            class="mr-4"
                        >
                        Send
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout>
                <v-flex>
                    <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1Q7hEoz1n94AT2IF2EG_NjhziP77H_z8A" width="100%" height="480"></iframe>
                </v-flex>
            </v-layout>
        </v-container>
        <section class="contact-banner section-padding-100 bg-img bg-overlay2 mt-12">
            <v-container>
                <v-layout>
                    <v-flex xs9>
                        <h3>
                            Contact us now
                        </h3>
                        <h1>
                            Do you have a question?
                        </h1>
                        <p>
                            Morbi quis venenatis augue, a tincidunt libero. Sed id porttitor elit, eu ultricies mauris.
                        </p>
                    </v-flex>
                    <v-flex xs3>
                        <v-btn color="primary" class="contact-us-btn">
                            Contact us
                        </v-btn>
                    </v-flex>
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
.contact-breadcumb {
    background-image: url(/contact.jpg);
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
.contact-address {
    color: #262626;
    line-height: 1.3;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 30px;
}
.contact-banner {
    background-image: url(/banner.jpg);

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
