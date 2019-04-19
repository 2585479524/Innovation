<template>
  <div class="footer">
    <!-- start contact -->
    <div class="footer-content">
      <section id="contact">
        <div class="overlay">
          <div class="container">
            <div class="row-footer">
              <div class="rowLeft">
                <div class="col-md-12 wow fadeIn animated" data-wow-delay="0.6s">
                  <img src="@/assets/logo2.png" style="width:200px; height:50px;" alt>
                </div>

                <div class="col-md-3 wow fadeInUp animated" data-wow-delay="0.6s">
                  <p>
                    <Icon custom="ivu-icon ivu-icon-ios-contact" size="24"></Icon>研发团队
                  </p>
                  <p>
                    <Icon custom="ivu-icon ivu-icon-ios-at" size="24"></Icon>官方微博
                  </p>
                  <p>
                    <Icon custom="ivu-icon ivu-icon-ios-mail" size="24"></Icon>管理员邮箱
                  </p>
                </div>
              </div>
              <div class="rowRight">
                <div class="col-md-3 wow fadeIn animated" data-wow-delay="0.6s">
                  <h1 class="text-uppercase">课程资源平台</h1>
                  <div class="contact text-uppercase">
                    <ul>
                      <li>
                        <a href="http://a.rebright.top/">MOOC推荐</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">专业课程</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">学科前沿</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">技术讨论</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">知识竞赛</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 wow fadeIn animated" data-wow-delay="0.6s">
                  <h1 class="text-uppercase">创新创业平台</h1>
                  <div class="contact active text-uppercase">
                    <ul>
                      <li>
                        <a href="http://a.rebright.top/">创业资讯</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">项目模拟</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">导师推荐</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">课题申报</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">成果展示</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 wow fadeIn animated" data-wow-delay="0.6s">
                  <h1 class="text-uppercase">协同合作平台</h1>
                  <div class="contact text-uppercase">
                    <ul>
                      <li>
                        <a href="http://a.rebright.top/">项目讨论</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">协同作业</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">流程事要</a>
                      </li>
                      <li>
                        <a href="http://a.rebright.top/">校企合作</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end contact -->

      <!-- start footer -->
      <footer>
        <div class="container">
          <divider/>
          <span class="info">
            <span>平台公众号:xxxxxxxxx</span>
            <span>管理员邮箱：xxxxxxxxx@163.com</span>
            <span>地址：山东省青岛胶州市福州南路236号</span>
          </span>
          <span class="icp">鲁公网安备 xxxxxxxxxxxx号</span>
          <div class="clear"></div>
          <span class="copy">版权所有 © 青岛工学院</span>
        </div>
      </footer>
      <!-- end footer -->
    </div>
  </div>
</template>

<script >
export default {
  name: "v-footer",
  data() {
    return {};
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
    margin-bottom: 4px;
  }
  #pricing .active {
    bottom: 0;
  }
  .pricing {
    margin-bottom: 4px;
  }
  #feature img {
    margin-top: 4px;
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
    padding-top: 8px;
    padding-bottom: 8px;
  }
  #contact .overlay {
    padding-top: 8px;
  }
}
/* start media 360 */
@media screen and (max-width: 360px) {
  .pricing {
    padding-bottom: 10px;
  }
}
/* end media 360 */
p {
  padding: 3px;
  font-size: 15px;
  white-space: nowrap;
}
h1 {
  white-space: nowrap;
  margin: 0 auto;
}

.col-md-3.fadeIn ul {
  width: 100px;
  margin: 0 auto;
  padding: 2px 0px;
}
/*.animated{
	padding:10px 45px;
}*/
.col-md-3.fadeInUp {
  padding: 5px 7px 0px 0px;
  width: 250px;
}
.col-md-3.fadeIn {
  padding: 0px 25px;
  top: 20px;
}

.contact.text-uppercase {
  font-size: 13px;
  width: 78px;
  margin: 0 auto;
}
.contact.wow.text-uppercase {
  font-size: 10px;
  width: 90px;
  margin: 0 auto;
}
.row-footer {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
}
.rowLeft {
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
}
.rowRight {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  margin: auto auto;
}
#contact {
  background: #0b2747;
  background-size: cover;
  color: #fff;
  padding: 10px;
}

/* end contact */

/* start footer */
footer {
  background: #0b2747;
  font-weight: 400;
  color: #fff;
  text-align: center;
  padding: 0px;
  font-size: 13px;
}
/* end footer */
.footer {
  background: #0b2747;
  margin: 0 auto;
}
</style>
