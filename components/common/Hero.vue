<template>
    <v-container :fluid="$vuetify.breakpoint.smAndDown" class="title-bg-wrap">
        <div class="hero-p-banner-title-bg" v-bind:style="{ backgroundImage: 'url(' + thumbnail + ')' }">
            <div class="heor-p-banner-info-wrap">
                <h2 class="hero-p-banner-title text-capitalize">{{title}}</h2>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    props: {
        title: {
            required: false,
            type: String
        },
        thumbnail: {
            required: false,
            type: String
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/breakpoints.scss";
.title-bg-wrap {
    @media (max-width: $ml), (max-width: $sm) {
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
    }
}
</style>