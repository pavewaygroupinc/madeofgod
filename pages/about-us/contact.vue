<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + settings.about_banner + ')' }">
            <div class="bradcumbContent">
                <h2>Contact</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <v-container grid-list-lg mt-12>
            <v-layout row wrap>
                <v-flex sm12 md6>
                    <img src="/logo.png" class="logo" :alt="settings.site_title" />
                    <p>
                        {{settings.site_title}} {{ new Date().getFullYear() }} @ All rights reserved
                    </p>
                    <p>
                        <v-btn icon v-for="(social,index) in settings.connect" :key="index">
                            <v-icon small>{{social.icon}}</v-icon>
                        </v-btn>
                    </p>
                    <p>
                        {{contact.description}}
                    </p>
                    <h6 class="contact-address">
                        <v-icon>fas fa-map-marker-alt</v-icon> {{contact.contact_address}}
                    </h6>
                    <h6 class="contact-address">
                        <v-icon>smartphone</v-icon> {{contact.contact_phone}}
                    </h6>
                    <h6 class="contact-address">
                        <v-icon>email</v-icon> {{contact.contact_email}}
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
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    head() {
        return {
            title: 'Contact',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'keywords', name: 'keywords', content: this.settings.seo_keywords || '' },
                { hid: 'description', name: 'description', content: this.settings.seo_description },
                { hid: "twittertitle", name: "twitter:title", content: this.settings.seo_title },
                { hid: "twitterdesc", name: "twitter:description", content: this.settings.seo_description || '' },
                { hid: "twitterhashtags", name: "twitter:hashtags", content: this.seo_keywords },
                { hid: 'ogtype', property: 'og:type', content: "article" },
                { hid: 'ogtitle', property: 'og:title', content: this.settings.seo_title },
                { hid: 'ogdescription', property: 'og:description', content: this.settings.seo_description },
                { hid: 'ogurl', property: 'og:url', content: this.$options.filters.getFullUrl(this.$route.fullPath) }
            ]
        }
    },

    layout: 'contact',
    
    components: {},

    data() {
        return {}
    },

    computed: {
        ...mapGetters([
            'settings',
            'contact'
        ])
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
