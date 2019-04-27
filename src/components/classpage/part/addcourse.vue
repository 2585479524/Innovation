<template>
    <div class="app">
        <Layout>
            <Header></Header>
        <div class="coursephoto">
            <img :src="courseimg">
        </div>
        <div class="coursename">{{cname}}</div>
        <div class="courseinfor">
            {{ccount}}
            <p>{{cdata}}</p>
            <p>{{ctime}}</p>
        </div>
        <div class="cadd" @click="getclickId()">
            <el-button type="primary" >参加课程</el-button>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </Layout>
    </div>
</template>

<script>
import Header from "@/components/classpage/Headblock";
import Footer from "@/components/classpage/Footer";
export default {
    components: {
    Header, 
    Footer,
   },
    name:"app",
    data(){
        return {
            cname:'课程名称:',
            ccount:'课程开课次数:',
            cdata:'课程开课时间:',
            ctime:'课程课时安排:',
            courseimg:[]
        }
    },
    created(){
      this.courseimg=this.$route.query.courseimg ?this.$route.query.courseimg:this.$route.params.courseimg;
      this.getinfo();
    },
    methods: {
        getclickId(index, course,img) {
            this.$router.push({name:'annoucement',params:{courseTitle:course,courseimg:img}})
        },
        // getinfo() {
        //     axios
        //         .get('https://www.easy-mock.com/mock/5cb48cdd2751d709332e2dd8/Vueproject_copy/classes')
        //         .then(response => {
        //   //console.log(response) 
        //             this.courseimg=this.courseimg
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             alert("网络错误，不能访问");
        //   });
    // }
  }

}
</script>

<style>
.app{
    width: 0 auto;
    height: 0 auto;
}
.coursephoto{
    width: 35%;
    height: 300px;
    margin-top: 5%;
    margin-left: 10%;
}
.coursephoto img {
    width: 100%;
    height: 100%;
  }
.coursename{
    width:20%;
    height: 50px;
    font-size: 25px;
    position: absolute;
    left: 50%;
    top:20%;
}
.courseinfor{
    width:20%;
    height: 50px;
    font-size: 12px;
    position: absolute;
    left: 52%;
    top:28%;
}
.cadd{
    position: absolute;
    left: 60%;
    top:45%;

}
</style>