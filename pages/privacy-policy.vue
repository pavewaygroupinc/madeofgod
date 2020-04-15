<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + privacy.thumbnail + ')' }">
            <div class="bradcumbContent">
                <h2>Privacy Policy</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <v-container mt-12>
            <article class="article-style mt-5" v-html="$md.render(privacy.body)"/>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    head() {
        return {
            title: 'Privacy Policy'
        }
    },

    layout: 'contact',

    computed: {
        ...mapGetters([
            'settings',
            'privacy'
        ])
    },
}
</script>

<style lang="scss" scoped>
</style>