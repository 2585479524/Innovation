<template>
  <div id="app">
    <el-row>
      <el-col :span="23" class="pos-order" id="order-list">
        <div class="often-goods-list">
          <ul>
            <li v-for="goods in oftenGoods" :key="goods.id">  
              <img class="o-price" :src="goods.Img">
              <div class="often-Name">
                  <h3>{{goods.goodsName}}</h3>
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
import con1 from "@/assets/course1.jpg";
import con2 from "@/assets/course2.jpg";
import con3 from "@/assets/course3.jpg";
export default {
  data() {
    return {
      
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "c语言",
          Img: con1
        },
        {
          goodsId: 2,
          goodsName: "html入门",
          Img: con2
        },
        {
          goodsId: 3,
          goodsName: "ps设计基础",
          Img: con3
        },
        {
          goodsId: 4,
          goodsName: "计算机网络",
          Img: con1
        },
        {
          goodsId: 5,
          goodsName: "数据结构",
          Img: con2
        },
        {
          goodsId: 6,
          goodsName: "Linux操作系统",
          Img: con3
        },
        {
          goodsId: 7,
          goodsName: "人工智能导论",
          Img: con2
        }
      ]
    };
  },
  methods: {
      open() {
        this.$alert('已及格', '您的成绩', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
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
.often-Name{
    text-align: center;
}
.often-button{
    text-align: center;
}
.o-price {
  color: #58b7ff;
  height: 180px;
  width: 200px;
}
</style>