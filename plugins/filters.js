import Vue from 'vue'
import _ from 'lodash'
import moment from 'moment'
import { Howl, Howler } from 'howler'

export function slugify(value) {
    value = value.replace(/^\s+|\s+$/g, ''); // trim
    value = value.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return value;
}

export function timeAgo(time) {
    const timeDiff = moment(time).fromNow()

    return timeDiff
}

export function getFullUrl(path) {
    return `${process.env.appUrl}${path}`
}

export function getEmbededUrl(path) {
    return `${process.env.appUrl}${path}?content_embed=true`
}

export function facebookSharer(title, path, description) {
    return `https://www.facebook.com/sharer/sharer.php?u=${process.env.appUrl}${path}&title=${title}&description=${description}`
}

export function twitterSharer(title, path) {
    return `http://twitter.com/intent/tweet?text=${title}&url=${process.env.appUrl}${path}`
}

export function pintressSharer(title, path) {
    return `https://www.pinterest.com/pin/create/button/?url=${process.env.appUrl}${path}&description=${title}`
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function publishTime(date) {
    const time = moment(date).format("LT")
    return time
}

export function lastlyUpdated(date) {
    const time = moment(date).format("DD MMM YYYY")
    return time
}

export function monthDay(date) {
    const x = moment(new Date(date.replace('th,', '').replace('rd,', '').replace('st,', '')), "MM/DD/YYYY")

    return x.format("MMMM DD, YYYY")
}

export function getYear(date) {
    const x = moment(new Date(date.replace('th,', '').replace('rd,', '').replace('st,', '')), "MM/DD/YYYY")

    return x.format("YYYY")
}

export function minutes(value) {
    if (!value || typeof value !== "number") return "00:00"
    let min = parseInt(value / 60),
        sec = parseInt(value % 60)
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec
    value = min + ":" + sec
    return value
}

export function formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    return min + ':' + sec;
}

export function getLatestSongs() {
    const context = require.context('~/content/songs/posts/', false, /\.json$/);


    const songs = context.keys().map(key => ({
        ...context(key),
        _path: `/music-library/${key.replace('.json', '').replace('./', '')}`,
        slug: key.replace('.json', '').replace('./', ''),
        howl: null,
        display: true
    }))

    return _.orderBy(songs.filter(song => song.featured), 'date', "asc").slice(0, 5)
}

export function getSongs(number = 5) {
    const context = require.context('~/content/songs/posts/', false, /\.json$/);


    const songs = context.keys().map(key => ({
        ...context(key),
        _path: `/music-library/${key.replace('.json', '').replace('./', '')}`,
        slug: key.replace('.json', '').replace('./', ''),
        howl: null,
        display: true
    }))

    return _.orderBy(songs, 'position', "asc")
}

export function getProfileById(id) {
    const context = require.context('~/content/profiles/posts/', false, /\.json$/);

    const profiles = context.keys().map(key => ({
        ...context(key),
        _path: `/profile/${key.replace('.json', '').replace('./', '')}`,
        slug: key.replace('.json', '').replace('./', '')
    }))

    let profile = profiles.filter(item => item.id.includes(id))

    return profile[0]
}

export function getCategoryById(id) {
    const context = require.context('~/content/categories/posts/', false, /\.json$/);

    const categories = context.keys().map(key => ({
        ...context(key),
        _path: `/category/${key.replace('.json', '').replace('./', '')}`,
        slug: key.replace('.json', '').replace('./', '')
    }))

    let category = categories.filter(item => item.id.includes(id))

    return category[0]
}

export function getCategorySlugById(id) {
    const context = require.context('~/content/categories/posts/', false, /\.json$/);

    const categories = context.keys().map(key => ({
        ...context(key),
        slug: key.replace('.json', '').replace('./', '')
    }))

    let category = categories.filter(item => item.id.includes(id))

    return category[0].slug
}

export function getCategoryBySlug(slug) {
    const category = require(`~/content/categories/posts/${slug}.json`)

    return category
}

export function getGenreById(id) {
    const context = require.context('~/content/genres/posts/', false, /\.json$/);

    const genres = context.keys().map(key => ({
        ...context(key),
        _path: `/genre/${key.replace('.json', '').replace('./', '')}`,
        slug: key.replace('.json', '').replace('./', '')
    }))

    let genre = genres.filter(item => item.id.includes(id))

    return genre[0]
}

export function getGenreSlugById(id) {
    const context = require.context('~/content/genres/posts/', false, /\.json$/);


    const genres = context.keys().map(key => ({
        ...context(key),
        slug: key.replace('.json', '').replace('./', '')
    }))

    let genre = genres.filter(item => item.id.includes(id))

    return genre[0].slug
}

export function getCategoryIdBySlug(slug) {
    const category = require(`~/content/categories/posts/${slug}.json`)

    return category.id
}

export function getGenreIdBySlug(slug) {
    const genre = require(`~/content/genres/posts/${slug}.json`)

    return genre.id
}

export function titleTemplate(title) {
    let find = '\\${year}'
    return title.replace(new RegExp(find, 'gm'), new Date().getFullYear())
}

export function getAuthorById(id) {
    const context = require.context('~/content/authors/posts/', false, /\.json$/);


    const authors = context.keys().map(key => ({
        ...context(key)
    }))

    let items = authors.filter(author => author.id.includes(id))

    return items[0]
}

const filters = {
    slugify,
    timeAgo,
    monthDay,
    minutes,
    getYear,
    getSongs,
    getFullUrl,
    publishTime,
    getGenreById,
    getProfileById,
    getEmbededUrl,
    getAuthorById,
    lastlyUpdated,
    titleTemplate,
    twitterSharer,
    pintressSharer,
    getLatestSongs,
    facebookSharer,
    getCategoryById,
    getCategoryBySlug,
    getGenreSlugById,
    getGenreIdBySlug,
    formatSecondsAsTime,
    getCategorySlugById,
    getCategoryIdBySlug,
    capitalizeFirstLetter
}

export default Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})