<template>
  <div class="home">
    <h1 class="home-title">Bill Swag Clone</h1>
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
export default {
  name: 'HomeView',
};
</script>

<style>
.home {
}

.home-title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 16px;
}

.home-image {
  margin-top: 150px;
  width: 100%;
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

.home-footer {
  margin-top: 25px;
}

.home-footer span {
  padding: 15px;
  cursor: pointer;
}
</style>
