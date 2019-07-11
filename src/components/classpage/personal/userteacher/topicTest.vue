<template>
  <div id="topicTest">
    <div class="option">
      <b class="subject">选择分值：</b>
      <InputNumber class="subject" v-model="numSelect" :min="1" :max="10"></InputNumber>

      <div class="divone" v-for="(item,index) in choiceList">
        <div class="del">
          <Button type="error" class="col-sm-2" v-if="index>0" @click="deleteSubjectFun">删除选题</Button>
        </div>

        <!-- 题目框 -->
        <div class="in">
          <Input
            type="textarea"
            v-model="item.question"
            class="textarea"
            :rows="4"
            placeholder="请输入选择题题目"
          ></Input>
          {{item.question}}
        </div>

        <!-- 选项内容 -->
        <!-- <div class="answer">
          <div class="ansOp" v-for="le in choiceListName">{{le.name}}</div>
        </div> -->
        <br/>
        <br/>
        <div class="answer">


          <!-- <div class="ans1" v-for="(content,index) in item.optionList">
            <Input type="textarea" autosize v-model="item.optionList.content" :rows="2"></Input>
            {{item.optionList.content}}
          </div> -->
          
          <div class="ans1" v-for="(item1,index) in originalList">   
            <Input type="textarea" autosize :rows="2" v-model="originalList[index].value1"></Input>
            {{originalList[index].value1}}
          </div>
        </div>

        <!-- 选择正确的答案 -->
        <div class="selectAns">
          <b>该题的正确答案是：</b>
          <div class="answer">
            <div class="ans">
              <RadioGroup v-model="item.answer">
                <Radio label="A">A</Radio>
                <Radio label="B">B</Radio>
                <Radio label="C">C</Radio>
                <Radio label="D">D</Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      <br />
      
    </div>

    <div class="judge">
      <b class="subject">选择分值：</b>
      <InputNumber v-model="numJudgement" :min="1" :max="10"></InputNumber>
      <div class="divone1" v-for="(item,index) in selectList" :key="'divone1-'+index">
        <div class="del">
          <Button type="error" class="col-sm-2" v-if="index>0" @click="deleteSelect">删除判断题</Button>
        </div>
        <Input v-model="item.question" class="textarea" :rows="4" placeholder="请输入判断题题目"></Input>
        <br />
        <br />
        <b>该题的正确答案是：</b>
        <div class="Answer">
          <div class="ans">
            <RadioGroup v-model="item.answer">
              <Radio label="true">正确</Radio>
              <Radio label="false">错误</Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
      <br />
      <Button type="success" @click="addCustomizeDescone">增加判断题</Button>
    </div>
  </div>
</template>
<script>
import { com } from "../../../../utils/keys"
import { constants } from 'crypto';
export default {
  data() {
    return {
      numSelect: 1,
      choiceListName: [
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" }
      ],
      choiceList: [
        {
          question: "",
          optionList: [],
          answer: "A"
        }
      ],
      originalList:[],
      numJudgement: 1,
      selectList: [
        {
          question: "",
          answer: "true"
        }
      ]
    };
  },
  created:function(){
    var len =4
    for (var i = 0;i<len; i++){
      var item1 = {
        value1: '',
      };
      this.originalList.push(item1);

    }
  },
  methods: {
    op(){
      let arr = this.originalList;
      let sign=com(arr);
      console.log(sign);
      
      let choi = this.choiceList[0].optionList;
      console.log(choi)
      for(let i = 0;i<4;i++){
        choi[i] = sign[i];
      }
      return this.choiceList
      
    },
    
    se(){
      return this.selectList;
    },
    opGrade(){
      return this.numSelect
    },
    seGrade(){
      return this.numJudgement
    },

    // 删除选题
    deleteSubjectFun: function(index) {
      var that = this;
      that.choiceList.splice(index, 1);
    },
    // addCustomizeDesc(index) {
    //   var newChoice1 = {};
    //   newChoice1.choiceListName = [
    //     { name: "A" },
    //     { name: "B" },
    //     { name: "C" },
    //     { name: "D" }
    //   ];
    //   var newChoice2 = {};
    //   newChoice2.question = "";
    //   newChoice2.optionList = ["1", "2", "3", "4"];
    //   newChoice2.answer = "A";
    //   this.choiceListName.push(newChoice1);
    //   this.choiceList.push(newChoice2);
    // },
    deleteSelect(index) {
      var that = this;
      that.selectList.splice(index, 1);
    },
    addCustomizeDescone(index) {
      var newSelect = {};
      newSelect.selectName = "";
      newSelect.answerJu = 3;
      this.selectList.push(newSelect);
    }
  }
};
</script>
<style>
#topicTest,
.label {
  margin-top: 10px;
}
.subject,
.in,
.judge {
  margin-top: 5px;
}
.del {
  margin-top: 20px;
}
.ans {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>


