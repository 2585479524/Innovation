<template>
  <div id="classpage">
    <!--页头块-->
    <Layout>
      <Header @show-login="show"></Header>

      <!--内容展示块-->
      <Content>
        <div class="Content-navigation">
        <ClassSwiper class="v-home"></ClassSwiper>
         
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

import Header from "@/components/classpage/Headblock";
import ClassSwiper from "@/components/classpage/ClassSwiper";
import Footer from "@/components/classpage/Footer";
import Course from "@/components/classpage/CourseShow";
import Sign from "@/components/classpage/sign/sign";
export default {
  name: "ClassPage",
  data() {
    return {
      img: [],
      course: "",
      login:false,
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
    ClassSwiper,
    Header,
    Footer,
    Course,
    Sign,
  },

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
  margin-top: 40px;
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