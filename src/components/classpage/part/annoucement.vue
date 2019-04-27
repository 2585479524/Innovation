<template>
  <div id="app">
    <div class="annoucement">
      <el-table style="width: 100%">
        <el-table-column prop="annouce" label="公告"></el-table-column>
        <el-table-column v-for="(item,index) in tableData" :key="index"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      index:" ",
      course:"",
      tableData: [],
    };
  },
  created:function() {
    this.axios
      .get("/course/notice", {
        params: {
          course:"81f88387543743328b30d7b299f33c01",
        }
    })
    .then(res =>{
      for(let i = 0; i<res.data.data.length; i++){
        let affiche=
          api.url +
          res.data.data[i].content +
          res.data.data[i].createTime;
          //this.tableData[i]=affiche;
          Vue.set(this.tableData,i,affiche);
      }
    })
    .catch(err => {})
  }
};
</script>
<style scoped>
#app {
  width: 0 auto;
  height: 500px;
  margin-top: -650px;
  margin-left: 300px;
}
.annoucement {
  color: gray;
  font-size: 10px;
  width: 1050px;
  height: 500px;
  background-color: rgb(255, 255, 255);
}
</style>

