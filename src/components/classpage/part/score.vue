<template>
  <div class="contain">
    <h1>‘XXXXX’期末考核</h1>
    <Row>
      <i-col span="7" push="17">
        <Card dis-hover style="width:350px">
          <p slot="title">总成绩：{{totalScore}}</p>
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
                <p>答案：XX</p>
                <p>解析：</p>

                <br>
              </div>
            </div>
          </Card>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      correctResult: ["01", "01", "01", "01"], //正确答案
      score: 25, //每题分数
      totalScore: 0
    };
  },
  computed: mapState(["itemNum", "itemDetail"]),
  methods: {
    ...mapActions(["addNum", "initData"])
  }
};
</script>

<style scoped>
.contain {
  padding: 30px;
  text-align: start;
  color: gray;
  font-size: 10px;
  overflow: scroll;
  width: 1100px;
  height: 560px;
  background-color: rgb(255, 255, 255);
}

.right {
  margin-top: 10px;
  text-align: center;
}
</style>