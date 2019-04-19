<template>
    <div id="app">
        <table cellspacing="0" class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>章节</th>
                        <th>上传视频文件</th>
                        <th>章节简介</th>
                        <th>上传小测试</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in rows " :key="row.index" >
                            <td>{{row.Name}}</td>
                            <td><input type="file" @click="submitVideo" ></td>
                            <td>{{row.Age}}</td>
                            <td><router-link to="/teacher/coursevalue/uptest">
                                <i-button style="color:gray;background-color:aliceblue">点击上传</i-button>
                                </router-link>
                            </td>
                            <td><i-button style="color:gray;background-color:aliceblue" @click="Edit(row)">编辑</i-button>&nbsp;
                                <i-button style="color:white;background-color:#ec6c6c" @click="Delete(row.Id)">删除</i-button>&nbsp;
                                <i-button style="color:white;background-color:#3d6ea7" @click="success(false)">提交</i-button>
                            </td>
                        </tr>
                    <tr>
                        <td><i-input type="text" class="form-control" v-model="rowtemplate.Name" /></td>
                        <td><input type="file" @click="submitVideo" ></td>
                        <td><textarea class="form-control" v-model="rowtemplate.Age" /></td>
                        <td><router-link to="/teacher/coursevalue/uptest">
                            <i-button style="color:gray;background-color:aliceblue">点击上传</i-button>
                            </router-link>    
                        </td>
                        <td><i-button style="color:white;background-color:#3d6ea7" v-on:click="Save">添加/修改章节</i-button></td>
                    </tr>
                </tbody>
            </table>
            <br><br>
            <div class="but">
                <router-link to="/teacher/coursevalue/exam">
                     <i-button style="color:white;background-color:#3d6ea7">上传期末测试</i-button>
                </router-link>
                    <i-button style="color:white;background-color:#3d6ea7" @click="ago">返回课程界面</i-button>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rows: [
            { Id: 1, Name: '第一章第一小节',Age: 'aaaaaaa' },
            { Id: 2, Name: '第一章第二小节', Age:'bbbbbbb'},
            { Id: 3, Name: '第一章第三小节', Age: 'cccccc'},
            ],
            rowtemplate: { Id: 0, Name: '', Age: ''},
            file:'',
        }
    },
        methods:{
            Save: function (event) {
                if (this.rowtemplate.Id == 0) {
                    //设置当前新增行的Id
                    this.rowtemplate.Id = this.rows.length + 1;
                    this.rows.push(this.rowtemplate);
                }
                
                //还原模板
                this.rowtemplate = { Id: 0, Name: '', Age: '', School: '', Remark: '' }
            },
            Delete: function (id) {
                //实际项目中参数操作肯定会涉及到id去后台删除，这里只是展示，先这么处理。
                for (var i=0;i<this.rows.length;i++){
                    if (this.rows[i].Id == id) {
                        this.rows.splice(i, 1);
                        break;
                    }
                }
            },
            Edit: function (row) {
                this.rowtemplate = row;
            },
            submitVideo() {
                var formData = new FormData();
                //apend方法的第一个参数必须和后端接收的字段完全一致！
                formData.append('files',document.querySelector('input[type=file]').files[0]);
                var option = {
                    url:'api/video/upVideo',
                    data:formData,
                    methods:'post',
                    headers:{
                        'Content-Type':'multipart.form-data'
                    }
                }
                axios(options).then(this.upVideoSucc).catch(this.upVideoFail)
            },
            upVideoSucc(res) {
                this.getVideo();
            },
            upVideoFail() {
                alert('上传视频失败！')
            },
            ago() {
                this.$router.go(-1)
            },
            success (nodesc) {
                this.$Notice.success({
                    title: '您已经上传成功',
                    desc: nodesc ? '' : '新章节添加成功！ '
                })
            },
    }
}
</script>

<style scoped>
    #app {
        width: 0 auto;
        height: 500px;
        margin-top:-850px;
        margin-left: 300px;
    }
    .table {
        font-family: verdana,arial,sans-serif;
        font-size:12px;
        border-width: 1px;
        border-color: #cfcece;
        border-collapse: collapse;
        width: 0 auto;
        height:0 auto;
    }
    .table th {
     border-width: 1px;
     padding: 8px;
     background-color: aliceblue;
     font-size: 15px;
    }
    .table td {
        border-width: 1px;
        padding: 7px;
        border-style: solid;
        border-color: #cacaca;
        background-color: #ffffff;
    }
    .table thead,.table tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed
    }
    .table thead {
        width: calc(100%-17px)
    }
    .table tbody {
        display: block;
        height: 400px;
        overflow-y: scroll;
    }
    .but {
        padding-left: 400px;
    }
</style>
