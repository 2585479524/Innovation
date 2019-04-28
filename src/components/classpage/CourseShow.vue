<template>
  <div class="Content-list">
    <div class="Content-title">{{CourseClass}}</div>
    <div class="Content-Class">
      <div
        @click="getclickId(index,i.title,i.url)"
        v-for="(i,index) in course"
        :key="index"
        class="Content-video-one"
      >
        <img :src="url" class="course" alt>
        <p class="course-font">{{title}}</p>
        <p class="teacher-font">教师：{{teacher}}</p>
        <p class="teacher-font">简介：{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: []
    };
  },
  created:function() {
    this.axios
      .get("/course/tag", {
        params: {
          tag: "index",
        }
    })
    .then(res =>{
      for(let i = 0; i<res.data.data.length; i++){
        let url=
          api.url +
          res.data.data[i].image;
          Vue.set(this.course,url);
        let title=
          api.url +
          res.data.data[i].title;
          Vue.set(this.course,title);
        let content=
          api.url +
          res.data.data[i].tag;
          Vue.set(this.course,content);
      }
    })
    .catch(err => {
      console.log(error);
    })
  },

  methods: {
    getclickId(index, course, img) {
      this.$router.push({
        name: "addcourse",
        params: { courseTitle: course, courseimg: img }
      });
    }
  }
};
</script>

<style scoped>
.Content-list {
  width: 1080px;
  background-color: white;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
.Content-title {
  font-size: 30px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  color: #aaa;
  width: 80%;
  margin-left: 100px;
  padding-top: 50px;
}
.Content-Class {
  width: 1080px;
  height: 600px;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
}
.Content-video-one {
  height: 280px;
  background-color: rgb(250, 250, 250);
  margin-top: 15px;
  box-sizing: border-box;
  flex: 0 0 23%;
  border-radius: 5px;
  cursor: pointer;
}
.Content-video-one img {
  height: 160px;
  border-radius: 5px;
}
.course {
  height: 200px;
  width: 248.39px;
}
.course-font {
  font-size: 22px;
  line-height: 30px;
}
.teacher-font {
  font-size: 16px;
  line-height: 25px;
}
</style>