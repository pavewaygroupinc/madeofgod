import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
Vue.use(Vuex)

export const state = () => ({
    pages: [],
    items: [],
    slides: [],
    profiles: [],
    authors: [],
    posts: [],
    allItems: [],
    about: null,
    contact: null,
    privacy: null,
    settings: null,
    categories: [],
    searchItems: [],
    latestProfiles: [],
    featuredProfiles: [],
    isClicked: false,
    genres: []
});

export const getters = {
    items: state => state.items,
    pages: state => state.pages,
    about: state => state.about,
    posts: state => state.posts,
    genres: state => state.genres,
    slides: state => state.slides,
    contact: state => state.contact,
    privacy: state => state.privacy,
    authors: state => state.authors,
    profiles: state => state.profiles,
    settings: state => state.settings,
    categories: state => state.categories,
    searchItems: state => state.searchItems,

    latestProfiles: state => _.orderBy(state.latestProfiles, 'position', 'asc'),

    featuredProfiles: state => state.featuredProfiles,

    relatedProfiles: (state) => (category, title) => {
        let items = state.items.filter(item => {
            return item.category == category && item.title != title
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
    SET_SLIDES(state, data) {
        state.slides = data
    },
    SET_PAGES(state, data) {
        state.pages = data
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
    SET_CATEGORIES(state, data) {
        state.categories = data
    },
    SET_GENRES(state, data) {
        state.genres = data
    },
    SET_AUTHORS(state, data) {
        state.authors = data
    },
    SET_FEATURED_PROFILES(state, data) {
        state.featuredProfiles = data
    },
    SET_LATEST_PROFILES(state, data) {
        state.latestProfiles = data
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
        await dispatch('getAbout')
        await dispatch('getContact')
        await dispatch('getPrivacy')
        await dispatch('getSettings')
        await dispatch('getAuthors')
        await dispatch('getSlides')
        await dispatch('getGenres')
        await dispatch('getCategories')
            // await dispatch('getPages')
        await dispatch('getPosts')
        await dispatch('getProfiles')
    },

    getSettings({ commit }) {
        const settings = require('~/content/_data/settings.json');
        commit('SET_SETTINGS', settings)
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

    async getPages({ commit }) {
        const context = await require.context('~/content/page/posts/', false, /\.json$/);


        const pages = await context.keys().map(key => ({
            ...context(key),
            _path: `/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        commit('SET_PAGES', _.orderBy(pages, 'position', 'asc'))
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

        let blogs = searchitems.filter(item => item.category == Vue.options.filters.getCategoryIdBySlug(category))

        commit('SET_RELATED_POSTS', _.orderBy(blogs, 'position', 'asc'))
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

    async getProfilesByCategory({ commit }, category) {
        const context = await require.context('~/content/profiles/posts/', false, /\.json$/)

        const searchprofiles = await context.keys().map(key => ({
            ...context(key),
            _path: `/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        let profiles = searchprofiles.filter(profile => profile.category == Vue.options.filters.getCategoryIdBySlug(category))

        commit('SET_RELATED_PROFILES', _.orderBy(profiles, 'position', 'asc'))
    },

    async fetchFeaturedProfiles({ commit }) {
        const context = await require.context('~/content/profiles/posts/', false, /\.json$/)

        const searchprofiles = await context.keys().map(key => ({
            ...context(key),
            _path: `/profile/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        let items = searchprofiles.filter(item => item.featured)

        commit('SET_FEATURED_PROFILES', _.orderBy(items, 'position', 'asc'))
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

    async fetchAllSongs({ commit }) {
        const context = await require.context('~/content/songs/posts/', false, /\.json$/)

        const items = await context.keys().map(key => ({
            ...context(key),
            _path: `/music-library/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', '')
        }))

        commit('SET_SONGS', _.orderBy(items, 'position', 'asc'))
    },

    async searchItems({ commit }, word) {
        const context = await require.context('~/content/blog/posts/', false, /\.json$/)

        const searchposts = await context.keys().map(key => ({
            ...context(key),
            _path: `/blog/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', ''),
            item_type: 'blog'
        }))

        const context1 = await require.context('~/content/profiles/posts/', false, /\.json$/)

        const searchprofiles = await context1.keys().map(key => ({
            ...context1(key),
            _path: `/${key.replace('.json', '').replace('./', '')}`,
            slug: key.replace('.json', '').replace('./', ''),
            item_type: 'profile'
        }))

        let collections = [...searchprofiles, ...searchposts]

        let items = collections.filter(item => item.title.toLowerCase().includes(word.toLowerCase()))

        commit('SET_SEARCH_ITEMS', _.orderBy(items, 'position', 'asc'))
    }
};