<template>
<div id="courseteacher">
<div class="courseteachernewcon">
<font size="2">课程名称</font>
<font color="red" size="4">*</font>：
<i-input type="text" class="form-control" style="width:150px" v-model="rowtemplate.Name"></i-input>
<font size="2">课程标签</font>
<font color="red" size="4">*</font>：
<i-select style="width:150px" v-model="rowtemplate.Tag">
<i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
</i-select>
<br>
<br>
<font size="2">选择课程封面</font>
<font color="red" size="4">*</font>：
<Upload action="//jsonplaceholder.typicode.com/posts/"
:format="['jpg','jpeg','png']"
:max-size="2048">
<Button icon="ios-camera" style="width:100px;height:100px"></Button>
</Upload>
<div class="courseteacherbut">
<i-button style="color:white;background-color:#3d6ea7" v-on:click="Save">添加课程</i-button>
</div>
</div>
<br>
<br>
<table cellspacing="0" class="courseteachertable">
<thead></thead>
<tbody>
<tr v-for="row in rows " :key="row.index">
<td>
<router-link tag="a" :to="{path:'/teacher/coursevalue',query:{id:row.id}}">
<font size="4" color="gray">{{row.name}}</font>
</router-link>
</td>
<td>
<img :src="row.imageFile" width="150px" height="100px">
</td>
<td>
<font size="4" color="gray">{{row.teacher}}</font>
</td>
<td>
<font size="4" color="gray">{{row.tag}}</font>
</td>
<td>
<i-button style="color:white;background-color:#ec6c6c" @click="Delete(row)">删除</i-button>&nbsp;
<i-button style="color:gray;background-color:aliceblue" @click="Edit(row)" v-show="show">{{word}}</i-button>&nbsp;
<i-button style="color:white;background-color:#3d6ea7" @click="success(row)" v-show="isshow">确定课程</i-button>
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
rowtemplate: { Id: 0, Name: "", Tag: ""},
cityList: [
{
value: 'web前端',
label: 'web前端'
},
{
value: 'web后端',
label: 'web后端'
},
{
value: '人工智能',
label: '人工智能'
},],
word:'修改',
show:true,
isshow:false
}
},
created() {
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
if (this.rowtemplate.Name != "") {
this.rowtemplate.Id = this.rows.length + 1;
this.rows.push(this.rowtemplate);
}
console.log(this.rowtemplate);

this.axios
.post("/teacher/course", {
name: this.rowtemplate.Name,
tag: this.rowtemplate.Tag,
})
.then(response => {
console.log(response);
})
.catch(function(error) {
console.log(error);
});
//还原模板
this.rowtemplate = { Id: 0, Name: "", Tag: "" };
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
})
.catch(function(error) {
console.log(error);
});
},
success: function(row) {
console.log(this.rows)
let rowId = row.id;
this.axios 
.put("/teacher/course/" + rowId, {
name: this.rowtemplate.Name,
tag: this.rowtemplate.Tag
})
.then(function(response) {
console.log(response);
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
}
};
</script>

<style scoped>
#courseteacher {
width: 0 auto;
height: 500px;
padding-left: 80px;
}
.courseteachertable {
font-family: verdana, arial, sans-serif;
font-size: 12px;
width: 700px;
padding-top: 40px;
}
.courseteachertable td {
padding: 7px;
}
.courseteachernewcon {
text-align: start;
padding-left: 30px;
}
.courseteacherbut {
padding-left: 500px;
margin-top: -80px;
}
</style>

