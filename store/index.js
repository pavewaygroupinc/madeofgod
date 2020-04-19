import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
Vue.use(Vuex)

export const state = () => ({
    posts: [],
    genres: [],
    slides: [],
    authors: [],
    about: null,
    profiles: [],
    submit: null,
    contact: null,
    privacy: null,
    settings: null,
    overlay: false,
    categories: [],
    promotion: null,
    searchItems: [],
    isClicked: false,
    commentPolicy: null,
    isOrderByFilter: false,
});

export const getters = {
    about: state => state.about,
    posts: state => state.posts,
    genres: state => state.genres,
    slides: state => state.slides,
    submit: state => state.submit,
    overlay: state => state.overlay,
    contact: state => state.contact,
    privacy: state => state.privacy,
    authors: state => state.authors,
    profiles: state => state.profiles,
    settings: state => state.settings,
    promotion: state => state.promotion,
    categories: state => state.categories,
    searchItems: state => state.searchItems,
    commentPolicy: state => state.commentPolicy,
    isOrderByFilter: state => state.isOrderByFilter,

    latestProfiles: state => _.sortBy(state.profiles, [function(item) { return item.date }]).slice(0, 8),

    latestPosts: state => _.sortBy(state.posts, [function(item) { return item.date }]).slice(0, 8),

    featuredProfiles: state => _.filter(state.profiles, ['featured', true]),

    relatedProfiles: (state) => (genre, name) => {
        let items = state.profiles.filter(item => {
            return item.genre == genre && item.name != name
        })
        return items.slice(0, 3)
    },

    relatedPosts: (state) => (category, title) => {
        let items = state.posts.filter(post => {
            return post.category == category && post.title != title
        })
        return items
    }
}

export const mutations = {
    SET_IsClicked(state, data) {
        state.isClicked = data
    },
    SET_OVERLAY(state) {
        state.overlay = !state.overlay
    },
    SET_SLIDES(state, data) {
        state.slides = data
    },
    SET_SETTINGS(state, data) {
        state.settings = data
    },
    SET_ABOUT(state, data) {
        state.about = data
    },
    SET_CONTACT(state, data) {
        state.contact = data
    },
    SET_PRIVACY(state, data) {
        state.privacy = data
    },
    SET_SUBMIT(state, data) {
        state.submit = data
    },
    SET_PROMOTION(state, data) {
        state.promotion = data
    },
    SET_IsOrderByFilter(state, data) {
        state.isOrderByFilter = data
    },
    SET_COMMENT_POLICY(state, data) {
        state.commentPolicy = data
    },
    SET_CATEGORIES(state, data) {
        state.categories = data
    },
    SET_GENRES(state, data) {
        state.genres = data
    },
    SET_AUTHORS(state, data) {
        state.authors = data
    },
    SET_POSTS(state, data) {
        state.posts = data
    },
    SET_SEARCH_ITEMS(state, data) {
        state.searchItems = data
    },
    SET_PROFILES(state, data) {
        state.profiles = data
    }
};

