<template>
    <v-flex md3 sm12 xs12 class="single-post--content">
                <v-card flat>
                    <v-img src="/news/ada.jpg" alt="Ada In Cameroon" />
                    <v-card-title>
                        <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                            Ada In Cameroon
                        </nuxt-link>
                    </v-card-title>
                    <v-card-actions>
                        <span class="post-date">May 22, 2018</span>
                        <v-spacer />
                        <span class="post-comment--counter">
                        <nuxt-link to="/">
                            3 Comments
                        </nuxt-link>
                        </span>
                    </v-card-actions>
                    <div class="bg-gradients mb-30 w-25"></div>
                    <v-card-text class="post-content">
                        <p>
                            Nulla pretium tincidunt felis, nec sollicitudin mauris lobortis in. Aliquam eu feugiat ligula, 
                            laoreet efficitur nulla. Morbi nec neque porta, elementum massa at, vehicula nunc. Nulla facilisi.
                        </p>
                    </v-card-text>
                    <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                        Read more
                    </nuxt-link>
                </v-card>
            </v-flex>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
// .single-post--container {
//     padding-top: 45px;
    
// }
.single-post--content {
        .post-title {
            font-size: 30px;
            display: block;
            margin-bottom: 0;
            font-weight: 900;
            transition-duration: 500ms;
            text-decoration: none;
            outline: 0 solid transparent;
            color: #141414;
            &:hover, &:focus {
                color: #FE0000;
            }
        }
        .post-date {
            color: #72728c;
            font-style: italic;
            margin-bottom: 0;
            font-size: 14px;
            line-height: 2;
            font-weight: 500;
            margin-top: 0;
        }
        .post-comment--counter {
            color: #6a6a6a;
            font-size: 14px;
            line-height: 2;
            font-weight: 500;
            margin-top: 0;
            margin-bottom: 1rem;

            a {
                color: #181818;
                font-size: 14px;
                margin-bottom: 0;
                text-decoration: underline;
                text-transform: capitalize;
                font-style: italic;
                font-weight: 700;
                text-decoration-color: #6a6a6a;
            }
        }
        .post-content {
            p {
                color: #6a6a6a;
                font-size: 16px;
                line-height: 2;
                font-weight: 500;
                margin-top: 0;
                margin-bottom: 1rem;
            }
        }
        .read-more-btn {
            display: block;
            // margin-top: 40px;
            color: #181818;
            font-size: 14px;
            margin-bottom: 0;
            text-decoration: underline;
            font-style: italic;
            font-weight: 700;
            text-decoration-color: #6a6a6a;
            &:hover, &:focus {
                color: #FE0000;
            }
        }
    }
</style>