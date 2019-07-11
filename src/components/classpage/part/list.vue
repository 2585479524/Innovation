<template>
  <div id="list">
    <el-menu class="el-menu-vertical-demo" @select="jumpMovie">
      <el-menu-item :index="i" v-for="(item, i) in chapter" :key="i">
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
    {{this.$route.params.msg}}
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
  methods: {
    jumpMovie(index) {
      // console.log(index);
      this.$router.push({ name: "ShowVideo" });
      // if (index == 1) {
      //
      // }
    }
  }
};
</script>
<style scoped>
</style>