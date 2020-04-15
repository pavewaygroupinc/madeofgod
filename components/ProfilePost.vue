<template>
    <v-flex md4 mb-md-3 sm6 xs12 class="post-item profile-post-item-wrap">
        <v-card tile raised>
            <nuxt-link :to="profile._path" :aria-label="profile.name">
                <v-lazy>
                    <div v-bind:style="{ backgroundImage: 'url(' + profile.thumbnail + ')' }" class="profile-post-img">
                        <v-layout fill-height>
                            <nuxt-link :to="profile._path" class="single-post-read-more-btn font-weight-bold">read more</nuxt-link>
                        </v-layout>
                    </div>
                </v-lazy>
            </nuxt-link>
            <div class="profile-post-count-list">
                <div class="share-count">
                    <span class="share-icon"> 
                        <img src="/share-icon.png" alt="share icon"> 
                    </span>
                    <social-sharing :url="profile._path | getFullUrl"
                        :title="profile.seo_title"
                        :description="profile.seo_description"
                        inline-template>
                        <div class="share-social-list">
                            <network network="facebook" class="social_icon" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #3a579a; border-radius: 100px; cursor: pointer;">
                                <i class="fab fa-facebook-f" style="font-size: 1.6em; transform: translateY(10px);"></i>
                            </network>
                            <network network="twitter" class="et_social_icon my-1" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #00abf0; border-radius: 100px; cursor: pointer;">
                                <i class="fab fa-twitter" style="font-size: 1.6em; transform: translateY(12px);"></i>
                            </network>
                            <network network="pinterest" class="et_social_icon" style="display: block; min-height: 40px; width: 40px; height: 40px; background-color: #cd1c1f; border-radius: 100px; cursor: pointer;">
                                <i class="fab fa-pinterest-p" style="font-size: 1.6em; transform: translateY(10px);"></i>
                            </network>
                        </div>
                    </social-sharing>
                </div>
            </div>
            <v-card-text class="profile-post-info text-center">
                <div class="profile-post-category-name text-uppercase font-weight-bold" v-if="profile.genre">
                    <span class="feat-post-hashtag">#</span>{{ $options.filters.getGenreById(profile.genre).title }}
                </div>
                <!-- <hr /> -->
                <div class="item-title-wrap">
                    <h3 class="profile-post-category-item-title">
                        <nuxt-link :to="profile._path" :aria-label="profile.name">{{profile.name}}</nuxt-link>
                    </h3>
                </div>
                
                <nuxt-link class="profile-post-btn-details" :to="profile._path">
                    <span class="text">read more</span>
                    <span class="icon">→</span>
                </nuxt-link>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: {
        profile: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/breakpoints.scss";
@import "~/assets/variables.scss";
.post-item {
    &:hover {
        .profile-post-img {
            &:before {
                opacity: 1;
                transition: all .15s;
            }
            &:after {
                opacity: 1;
                -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) scale3d(1,1,1);
                transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) scale3d(1,1,1);
            }
        }
        .single-post-read-more-btn {
            opacity: 1;
            transition: all .15s .15s;
        }
        .profile-post-count-list {
            opacity: 1;
            transition: all .15s .15s;
        }
        .profile-post-btn-details {
            .text {
                display: none;
            }
            .icon {
                display: inline-block;
            }
        }
        .profile-post-info {
            background: #000;

            .profile-post-category-name, 
            .profile-post-category-item-title a, 
            .author-name, 
            .published-time {
                color: #fff !important;
            }
        }
    }
}
.profile-post-img {
    height: 304px;
    background-size: cover;
    background-position: center;
    &:before {
        opacity: 0;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(17,19,20,.5);
        transition: all .15s .1s;
        pointer-events: none;
        height: inherit;
        @media (max-width: $ml), (max-width: $sm) {
            display: none !important;
        }
    }
    &:after {
        position: absolute;
        top: 30%;
        left: 50%;
        width: 150px;
        height: 150px;
        border: 1px solid $primary-color;
        content: '';
        opacity: 0;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: opacity .35s,-webkit-transform .35s;
        transition: opacity .35s,transform .35s;
        -webkit-transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) scale3d(0,0,1);
        transform: translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) scale3d(0,0,1);
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
        @media (max-width: $ml), (max-width: $sm) {
            display: none !important;
        }
    }
    a {
        cursor: pointer;
        display: inline-block;
        width: 100%;
    }
    a.single-post-read-more-btn {
        width: auto;
    }
}
.profile-post-date {
    position: absolute;
    left: 15px;
    top: 21px;
    min-width: 96px;
    padding: 13px 10px;
    border-radius: 30px;
    background: #fff;
    color: #000;
    text-align: center;
    font-size: 14px;
    z-index: 9;
}
.profile-post-count-list {
    opacity: 0;
    width: 40px;
    position: absolute;
    top: 20px;
    right: 14px;
    transition: all .15s;
    z-index: 9;

    .view-count {
        display: inline-block;
        margin-bottom: 18px;
        font-size: 11px;
        color: #fff;
        text-align: center;
    }

    .view-icon {
        display: block;
        width: 36px;
        height: 26px;
        margin: 0 auto 11px;
        img {
            width: 100%;
        }
    }

    .share-count {
        position: relative;
        display: inline-block;
        font-size: 11px;
        color: #fff;
        text-align: center;

        @media (max-width: $ml), (max-width: $sm) {
            display: none;
        }

        &:hover {
            .share-social-list {
                opacity: 1;
            }
        }

        .share-icon {
            display: block;
            width: 26px;
            height: 32px;
            margin: 0 auto 10px;
            img {
                width: 100%;
            }
        }

        .share-social-list {
            position: absolute;
            right: 3em;
            top: -4em;
            opacity: 0;

            .social_icon {
                // overflow: hidden;
                display: block;
                cursor: pointer;
            }
        }
    }
}
.single-post-read-more-btn {
    opacity: 0;
    position: absolute;
    top: 30%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    text-transform: uppercase;
    color: #fff !important;
    font-size: 13px;
    width: auto;
    // pointer-events: none;
    transition: all .36s 0s;
    @media (max-width: $ml), (max-width: $sm) {
        display: none !important;
    }
}
.profile-post-info {
    padding-top: 16px;
    padding-left: 15px;
    padding-right: 15px;
    background: #fff;
    // height: 157px;
    box-shadow: 0 5px 8px 0 rgba(29, 28, 28, .12);
    transition: all .15s;

    a {
        display: block;
    }
}

