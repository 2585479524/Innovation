<template>
  <div class="courseShow">
    <h2 class="title">{{tag}}</h2>
    <div class="modelList">
      <CourseItem v-for="(item, index) in course" :key="index" :courseInfo="item"></CourseItem>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CourseItem from "../classpage/CourseItem";
export default {
  props: ["tag"],
  data() {
    return {
      course: {}
    };
  },
  created() {
    this.axios
      .get("/course/tag/" + this.tag)
      .then(response => {
        this.course = response.data.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    CourseItem
  }
};
</script>

<style scoped>
courseShow {
  background-color: white;
  margin: 30px;
  display: flex;
  flex-direction: column;
}
.courseShow .title {
  font-size: 24px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  color: rgb(150, 150, 150);
  padding: 15px 0;
}
.courseShow .modelList {
  width: 1080px;
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
}
</style>