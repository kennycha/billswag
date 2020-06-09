<template>
  <div>
    <h2>Search Bar</h2>
    <label for="searchAlbum">Search Album</label>
    <input 
      @keypress.enter="searchAlbum" 
      v-model="searchInput" 
      type="text" 
      id="searchAlbum">

    <ul>
      <li v-for="album in albums" :key="album.url">
        {{ album.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchBar',
  data() {
    return {
      searchInput: null,
      albums: [],
    }
  },
  methods: {
    searchAlbum() {
      axios.get(`https://billswag.herokuapp.com/api/${this.searchInput}/`)
        // API SERVER에서 아래 내용만 넘겨주는 거로 바꿔야함
        .then(res => {
          this.albums = res.data.results.albummatches.album
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>