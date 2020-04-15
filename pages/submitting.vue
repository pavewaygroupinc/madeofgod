<template>
    <div>
        <section class="page-breadcumb bg-overlay2 bg-img" v-bind:style="{ backgroundImage: 'url(' + submit.thumbnail + ')' }">
            <div class="bradcumbContent">
                <h2>Submitting</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <v-container mt-12>
            <article class="article-style mt-5" v-html="$md.render(submit.body)"/>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    head() {
        return {
            title: 'Content Submission'
        }
    },

    layout: 'contact',

    computed: {
        ...mapGetters([
            'settings',
            'submit'
        ])
    },
}
</script>

<style lang="scss" scoped>
</style>