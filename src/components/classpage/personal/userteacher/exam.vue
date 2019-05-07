<template>
  <div id="exam">
    <div class="contain">
      <b>选择课程：</b>
      <i-select style="width:200px" v-model="option">
        <i-option
          v-for="goods in listList"
          :value="listList.data[0].name"
          :key="goods.id"
        >{{goods.name}}</i-option>
      </i-select>
      <br>
      <br>
      <b>选择开始时间：</b>
      <el-date-picker class="block" v-model="startColoc" type="datetime" placeholder="选择日期时间"></el-date-picker>
      <b>选择结束时间：</b>
      <el-date-picker class="block" v-model="endColoc" type="datetime" placeholder="选择日期时间"></el-date-picker>
      <br>
      <b>选择题：</b>
      <div class="divone" v-for="(item,index) in customized_descs" :key="index">
        <br>
        <br>
        <b>选择分值：</b>
        <el-input-number style="height:50px" v-model="numSelect" :min="1" :max="10" label="描述文字"></el-input-number>
        <textarea v-model="customized1" class="textarea" cols="10" rows="2" placeholder="请输入选择题题目"></textarea>
        <br>
        <div class="answer">
          <div class="ans" v-for="(item,index) in optionName">
            {{item.name}}
            <el-input type="textarea" autosize v-model="item.optionList" cols="10" rows="2"></el-input>
            {{item.optionList}}
          </div>
        </div>
        <br>
        <b>该题的正确答案是：</b>
        <div class="answer">
          <div class="ans">
            <el-radio-group v-model="answerCh">
              <el-radio :label="3">A</el-radio>
              <el-radio :label="6">B</el-radio>
              <el-radio :label="9">C</el-radio>
              <el-radio :label="12">D</el-radio>
            </el-radio-group>
          </div>
        </div>
        <br>
        <br>
      </div>
      <i-button style="background-color:aliceblue" @click="addCustomizeDesc">
        <font color="gray">增加选择题</font>
      </i-button>
      <br>
      <br>
      <hr>
      <br>
      <b>判断题：</b>
      <div class="divone1" v-for="(item,index) in customized_descsone" :key="'divone1-'+index">
        <b>选择分值：</b>
        <el-input-number style="height:50px" v-model="numJudgement" :min="1" :max="10" label="描述文字"></el-input-number>
        <br>
        <br>
        <textarea
          v-model="jList.customizedone5"
          class="textarea"
          cols="10"
          rows="2"
          placeholder="请输入判断题题目"
        ></textarea>
        <br>
        <br>
        <b>该题的正确答案是：</b>
        <div class="Answer">
          <div class="ans">
            <el-radio-group v-model="jList.answerJu">
              <el-radio :label="3">正确</el-radio>
              <el-radio :label="6">错误</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <br>
      <br>
      <i-button style="background-color:aliceblue" @click="addCustomizeDescone">
        <font color="gray">增加判断题</font>
      </i-button>
      <br>
      <br>
    </div>
    <br>
    <div class="right">
      <i-button style="color:white;background-color:#3d6ea7" @click="success(false)">上传考试</i-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startColoc: "",
      endColoc: "",
      option: "",
      numSelect: 1,
      numJudgement: 1,
      listList: [],
      optionName: [
        { name: "A", optionList: "" },
        { name: "B", optionList: "" },
        { name: "C", optionList: "" },
        { name: "D", optionList: "" }
      ],
      customized1: "",
      answerCh: 3,
      jList: {
        customizedone5: "",
        answerJu: 3
      },
      customized_descs: [],
      customized_descsone: []
    };
  },
  mounted: function() {
    this.axios
      .get("/teacher/course/spinner")
      .then(Response => {
        console.log(Response);
        this.listList = Response.data;
        console.log(this.listList.data[0].id);
        console.log(typeof this.listList.data[0].name);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    addCustomizeDesc(index) {
      this.customized_descs.push(1);
    },
    addCustomizeDescone(index) {
      this.customized_descsone.push(1);
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
        title: "您已经上传成功",
        desc: nodesc ? "" : "该科目考试上传成功！ "
      }),
        this.$router.go(-1);
      this.creatExam();
    },
    creatExam() {
      let cho = [
        {
          question: this.customized1,
          optionName: this.optionName,
          answer: this.answerCh
        }
      ];
      let jud = {
        question: this.jList.customizedone5,
        answer: this.jList.answerJu
      };
      // let start = "2019-04-21 07:00:00",
      //     stop = "2019-04-21 09:00:00"
      this.axios
        .post("/exam/final", {
          name: this.option,
          course: this.listList.data.id,
          startTime: parseInt(this.startColoc),
          stopTime: parseInt(this.endColoc),
          choiceScoreWeight: this.numSelect,
          judgementScoreWeight: this.numJudgement,
          choiceList: cho,
          judgementList: this.jud
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
#exam {
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
  width: 960px;
  height: 660px;
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
  width: 800px;
  height: 50px;
  padding-left: 20px;
  padding-top: 10px;
}
.textarea::-webkit-input-placeholder {
  color: rgb(204, 202, 202);
}
.answer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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