<template>
  <div class="teacher">
    <div class="direct">
      <Layout>
        <Header></Header>
        <Content class="userbody">
          <i-menu
            @on-select="changeTabbar"
            :theme="theme3"
            :active-name="activeName"
            ref="activeName"
            style="width:250px;background-color:rgb(247, 247, 247)"
          >
            <menu-item name="0">
              <font size="3" color="black">
                <br>
                <div class="user">
                  <img src="@/assets/personalimg/timg.jpg">
                </div>
                <br>
                {{userName}}
              </font>
            </menu-item>
            <menu-item name="teacher/courseteacher">
              <font size="2" color="gray">课程界面</font>
            </menu-item>
          </i-menu>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
    <router-view/>
  </div>
</template>


<script>
import Header from "@/components/classpage/personal/personalheader";
import Footer from "@/components/classpage/Footer";
export default {
  name: "teacher",
  data() {
    return {
      userName: "userName",
      theme3: "light",
      activeName: "teacher/courseteacher"
    };
  },
  components: {
    Header,
    Footer
  },
  updated() {
    this.$nextTick(() => {
      this.activeName = this.$route.path.slice(1);
    });
  },
  methods: {
    changeTabbar(selection, row) {
      if (selection == "teacher/courseteacher") {
        this.$router.push({ name: "courseteacher" });
      }
    }
  }
};
</script>

<style scoped>
.teacher .userbody {
  text-align: center;
  margin-top: 70px;
  height: 600px;
}

.teacher .user {
  width: 50px;
  height: 50px;
  margin-left: 76px;
}
.teacher .user img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>
