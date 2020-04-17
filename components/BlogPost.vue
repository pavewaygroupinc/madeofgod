<template>
    <div class="single-post--content my-4">
        <v-card flat>
            <nuxt-link :to="post._path">
                <img class="post-img lazyload" :data-src="post.thumbnail" :alt="post.title" />
            </nuxt-link>

            <div class="share-count">
            <span class="share-icon"> 
                <v-btn rounded fab small color="primary">
                    <v-icon>share</v-icon> 
                </v-btn>
            </span>
            <social-sharing :url="post._path | getFullUrl"
                :title="post.seo_title"
                :description="post.seo_description"
                inline-template>
                <div class="share-social-list">
                <network network="facebook" class="social_icon" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #3a579a; border-radius: 100px; cursor: pointer;">
                    <i class="fab fa-facebook-f white--text" style="font-size: 1.6em; transform: translate(90%, 25%);"></i>
                </network>
                <network network="twitter" class="et_social_icon my-1" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #00abf0; border-radius: 100px; cursor: pointer;">
                    <i class="fab fa-twitter white--text" style="font-size: 1.6em; transform: translate(30%, 25%)"></i>
                </network>
                <network network="pinterest" class="et_social_icon" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #cd1c1f; border-radius: 100px; cursor: pointer;">
                    <i class="fab fa-pinterest-p white--text" style="font-size: 1.6em; transform: translate(50%, 30%)"></i>
                </network>
                </div>
            </social-sharing>
            </div>
            <v-card-title>
                <nuxt-link :to="post._path" class="post-title">
                    {{post.title}}
                </nuxt-link>
            </v-card-title>
            <v-card-actions>
                <span class="post-date">
                    {{$options.filters.monthDay(post.date)}}
                </span>
                <v-spacer />
                <span class="post-comment--counter">
                    <nuxt-link :to="`/category/${$options.filters.slugify($options.filters.getCategoryById(post.category).title)}`">
                        {{$options.filters.getCategoryById(post.category).title}}
                    </nuxt-link>
                </span>
            </v-card-actions>
            <div class="bg-gradients mb-30 w-25"></div>
            <v-card-text class="post-content">
                <p v-text="post.summary" />
            </v-card-text>
            <nuxt-link :to="post._path" class="read-more-btn">
                Read more
            </nuxt-link>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.single-post--content {
    .post-img {
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
        object-fit: cover;
        width: 100%;
        &:hover {
            transform: scale(1.04);
            -webkit-transition: all 2s ease-in-out;
            -moz-transition: all 2s ease-in-out;
            -o-transition: all 2s ease-in-out;
            -ms-transition: all 2s ease-in-out;
            transition: all 2s ease-in-out;
        }
    }
        .post-title {
            font-size: 20px;
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