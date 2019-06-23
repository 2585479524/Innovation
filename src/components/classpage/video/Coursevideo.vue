<template>
  <div class="courseVideo">
    <Layout>
      <Header></Header>
      <Content>
        <Courseleft></Courseleft>
      </Content>
      <Footer class="footer"></Footer>
    </Layout>
  </div>
</template>
<script>
import Header from "@/components/classpage/Headblock";
import Footer from "@/components/classpage/Footer";
import Courseleft from "@/components/classpage/video/CourseLeft";

export default {
  components: {
    Header,
    Footer,
    Courseleft
  }
};
</script>
<style scoped>
.courseVideo .footer {
  width: 100%;
  padding: 15px;
  bottom: 0;
}
</style>
