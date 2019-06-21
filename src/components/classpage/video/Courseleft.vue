<template>
  <!--页头部分-->
  <div id="CourseLeft">
    <i-menu>
      <img src="../../../assets/indeximg/course1.jpg">
      <menu-item :name="index" v-for="(item, index) in leftMenu" :key="index">
        <font size="2" color="gray">{{leftMenu[index]}}</font>
      </menu-item>
    </i-menu>
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
  methods: {}
};
</script>
<style scoped>
</style>
