<template>
  <div class="test">
    <h1>{{textName}}期末考核</h1>
    <Row>
      <i-col>
        <Card dis-hover class="textFirst">
          <p slot="title">
            考试时间：{{examinationTime}}分钟
            试卷总分值：{{examinationScore}}
          </p>
          <p>考生姓名：{{candidateName}}</p>
          <Card dis-hover class="textSecond">
            <div class="right">
              <h1>{{textName}}试卷</h1>
              <br>
              <i-button style="color:white;background-color:#3d6ea7" @click="startAnswer">开始考试</i-button>
              <h4>选择题：{{choice}}个 判断题：{{judge}}个</h4>
            </div>
          </Card>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textName: "Java",
      examinationTime: 90,
      examinationScore: 100,
      candidateName: "大李",
      choice: 50,
      judge: 20
    };
  },
  methods: {
    startAnswer() {
      alert("该试卷只能打开一次，中途不能退出，否则成绩作废");
      this.$router.push({ name: "item" });
    }
  }
};
</script>

<style scoped>
.test {
  padding: 30px;
  text-align: start;
  color: gray;
  font-size: 10px;
  background-color: rgb(255, 255, 255);
}
</style>