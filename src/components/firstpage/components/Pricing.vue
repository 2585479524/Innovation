<!-- start pricing -->
<template>
  <section id="pricing">
    <div class="container container-pricing">
      <div class="pricing-content">
        <div class="col-md-12 wow bounceIn">
          <h2 class="h2-divider1">
            <img class="study" src="@/assets/study.png">
            {{ msg }}
          </h2>
        </div>
        <div class="pricingone">
          <div class="teacherIm">
            <div class="col-md-4 wow fadeIn" data-wow-delay="0.6s" style="text-align:center">
              <card class="pricing text-uppercase-pricing" style="width:250px">
                <div class="pricing-title">
                  <br>
                  <h3 style="color:white">张老师</h3>
                  <p style="color:white">
                    <b>讲师</b>
                  </p>
                  <p style="color:white">教龄：5年</p>
                  <br>
                </div>
                <br>
                <div class="teacherInform">
                  <p>
                    <b>主讲：</b>
                  </p>
                  <p>计算机网络</p>
                  <p>Java EE</p>
                  <p>数据结构与算法</p>
                </div>
                <br>
              </card>
            </div>

            <div class="col-md-4 wow fadeIn" data-wow-delay="0.6s" style="text-align:center">
              <card class="pricing active text-uppercase-pricing" style="width:250px">
                <div class="pricing-title">
                  <br>
                  <h3 style="color:white">李老师</h3>
                  <p style="color:white">
                    <b>讲师</b>
                  </p>
                  <p style="color:white">教龄：7年</p>
                  <br>
                </div>
                <br>
                <div class="teacherInform">
                  <p>
                    <b>主讲：</b>
                  </p>
                  <p>软件工程导论</p>
                  <p>C语言程序设计</p>
                  <p>软件需求工程</p>
                </div>
                <br>
              </card>
            </div>

            <div class="col-md-4 wow fadeIn" data-wow-delay="0.6s" style="text-align:center">
              <card class="pricing active text-uppercase-pricing" style="width:250px">
                <div class="pricing-title">
                  <br>
                  <h3 style="color:white">孙老师</h3>
                  <p style="color:white">
                    <b>讲师</b>
                  </p>
                  <p style="color:white">教龄：6年</p>
                  <br>
                </div>
                <br>
                <div class="teacherInform">
                  <p>
                    <b>主讲：</b>
                  </p>
                  <p>Java程序设计</p>
                  <p>安卓程序开发</p>
                  <p>php程序设计</p>
                </div>
                <br>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "v-pricing",
  data() {
    return {
      msg: "导 / 师 / 团 / 队"
    };
  }
};
</script>
<style scoped>
@media (min-width: 768px) {
  .container {
    width: 700px;
    margin: 0 auto;
  }
}
@media (min-width: 992px) {
  .container {
    width: 900px;
    margin: 0 auto;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1000px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 991px) {
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
  #contact .row div {
    margin: 0 auto;
    width: 200px;
  }
}
@media screen and (max-width: 767px) {
  .navbar-default .nav li a {
    height: auto;
    line-height: 2em;
  }
  #feature,
  #pricing,
  #download {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  #contact .overlay {
    padding-top: 40px;
  }
}
/* start media 360 */
@media screen and (max-width: 360px) {
  .pricing {
    padding-bottom: 40px;
  }
}
/* end media 360 */
.container-pricing {
  margin: 0 auto;
}
.h2-divider1 {
  font-size: 25px;
  text-align: center;
  padding: 30px;
  display: flex;
  justify-content: center;
}
.study {
  height: 38px;
  width: 38px;
  margin-top: -2px;
}
.pricing-content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.col-md-4.wow.fadeIn {
  padding: 5px 14px;
  margin: 0 auto;
}
.pricing-title {
  background-color: rgb(110, 168, 219);
}
.teacherIm {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.pricing-title p {
  padding: 5px;
}
.teacherInform p {
  padding: 2px;
}
.col-md-12.wow.bounceIn .text-uppercase-pricing {
  padding: 50px;
  font-size: 30px;
}
</style>
<!-- end pricing -->
