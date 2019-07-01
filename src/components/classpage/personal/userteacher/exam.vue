<template>
  <div id="exam">
    <div class="contain">
      <b>选择课程：</b>
      <!-- <Options></Options>
      <Judges></Judges>-->
      <Select style="width:200px" v-model="option">
        <Option
          v-for="(goods,index) in listList.data"
          :value="goods.id"
          :key="goods.id"
        >{{goods.name}}</Option>
      </Select>
      {{option}}
      <br />
      <br />
      <b>选择开始时间：</b>
      <DatePicker
        type="datetime"
        class="block"
        v-model="startColoc"
        format="yyyy-MM-dd HH:mm"
        placeholder="选择日期时间"
      ></DatePicker>
      <b>选择结束时间：</b>
      <DatePicker
        class="block"
        v-model="endColoc"
        type="datetime"
        format="yyyy-MM-dd HH:mm"
        placeholder="选择日期时间"
      ></DatePicker>
      <br />
      <div>
        <Button to="/teacher/coursevalue/exam/options">添加选择题</Button>
        <Button to="/teacher/coursevalue/exam/judges">添加判断题</Button>
      </div>
      <router-view></router-view>

      <!-- <b>选择题：</b>
      <b>选择分值：</b> -->

      <!-- <el-input-number style="height:50px" v-model="numSelect" :min="1" :max="10" label="描述文字"></el-input-number>
      <div class="divone" v-for="(item,index) in choiceList">
        <div class="del">
          <Button type="error" class="col-sm-2" v-if="index>0" @click="deleteSubjectFun">删除选题</Button>
        </div> -->

        <!-- 题目框 -->
        <!-- <div class="in">
          <textarea
            v-model="item.question"
            class="textarea"
            cols="10"
            rows="2"
            placeholder="请输入选择题题目"
          ></textarea>
          {{item.question}}
        </div> -->
        <!-- 选项内容 -->
        <!-- <div class="answer">
          <div class="ansOp" v-for="le in choiceListName">{{le.name}}</div>
        </div>
        <div class="answer">
          <div v-for="(content,index) in item.optionName">
            <el-input
              type="textarea"
              autosize
              :value="content[index]"
              cols="10"
              rows="2"
              style="width:150px"
            ></el-input>
            {{content}}
          </div>
        </div> -->

        <!-- 选择正确的答案 -->
        <!-- <div class="selectAns">
          <b>该题的正确答案是：</b>
          <div class="answer">
            <div class="ans">
              <el-radio-group v-model="item.answer">
                <el-radio label="A">A</el-radio>
                <el-radio label="B">B</el-radio>
                <el-radio label="C">C</el-radio>
                <el-radio label="D">D</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <i-button style="background-color:aliceblue" @click="addCustomizeDesc">
        <font color="gray">增加选择题</font>
      </i-button>
      <br />
      <br />
      <hr />
      <br />
      <b>判断题：</b>
      <b>选择分值：</b>
      <el-input-number style="height:50px" v-model="numJudgement" :min="1" :max="10" label="描述文字"></el-input-number>
      <br />
      <br />
      <div class="divone1" v-for="(item,index) in selectList" :key="'divone1-'+index">
        <div class="del">
          <Button type="error" class="col-sm-2" v-if="index>0" @click="deleteSelect">删除判断题</Button>
        </div>
        <textarea
          v-model="item.question"
          class="textarea"
          cols="10"
          rows="2"
          placeholder="请输入判断题题目"
        ></textarea>
        <br />
        <br />
        <b>该题的正确答案是：</b>
        <div class="Answer">
          <div class="ans">
            <el-radio-group v-model="item.answer">
              <el-radio label="true">正确</el-radio>
              <el-radio label="false">错误</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <br /> -->
      <!-- <br />
      <i-button style="background-color:aliceblue" @click="addCustomizeDescone">
        <font color="gray">增加判断题</font>
      </i-button>
      <br />
      <br /> -->
    </div>
    <br />
    <div class="right">
      <i-button style="color:white;background-color:#3d6ea7" @click="success(false)">上传考试</i-button>
    </div>
  </div>
</template>
  
  <script>
export default {  
  data() {
    return {
      diandian: "",
      startColoc: "",
      endColoc: "",
      option: "",
      numSelect: 1,
      numJudgement: 1,
      listList: [],

      choiceListName: [
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" }
      ],
      choiceList: [
        {
          question: "",
          optionName: ["1", "2", "3", "4"],
          answer: "A"
        }
      ],
      selectList: [
        {
          question: "",
          answer: "true"
        }
      ]
    };
  },
  mounted: function() {
    this.axios
      .get("/teacher/course/spinner")
      .then(Response => {
        console.log(Response);
        this.listList = Response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    // 删除选题
    deleteSubjectFun: function(index) {
      var that = this;
      that.choiceList.splice(index, 1);
    },
    deleteSelect(index) {
      var that = this;
      that.selectList.splice(index, 1);
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
    },
    addCustomizeDescone(index) {
      var newSelect = {};
      newSelect.selectName = "";
      newSelect.answerJu = 3;
      this.selectList.push(newSelect);
    },
    send() {
      axios({
        method: "get",
        url: ""
      }).then(function(res) {
        console.log(res.data.name);
      });
    },
    success(nodesc) {
      this.$Notice.success({
        question: "您已经上传成功",
        desc: nodesc ? "" : "该科目考试上传成功！ "
      }),
        this.$router.go(-1);
      this.creatExam();
    },
    creatExam() {
      console.log(this.choiceList);

      let cho = this.choiceList;
      let jud = this.selectList;

      let timestampStart =
        this.startColoc.toLocaleDateString().replace(/\//g, "-") +
        " " +
        this.startColoc.toTimeString().substr(0, 8);
      let timestampEnd =
        this.endColoc.toLocaleDateString().replace(/\//g, "-") +
        " " +
        this.endColoc.toTimeString().substr(0, 8);
      this.axios
        .post("/exam/final", {
          name: "jfaief",
          course: "4d2e26d712f64778a4fd50bd6486df96",
          startTime: timestampStart,
          stopTime: timestampEnd,
          choiceScoreWeight: this.numSelect,
          judgementScoreWeight: this.numJudgement,
          choiceList: cho,
          judgementList: jud
        })
        .then(Response => {
          console.log(Response);
        })
        .catch(error => {
          console.log(error);
        });
    }
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
  width: 73.5%;
  height: 600px;
  background-color: rgb(255, 255, 255);
}
.block {
  height: 45px;
}
.num {
  width: 170px;
}
.textarea {
  border: 1px gray solid;
  width: 850px;
  height: 50px;
  padding-left: 20px;
  padding-top: 10px;
  margin-top: 20px;
}
.textarea::-webkit-input-placeholder {
  color: rgb(204, 202, 202);
}
.del {
  margin-top: 20px;
}
.selectAns {
  margin-top: 20px;
}
.answer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.ansOp {
  margin-left: -20px;
}
.Answer {
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
hr {
  height: 1px;
  border: none;
  border-top: 1px dashed rgb(188, 220, 252);
}
.right {
  width: 0 auto;
  margin-left: -80px;
}
</style>