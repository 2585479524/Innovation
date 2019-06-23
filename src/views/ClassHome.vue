<template>
  <div class="classPage">
    <Header></Header>
    <Content class="navigation">
      <ClassSwiper class="swiper"></ClassSwiper>
      <CourseShow v-for="(item,index) in courseList" :key="index" :tag="item"></CourseShow>
    </Content>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/classpage/Headblock";
import ClassSwiper from "@/components/classpage/ClassSwiper";
import Footer from "@/components/classpage/Footer";
import CourseShow from "@/components/classpage/CourseShow";
import Sign from "@/components/login/Sign";
export default {
  name: "classPage",
  data() {
    return {
      img: [],
      course: "",
      courseList: ["web前端", "web后端", "人工智能"]
    };
  },

  methods: {},
  components: {
    ClassSwiper,
    Header,
    Footer,
    CourseShow,
    Sign
  }
};
</script>

<style scoped>
.classPage .navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.classPage .swiper {
  margin: 30px 0;
}
.classPage .footer {
  bottom: 0px;
  width: 100%;
  position: relative;
  clear: both;
  top: 100px;
}
</style>