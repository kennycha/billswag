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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SearchBar',
  data() {
    return {
      searchInput: null,
    }
  },
  computed: {
    ...mapState(['albums'])
  },
  methods: {
    ...mapActions(['searchAlbums'])
  },
  created() {
    this.searchAlbums()
  }
}
</script>

<style>

</style>