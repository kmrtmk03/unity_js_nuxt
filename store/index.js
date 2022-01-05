export const state = () => ({
  isEndLoad: false,
  playerColor: 1
})

export const mutations = {
  completeLoad(state) {
    state.isEndLoad = true
  },
  playerColor(state, _color) {
    state.playerColor = _color
  }
}

export const getters = {
  isEndLoad(state) {
    return state.isEndLoad
  },
  playerColor(state) {
    return state.playerColor
  }
}
