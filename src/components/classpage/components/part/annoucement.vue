<template>
  <div id="app">
    <div class="annoucement">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="annouce" label="公告"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      tableData: [
        {
          annouce:
            "开课时间公告：本课程开课时间为2019年1月28号，请各位同学准时参加该课程"
        },
        {
          annouce:
            "考试时间公告：大家好! 本课程期末考试上线发布了，请在考试前认真阅读本说明。考试日期：2019年3月28日8：00--2019年3月31日23：30。这四天时间里你可以选择任何一个时间答题，只能答一次。题型包括单选题和编程题，其中，编程题在规定有限时间内，不限次数提交。考试内容：单选题30道（每题2分，时间40分钟）+编程题3道（共计40分，时间110分钟）考试分值：满分100分，最后折合为50分祝愿大家取得好成绩！"
        },
        {
          annouce:
            "期末考试复习题上线公告：期末复习题答案已发布，供大家参考，请大家努力认真复习，准备考试。"
        },
        {
          annouce:
            "学习任务发布通知：本课程第一周学习内容已发布，本周需要完成的作业任务包括两部分：（1）完成视频后面的小测验题；（2）完成“测验与作业”中的第一周作业。祝大家学习愉快！"
        },
        {
          annouce: "           "
        },
        {
          annouce: "更多公告随课程进度更新中............"
        }
      ]
    };
  }
};
</script>
<style scoped>
#app {
  width: 0 auto;
  height: 500px;
  margin-top: -650px;
  margin-left: 300px;
}
.annoucement {
  color: gray;
  font-size: 10px;
  width: 1050px;
  height: 500px;
  background-color: rgb(255, 255, 255);
}
</style>

