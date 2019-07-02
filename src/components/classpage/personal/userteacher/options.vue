<template>
  <div id="options">
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
      <div class="answer">
        <div class="ansOp" v-for="le in choiceListName">{{le.name}}</div>
      </div>
      <div class="answer">
        <div>
            <RadioGroup class="ans" v-model="item.answer">
              <Radio class="label" label="A">A</Radio>
              <Radio class="label" label="B">B</Radio>
              <Radio class="label"label="C">C</Radio>
              <Radio class="label" label="D">D</Radio>
            </RadioGroup>
        </div>
        <div class="ans1" v-for="(content,index) in item.optionName">
          <Input
            type="textarea"
            autosize
            :value="content[index]"
            :rows="2"
          ></Input>
          {{content}}
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
    <br>
    <br>
    <Button type="success" @click="addCustomizeDesc">增加选择题</Button>
  </div>
</template>
<script>
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
          optionName: ["", "", "", ""],
          answer: "A"
        }
      ]
    };
  },
  methods: {
    // 删除选题
    deleteSubjectFun: function(index) {
      var that = this;
      that.choiceList.splice(index, 1);
    },
    addCustomizeDesc(index) {
      var newChoice1 = {};
      newChoice1.choiceListName = [
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" }
      ];
      var newChoice2 = {};
      newChoice2.question = "";
      newChoice2.optionName = ["1", "2", "3", "4"];
      newChoice2.answer = "A";
      this.choiceListName.push(newChoice1);
      this.choiceList.push(newChoice2);
    }
  }
};
</script>
<style>
#options,.label{
  margin-top:10px;
}
.subject,.in{
  margin-top: 5px;
}
.del{
  margin-top: 20px;
}
.ans{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}

</style>


