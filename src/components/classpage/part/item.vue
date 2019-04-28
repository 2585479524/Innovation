<template>
  <div id="item">
    <div class="contain">
      <h1>{{textName}}期末考核</h1>
      <Row>
        <i-col span="7" push="17">
          <Card dis-hover class="rightFloat">
            <p slot="title">开始时间：{{startTime}}</p>
            <div>
              <h4 slot="title">结束时间: {{stopTime}}</h4>
            </div>
          </Card>
        </i-col>

        <i-col span="17" pull="7">
          <Card dis-hover style="width:800px">
            <p slot="title">
              考试时间：{{examinationTime}}分钟
              试卷总分值：{{examinationScore}}
            </p>
            <p>考生姓名：{{candidateName}}</p>
            <Card dis-hover style="width:765px;height: 400px;">
              <div>
                <p>题目类型：{{choices}}</p>
                <!-- <div>
                  <!-- <h4>{{itemDetail[itemNum-1].answer_index}}</h4>
                  <p>{{itemDetail[itemNum-1].answer_title}}</p>
                  <el-radio-group v-model="itemDetail[itemNum-1].userChoose">
                    <el-radio
                      :label="item.options_id"
                      :key="item.options_id"
                      @change="choosed(item.options_id)"
                      v-for="(item, index) in itemDetail[itemNum-1].options_list"
                    >{{item.options_title}}</el-radio>
                  </el-radio-group>
                  <br>
                  <div v-if="itemNum == itemDetail.length" class="right">
                    <i-button style="color:white;background-color:#3d6ea7" @click="submitFun">提交</i-button>
                  </div>
                  <div v-else class="right">
                    <i-button style="color:white;background-color:#3d6ea7" @click="nextFun">下一题</i-button>
                  </div>
                </div> -->
              </div>
            </Card>
          </Card>
        </i-col>
      </Row>
      <br>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      tubiao: 0,
      choosedResult: null,
      textName: "Java",
      examinationTime: 90,
      examinationScore: 100,
      candidateName: "大李",
      choices: "选择题",
      startTime: "2019-04-20 07:00:00",
      stopTime: "2019-04-20 09:00:00"
    };
  },
  created(){
    this.$store.dispatch('getdata')
  },
  // computed: mapState(["itemNum", "itemDetail"]),
  // computed: mapState(["itemNum", "itemDetail"]),
  methods: {
    getDataVuex(){
      this.$store.dispatch('saveForm');
    }
    // ...mapActions(["addNum", "initData"]),
    // submitFun() {
    //   this.$store.dispatch('saveForm')
    //   if (this.choosedResult == null) {
    //     alert("没有选择答案");
    //   } else {
    //     alert("确认提交试卷吗？该试卷不可重复做答！");
    //     this.addNum(this.choosedResult); //将当前选中的结果添加到答题记录中
    //     this.$router.push("score");

    //     this.choosedResult = null;
    //   }
    // },
    // nextFun() {
    //   //没有选校验
    //   if (this.choosedResult == null) {
    //     alert("没有选择答案");
    //   } else {
    //     this.addNum(this.choosedResult); //将当前选中的结果添加到答题记录中
    //     this.choosedResult = null;
    //   }
    // },
    // choosed(choosedResult) {
    //   this.choosedResult = choosedResult;
    // }
  }
};
</script>

<style scoped>
#item {
  width: 0 auto;
  height: 500px;
  margin-top: -700px;
  margin-left: 250px;
}

.contain {
  padding: 30px;
  text-align: start;
  color: gray;
  font-size: 10px;
  overflow: scroll;
  width: 75%;
  height: 130%;
  background-color: rgb(255, 255, 255);
}

.rightFloat{
  width: 80%;
  color: black;
  left: 80px;
}
.right {
  margin-top: 10px;
  text-align: center;
}
</style>