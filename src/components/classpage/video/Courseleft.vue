<template>
  <!--页头部分-->
  <div id="app">
    <div class="direct">
      <div class="coursedirect">
        <i-menu
          @on-select="changeTabbar"
          :theme="theme3"
          active-name="1"
          style="width:250px;background-color:rgb(247, 247, 247)"
        >
          <menu-item name="0">
            <font size="3" color="black">
              <br>
              <div class="coursephoto">
                <img :src="courseimg">
              </div>
              <br>
            </font>
          </menu-item>
          <menu-item name="1">
            <font size="2" color="gray">课程公告</font>
          </menu-item>
          <menu-item name="2">
            <font size="2" color="gray">课程课件</font>
          </menu-item>
          <menu-item name="3">
            <font size="2" color="gray">课程考核</font>
          </menu-item>
        </i-menu>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      theme3: "light",
      courseimg: []
    };
  },
  created() {
    this.courseimg = this.$route.query.courseimg
      ? this.$route.query.courseimg
      : this.$route.params.courseimg;
    
  },
  methods: {
    changeTabbar(selection, row) {
      // console.log(selection);
      if (selection == 1) {
        this.$router.push({ name: "annoucement" });
      } else if (selection == 2) {
        this.$router.push({ name: "list" });
      } else if (selection == 3) {
        this.$router.push({ name: "test" });
      }
    },
    getinfo() {
     
    }
  }
};
</script>
<style scoped>
.coursedirect {
  text-align: center;
  margin-top: 80px;
  height: 700px;
}

.coursephoto {
  width: 80px;
  height: 200px;
  margin-left: -20px;
  margin-top: -20px;
}
.coursephoto img {
  width: 240px;
  height: 140px;
}
</style>
