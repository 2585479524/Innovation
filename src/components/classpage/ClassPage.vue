<template>
  <div id="classpage">
    <!--页头块-->
    <Layout>
      <Header @show-login="show"></Header>

      <!--内容展示块-->
      <Content>
        <div class="Content-navigation">
        <ClassSwiper class="v-home"></ClassSwiper>
          <!--第一版轮播图
            <div class="Content-nav">
            <Menu>
              <MenuGroup title>
                <MenuItem class="MenuItem" name="1">
                  <Icon type="md-document"/>基础课程
                </MenuItem>
                <MenuItem class="MenuItem" name="2">
                  <Icon type="md-chatbubbles"/>前端课程
                </MenuItem>
                <MenuItem class="MenuItem" name="3">
                  <Icon type="md-chatbubbles"/>后端课程
                </MenuItem>
                <MenuItem class="MenuItem" name="4">
                  <Icon type="md-chatbubbles"/>前端实战
                </MenuItem>
              </MenuGroup>
            </Menu>

            <div class="Content-img">
              <swiper v-if="img.length>1" :options="swiperOption" class="swiper">
                <swiper-slide v-for="(item,index) in img" :key="index">
                  <img :src="item.url" width="100%">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
              </swiper>
            </div>
            
          </div>-->
          <!--视频展示-->
          <div class="Content-list">
            <Course courses="basis" CourseClass="基 / 础 / 课 / 程"></Course>
            <Course courses="front" CourseClass="前 / 端 / 课 / 程"></Course>
            <Course courses="back" CourseClass="后 / 端 / 课 / 程"></Course>
          </div>
        </div>
      </Content>
      <div class="footer">
      <Footer></Footer>
      </div>
    </Layout>
<Sign v-if="login" @hidden-login="hidden"></Sign>
  </div>
</template>

<script>
//import axios from "axios";
//import "swiper/dist/css/swiper.css";
//import { swiper, swiperSlide } from "vue-awesome-swiper";
import Header from "@/components/classpage/components/Headblock";
import ClassSwiper from "@/components/classpage/components/ClassSwiper";
import Footer from "@/components/classpage/components/Footer";
import Course from "@/components/classpage/components/CourseShow";
import Sign from "@/components/classpage/components/sign/sign";
export default {
  name: "ClassPage",
  data() {
    return {
  /*  第一版轮播图  
      solid: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        notNextTick: true,
        loop: true,
        autoplay: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
  */
      img: [],
      course: "",
      login:false
    };
  },
  methods:{
      show(data){
        this.login = data;
      },
      hidden(data){
        this.login = data;
      }
  },
  components: {
    //swiper,
    //swiperSlide,
    ClassSwiper,
    Header,
    Footer,
    Course,
    Sign,
  },
  /*created() {
    axios
      .get("/api/images")
      .then(response => {
        console.log(response);

        this.img = response.data.image;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  }*/
};
</script>

<style scoped>

Content{
  z-index: 1;
}
.MenuItem {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.Content-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 60px;
  
}
.v-home{
  width: 1080px;
}
.footer{
  height: 160px;
  margin-top: -80px;
}


/*.Content-nav {
  border-radius: 9px ;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
}
.Content-img {
  width: 840px;
  overflow: hidden;
}
.swiper {
  height: 360px;
  overflow: hidden;
}
.swiper-slide {
  height: 860px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}*/
/* Sign{
  width:100%;
  height: 100%;
} */
</style>