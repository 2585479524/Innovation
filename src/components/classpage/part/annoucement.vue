<template>
  <div class="annoucement">
    <el-table>
      <el-table-column prop="annouce" label="公告"></el-table-column>
      <el-table-column v-for="(item,index) in tableData" :key="index"></el-table-column>
      
    </el-table>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      course: "",
      tableData: []
    };
  },
  created: function() {
    const courseId = this.$route.params.courseInfo.id;
    this.axios
      .get("/course/notice", {
        params: {
          course: courseId
        }
      })
      .then(res => {
        for (let i = 0; i < res.data.data.length; i++) {
          let affiche =
            api.url + res.data.data[i].content + res.data.data[i].createTime;
          Vue.set(this.tableData, i, affiche);
        }
      })
      .catch(err => {});
  }
};
</script>
<style scoped>
</style>

