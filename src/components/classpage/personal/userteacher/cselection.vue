<template>
  <div id="app">
    <div class="contain">
      <br>
      <b>选课人数：</b>
      {{num}}
      <br>
      <br>
      <i-table border :columns="columns1" :data="data1" style="width:700px;"></i-table>
    </div>
    <i-button style="color:white;background-color:#3d6ea7" @click="ago">返回上一界面</i-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "学号",
          key: "num"
        },
        {
          title: "学生姓名",
          key: "name"
        },
        {
          title: "联系方式",
          key: "tel"
        }
      ],
      data1: [],
      num: "",
    };
  },
  created(){
    this.id = this.$route.query.id
      this.axios
          .get("/teacher/statistics/student", {
            params: {
            	course:this.id,
            }
          })
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
      },
      methods:{
        ago() {
            this.$router.go(-1);
          },
      }
};
</script>

<style scoped>
#app {
  width: 0 auto;
  height: 500px;
  margin-top: -850px;
  margin-left: 300px;
}
.contain {
  padding-left: 100px;
  padding-top: 50px;
  text-align: start;
  color: gray;
  font-size: 10px;
  width: 960px;
  height: 600px;
  background-color: rgb(255, 255, 255);
}
.table {
  font-family: verdana, arial, sans-serif;
  font-size: 12px;
  color: #333333;
  border-width: 1px;
  border-color: #b8b6b6;
  border-collapse: collapse;
  width: 600px;
  height: 0 auto;
}
.table th {
  border-width: 1px;
  padding: 10px;
  border-style: solid;
  border-color: #b8b6b6;
  background-color: aliceblue;
  color: gray;
}
.table td {
  border-width: 1px;
  padding: 12px;
  border-style: solid;
  border-color: #b8b6b6;
  background-color: #ffffff;
}
</style>