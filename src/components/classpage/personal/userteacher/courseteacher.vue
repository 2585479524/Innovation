<template>
<div id="app">
<div class="newcon">
<font size="2">课程名称</font>
<font color="red" size="4">*</font>：
<i-input type="text" class="form-control" style="width:150px" v-model="rowtemplate.Name"/>
<font size="2">课程标签</font>
<font color="red" size="4">*</font>：
<i-input type="text" class="form-control" style="width:150px" v-model="rowtemplate.Tag"/>
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
<br>
<br>
</div>
</template>

<script>

export default {
data() {
return {
rows: [],
rowtemplate: { Id: 0, Name: "",Tag:""},
file: "",
dialogImageUrl: "",
dialogVisible: false,
fileList2: []
};
},
created(){
this.axios
.get("/teacher/course/list", {
})
.then(response => {
console.log(response.data);
this.rows = response.data.data;
console.log(this.rows);
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
.post("/teacher/course",{
name:this.rowtemplate.Name,
tag:this.rowtemplate.Tag,
})
.then(response => {
console.log(response);
})
.catch(function(error) {
console.log(error);
});
this.axios
.get("/teacher/course/list", {
})
.then(response => {
console.log(response.data);
this.rows = response.data.data;
})
.catch(function(error) {
console.log(error);
}); 
//还原模板
this.rowtemplate = { Id: 0, Name: "" ,Tag:""};
},
Edit: function(row) {
this.rowtemplate.Name = row.name;
this.rowtemplate.Tag = row.tag;
},
Delete: function(row) {
let rowId = row.id;
this.axios
.delete("/teacher/course/"+rowId, {
})
.then(function(response) {
console.log(response);
this.created();
})
.catch(function(error) {
console.log(error);
});
},
success:function(row) {
let rowId = row.id;
this.axios
.put("/teacher/course/"+rowId,{
name:this.rowtemplate.Name,
tag:this.rowtemplate.Tag,
})
.then(function(response) {
console.log(response);
})
.catch(function(error) {
console.log(error);
})
this.rowtemplate = { Id: 0, Name: "" ,Tag:""};
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
},
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

