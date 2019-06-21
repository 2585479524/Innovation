<template>
  <div class="Content-list">
    <div class="Content-title">{{tag}}</div>
    <div class="Content-Class">
      <div
        @click="getclickId(index,item.title,item.url)"
        v-for="(item,index) in course"
        :key="index"
        class="Content-video-one"
      >
        <img :src="item.image" class="course">
        <p class="course-font">{{item.title}}</p>
        <p class="teacher-font">教师：{{item.teacher}}</p>
        <br>
        <p class="teacher-font">简介：{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      course: {},
      fileInfo: ""
    };
  },
  created() {
    this.axios
      .get("/course/tag/" + this.tag)
      .then(response => {
        this.course = response.data.data;
        this.getInfo();
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {},
  props: ["tag"],

  methods: {
    getInfo() {
      this.axios
        .get("/files/info", {
          params: {
            file: "8d73c7e27a6244c08a24f9bf93d722e8"
          }
        })
        .then(response => {
          if (response.data.status == 0) {
            this.fileInfo = response.data.data;
            this.getImg();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getImg() {
      let url =
        "http://39.107.102.246" +
        this.fileInfo.mappingPath +
        this.fileInfo.id +
        "." +
        this.fileInfo.suffix;
      for (let index = 0; index < this.course.length; index++) {
        this.course[index].image = url;
      }
    },
    getclickId(index, course, img) {
      this.$router.push({
        name: "addcourse",
        params: {
          courseTitle: course,
          courseimg: img,
          courserId: this.course[index].id
        }
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