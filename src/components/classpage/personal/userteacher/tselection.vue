<template>
  <div id="app">
    <div class="contain">
      <b>选择课程：</b>
      <i-select v-model="model1" style="width:200px">
        <i-option v-for="item in listList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
      </i-select>
      <br>
      <br>
      <b>选择章节：</b>
      <i-select v-model="model1" style="width:200px">
        <i-option v-for="item in zhangZ" :value="item.value" :key="item.value">{{ item.label }}</i-option>
      </i-select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b>选择小节：</b>
      <i-select v-model="model1" style="width:200px">
        <i-option v-for="item in jieJ" :value="item.value" :key="item.value">{{ item.label }}</i-option>
      </i-select>
      <br>
      <br>
      <b>考试人数：</b>
      {{num}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b>及格人数：</b>
      {{numup}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b>及格率：</b>
      {{score}}
      <br>
      <br>
      <table class="table">
        <tr>
          <th>学号</th>
          <th>学生名字</th>
          <th>成绩</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listList: [
        {
          value: "C",
          label: "C"
        },
        {
          value: "PS",
          label: "PS"
        },
        {
          value: "Python",
          label: "Python"
        },
        {
          value: "jQuery",
          label: "jQuery"
        },
        {
          value: "Vue",
          label: "Vue"
        },
        {
          value: "Sql",
          label: "Sql"
        }
      ],
      zhangZ: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        },
        {
          value: "第四章",
          label: "第四章"
        }
      ],
      jieJ: [
        {
          value: "第一小节",
          label: "第一小节"
        },
        {
          value: "第二小节",
          label: "第二小节"
        },
        {
          value: "第三小节",
          label: "第三小节"
        },
        {
          value: "第四小节",
          label: "第四小节"
        }
      ],
      num: "100人",
      numup: "90人",
      score: "90%"
    };
  }
};
</script>

<style scoped>
#app {
  width: 0 auto;
  height: 500px;
  margin-top: -850px;
  margin-left: 300px;
}
.contain {
  padding-left: 100px;
  padding-top: 50px;
  text-align: start;
  color: gray;
  font-size: 10px;
  overflow: scroll;
  width: 960px;
  height: 600px;
  background-color: rgb(255, 255, 255);
}
.table {
  font-family: verdana, arial, sans-serif;
  font-size: 12px;
  color: #333333;
  border-width: 1px;
  border-color: #666666;
  border-collapse: collapse;
  width: 600px;
  height: 0 auto;
}
.table th {
  border-width: 1px;
  padding: 10px;
  border-style: solid;
  border-color: #666666;
  background-color: aliceblue;
}
.table td {
  border-width: 1px;
  padding: 12px;
  border-style: solid;
  border-color: #666666;
  background-color: #ffffff;
}
</style>