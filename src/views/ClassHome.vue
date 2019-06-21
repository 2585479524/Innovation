<template>
  <div id="classpage">
    <!--页头块-->
    <Layout>
      <Header></Header>
      <!--内容展示块-->
      <Content>
        <div class="Content-navigation">
          <ClassSwiper class="v-home"></ClassSwiper>
          <!-- 视频展示 -->
          <div class="Content-list">
            <CourseShow v-for="(item,index) in courseList" :key="index" :tag="item"></CourseShow>
          </div>
        </div>
      </Content>
      <div class="footer">
        <Footer></Footer>
      </div>
    </Layout>
  </div>
</template>

<script>
import Header from "@/components/classpage/Headblock";
import ClassSwiper from "@/components/classpage/ClassSwiper";
import Footer from "@/components/classpage/Footer";
import CourseShow from "@/components/classpage/CourseShow";
import Sign from "@/components/login/Sign";
export default {
  name: "ClassPage",
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
content {
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
.v-home {
  width: 1080px;
}
.footer {
  height: 160px;
  margin-top: 0px;
}
</style>