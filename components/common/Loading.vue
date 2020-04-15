<template>
    <div>
        
        <v-container>
            <v-row>
                <!-- <v-overlay :z-index="1" :absolute="true" :value="overlay">
                    <v-progress-circular indeterminate size="64"></v-progress-circular>
                </v-overlay> -->
                <v-col cols="12" md="4">
                    <v-skeleton-loader class="mb-6" type="card-avatar, article" />
                    <v-skeleton-loader type="card-avatar, article" />
                </v-col>

                <v-col cols="12" md="4">
                    <v-skeleton-loader class="mb-6" type="card-avatar, article" />
                    <v-skeleton-loader type="card-avatar, article" />
                </v-col>

                <v-col cols="12" md="4">
                    <v-skeleton-loader class="mb-6" type="card-avatar, article" />
                    <v-skeleton-loader type="card-avatar, article" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    // Vuetify components provide
    // a theme variable that is
    // used to determine dark
    inject: ['theme'],
    computed: {
        ...mapGetters([
            'overlay'
        ])
    }
}
</script>