.profile-post-category-name {
    display: inline-block;
    color: #000;
    position: relative;
    font-size: 11px;
    margin-bottom: 20px;
    z-index: 99;
    transition: all .15s;
}

.feat-post-hashtag {
    margin-right: 4px;
}
.profile-post-category-name:after {
    content: "";
    position: absolute;
    top: 150%;
    left: 50%;
    width: 30px;
    height: 1px;
    background: $primary-color;
    -webkit-transform: translate(-50%,0);
    transform: translate(-50%,0);
    transition: all .15s;
}
.item-title-wrap {
    min-height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
}
.profile-post-category-item-title {
    color: #000;
    font-size: 18px;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0;
    transition: all .15s;
    width: 100%;
    word-wrap: break-word;

    a {
        color: #000;
    }
}
.profile-post-btn-details {
    // margin-bottom: 14px;
    transition: all .15s;
    .text {
        transition: all .15s;
        line-height: 10px;
    }
    .icon {
        position: relative;
        display: none;
        font-size: 26px;
        font-family: Arial;
        color: $primary-color;
        line-height: 10px;
        transition: all .15s;
    }
}
.profile-post-btn-details {
    display: block;
    color: $primary-color;
    font-size: 13px;
    transition: all .15s;
}
.author-img {}
.author-info {
    text-align: left;
}
.author-name {
    margin-bottom: 3px;
    font-size: 13px;
    text-transform: uppercase;
    color: #000;
    transition: all .15s;
}
.published-time {
    font-size: 11px;
    color: #000;
    transition: all .15s;
}
</style>