export const state = () => ({
  isEndLoad: false
})

export const mutations = {
  completeLoad(state) {
    state.isEndLoad = true
  }
}

export const getters = {
  isEndLoad(state) {
    return state.isEndLoad
  }
}
