<template>
    <div id="app">
        <div class="contain">
            <b>选择课程：</b>
            <i-select  style="width:200px">
                <i-option v-for="item in listList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
            <br><br>
            <b>选择目录：</b>
            <i-select  style="width:200px">
                <i-option v-for="item in courseList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
            <br><br>
            <b>选择题：</b>
                    <div class="divone"  v-for="index in customized_descs" :key="index">
                        <br>
                        <textarea v-model="customized1" class="textarea"  cols="10" rows="2" placeholder="题目：XXXXXXXXX" ></textarea>
                    <br>
                    <div class="answer"  >
                        <div class="ans"><input type="checkbox" v-model="customized2" label="" style="width:20px;height:20px;">A</div>
                        <div class="ans"><input type="checkbox" v-model="customized3" label="" style="width:20px;height:20px;">B</div>
                        <div class="ans"><input type="checkbox" v-model="customized4" label="" style="width:20px;height:20px;">C</div>
                        <div class="ans"><input type="checkbox" v-model="customized5" label="" style="width:20px;height:20px;">D</div>
                    </div>
                    <br>
                    <b>该题的正确答案是：</b>
                        <div class="answer"  >
                        <div class="ans"><input type="checkbox" v-model="customized6" label="" style="width:20px;height:20px;">A</div>
                        <div class="ans"><input type="checkbox" v-model="customized7" label="" style="width:20px;height:20px;">B</div>
                        <div class="ans"><input type="checkbox" v-model="customized8" label="" style="width:20px;height:20px;">C</div>
                        <div class="ans"><input type="checkbox" v-model="customized9" label="" style="width:20px;height:20px;">D</div>
                    </div>
                    <br><br></div>
                    <i-button style="background-color:aliceblue" @click="addCustomizeDesc"><font color="gray">增加选择题</font></i-button>
            <br><br><hr><br>
            <b>判断题：</b>
            <div class="divone" v-for="index in customized_descsone" :key="index">
                <br><br>
                <textarea v-model="customizedone1" class="textarea"  cols="10" rows="2" placeholder="题目：XXXXXXXXX" ></textarea>
            <br>
            <div class="Answer">
                <div class="ans"><input type="checkbox" v-model="customizedone2" label="" style="width:20px;height:20px;">正确</div>
                <div class="ans"><input type="checkbox" v-model="customizedone3" label="" style="width:20px;height:20px;">错误</div>
            </div>
            <br>
            <b>该题的正确答案是：</b><div class="Answer">
                <div class="ans"><input type="checkbox" v-model="customizedone4" label="" style="width:20px;height:20px;">正确</div>
                <div class="ans"><input type="checkbox" v-model="customizedone5" label="" style="width:20px;height:20px;">错误</div>
            </div></div>
            <br><br>
            <i-button style="background-color:aliceblue" @click="addCustomizeDescone"><font color="gray">增加判断题</font></i-button>
            <br><br>
        </div>
        <br>
        <div class="right">
                <i-button style="color:white;background-color:#3d6ea7" @click="success(false)">上传测试</i-button>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listList:[
                {
                    value:'C',
                    label:'C'
                },
                {
                    value:'PS',
                    label:'PS'
                },
                {
                    value:'Python',
                    label:'Python'
                },
                {
                    value:'jQuery',
                    label:'jQuery'
                },
                {
                    value:'Vue',
                    label:'Vue'
                },
                {
                    value:'Sql',
                    label:'Sql'
                }
            ],
            courseList:[
                {
                    value:'第一章 第一节',
                    label:'第一章 第一节'
                },
                {
                    value:'第一章 第二节',
                    label:'第一章 第二节'
                },
                {
                    value:'第一章 第三节',
                    label:'第一章 第三节'
                },
                {
                    value:'第一章 第四节',
                    label:'第一章 第四节'
                },
                {
                    value:'第二章 第一节',
                    label:'第二章 第一节'
                },
                {
                    value:'第二章 第二节',
                    label:'第二章 第二节'
                },
                {
                    value:'第二章 第三节',
                    label:'第二章 第三节'
                },
                {
                    value:'第二章 第四节',
                    label:'第二章 第四节'
                },
                {
                    value:'第三章 第一节',
                    label:'第三章 第一节'
                },
            ],
            customized_descs:[1],
            customized_descsone:[1],
            customized1:'',
            customized2:'',
            customized3:'',
            customized4:'',
            customized5:'',
            customized6:'',
            customized7:'',
            customized8:'',
            customized9:'',
            customizedone1:'',
            customizedone2:'',
            customizedone3:'',
            customizedone4:'',
            customizedone5:'',
        }
    },
         methods:{
            addCustomizeDesc(index) {
            this.customized_descs.push(1);  
        },
            addCustomizeDescone(index) {
            this.customized_descsone.push(1);
        },
        success (nodesc) {
                this.$Notice.success({
                    title: '您已经上传成功',
                    desc: nodesc ? '' : '该章节小测试上传成功！ ',
                }),
                this.$router.go(-1)
            },
            //发送ajax请求
            send() {
                axios({
                    method:'get',
                    url:'',
                }).then(function(res) {
                    console.log(res.data.name);
                })
            }
    }
}
</script>

<style scoped>
    #app {
        width: 0 auto;
        height: 500px;
        margin-top:-750px;
        margin-left: 300px;
    }
    .contain {
        padding:30px;
        text-align: start;
        color:gray;
        font-size: 10px;
        overflow: scroll;
        width: 960px;
        height:560px;
        background-color: rgb(255, 255, 255);
    }
    .textarea {
        width: 800px;
        height: 50px;
        padding-left:20px;
        padding-top:10px;
    }
    .textarea::-webkit-input-placeholder{color:rgb(204, 202, 202);}
    .answer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .Answer {
        width: 600px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    hr {
        height: 1px;
        border:none;
        border-top: 1px dashed rgb(188, 220, 252);
    }
    .right {
        width: 0 auto;
        margin-left: -80px;
    }
</style>