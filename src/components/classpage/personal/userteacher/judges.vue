<template>
  <div class="judges">
    <b>选择分值：</b>
    <InputNumber v-model="numJudgement" :min="1" :max="10"></InputNumber>
    <div class="divone1" v-for="(item,index) in selectList" :key="'divone1-'+index">
      <div class="del">
        <Button type="error" class="col-sm-2" v-if="index>0" @click="deleteSelect">删除判断题</Button>
      </div>
      <Input v-model="item.question" class="textarea" :rows="4" placeholder="请输入判断题题目"></Input>
      <br>
      <br>
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
    <br>
    <br>
    <Button type="success" @click="addCustomizeDescone">
      增加判断题
    </Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numJudgement: 1,
      selectList: [
        {
          question: "",
          answer: "true"
        }
      ]
    };
  },
  methods: {
    deleteSelect(index) {
      var that = this;
      that.selectList.splice(index, 1);
    },
    addCustomizeDescone(index) {
      var newSelect = {};
      newSelect.selectName = "";
      newSelect.answerJu = 3;
      this.selectList.push(newSelect);
    },
  }
};
</script>

