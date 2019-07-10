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
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      let courseId = "a0f94e7f7e9945735f3e7e52d665a1db";
      this.axios
        .get("/exam/final/" + courseId)
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
#item {
  width: 0 auto;
  height: 500px;
  
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

.rightFloat {
  width: 80%;
  color: black;
  left: 80px;
}
.right {
  margin-top: 10px;
  text-align: center;
}
</style>