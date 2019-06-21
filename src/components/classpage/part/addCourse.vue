<template>
  <div class="addCourse">
    <Layout>
      <Header></Header>
      <Content class="content">
        <Row>
          <Col span="12">
            <img class="img" :src="courseInfo.image">
          </Col>
          <Col span="12">
            <div class="info">
              <p class="coursename">课程名称:{{courseInfo.name}}</p>
              <p class="coursename">课程类别:{{courseInfo.tag}}</p>
              <p class="coursename">主讲教师:{{courseInfo.teacher}}</p>
              <el-button class="joinBtn" type="primary" @click="getclickId">参加课程</el-button>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer class="footer"></Footer>
    </Layout>
  </div>
</template>

<script>
import Header from "@/components/classpage/Headblock";
import Footer from "@/components/classpage/Footer";
export default {
  components: {
    Header,
    Footer
  },
  name: "app",
  data() {
    return {
      courseInfo: {}
    };
  },
  created() {
    this.courseInfo = this.$route.params.courseInfo;
  },
  methods: {
    getclickId() {
      this.$router.push({
        name: "annoucement",
        params: { courseInfo: this.courseInfo }
      });
    }
  }
};
</script>

<style scoped>
.addCourse .content {
  padding: 50px 100px;
  background-color: white;
}
.addCourse .img {
  margin: 50px;
  width: 400px;
}
.addCourse .info {
  margin: 50px;
}
.addCourse .info p {
  display: block;
  font-size: 16px;
  margin: 5px;
}
.addCourse .info .joinBtn {
  position: absolute;
  top: 200px;
}
.addCourse .footer {
  position: absolute;
  width: 100%;
  padding: 15px;
  bottom: 0;
}
</style>
