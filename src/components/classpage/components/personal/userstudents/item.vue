<template>
  <div id="app">
    <div class="contain">
      <h1>‘XXXXX’期末考核</h1>
      <Row>
        <i-col span="7" push="17">
          <Card dis-hover style="width:350px">
            <p slot="title">倒计时：XXXX</p>
            <p>单选题：</p>
            <Card dis-hover style="width:315px">
              <div>
                <p>题目类型：XXX</p>
                <i class="el-icon-circle-check"></i>
                <i class="el-icon-circle-check"></i>
                <Icon type="ios-checkmark" v-model="tubiao"></Icon>
                <Icon type="ios-checkmark" v-model="tubiao"></Icon>
                <Icon type="ios-checkmark" v-model="tubiao"></Icon>
                <Icon type="ios-checkmark" v-model="tubiao"></Icon>
              </div>
            </Card>
            <p>判断题：</p>
            <Card dis-hover style="width:315px">
              <div>
                <p>题目类型：XXX</p>
                <i class="el-icon-circle-check"></i>
                <i class="el-icon-circle-check"></i>
                <Icon type="ios-checkmark" v-model="tubiao"></Icon>
                <Icon type="ios-checkmark" v-model="tubiao"></Icon>
                <Icon type="ios-checkmark" v-model="tubiao"></Icon>
                <Icon type="ios-checkmark" v-model="tubiao"></Icon>
              </div>
            </Card>
            <br>
            <Card dis-hover style="width:315px">
              <div>
                <span>
                  未答题：
                  <Icon type="ios-checkmark" v-model="tubiao"></Icon>
                </span>
                <span>
                  已答题：
                  <i class="el-icon-circle-check"></i>
                </span>
              </div>
            </Card>
          </Card>
        </i-col>

        <i-col span="17" pull="7">
          <Card dis-hover style="width:800px">
            <p slot="title">'XXXX'试卷 &nbsp;&nbsp;&nbsp;考试时间：xxxx&nbsp;&nbsp;&nbsp;试卷总分值：XXX</p>
            <p>姓名：XXX&nbsp;&nbsp;&nbsp;班级：XXX</p>
            <Card dis-hover style="width:765px;height: 400px;">
              <div>
                <p>题目类型：XXX</p>
                <div>
                  <h4>{{itemDetail[itemNum-1].answer_index}}</h4>
                  <p>{{itemDetail[itemNum-1].answer_title}}</p>
                  <el-radio-group v-model="itemDetail[itemNum-1].userChoose">
                    <el-radio
                      :label="item.options_id"
                      :key="item.options_id"
                      @change="choosed(item.options_id)"
                      v-for="item in itemDetail[itemNum-1].options_list"
                    >{{item.options_title}}</el-radio>
                  </el-radio-group>
                  <br>
                  <div v-if="itemNum == itemDetail.length" class="right">
                    <i-button style="color:white;background-color:#3d6ea7" @click="submitFun">提交</i-button>
                  </div>
                  <div v-else class="right">
                    <i-button style="color:white;background-color:#3d6ea7" @click="nextFun">下一题</i-button>
                  </div>
                </div>
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
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      tubiao: 0,
      choosedResult: null
    };
  },
  computed: mapState(["itemNum", "itemDetail"]),
  computed: mapState(["itemNum", "itemDetail"]),
  methods: {
    ...mapActions(["addNum", "initData"]),
    submitFun() {
      if (this.choosedResult == null) {
        alert("没有选择答案");
      } else {
        alert("确认提交试卷吗？该试卷不可重复做答！");
        this.addNum(this.choosedResult); //将当前选中的结果添加到答题记录中
        this.$router.push("score");

        this.choosedResult = null;
      }
    },
    nextFun() {
      //没有选校验
      if (this.choosedResult == null) {
        alert("没有选择答案");
      } else {
        this.addNum(this.choosedResult); //将当前选中的结果添加到答题记录中
        this.choosedResult = null;
      }
    },
    choosed(choosedResult) {
      this.choosedResult = choosedResult;
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

.contain {
  padding: 30px;
  text-align: start;
  color: gray;
  font-size: 10px;
  overflow: scroll;
  width: 1250px;
  height: 560px;
  background-color: rgb(255, 255, 255);
}

.right {
  margin-top: 10px;
  text-align: center;
}
</style>