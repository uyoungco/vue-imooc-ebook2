const store = {
  state: {
    hotSearchOffsetY: 0,
    flapCardVisible: true
  },
  mutations: {
    'SET_HOT_SEARCH_OFFSETY': (state, offsetY) => {
      state.hotSearchOffsetY = offsetY
    },
    'SET_FLAP_CARD_VISIBEL': (state, visibel) => {
      state.flapCardVisible = visibel
    }
  }
}

export default store
