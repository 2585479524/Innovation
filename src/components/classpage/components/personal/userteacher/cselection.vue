<template>
    <div id="app">
        <div class="contain">
            <b>选择课程：</b>
            <i-select  style="width:200px">
                <i-option v-for="item in listList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
            <br><br>
            <b>选课人数：</b>{{num}}
            <br><br>
            <i-table border :columns="columns1" :data="data1" style="width:700px;"></i-table>
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
            columns1: [
                    {
                        title: '学号',
                        key: 'num'
                    },
                    {
                        title: '学生姓名',
                        key: 'name'
                    },
                ],
                data1: [
                    {
                        name: '',
                        age:'',
                    },
                    {
                        name: '',
                        age: '',
                    },
                    {
                        name: ' ',
                        age: '',
                    },
                    {
                        name: ' ',
                        age: '',
                    }
                ],
            num:'100人',
            methods:{
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
    .contain {
        padding-left:100px;
        padding-top:50px;
        text-align: start;
        color:gray;
        font-size: 10px;
        width: 960px;
        height:600px;
        background-color: rgb(255, 255, 255);
    }
    .table {
        font-family: verdana,arial,sans-serif;
        font-size:12px;
        color:#333333;
        border-width: 1px;
        border-color: #b8b6b6;
        border-collapse: collapse;
        width: 600px;
        height:0 auto;
    }
    .table th {
     border-width: 1px;
     padding: 10px;
     border-style: solid;
     border-color: #b8b6b6;
     background-color: aliceblue;
     color: gray;
    }
    .table td {
        border-width: 1px;
        padding: 12px;
        border-style: solid;
        border-color: #b8b6b6;
        background-color: #ffffff;
    }
</style>