export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('getPromotion')
        await dispatch('getAbout')
        await dispatch('getContact')
        await dispatch('getPrivacy')
        await dispatch('getSubmit')
        await dispatch('getCommentPolicy')
        await dispatch('getSettings')
        await dispatch('getAuthors')
        await dispatch('getSlides')
        await dispatch('getGenres')
        await dispatch('getCategories')
        await dispatch('getPosts')
        await dispatch('getProfiles')
    },

    getSettings({ commit }) {
        const settings = require('~/content/_data/settings.json');
        commit('SET_SETTINGS', settings)
    },

    getPromotion({ commit }) {
        const promotion = require('~/content/_data/promotion.json');
        commit('SET_PROMOTION', promotion)
    },

    getAbout({ commit }) {
        const about = require('~/content/_data/about.json');
        commit('SET_ABOUT', about)
    },

    getContact({ commit }) {
        const contact = require('~/content/_data/contact.json');
        commit('SET_CONTACT', contact)
    },

    getPrivacy({ commit }) {
        const privacy = require('~/content/_data/privacy.json');
        commit('SET_PRIVACY', privacy)
    },

    getSubmit({ commit }) {
        const submit = require('~/content/_data/privacy.json');
        commit('SET_SUBMIT', submit)
    },

    getCommentPolicy({ commit }) {
        const comment = require('~/content/_data/comment-policy.json');
        commit('SET_COMMENT_POLICY', comment)
    },

    async getAuthors({ commit }) {
        const context = await require.context('~/content/authors/posts/', false, /\.json$/)

        const items = await context.keys().map(key => ({
            ...context(key)
        }))

        commit('SET_AUTHORS', _.orderBy(items, 'position', 'asc'))
    },

    async getSlides({ commit }) {
        const context = await require.context('~/content/slide/posts/', false, /\.json$/);


        const slides = await context.keys().map(key => ({
            ...context(key)
        }))

        commit('SET_SLIDES', _.orderBy(slides, 'position', 'asc'))
    },

    async getCategories({ commit }) {
        const context = await require.context('~/content/categories/posts/', false, /\.json$/);


        const categories = await context.keys().map(key => ({
            ...context(key),
            _path: `/category/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        commit('SET_CATEGORIES', _.orderBy(categories, 'position', 'asc'))
    },

    async getGenres({ commit }) {
        const context = await require.context('~/content/genres/posts/', false, /\.json$/);


        const genres = await context.keys().map(key => ({
            ...context(key),
            _path: `/genre/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        commit('SET_GENRES', _.orderBy(genres, 'position', 'asc'))
    },

    async getPosts({ commit }) {
        const context = await require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = await context.keys().map(key => ({
            ...context(key),
            _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        commit('SET_POSTS', _.orderBy(searchposts, 'position', 'asc'))
    },

    async getPostByCategory({ commit }, category) {
        const context = await require.context('~/content/blog/posts/', false, /\.json$/)

        const searchitems = await context.keys().map(key => ({
            ...context(key),
            _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        let blogs = searchitems.filter(item => item.category == category)

        commit('SET_POSTS', _.orderBy(blogs, 'position', 'asc'))
    },

    async getProfiles({ commit }) {
        const context = await require.context('~/content/profiles/posts/', false, /\.json$/);

        const searchprofiles = await context.keys().map(key => ({
            ...context(key),
            _path: `/profile/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        commit('SET_PROFILES', _.orderBy(searchprofiles, 'position', 'asc'))
    },

    async getProfilesByGenre({ commit }, genre) {
        const context = await require.context('~/content/profiles/posts/', false, /\.json$/)

        const searchprofiles = await context.keys().map(key => ({
            ...context(key),
            _path: `/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        let profiles = searchprofiles.filter(profile => profile.genre == genre)

        commit('SET_PROFILES', _.orderBy(profiles, 'position', 'asc'))
    },

    async getFeaturedPosts({ commit }) {
        const context = await require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = await context.keys().map(key => ({
            ...context(key),
            _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        let items = searchposts.filter(item => item.featured)

        commit('SET_FEATURED_POSTS', items)
    },

    async filterProfiles({ commit }, keywords) {
        console.log(keywords)
        commit('SET_OVERLAY')

        const context = await require.context('~/content/profiles/posts/', false, /\.json$/)

        const collections = await context.keys().map(key => ({
            ...context(key),
            _path: `/profile/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        let items;

        if (keywords.genre && !keywords.artist && !keywords.country) {
            items = collections.filter(item => Vue.options.filters.getGenreById(item.genre).title.includes(keywords.genre))
        } else if (!keywords.genre && keywords.artist && !keywords.country) {
            items = collections.filter(item => item.name.toLowerCase().includes(keywords.artist.toLowerCase()))
        } else if (!keywords.genre && !keywords.artist && keywords.country) {
            items = collections.filter(item => item.country.toLowerCase().includes(keywords.country.toLowerCase()))
        } else if (keywords.genre && keywords.artist && !keywords.country) {
            items = collections.filter(item => item.name.toLowerCase().includes(keywords.artist.toLowerCase()) && Vue.options.filters.getGenreById(item.genre).title.includes(keywords.genre))
        } else if (keywords.genre && !keywords.artist && keywords.country) {
            items = collections.filter(item => item.country.toLowerCase().includes(keywords.country.toLowerCase()) && Vue.options.filters.getGenreById(item.genre).title.includes(keywords.genre))
        } else if (!keywords.genre && keywords.artist && keywords.country) {
            items = collections.filter(item => item.name.toLowerCase().includes(keywords.artist.toLowerCase()) && item.country.toLowerCase().includes(keywords.country.toLowerCase()))
        } else {
            items = collections.filter(item => item.name.toLowerCase().includes(keywords.artist.toLowerCase()) && item.country.toLowerCase().includes(keywords.country.toLowerCase()) && Vue.options.filters.getGenreById(item.genre).title.includes(keywords.genre))
        }

        commit('SET_PROFILES', _.orderBy(items, 'position', 'asc'))
        commit('SET_OVERLAY')
    },

    async filterPosts({ commit }, keywords) {
        commit('SET_OVERLAY')

        const context = await require.context('~/content/blog/posts/', false, /\.json$/)

        const collections = await context.keys().map(key => ({
            ...context(key),
            _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        let items;

        if (keywords.category && !keywords.title) {
            items = collections.filter(item => Vue.options.filters.getCategoryById(item.category).title.includes(keywords.category))
        } else if (!keywords.category && keywords.title) {
            items = collections.filter(item => item.title.toLowerCase().includes(keywords.title.toLowerCase()))
        } else {
            items = collections.filter(item => item.title.toLowerCase().includes(keywords.title.toLowerCase()) && Vue.options.filters.getCategoryById(item.category).title.includes(keywords.category))
        }

        commit('SET_POSTS', _.orderBy(items, 'position', 'asc'))
        commit('SET_OVERLAY')
    }
};