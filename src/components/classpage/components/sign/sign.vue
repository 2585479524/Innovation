<template>
  <div>
    <div class="bg" @click="hidden"></div>
    <div class="sign">
        <div class="title">
            <router-link class="rt"  :to="{name:'in'}"><p style="margin-left:10%">身份</p></router-link>
        </div>
        <transition name="fade" mode="out-in">
            <router-view class="content"></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        hidden(){
            this.$emit('hidden-login',false);
        }
    }
};
</script>

<style scoped>
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  /* opacity:0; */
  transition:opacity .5s;
}
.bg{
    background-color:#3b3b3b;
    width:100%;
    height: 100%;
    opacity: 0.75;
    z-index: 10001;
    position: fixed;
    top:0px;
    bottom:0px;
}
b{
    padding: 10px;
    line-height: 80px;
}
.sign{
    /* height:560px; */
    width:450px;
    background-color: #ffffff;
    z-index: 10002;
    position:absolute;
    left:37%;
    top:230px;
    border: none;
    border-radius: 20px 20px 20px 20px;
}
.content{
    position: relative;
}
.title{
    height:80px;
    width:100%;
    font-size:20px;
    line-height: 120px;
    margin-left: 160px;
    color:#1f1f1f;
}
.rt:hover{
    color:rgb(81, 219, 39);
}
.rt:focus{
    color:rgb(81, 219, 39);
}
.rt{
    color:#1f1f1f;
}
.select{
    color:rgb(240, 65, 65);
}
</style>