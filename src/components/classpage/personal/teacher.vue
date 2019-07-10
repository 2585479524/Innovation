<template>
  <div class="teacher">
    <Header></Header>
    <div class="direct">
      <div class="userbody">
        <el-row>
          <el-col :span="4">
            <i-menu
              @on-select="changeTabbar"
              :theme="theme3"
              :active-name="1"
              
              style="width:250px;background-color:rgb(247, 247, 247)"
            >
              <menu-item name="0">
                <font size="3" color="black">
                  <br />
                  <div class="user">
                    <img src="@/assets/personalimg/timg.jpg" />
                  </div>
                  <br />
                  {{userName}}
                </font>
              </menu-item>
              <menu-item name="1">
                <font size="2" color="gray">课程界面</font>
              </menu-item>
              <menu-item name="2">
                <font size="2" color="gray">上传期末考试</font>
              </menu-item>
            </i-menu>
          </el-col>
          <el-col :span="20">
            <router-view />
          </el-col>
        </el-row>
      </div>

      <Footer class="v-footer"></Footer>
    </div>
  </div>
</template>


<script>
import Header from "@/components/classpage/Headblock";
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
      if (selection == "1") {
        this.$router.push({ name: "courseTeacher" });
      } else {
        this.$router.push({ name: "exam" });
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
.v-footer {
  bottom: 0px;
  width: 100%;
  position: relative;

  top: 100px;
}
</style>
