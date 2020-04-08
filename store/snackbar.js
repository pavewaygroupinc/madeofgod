export const state = () => ({
  message: null,
  show: false,
  errorSnack: true
});

export const getters = {
  message: state => state.message,
  errorSnack: state => state.errorSnack,
  show: state => state.show
}

export const mutations = {
  showError(state, message) {
    state.message = message
    state.errorSnack = true
    state.show = true
  },
  showSnack(state, message) {
    state.errorSnack = false
    state.message = message
    state.show = true
  },
  reset(state) {
    state.errorSnack = true
    state.message = null
    state.show = false
  }
};