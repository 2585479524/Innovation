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
      <div class="btn">
        <Button to="/teacher/coursevalue/exam/options">添加选择题</Button>
        <Button to="/teacher/coursevalue/exam/judges">添加判断题</Button>
      </div>
      <router-view></router-view>

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
      startColoc: "",
      endColoc: "",
      option: "",  
      listList: [],
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
.btn{
  display: flex;
  justify-content: space-between;
  width: 300px;
}
</style>