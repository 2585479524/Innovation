<template>
    <div id="app">
        <div class="contain">
            <h1>‘XXXXX’期末考核</h1>
            <Row>

                <i-col span="7" push="17">
                    <Card dis-hover style="width:350px">
                        <p slot="title">倒计时：XXXX</p>
                        <p>单选题：</p>
                        <Card dis-hover style="width:315px">
                            <div>
                                <p>题目类型：XXX</p>
                                
                            </div>
                        </Card>
                        <p>判断题：</p>
                        <Card dis-hover style="width:315px">
                        <div>
                                <p>题目类型：XXX</p>
                                
                            </div>
                        </Card>
                        
                    </Card>
                </i-col>

                <i-col span="17" pull="7">
                    <Card dis-hover style="width:800px">
                        <p slot="title">'XXXX'试卷 &nbsp;&nbsp;&nbsp;考试时间：xxxx&nbsp;&nbsp;&nbsp;试卷总分值：XXX</p>
                        <p>姓名：XXX&nbsp;&nbsp;&nbsp;班级：XXX</p>
                        <Card dis-hover style="width:765px;height: 400px;">
                            <div class="right">
                                <h1>XXX科目</h1>
                                <br>
                                <i-button style="color:white;background-color:#3d6ea7" @click="startAnswer">开始考试</i-button>
                            </div>
                        </Card>
                    </Card>

                </i-col>
            </Row>
            <br>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods:{
            startAnswer(){
                this.$router.push({name:'item'})
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

    .contain {
        padding: 30px;
        text-align: start;
        color: gray;
        font-size: 10px;
        overflow: scroll;
        width: 1100px;
        height: 500px;
        background-color: rgb(255, 255, 255);
    }

    .right {
        width: 0 auto;
        text-align: center;
    }
</style>