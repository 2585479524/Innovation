<template>
  <div class="divider">
    <div class="container container-divider">

			<div class="divider-content">

        <h2 class="h2-divider1">
          <img class="study" src="@/assets/study.png">
          {{ msg }}
        </h2>

        <div class="change">
          <div class="asd">
          <div class="picture">
            <img width="234px" height="138px" src="@/assets/course1.jpg">
            <div class="write">
              <h2 class="h2-divider2">Linux 入门实践</h2>
              <h3>进行至第一周</h3>
              <h4>实战 高级 <rate disabled v-model="valueDisabled1"/></h4>
            </div>
          </div>
          </div>

          <div class="asd">
          <div class="picture">
            <img width="235px" height="138px" src="@/assets/course2.jpg">
            <div class="write">
              <h2 class="h2-divider2">Python 经典算术与应用</h2>
              <h3>进行至第一周</h3>
              <h4>实战 高级 <rate disabled v-model="valueDisabled2"/></h4>
            </div>
          </div>
          </div>

          <div class="asd">
          <div class="picture">
            <img width="234px" height="138px" src="@/assets/course3.jpg">
            <div class="write">
              <h2 class="h2-divider2">数据结构 从入门到进阶</h2>
              <h3>进行至第一周</h3>
              <h4>实战 高级 <rate disabled v-model="valueDisabled3"/></h4>
            </div>
          </div>
          </div>
          
          <div class="asd">
          <div class="picture">
            <img width="235px" height="138px" src="@/assets/course4.jpg">
            <div class="write">
              <h2 class="h2-divider2">C语言程序设计</h2>
              <h3>进行至第一周</h3>
              <h4>实战 高级 <rate disabled v-model="valueDisabled4"/></h4>
            </div>
          </div>
          </div>
        </div><!--change-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Divider',
    data() {
      return {
        msg: '课 / 程 / 推 / 荐',
        valueDisabled1: 5,
        valueDisabled2: 3,
        valueDisabled3: 5,
        valueDisabled4: 4,
      }
    }
  }
</script>

<style scoped>
@media (min-width: 768px) {
  .container {
    width: 700px;
    margin:0 auto;
  }
  }
  @media (min-width: 992px) {
  .container {
    width: 900px;
    margin:0 auto;
  }
 }
  @media (min-width: 1200px) {
  .container {
    width: 1000px;
    margin:0 auto;
  }
}


@media screen and ( max-width: 991px ) {
    .templatemo-box {
        margin-bottom: 30px;
    }
    #pricing .active {
        bottom: 0;
    }
    .pricing {
        margin-bottom: 20px;
    }
    #feature img {
        margin-top: 30px;
    }
    #contact .row div{
        margin: 0 auto;
        width: 200px;
    }
}
@media screen and ( max-width: 767px ) {
    .navbar-default .nav li a {
        height: auto;
        line-height: 2em;
    }
    #feature, #pricing, #download {
        padding-top: 20px;
        padding-bottom: 40px;
    }
    #contact .overlay {
        padding-top: 40px;
    }
}
/* start media 360 */
@media screen and ( max-width: 360px ){
    .pricing
    {
        padding-bottom: 40px;
    }
}
/* end media 360 */
.container.container-divider{
  padding:50px auto;
  position:relative;
  height:100%;
}

 .divider-content {
    width: 100%;
    height: 340px;
    margin: 0 auto;
    height: 100%;
  }

  .h2-divider1 {
    font-size: 25px;
    text-align: center;
    padding: 30px;
    display: flex;
    justify-content: center;
  }

  .h2-divider2 {
    margin-top: 50px;
    font-size: 25px;
    text-align: center;
  }

  .study {
    height: 38px;
    width: 38px;
    margin-top: -2px;
  }

  .change {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .asd {
    text-align: center;
    padding: 15px;
    width: 247px;
    margin: 0 auto;
  }

  .picture:hover {
    transform: scale(1.0200, 1.0200);
    box-shadow: 0 0 20px rgb(179, 178, 178);
    height: 250px;
  }

  .picture {
    border: 1px solid rgb(207, 204, 204);
  }

  .asd .picture img {
    width: 100%;
    top: 6px;
  }

  .write {
    margin-top: -60px;
    padding: 8px;
  }

  .write h2 {
    font-size: 17px;
    padding: 4px;
  }

  .write h3 {
    margin-top: 5px;
    font-size: 12px;
    padding: 1px;
  }

  .write h4 {
    margin-top: 5px;
    color: gray;
  }

</style>
