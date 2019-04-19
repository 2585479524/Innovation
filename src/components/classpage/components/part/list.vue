<template>
    <div id="app">
        <div class="list" v-show="isshowlist">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="第一章" name="1">
                    <div @click="showhead">第一节</div>
                    <div @click="showheads">第二节</div>
                </el-collapse-item>
                <el-collapse-item title="第二章" name="2">
                    <div @click="showhead">第一节</div>
                    <div @click="showheads">第二节</div>
                </el-collapse-item>
                <el-collapse-item title="第三章" name="3">
                    <div @click="showhead">第一节</div>
                    <div @click="showheads">第二节</div>
                    <div @click="showheadt">第三节</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        
        <div class="head" v-show="isshowhead">
            课件<i class="el-icon-arrow-right"></i>
            <el-select v-model="value1" size="mini" placeholder="请选择相应章节">
                <el-option v-for="item in page" :key="item.value1" :label="item.label1" :value="item.value1"></el-option>
            </el-select>
            <el-select v-model="value2" size="mini" placeholder="请选择相应章节">
                <el-option v-for="item in knob" :key="item.value2" :label="item.label2" :value="item.value2"></el-option>
            </el-select>
            <el-button type="success" icon="el-icon-check" circle size="mini" @click="selectpage"></el-button>
        </div>
        <div class="videoandtest1" v-show="isshowvta">
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple" @click="showvideo"><i class="el-icon-view"></i></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light"><i class="el-icon-document"></i></div></el-col>
            </el-row>
        </div>
        <div class="videoandtest2" v-show="isshowvtb">
            <el-row>
               <el-col :span="8"><div class="grid-content bg-purple" @click="showvideo"><i class="el-icon-view"></i></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple-light"><i class="el-icon-news"></i></div></el-col>
               <el-col :span="8"><div class="grid-content bg-purple"><i class="el-icon-document"></i></div></el-col>
            </el-row>
        </div>
        <div class="videoandtest3" v-show="isshowvtc">
            <el-row>
                <el-col :span="6"><div class="grid-content bg-purple" @click="showvideo"><i class="el-icon-view"></i></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"><i class="el-icon-news"></i></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-edit"></i></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"><i class="el-icon-document"></i></div></el-col>
            </el-row>
        </div>
        <div class="videoandtest">
            <div class="video" v-show="isshowvideo">视频区域</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"app",
    data(){
        return{
            activeNames: ['1'],
            value1:'',
            value2:'',
            isshowhead: false,
            isshowvideo: false,
            isshowvta:false,
            isshowvtb:false,
            isshowvtc:false,
            isshowlist:true,
            page: [{
                value1: '选项1',
                label1: '第一章'
            },
            {
                value1: '选项2',
                label1: '第二章'
            },
            {
                value1: '选项3',
                label1: '第三章'
            }],
            knob: [{
                value2: '1',
                label2: '第一节'
            },
            {
                value2: '2',
                label2: '第二节'
            },
            {
                value2:'3',
                label2:'第三节'
            }],
            form: {
                optiona:'',
                optionb:'',
                optionc:''
            }
        }
    },
    methods:{
        handleChange(val) {
        console.log(val);
        },
        showhead:function(){
            this.isshowhead = true;
            this.isshowvta = true;
            this.isshowvtb = false;
            this.isshowvtc=false;
            this.isshowlist = false;
            this.isshowvideo = false;
        },
        showheads:function(){
            this.isshowhead = true;
            this.isshowvta = false;
            this.isshowvtb = true;
            this.isshowvtc=false;
            this.isshowlist = false;
            this.isshowvideo = false;
        },
        showheadt:function(){
            this.isshowhead = true;
            this.isshowvta = false;
            this.isshowvtc = true;
            this.isshowvtb = false;
            this.isshowlist = false;
            this.isshowvideo = false;
        },
        selectpage:function(){
            if(this.value2 == 2){
                this.isshowlist = false;
                this.isshowhead = true;
                this.isshowvideo = false;
                this.isshowvtb=true;
                this.isshowvta=false;
                this.isshowvtc=false;
            }
            else if(this.value2 == 1){
                this.isshowlist = false;
                this.isshowhead = true;
                this.isshowvideo = false;
                this.isshowvta=true;
                this.isshowvtb=false;
                this.isshowvtc=false;
            }
            else{
                this.isshowlist = false;
                this.isshowhead = true;
                this.isshowvideo = false;
                this.isshowvtc=true;
                this.isshowvtb=false;
                this.isshowvta=false;
            }
        },
        showvideo:function(){
            this.isshowvideo = true;
            this.isshowexam = false;
        }
    }
}
</script>
<style scoped>
    #app {
        width: 0 auto;
        height: 500px;
        margin-top: -650px;
        margin-left: 300px;
    }
    .list {
        width: 1050px;
        height: 500px;
    }
    .videoandtest1,.videoandtest2,.videoandtest3,.head{
        width:1050px;
        margin-top:10px;
    }
    .video{
        width:1050px;
        height: 500px;
        background-color: azure
    }   
    .bg-purple {
        background: #d3dce6;
        height: 30px;
    }
    .bg-purple-light {
        background: #e5e9f2;
        height: 30px;
    }
    .el-icon-view{
        height: 100px;
    }
</style>