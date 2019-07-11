<template>
  <div class="courseLeft">
    <Row>
      <Col span="6" class="left">
        <i-menu @on-select="changeTabbar" active-name="1">
          <menu-item name="0">
            <img class="img" />
          </menu-item>
          <menu-item :name="index + 1" v-for="(item, index) in leftMenu" :key="index">
            <font size="2" color="gray">{{leftMenu[index]}}</font>
          </menu-item>
        </i-menu>
      </Col>
      <Col span="18">
        <div class="right">
          <router-view />
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
      leftMenu: ["课程公告", "课程课件", "课程考核"],
      msg:""
    };
  },
  created:function(){
    this.msg= this.$route.params.courseInfo
  },
  methods: {
    changeTabbar(selection, row) {
      if (selection == 1) {
        this.$router.push({
          name: "annoucement",
          params: { msg: this.msg }
        });
      } else if (selection == 2) {
        this.$router.push({
          name: "list",
          params: { msg: this.msg }
        });
      } else if (selection == 3) {
        this.$router.push({
          name: "test",
          params: { msg: this.msg }
        });
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
</style>
