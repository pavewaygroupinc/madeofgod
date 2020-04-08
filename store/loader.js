export const state = () => ({
  loader: false,
  loading: false,
  message: "Processing..."
})

export const getters = {
  loader: state => state.loader,
  loading: state => state.loading,
  message: state => state.message
}

export const mutations = {
  toggleLoader (state) {
    state.loader = !state.loader
  },

  setMessage (state, payload) {
    state.message = payload
  },

  toggleLoading (state) {
    state.loading = !state.loading
  }
}

export const actions = {}
