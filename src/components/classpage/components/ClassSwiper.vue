<template>

    <div class="container-container-home">
      <div class="home-content">
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
          <Carousel autoplay loop class="playing" v-if="img.length>1">
            <carousel-item v-for="(item,index) in img" :key="index">
              <div class="demo-carousel">
                <img :src="item.url" width="100%" class="homeImg">
              </div>
            </carousel-item>
          </Carousel>
        </div>
      </div>

    <!--container-->
  </div>
  <!--hello-->
</template>

<script>
import axios from "axios";
export default {
  name: "HomeSwiper",
  data() {
    return {
      img: [],
      course: "",
      login: false
    };
  },
   created() {
    axios
      .get('https://www.easy-mock.com/mock/5cb48cdd2751d709332e2dd8/Vueproject_copy/image')
      .then(response => {
        //console.log(response);

        this.img = response.data.data.image;
      })
      .catch(error => {
       // console.log(error);
        alert("网络错误，不能访问");
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 768px) {
  .container {
    width: 700px;
    margin: 0 auto;
  }
}
@media (min-width: 992px) {
  .container {
    width: 900px;
    margin: 0 auto;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1000px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 991px) {
  .templatemo-box {
    margin-bottom: 30px;
  }
  #pricing .active {
    bottom: 0;
  }
  .pricing {
    margin-bottom: 20px;
  }
  #feature img {
    margin-top: 30px;
  }
  #contact .row div {
    margin: 0 auto;
    width: 200px;
  }
}
@media screen and (max-width: 767px) {
  .navbar-default .nav li a {
    height: auto;
    line-height: 2em;
  }
  #feature,
  #pricing,
  #download {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  #contact .overlay {
    padding-top: 40px;
  }
}
/* start media 360 */
@media screen and (max-width: 360px) {
  .pricing {
    padding-bottom: 40px;
  }
}
/* end media 360 */

.home-content {
  width: 1080px;
  height: 340px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 5px #888888;
}
.kuang{
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
.demo-carousel{
    width: 100%;
}
</style>