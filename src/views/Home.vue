<template>
  <div>
    <Header class="v-navbar"></Header>
    <div class="content">
     <Regist class="v-regist"></Regist>
      <HomeSwiper></HomeSwiper>
      <Divider class="v-divider"></Divider>
      <Feature class="v-feature"></Feature>
      <Pricing class="v-pricing"></Pricing>
      <FirstPageFooter class="v-footer"></FirstPageFooter>
    </div>
  </div>
</template>

<script>
import Header from "@/components/indexPage/Header";
import Regist from "@/components/indexPage/Regist";
import Divider from "@/components/indexPage/Divider";
import Feature from "@/components/indexPage/Feature";
import Pricing from "@/components/indexPage/Pricing";
import FirstPageFooter from "@/components/indexPage/FirstPageFooter";
import HomeSwiper from "@/components/indexPage/HomeSwiper";

export default {
  name: "Home",
  components: {
    Header,
    Regist,
    HomeSwiper,
    Divider,
    Feature,
    Pricing,
    FirstPageFooter
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  position: relative;
  top: 100px;
}
.v-navbar {
  position: fixed;
  z-index: 15;
  top: 0px;
}

.v-footer {
  bottom: 0px;
  width: 100%;
  position: relative;
  clear: both;
  top: 100px;
}
.v-divider {
  height: 100%;
}
.v-feature {
  width: 100%;
  margin-top: 30px;
  height: 100%;
  padding: 50px;
}
.v-pricing {
  width: 100%;
  margin-top: 30px;
}

@media (min-width: 768px) {
  .container {
    width: 700px;
    margin: 0 auto;
  }
}
@media (min-width: 992px) {
  .container {
    width: 900px;
    margin: 0 auto;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1000px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 991px) {
  .templatemo-box {
    margin-bottom: 30px;
  }
  #pricing .active {
    bottom: 0;
  }
  .pricing {
    margin-bottom: 20px;
  }
  #feature img {
    margin-top: 30px;
  }
  #contact .row div {
    margin: 0 auto;
    width: 200px;
  }
}
@media screen and (max-width: 767px) {
  .navbar-default .nav li a {
    height: auto;
    line-height: 2em;
  }
  #feature,
  #pricing,
  #download {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  #contact .overlay {
    padding-top: 40px;
  }
}
/* start media 360 */
@media screen and (max-width: 360px) {
  .pricing {
    padding-bottom: 40px;
  }
}
/* end media 360 */
</style>