<template>
  <div id="courseTeacher">
    <div class="newcon">
      <div class="title">
        <font size="2">课程名称</font>
        <font color="red" size="4">*</font>：
        <i-input type="text" class="form-control" style="width:150px" v-model="rowtemplate.Name"/>

        <font size="2">课程标签</font>
        <font color="red" size="4">*</font>：
        <i-input type="text" class="form-control" style="width:150px" v-model="rowtemplate.Tag"/>

        <font size="2">选择课程封面</font>
        <font color="red" size="4">*</font>
        ：
        <el-upload
          action="http://39.107.102.246/upload/course/image"
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

      <table cellspacing="0" class="table table-bordered table-striped text-center">
        <thead></thead>
        <tbody>
          <tr v-for="row in rows " :key="row.index">
            <td>
              <router-link tag="a" :to="{path:'/teacher/coursevalue',query:{id:rows.id}}">
                <font size="4" color="gray">{{row.name}}</font>
              </router-link>
            </td>
            <td>
              <img :src="row.courseImg" width="150px" height="100px">
            </td>
            <td>
              <font size="4" color="gray">{{row.teacher}}</font>
            </td>
            <td>
              <font size="4" color="gray">{{row.tag}}</font>
            </td>
            <td>
              <i-button style="color:white;background-color:#ec6c6c" @click="Delete(row)">删除</i-button>&nbsp;
              <i-button style="color:gray;background-color:aliceblue" @click="Edit(row)">修改</i-button>&nbsp;
              <i-button style="color:white;background-color:#3d6ea7" @click="success(row)">确定</i-button>&nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      rows: [],
      rowtemplate: { Id: 0, Name: "", Tag: "" },
      file: "",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList2: []
    };
  },
  created() {
    this.axios
      .get("/teacher/course/list", {})
      .then(response => {
        console.log(response.data);
        this.rows = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    Save: function(event) {
      if (this.rowtemplate.Name && this.rowtemplate.Tag != "") {
        //设置当前新增行的Id
        this.rowtemplate.Id = this.rows.length + 1;
        this.rows.push(this.rowtemplate);
      }

      this.axios
        .post("/teacher/course", {
          name: this.rowtemplate.Name,
          tag: this.rowtemplate.Tag
        })
        .then(response => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });

      this.axios
        .get("/teacher/course/list", {})
        .then(response => {
          this.rows = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
      //还原模板
      this.rowtemplate = { Id: 0, Name: "", Tag: "" };

      // this.axios({
      //   method: "post",
      //   url: "https://jsonplaceholder.typicode.com/posts",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   data: qs.stringify({
      //     course: this.rows.id,
      //     image: ,
      //   })
      // });
    },
    Edit: function(row) {
      this.rowtemplate.Name = row.name;
      this.rowtemplate.Tag = row.tag;

      this.show = false;
      this.isshow = true;
    },
    Delete: function(row) {
      let rowId = row.id;
      this.axios
        .delete("/teacher/course/" + rowId, {})
        .then(function(response) {
          console.log(response);
          this.created();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    success: function(row) {
      let rowId = row.id;
      this.axios

        .put("/teacher/course/" + rowId, {
          name: this.rowtemplate.Name,
          tag: this.rowtemplate.Tag
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.rowtemplate = { Id: 0, Name: "", Tag: "" };

      this.isshow = false;
      this.show = true;
    },
    ago() {
      this.$router.go(-1);
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
    }
  }
};
</script>

<style scoped>
.newcon {
  text-align: left;
}
</style>

