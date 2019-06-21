<template>
  <div id="list">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="2" v-for="(item,index) in chapter" :key="index">
        <span slot="title">{{chapter[index].name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      chapter: []
    };
  },
  created() {
    this.axios
      .get("/spinner/chapter", {
        params: {
          course: "81f88387543743328b30d7b299f33c01"
        }
      })
      .then(response => {
        this.chapter = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {}
};
</script>
<style scoped>
#list {
  width: 0 auto;
  height: 500px;
  margin-top: -650px;
  margin-left: 300px;
}
</style>