<template>
  <Header style="background-color: #fff;">
    <div class="Header-div">
      <div class="Header-logo">
        <img src="@/assets/classpage/classlogo.png" style="max-width:200px;">
      </div>
      <div class="Header-login">
        <router-link to="/classpage">首页 |</router-link>
        <span @click="login">
          <router-link to="/sign_in">个人中心</router-link>
        </span>
        <span @click="login"></span>
      </div>
    </div>
  </Header>
</template>

<script>
export default {
  methods: {
    login() {
      this.$emit("show-login", true);
    }
  }
};
</script>

<style scoped>
.Header-div {
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Header-logo {
  color: rgb(8, 14, 8);
  /* font-style: oblique; */
  font-size: 36px;
  line-height: 50px;
  height: 64px;
  width: 50%;
  text-align: center;
  margin-top: -5px;
}
.Header-login {
  height: 64px;
  line-height: 80px;
  font-size: 13px;
  width: 50%;
  text-align: center;
}
</style>