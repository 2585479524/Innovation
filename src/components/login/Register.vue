<template>
  <div class="bg">
    <div class="ipt">
      <Select prefix="ios-pricetag" placeholder="请选择你的身份" style="width:300px" v-model="item">
        <Option v-for="item in cityList" :value="item" :key="item">{{ item }}</Option>
      </Select>

      <Button style="width:300px" type="primary" @click="login">确认</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: ["学生", "教师"],
      item: ""
    };
  },
  methods: {
    login() {
      // console.log(this.item)
      if (this.item == "学生") {
        this.$router.push({ name: "coursestudents" });
      } else if (this.item == "教师") {
        this.$router.push({ name: "courseteacher" });
      }
    }
  }
};
</script>

<style scoped>
.checkbox {
  position: absolute;
  bottom: 100px;
  left: 75px;
}
a {
  position: absolute;
  bottom: 100px;
  right: 75px;
}
.bg {
  height: 420px;
  width: 100%;
  background-color: white;
  border-radius: 0px 0px 20px 20px;
}
.ipt {
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
}
.btn {
  position: relative;
  bottom: 0px;
}
p {
  color: red;
  position: absolute;
  right: 77px;
}
</style>