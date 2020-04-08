export const state = () => ({
    sidebar: false
})

export const getters = {
    sidebar: state => state.sidebar
}

export const mutations = {
    toggleSidebar(state) {
        state.sidebar = !state.sidebar
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {},

    nuxtClientInit({ commit }) {}
}

export const strict = false