<template>
  <div id="app">
    <div class="direct">
      <Layout>
        <Header></Header>

        <!--其他课程页头选择部分-->
        <Content>
          <div id="userbody">
            <i-menu
              @on-select="changeTabbar"
              :theme="theme3"
              active-name="1"
              style="width:250px;background-color:rgb(247, 247, 247)"
            >
              <menu-item name="0">
                <font size="3" color="black">
                  <br>
                  <div class="user">
                    <img src="@/components//classpage/images/timg.jpg">
                  </div>
                  <br>
                  {{userName}}
                </font>
              </menu-item>

              <menu-item name="1">
                <font size="2" color="gray">我上的课</font>
              </menu-item>
            </i-menu>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
    <router-view/>
  </div>
</template>


<script>
import Header from "@/components/classpage/components/personal/personalheader";
import Footer from "@/components/classpage/components/Footer";

export default {
  name: "App",
  data() {
    return {
      userName: "userName",
      theme3: "light"
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    changeTabbar(selection, row) {
      // console.log(selection);
      if (selection == 1) {
        this.$router.push({ name: "coursestudents" });
      }
    }
  }
};
</script>

<style scoped>
#userbody {
  text-align: center;
  margin-top: 70px;
  height: 600px;
}
.coursename {
  width: 400px;
  height: 50px;
  font-size: 36px;
  color: darkslategrey;
  position: absolute;
  margin-left: 1200px;
  margin-top: 220px;
}
.user {
  width: 50px;
  height: 50px;
  margin-left: 76px;
}
.user img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
