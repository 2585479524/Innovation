<template>
  <div class="block">
    <div class="imgDiv">
      <el-carousel height="380px" arrow="always">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <img :src="item.src" style="max-width:1119px">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { src: require("@/assets/indeximg/a.jpg") },
        { src: require("@/assets/indeximg/b.jpg") },
        { src: require("@/assets/indeximg/c.jpg") }
      ]
    };
  }
};
</script>

<style>
.block {
  width: 100%;
  display: flex;
  justify-content: center;
}
.imgDiv {
  width: 1000px;
  box-shadow: #030303 0px 0px 12px;
}
.imgDiv img {
  width: 1000px;
  height: 380px;
}
</style>