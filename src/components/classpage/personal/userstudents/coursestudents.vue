<template>
  <div id="app">
    <el-row>
      <el-col :span="23" class="pos-order" id="order-list">
        <div class="often-goods-list">
          <ul>
            <li v-for="course in oftenGoods" :key="course.id">
              <img class="o-price" :src="course.image">
              <div class="often-Name">
                <h3>{{course.name}}</h3>
              </div>
              <div class="often-button">
                <p>该科成绩为：{{score}}</p>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oftenGoods: [],
      score:''
    };
  },
  created: function() {
    this.axios
      .get("/student/course/list")
      .then(Response => {
        console.log(Response);
        this.oftenGoods = Response.data.data;
      })
      .catch(error => {
        console.log(error);
      })
      let courseId = "d4daf49c80cb4e548b9711720c319bcb"
      this.axios
        .get("/exam/final/score/"+courseId)
        .then(Response => {
          console.log
          console.log(Response);
          this.score=Response.score;
        })
        .catch(error => {
          console.log(error);
        });
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

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
}
.often-Name {
  text-align: center;
}
.often-button {
  text-align: center;
}
.o-price {
  color: #58b7ff;
  height: 180px;
  width: 200px;
}
</style>