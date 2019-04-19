<template>
  <!--页头以及导航部分-->
  <div class="direct">
    <Layout>
      <Header></Header>

      <!--其他课程页头选择部分-->
      <Content>
        <div class="test">
          <Courseleft></Courseleft>
        </div>
      </Content>

      <div>
        <Footer></Footer>
      </div>
    </Layout>
  </div>
</template>
<script>
import Header from "@/components/classpage/components/Headblock";
import Footer from "@/components/classpage/components/Footer";
import Courseleft from "@/components/classpage/components/Courseleft";

export default {
  components: {
    Header,
    Footer,
    Courseleft
  }
};
</script>
<style scoped>
.test {
  height: 900px;
}
</style>
