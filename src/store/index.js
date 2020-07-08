import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      albums: []
    },
    getters: {

    },
    mutations: {
      SET_ALBUMS(state, albums) {
        state.albums = albums
      }
    },
    actions: {
      searchAlbums({ commit }) {
        axios.get(`https://billswag.herokuapp.com/api/${this.searchInput}/`)
          // API SERVER에서 아래 내용만 넘겨주는 거로 바꿔야함
          .then(res => {
            commit('SET_ALBUMS', res.data.results.albummatches.album)
          })
          .catch(err => console.error(err))
      }
    }
})