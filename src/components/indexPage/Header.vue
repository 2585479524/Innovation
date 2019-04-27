<template>
  <div class="navigation">
    <nav class="navbar navbar-default navbar-fixed-top templatemo-nav" role="navigation">
      <div class="container container-navbar">
        <div class="navbar-header">
          <a href="http://a.rebright.top/#" class="navbar-brand">
            <img src="@/assets/indeximg/logo.png" style="max-width:200px;margin-top:-7px;">
          </a>
        </div>
        <div class="navbar-footer" aria-expanded="false">
          <ul class="nav">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/classpage">课程资源平台</router-link>
            </li>
            <li>
              <router-link to="#">创新创业平台</router-link>
            </li>
            <li>
              <router-link to="#">协同合作平台</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
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
.navigation {
  width: 100%;
}
.container-navbar {
  margin: 0 auto;
  height: 100%;
}
.navbar-header {
  float: left;
  height: 100%;
}
.navbar-footer {
  float: right;
  height: 100%;
}
img {
  position: relative;
  top: 12px;
}
.nav {
  position: relative;
  top: 12px;
}
.menuLogo {
  width: 49px;
  height: 49px;
  position: relative;
  top: -5px;
  display: none;
}

.navbar-default {
  background: #fff;
  border: none;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.08);
  margin: 0 auto;
  height: 70px;
}
.navbar-default .navbar-brand {
  color: #28a7e9;
  font-size: 30px;
  font-weight: bold;
  height: 70px;
  line-height: 35px;
}
.navbar-default .nav li a {
  color: #666;
  font-size: 13px;
  font-weight: bold;
  height: 70px;
  line-height: 40px;
}
.navbar-default .nav li a:hover,/*导航栏链接，鼠标移入、输入字段、鼠标点击链接字体为蓝色*/
    .navbar-default .nav li a:focus,
    .navbar-default .nav li a.current {
  color: #28a7e9;
}

.navbar {
  position: relative;
  margin: 0 auto;
}

.navbar li {
  margin: 0 5px 10px 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
.navbar a {
  padding: 3px 12px;
  text-decoration: none;
  color: #999;
  line-height: 100%;
}
.navbar a:hover {
  color: #000;
}
.navbar .current a {
  background: #999;
  color: #fff;
  border-radius: 5px;
}
.navbar.center ul {
  text-align: center;
}

@media screen and (max-width: 768px) {
  /*界面小于768像素*/

  .menuLogo {
    width: 48px;
    height: 48px;
    position: relative;
    top: -5px;
    display: block;
    border: none;
  }
  .menuPic {
    position: relative;
    left: -7px;
    top: 2px;
  }
  .navbar {
    position: relative;
    min-height: 40px;
  }
  .navbar ul {
    width: 50px;
    float: right;
    height: 50px;
    padding: 5px 0;
    top: 15px;
    right: 20px;
    border: solid 1px rgb(207, 205, 205);
    background: #fff no-repeat 10px 11px;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  .navbar .navbar-footer:hover ul {
    width: 180px;
    float: right;
    height: 350px;
    padding: 5px 0;
    top: 15px;
    right: 20px;
    border: solid 1px rgb(207, 205, 205);
    background: #fff no-repeat 10px 11px;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  .navbar .navbar-footer:hover .menuLogo {
    position: relative;
    float: right;
  }
  .navbar li {
    position: relative;
    top: 50px;
    display: none; /* hide all <li> items */
    margin: 0;
    text-align: center;
  }
  .navbar .current {
    display: block; /* show only current <li> item */
  }
  .navbar a {
    display: block;
    padding: 5px 5px 5px 32px;
    text-align: left;
  }
  .navbar .current a {
    background: none;
    color: #666;
  }

  /* on nav hover */
  .navbar ul:hover {
    background-image: none;
  }
  .navbar ul:hover li {
    display: block;
    margin: 0 0 5px;
  }
  .navbar ul:hover .current {
    background: no-repeat 10px 7px;
  }

  /* right nav */
  .navbar.right ul {
    left: auto;
    right: 0;
  }

  /* center nav */
  .navbar.center ul {
    left: 50%;
    margin-left: -90px;
  }
}
</style>
