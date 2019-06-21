<template>
  <div class="swiper">
    <div class="imgDiv">
      <el-carousel height="380px" arrow="always">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <img :src="item" style="max-width:1119px">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import api from "../../api/index.js";
export default {
  data() {
    return {
      list: []
    };
  },
  created: function() {
    this.axios
      .get("/rotationPicture/list", {
        params: {
          tag: "index"
        }
      })
      .then(res => {
        for (let i = 0; i < res.data.data.length; i++) {
          let imgUrl =
            api.url +
            res.data.data[i].mappingPath +
            res.data.data[i].id +
            "." +
            res.data.data[i].suffix;
          Vue.set(this.list, i, imgUrl);
        }
      })
      .catch(err => {});
  }
};
</script>

<style scoped>
.swiper {
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
