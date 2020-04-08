<template>
    <div>
        <section class="news-breadcumb bg-overlay2 bg-img">
            <div class="bradcumbContent">
                <h2>News</h2>
            </div>
        </section>
        <div class="bg-gradients"></div>
        <section class="single-post--container">
            <v-container fluid grid-list-xl>
                <v-layout row wrap>
                    <v-flex md8>
                        <masonry
                            :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
                            :gutter="{default: '30px', 700: '15px'}"
                        >
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                            <!-- <v-card-text class="post-content">
                                                <p>
                                                    Nulla pretium tincidunt felis, nec sollicitudin mauris lobortis in. Aliquam eu feugiat ligula, 
                                                    laoreet efficitur nulla. Morbi nec neque porta, elementum massa at, vehicula nunc. Nulla facilisi. 
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text> -->
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                                    Donec id purus eu lectus imperdiet varius. Curabitur consectetur nunc sem, vitae cursus enim tempor eget. 
                                                    Praesent pellentesque nisi urna, sit amet suscipit ligula posuere id. Aenean id tortor vel quam ornare gravida. 
                                                    Phasellus luctus feugiat nunc, quis vulputate ipsum convallis quis. Integer vel nulla erat. Donec erat metus, 
                                                    luctus quis maximus quis, volutpat eu tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                                </p>
                                            </v-card-text>
                                            <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="read-more-btn">
                                                Read more
                                            </nuxt-link>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-xl mt-12 class="single-post--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <v-card flat>
                                            <v-img src="/news/1.jpg" alt="10 Best Festival that you should’t miss this summer" />
                                            <v-card-title>
                                                <nuxt-link :to="{name: 'news.post', params: {id: 'news-post'}}" class="post-title">
                                                    10 Best Festival that you should’t miss this summer
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
                                </v-layout>
                            </v-container>
                        </masonry>
                    </v-flex>
                    <v-flex md4>
                        <section class="search--container section-padding-100 bg-img">
                            <v-container fluid grid-list-xl mt-12 class="search--content">
                                <v-layout row wrap>
                                    <v-flex sm12>
                                        <div class="search-your-shows-content">
                                            <h2>Filter results</h2>
                                            <div class="search-form">
                                                <v-form class="justify-content-center">
                                                    <v-layout wrap row>
                                                        <v-flex>
                                                            <v-text-field solo label="Article category" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <v-text-field solo label="Article title" />
                                                        </v-flex>
                                                        <v-flex>
                                                            <button type="submit" class="btn musica-btn m-2">Search</button>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-form>
                                            </div>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </section>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="news-banner section-padding-100 bg-img bg-overlay2 mt-12">
            <v-container>
                <v-layout>
                    <v-flex xs8>
                        <h3>
                            Unique Way to see a
                        </h3>
                        <h1>
                            Music Concert
                        </h1>
                        <p>
                            Morbi quis venenatis augue, a tincidunt libero. Sed id porttitor elit, eu ultricies mauris.
                        </p>
                        <v-btn color="primary" class="contact-us-btn mt-8" :to="{name:'contact'}">
                            Contact us
                        </v-btn>
                    </v-flex>
                    <v-flex xs4></v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    head() {
        return {
            title: 'Contact'
        }
    },
  components: {},

    data() {
        return {
            appName: process.env.appName
        }
    },

    computed: {
        ...mapGetters({})
    }
};
</script>

<style lang="scss" scoped>
.news-breadcumb {
    background-image: url(/news.jpg);
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
.single-post--container {
    padding-top: 45px;
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
        }
        .post-title:hover, .post-title:focus {
            color: #FE0000;
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
        }
        .read-more-btn:hover, .read-more-btn:focus {
            color: #FE0000;
        }
    }
}
.news-banner {
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
.search--container {
    padding-top: 0;
}
</style>
