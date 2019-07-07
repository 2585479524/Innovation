<template>
    <div id="coursevalue">
        <table cellspacing="0" class="coursevaluetable">
            <thead>
                <tr>
                <th>章节</th>
                <th>上传视频文件</th>
                <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="chapter in chapters" :key="chapter.index">
                <td>{{chapter.name}}</td>
                <td>
                <Upload action="//jsonplaceholder.typicode.com/posts/"
                >
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
                </td>
                <td>
                    <i-button style="color:gray;background-color:aliceblue" @click="Edit(chapter)" v-show="show">修改</i-button>&nbsp;
                    <i-button style="color:white;background-color:#3d6ea7" @click="success(chapter)" v-show="isshow">确定</i-button>&nbsp;
                    <i-button style="color:white;background-color:#ec6c6c" @click="Delete(chapter)">删除</i-button>&nbsp;
                </td>
                </tr>
                <tr>
                <td>
                    <i-input type="text" v-model="chaptertemplate.Name"/>
                </td>
                <td>
                <Upload action="//jsonplaceholder.typicode.com/posts/"
                >
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
                </td>
                <td>
                    <i-button style="color:white;background-color:#3d6ea7" v-on:click="Save">添加章节</i-button>
                </td>
                </tr>
            </tbody>
    </table>
        <br>
        <br>
        <div class="coursevaluebut">
            <router-link tag="a" :to="{path:'/teacher/coursevalue/cselection',query:{id:id}}">
                <i-button style="color:white;background-color:#3d6ea7">选课情况</i-button>
            </router-link>
            <router-link to="/teacher/coursevalue/eselection">
                <i-button style="color:white;background-color:#3d6ea7">考试情况</i-button>
            </router-link>
            <router-link to="/teacher/coursevalue/exam">
                <i-button style="color:white;background-color:#3d6ea7">上传期末测试</i-button>
            </router-link>
                <i-button style="color:white;background-color:#3d6ea7" @click="ago">返回课程界面</i-button>
        </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
data() {
    return {
        chapters: [],
        chaptertemplate: { Id: 0, Name: "", Info: "" },
        file: "",
        id:this.$route.query.id,
        show:true,
        isshow:false,
        };
    },
    mounted:function(){
        this.created();
    },
    methods: {
        created(){
        this.axios
        .get("/spinner/chapter", {
            params:{
                course:this.id
            }
        })
        .then(response => {
            console.log(response)
            this.chapters = response.data.data;
            console.log(this.chapters);
        })
        .catch(function(error) {
            console.log(error);
            });
        },
        Save: function(event) {
            if (this.chaptertemplate.Name != "") {
                this.chaptertemplate.Id = this.chapters.length + 1;
                this.chapters.push(this.chaptertemplate);
        }
       this.axios.post("/teacher/chapter",qs.stringify(
                {
                course:this.id,
                name:this.chaptertemplate.Name,
                info:'0'
                }
                 ), 
                {headers: {'Content-Type':'application/x-www-form-urlencoded'}})
                .then(function(response){
                    console.log(this.created())
                    this.created()
                });
        //还原模板
        this.chaptertemplate = { Id: 0, Name: "", Info: ""};
        },

    Delete: function(chapter,index) {
        let chapterId = chapter.id
        this.axios
        .delete("/teacher/chapter/"+chapterId, {
        })
        .then(response => {
            console.log(response);
            this.created();
        })
        .catch(function(error) {
            console.log(error);
            });
        },
    Edit: function(chapter) {
            this.chaptertemplate.Name = chapter.name;
            this.show = false;
            this.isshow = true;
        },
    success: function(chapter) {
        let chapterId = chapter.id;
        this.axios 
        .put("/teacher/chapter/" + chapterId, {
            name: this.chaptertemplate.Name,
            info: '0'
        })
        .then(response => {
            console.log(response.data);
            this.created();
        })
        .catch(function(error) {
            console.log(error);
        });
        this.chaptertemplate = { Id: 0, Name: "", Info: "" };
        this.isshow = false;
        this.show = true;
        },
    submitVideo() {},
    upVideoSucc(res) {
        this.getVideo();
    },
    upVideoFail() {
        alert("上传视频失败！");
    },
    ago() {
        this.$router.go(-1);
    },

    }
};
</script>

<style scoped>
.table {
  font-family: verdana, arial, sans-serif;
  font-size: 12px;
  border-width: 1px;
  border-color: #cfcece;
  border-collapse: collapse;
  width: 0 auto;
  height: 0 auto;
}
.coursevaluetable th {
    border-width: 1px;
    padding: 8px;
    background-color: aliceblue;
    font-size: 15px;
}
.coursevaluetable td {
    border-width: 1px;
    padding: 7px;
    border-style: solid;
    border-color: #cacaca;
    background-color: #ffffff;
}
.coursevaluetable thead,
.coursevaluetable tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}
.coursevaluetable thead {
    width: calc(100%-17px);
}
.coursevaluetable tbody {
    display: block;
    height: 400px;
}
.coursevaluebut {
    padding-left: 400px;
}
</style>

