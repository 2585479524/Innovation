<template>
    <div id="coursevalue">
        <table cellspacing="0" class="coursevaluetable">
            <thead>
                <tr>
                <th>章节</th>
                <th>上传视频文件</th>
                <th>章节简介</th>
                <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="zj in zjs" :key="zj.index">
                <td>{{zj.name}}</td>
                <td>
                <Upload action="//jsonplaceholder.typicode.com/posts/"
                >
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
                </td>
                <td>{{zj.info}}</td>
                <td>
                    <i-button style="color:gray;background-color:aliceblue" @click="Edit(zj)" v-show="show">修改</i-button>&nbsp;
                    <i-button style="color:white;background-color:#3d6ea7" @click="success(zj)" v-show="isshow">确定</i-button>&nbsp;
                    <i-button style="color:white;background-color:#ec6c6c" @click="Delete(zj)">删除</i-button>&nbsp;
                </td>
                </tr>
                <tr>
                <td>
                    <i-input type="text" v-model="zjtemplate.Name"/>
                </td>
                <td>
                <Upload action="//jsonplaceholder.typicode.com/posts/"
                >
                <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
                </td>
                <td>
                    <textarea class="form-control" v-model="zjtemplate.Info"/>
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
import Axios from 'axios'
import qs from 'qs'
Axios.interceptors.request.use( (config) => {
    if (config.method=="post"){
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
},  (error) => {
    return Promise.reject(error)
});
export default {
data() {
    return {
        zjs: [],
        zjtemplate: { Id: 0, Name: "", Info: "" },
        file: "",
        id:this.$route.query.id,
        show:true,
        isshow:false,
        };
    },
    created(){
        console.log(this.id)
        this.axios
        .get("/spinner/chapter", {
            params:{
                course:this.id
            }
        })
        .then(response => {
            console.log(response)
            this.zjs = response.data.data;
            console.log(this.zjs);
        })
        .catch(function(error) {
            console.log(error);
            });
        },
    methods: {
        Save: function(event) {
            if (this.zjtemplate.Name != "") {
        //设置当前新增行的Id
                this.zjtemplate.Id = this.zjs.length + 1;
                this.zjs.push(this.zjtemplate);
        }
        this.axios
        .post("/teacher/chapter", {
           name:this.zjtemplate.Name,
           info:this.zjtemplate.Info,
        },
        {headers: {'Content-Type':'application/x-www-form-urlencoded'}})
        .then(response => {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });

        //还原模板
        this.zjtemplate = { Id: 0, Name: "", Info: ""};
        },

    Delete: function(zj) {
        let zjId = zj.id
        this.axios
        .delete("/teacher/chapter/"+zjId, {
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
            });
        },
    Edit: function(zj) {
            this.zjtemplate.Info = zj.info;
            this.zjtemplate.Name = zj.name;
            this.show = false;
            this.isshow = true;
        },
    success: function(zj) {
        console.log(zj.id)
        let zjId = zj.id;
        this.axios 
        .put("/teacher/chapter/" + zjId, {
            name: this.zjtemplate.Name,
            info: this.zjtemplate.Info
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });

        this.rowtemplate = { Id: 0, Name: "", Info: "" };
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
#coursevalue {
    width: 1000px;
    height: 500px;
    padding-left: 100px;

}
.coursevaluetable {
    font-family: verdana, arial, sans-serif;
    font-size: 12px;
    border-width: 1px;
    border-color: #cfcece;
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

