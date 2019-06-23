<template>
  <div class="classSwiper">
    <div class="kuang">
      <!--左侧导航栏-->
      <i-menu theme="dark" active-name="1" width="100%">
        <menu-item name="1">
          <icon type="md-document"/>前端
        </menu-item>
        <menu-item name="2">
          <icon type="md-chatbubbles"/>后端
        </menu-item>
        <menu-item name="3">
          <icon type="md-heart"/>PS
        </menu-item>
        <menu-item name="4">
          <icon type="md-leaf"/>Linux
        </menu-item>
        <menu-item name="5">
          <icon type="md-chatbubbles"/>Java
        </menu-item>
        <menu-item name="6">
          <icon type="md-heart"/>Python
        </menu-item>
        <menu-item name="7">
          <icon type="md-leaf"/>人工智能
        </menu-item>
      </i-menu>
    </div>
    <!--左侧导航栏-->
    <div class="play">
      <!--轮播器-->
      <el-carousel height="380px" arrow="always">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <img :src="item" style="width:100%">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import api from "../../api/index.js";
export default {
  name: "HomeSwiper",
  data() {
    return {
      list: [],
      course: "",
      login: false
    };
  },
  created() {
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
.classSwiper {
  width: 1080px;
  height: 340px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 5px #888888;
}
.kuang {
  width: 20%;
}
.play {
  width: 80%;
  position: relative;
  float: right;
}
.playing {
  position: relative;
  top: -12px;
  width: 100%;
}
.homeImg {
  width: 100%;
  height: 356px;
}
.demo-carousel {
  width: 100%;
}
</style>