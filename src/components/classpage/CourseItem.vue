<template>
  <div class="courseItem" @click="getclickId()">
    <img class="image" :src="courseInfo.image">
    <p class="courseName">{{courseInfo.name}}</p>
    <p class="mainTeacher">主讲老师：{{courseInfo.teacher}}</p>
  </div>
</template>

<script>
export default {
  props: ["courseInfo"],
  data() {
    return {
      fileInfo: ""
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.axios
        .get("/files/info", {
          params: {
            file: this.courseInfo.image
          }
        })
        .then(response => {
          if (response.data.status == 0) {
            this.fileInfo = response.data.data;
            this.courseInfo.image =
              "http://39.107.102.246" +
              this.fileInfo.mappingPath +
              this.fileInfo.id +
              "." +
              this.fileInfo.suffix;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getclickId() {
      this.$router.push({
        name: "addCourse",
        params: {
          courseInfo: this.courseInfo
        }
      });
    }
  }
};
</script>

<style scoped>
.courseItem {
  height: 280px;
  background-color: rgb(240, 246, 252);
  box-shadow: 2px 2px 2px #888888;
  cursor: pointer;
}
.courseItem img {
  height: 170px;
  width: 220px;
  border-radius: 5px;
  margin: 10px;
}
.courseItem p {
  display: block;
  margin: 0 10px 5px 10px;
  line-height: 30px;
}
.courseItem .courseName {
  font-size: 20px;
}
.courseItem .mainTeacher {
  font-size: 16px;
}
</style>
