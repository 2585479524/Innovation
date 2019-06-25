<template>
  <!--页头部分-->
  <div class="courseLeft">
    <Row>
      <Col span="6" class="left">
        <i-menu @on-select="changeTabbar" active-name="1">
          <menu-item name="0">
            <img class="img" src="../../../assets/indeximg/course1.jpg">
          </menu-item>
          <menu-item :name="index + 1" v-for="(item, index) in leftMenu" :key="index">
            <font size="2" color="gray">{{leftMenu[index]}}</font>
          </menu-item>
        </i-menu>
      </Col>
      <Col span="18">
        <div class="right">
          <router-view/>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      leftMenu: ["课程公告", "课程课件", "课程考核"]
    };
  },
  methods: {
    changeTabbar(selection, row) {
      if (selection == 1) {
        this.$router.push({ name: "annoucement" });
      } else if (selection == 2) {
        this.$router.push({ name: "list" });
      } else if (selection == 3) {
        this.$router.push({ name: "test" });
      }
    }
  }
};
</script>
<style scoped>
.courseLeft {
  margin: 50px;
  height: 550px;
}
.courseLeft .img {
  width: 100%;
}
.courseLeft .right {
  margin: 0 -170px;
  width: 86.5%;
}
</style>
