<template>
  <div id="app">
    <el-row>
      <el-col :span="23" class="pos-order" id="order-list">
        <div class="often-goods-list">
          <ul>
            <li v-for="goods in oftenGoods" :key="goods.id">
              <img class="o-price" :src="goods.image">
              <div class="often-Name">
                <h3>{{goods.name}}</h3>
              </div>
              <div class="often-button">
                <el-button type="text" @click="open">点击查看成绩是否及格</el-button>
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
      oftenGoods: []
    };
  },
  created:function(){
    this.axios
    .get("/student/course/list")
    .then(Response => {
      console.log(Response);
      console.log(Response.data.status);
      this.oftenGoods = Response.data;
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods: {
    open() {
      this.$alert("已及格", "您的成绩", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
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