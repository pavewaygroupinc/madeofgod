<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + settings.about_banner + ')' }">
            <div class="bradcumbContent">
                <h2>About Us</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <about-us/>
        <team-members/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AboutUs from '@/components/common/AboutUs'
import TeamMembers from '@/components/common/TeamMembers'
export default {
    head() {
        return {
            title: 'About Us',
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
  
    components: {
        AboutUs,
        TeamMembers
    },

    data() {
        return {
        
        }
    },

    computed: {
        ...mapGetters([
            'about',
            'settings'
        ])
    }
};
</script>

<style lang="scss" scoped>
.about-breadcumb {
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
.about-banner {
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
