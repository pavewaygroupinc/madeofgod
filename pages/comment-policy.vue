<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + commentPolicy.thumbnail + ')' }">
            <div class="bradcumbContent">
                <h2>Comment Policy</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <v-container mt-12>
            <article class="article-style mt-5" v-html="$md.render(commentPolicy.body)"/>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    head() {
        return {
            title: 'Comment Policy'
        }
    },

    layout: 'contact',

    computed: {
        ...mapGetters([
            'settings',
            'commentPolicy'
        ])
    },
}
</script>

<style lang="scss" scoped>
</style>