<template>
  <div class="student">
    <div class="direct">
      <!--其他课程页头选择部分-->
      <Header></Header>
      <div class="userbody">
        <el-row>
          <el-col :span="4">
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
                    <img src="@/assets/personalimg/timg.jpg">
                  </div>
                  <br>
                  {{userName}}
                </font>
              </menu-item>

              <menu-item name="1">
                <font size="2" color="gray">我上的课</font>
              </menu-item>
            </i-menu>
          </el-col>
         
            <router-view/>
    
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
  name: "coursestudents",
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
.userbody {
  text-align: center;
  margin-top: 70px;
  height: 600px;
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
.v-footer {
  bottom: 0px;
  width: 100%;
  position: relative;

  top: 100px;
}
</style>
