<template>
  <div class="home">
    <h1 class="home-title">Bill Swag Clone</h1>
    <div class="selected-items">
      <img
        v-if="selected.length > 0"
        class="selected-item selected1"
        :src="selected[0]"
        alt="album cover"
      />
      <img
        v-if="selected.length > 0"
        class="selected-item-over selected1-over"
        src="https://res.cloudinary.com/kennycld/image/upload/v1594307097/bill%20clone/%EA%B7%B8%EB%A6%BC2_ixq5si.png"
        alt="album cover"
      />
      <img
        v-if="selected.length == 0"
        class="selected-item-over selected1-over default-over"
        src="https://res.cloudinary.com/kennycld/image/upload/v1594307097/bill%20clone/%EA%B7%B8%EB%A6%BC2_ixq5si.png"
        alt="album cover"
      />
      <img
        v-if="selected.length > 1"
        class="selected-item selected2"
        :src="selected[1]"
        alt="album cover"
      />
      <img
        v-if="selected.length > 1"
        class="selected-item-over selected2-over"
        src="https://res.cloudinary.com/kennycld/image/upload/v1594307097/bill%20clone/%EA%B7%B8%EB%A6%BC2_ixq5si.png"
        alt="album cover"
      />
      <img
        v-if="selected.length > 2"
        class="selected-item selected3"
        :src="selected[2]"
        alt="album cover"
      />
      <img
        v-if="selected.length > 2"
        class="selected-item-over selected3-over"
        src="https://res.cloudinary.com/kennycld/image/upload/v1594307097/bill%20clone/%EA%B7%B8%EB%A6%BC2_ixq5si.png"
        alt="album cover"
      />
      <img
        v-if="selected.length > 3"
        class="selected-item selected4"
        :src="selected[3]"
        alt="album cover"
      />
      <img
        v-if="selected.length > 3"
        class="selected-item-over selected4-over"
        src="https://res.cloudinary.com/kennycld/image/upload/v1594307097/bill%20clone/%EA%B7%B8%EB%A6%BC2_ixq5si.png"
        alt="album cover"
      />
    </div>
    <img
      class="home-image"
      src="https://res.cloudinary.com/kennycld/image/upload/v1594291405/bill%20clone/lpimage_o6bmvn.png"
    />
    <button class="home-generator">Generate Swag</button>
    <footer class="home-footer">
      <a href="https://github.com/kennycha/billswag">
        <span>by kenny</span>
      </a>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState(["selected"]),
  },
};
</script>

<style>
.home {
  position: relative;
}

.home-title {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 16px;
}

.home-image {
  margin-top: 130px;
  width: 100%;
}

.selected-items {
  position: absolute;
  top: 192px;
}

.selected-item {
  border: 1px solid #353b48;
}

.selected-item-over {
  position: absolute;
  opacity: 0.5;
}

.default-over {
  opacity: 1;
}

.selected1 {
  position: absolute;
  left: 138px;
  height: 300px;
  border-radius: 100%;
}

.selected1-over {
  left: 234px;
  top: 100px;
  height: 103px;
}

.selected2 {
  position: absolute;
  top: 155px;
  left: 0px;
  height: 220px;
  width: 270px;
  border-radius: 100%;
  transform: perspective(500px) rotateX(45deg);
}

.selected2-over {
  left: 90px;
  top: 240px;
  height: 73px;
  width: 90px;
  transform: perspective(500px) rotateX(45deg);
}

.selected3 {
  position: absolute;
  left: 15px;
  top: 55px;
  height: 220px;
  border-radius: 100%;
}

.selected3-over {
  left: 85px;
  top: 130px;
  height: 85px;
}

.selected4 {
  position: absolute;
  left: 180px;
  top: 250px;
  height: 100px;
  width: 280px;
  border-radius: 100%;
  transform: rotate(-17deg);
}

.selected4-over {
  left: 275px;
  top: 290px;
  height: 33px;
  width: 93px;
  transform: rotate(-17deg);
}

.home-generator {
  font-size: 16px;
  color: #fcfcfc;
  background-color: #34495e;
  border: none;
  margin-top: 50px;
  width: 100%;
  padding: 15px 0;
}

.home-generator:hover {
  cursor: pointer;
}

.home-footer {
  margin-top: 25px;
}

.home-footer span {
  padding: 15px;
  cursor: pointer;
}
</style>
