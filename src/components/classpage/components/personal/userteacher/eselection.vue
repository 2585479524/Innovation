<template>
    <div id="app">
        <div class="contain">
            <b>选择课程：</b>
            <i-select  style="width:200px">
                <i-option v-for="item in listList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
            <br><br>
            <b>选择章节：</b>
            <i-select  style="width:200px">
                <i-option v-for="item in zhangZ" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>选择小节：</b><i-select  style="width:200px">
                <i-option v-for="item in jieJ" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
            <br><br>
            <b>考试人数：</b>{{num}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>及格人数：</b>{{numup}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>及格率：</b>{{score}}
            <br><br>
            <i-table border :columns="columns1" :data="data1" style="width:700px;"></i-table>
            <br>
            <div class="hello">
			<div id="main2" style="width: 100%;height: 200px;"></div>
		    </div>
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
            zhangZ:[
                {
                    value:'第一章',
                    label:'第一章'
                },
                {
                    value:'第二章',
                    label:'第二章'
                },
                {
                    value:'第三章',
                    label:'第三章'
                },
                {
                    value:'第四章',
                    label:'第四章'
                },
            ],
            jieJ:[
                {
                    value:'第一小节',
                    label:'第一小节'
                },
                {
                    value:'第二小节',
                    label:'第二小节'
                },
                {
                    value:'第三小节',
                    label:'第三小节'
                },
                {
                    value:'第四小节',
                    label:'第四小节'
                },
            ],columns1: [
                    {
                        title: '学号',
                        key: 'num'
                    },
                    {
                        title: '学生姓名',
                        key: 'name'
                    },
                    {
                        title: '学生成绩',
                        key: 'score'
                    }
                ],
                data1: [
                    {
                        name: '',
                        age:'',
                        score:''
                    },
                    {
                        name: '',
                        age: '',
                        score:''
                    },
                    {
                        name: ' ',
                        age: '',
                        score:''
                    },
                    {
                        name: ' ',
                        age: '',
                        score:''
                    }
                ],
            num:'100人',
            numup:'90人',
            score:'90%',
        }
    },
    mounted() {
			// 绘制图表
			this.echartPie();
		},methods: {
			echartPie() { // 饼状图的相关配置与事件 
				
				// 1. 默认选中了某一个
				// 2. 鼠标离开记录上次选中的作为当前选中的
				
				
				
				var echarts = require('echarts');
 
				// 基于准备好的dom，初始化echarts实例
				var myChart = echarts.init(document.getElementById('main2'));
				// 不能在单个容器上初始化多个 ECharts 实例。
				//实例容器，一般是一个具有高宽的div元素。
 
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['60分以下', '60~70分', '70~80分', '80~90分', '90分以上']
					},
					series: [{
						name: '所占比例',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '16',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: [{
								value: 335,
								name: '60分以下',
							},
							{
								value: 310,
								name: '60~70分'
							},
							{
								value: 234,
								name: '70~80分'
							},
							{
								value: 135,
								name: '80~90分'
							},
							{
								value: 1548,
								name: '90分以上'
							}
						],
						itemStyle: { // 饼状图之间隔开一点的配置参数
							normal: {
								borderWidth: 4,
								borderColor: '#ffffff',
							}
						}
					}]
				};
				myChart.setOption(option);
				init(0);
 
				function init(index) {
					myChart.dispatchAction({
						type: 'highlight',
						seriesIndex: 0,
						dataIndex: index
					});
				}
				//记录上次高亮的索引
				var lastMouseOverIndex = null;
				// mouseover事件，记录当前数据索引并取消其他高亮，over在out之后
				myChart.on('mouseover', function(params) {
					var dataLen = option.series[0].data.length;
					lastMouseOverIndex = params.dataIndex;
					for(var i = 0; i < dataLen; i++) {
						if(i != params.dataIndex) {
							myChart.dispatchAction({
								type: 'downplay',
								seriesIndex: 0,
								dataIndex: i
							})
						}
					}
				});
				// mouseout事件，将上次的高亮
				myChart.on('mouseout', function(params) {
					myChart.dispatchAction({
						type: 'highlight',
						seriesIndex: 0,
						dataIndex: lastMouseOverIndex
					})
				});
			},
			changeData(index) {
				if(index == 0) {
					this.data = [520, 200, 306, 520, 800, 120]
				} else {
					this.data = [50, 200, 306, 100, 800, 120];
				}
				this.echart();
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
        margin-top:-870px;
        margin-left: 300px;
    }
    .contain {
        padding-left:100px;
        padding-top:30px;
        text-align: start;
        color:gray;
        font-size: 10px;
        width: 960px;
        height:700px;
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
    h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>