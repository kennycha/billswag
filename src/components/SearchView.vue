<template>
  <div class="search">
    <input
      @click="toggleIsSearching(true);"
      @keypress.enter="searchAlbums(searchInput)"
      v-model="searchInput"
      type="text"
      id="searchAlbum"
      class="search-input"
      placeholder="Search for Album.."
    />
    <ul v-if="isSearching && albums.length > 0" class="albums">
      <li v-for="album in albums" :key="album.url">
        <div class="albums-item" @click="toggleIsSearching(false); clearInput(); clearAlbums();">
          <img class="albums-item-image" :src="album.image[1]['#text']" />
          <div class="albums-item-info">
            <span>{{ album.name }}</span>
            <span>{{ album.artist }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SearchView',
  data() {
    return {
      searchInput: null,
    };
  },
  computed: {
    ...mapState(['albums', 'isSearching']),
  },
  methods: {
    ...mapActions([
      'searchAlbums',
      'toggleIsSearching',
      'clearAlbums',
    ]),
    clearInput() {
      this.searchInput = null;
    },
  },
};
</script>

<style>
li {
  list-style: none;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  z-index: 2;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 16px 8px;
  margin: 16px 0;
  border: 1px solid #cbd5e0;
}

.albums {
  width: 100%;
}

.albums-item {
  display: flex;
  flex-direction: row;
  padding: 8px;
  background-color: #fcfcfc;
  border: 1px solid #cbd5e0;
}

.albums-item:hover {
  background-color: #f7f1e3;
}

.albums-item-info {
  display: flex;
  width: 100%;
  text-align: start;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}
</style>