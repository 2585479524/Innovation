<template>
  <div id="app">
    <div class="newcon">
      <font size="2">课程名称</font>
      <font color="red" size="4">*</font>：
      <i-input type="text" class="form-control" style="width:200px" v-model="rowtemplate.Name"/>
      <br>
      <br>
      <font size="2">选择课程封面</font>
      <font color="red" size="4">*</font>：
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
      <div class="but">
        <i-button style="color:white;background-color:#3d6ea7" v-on:click="Save">添加课程</i-button>
      </div>
    </div>
    <br>
    <br>
    <table cellspacing="0" class="table table-bordered table-striped text-center">
      <thead></thead>
      <tbody>
        <tr v-for="row in rows " :key="row.index">
          <td>
            <router-link to="/teacher/coursevalue">
              <font size="4" color="gray">{{row.Name}}</font>
            </router-link>
          </td>
          <td>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemoveone"
              :file-list="fileList2"
              list-type="picture"
            >
              <el-button size="small" style="background-color:aliceblue;color:gray">点击上传课程封面</el-button>
            </el-upload>
          </td>
          <td>
            <i-button style="color:white;background-color:#ec6c6c" @click="Delete(row.Id)">删除</i-button>&nbsp;
            <i-button style="color:white;background-color:#3d6ea7" @click="success(false)">确认</i-button>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        { Id: 1, Name: "PHP" },
        { Id: 2, Name: "Js" },
        { Id: 3, Name: "Vue" },
        { Id: 4, Name: "Sql" },
        { Id: 5, Name: "Python" },
        { Id: 6, Name: "人工智能" },
        { Id: 7, Name: "Java" },
        { Id: 8, Name: "AA" }
      ],
      rowtemplate: { Id: 0, Name: "" },
      file: "",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList2: []
    };
  },
  methods: {
    Save: function(event) {
      if (this.rowtemplate.Name != "") {
        //设置当前新增行的Id
        this.rowtemplate.Id = this.rows.length + 1;
        this.rows.push(this.rowtemplate);
      }

      //还原模板
      this.rowtemplate = { Id: 0, Name: "" };
    },
    Delete: function(id) {
      //实际项目中参数操作肯定会涉及到id去后台删除，这里只是展示，先这么处理。
      for (var i = 0; i < this.rows.length; i++) {
        if (this.rows[i].Id == id) {
          this.rows.splice(i, 1);
          break;
        }
      }
    },
    ago() {
      this.$router.go(-1);
    },
    success(nodesc) {
      this.$Notice.success({
        title: "您已经上传成功",
        desc: nodesc ? "" : "新课程添加成功！ "
      });
    },
    handleRemove(file, fileList) {
      //console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemoveone(file, fileList) {
      //console.log(file, fileList);
    },
    handlePreview(file) {
      //console.log(file);
    },
    //发送ajax请求
    send() {
      axios({
        method: "get",
        url: ""
      }).then(function(res) {
        console.log(res.data.name);
      });
    }
  }
};
</script>

<style scoped>
#app {
  width: 0 auto;
  height: 500px;
  margin-top: -830px;
  margin-left: 300px;
}
.table {
  font-family: verdana, arial, sans-serif;
  font-size: 12px;
  width: 700px;
  padding-top: 40px;
}
.table td {
  padding: 7px;
}
.newcon {
  text-align: start;
  padding-left: 50px;
}
.but {
  padding-left: 500px;
  margin-top: -80px;
}
</style>
