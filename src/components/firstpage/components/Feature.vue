<!-- start feature -->
<template>
  <section id="feature" style="background:rgb(244, 244, 244);padding: 20px">
    <div class="container container-feature">
      <h2 class="h2-divider1">
        <img class="study" src="@/assets/study.png">
        {{ msg }}
      </h2>
      <div class="contain">
        <div class="img">
          <img class="image" src="@/assets/feature1.jpg">
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="word">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人工智能是计算机科学的一个分支，它企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器，该领域的研究包括机器人、语言识别、图像识别、自然语言处理和专家系统等。人工智能从诞生以来，理论和技术日益成熟，应用领域也不断扩大，可以设想，未来人工智能带来的科技产品，将会是人类智慧的“容器”。人工智能可以对人的意识、思维的信息过程的模拟。人工智能不是人的智能，但能像人那样思考、也可能超过人的智能。</p>
        </div>
      </div>
      <hr style="height:1px;border:none;border-top:1px dashed gray;">
      <div class="containone">
        <div class="img">
          <img class="image" src="@/assets/feature2.jpg">
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="word">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人工智能是一门极富挑战性的科学，从事这项工作的人必须懂得计算机知识，心理学和哲学。人工智能是包括十分广泛的科学，它由不同的领域组成，如机器学习，计算机视觉等等，总的说来，人工智能研究的一个主要目标是使机器能够胜任一些通常需要人类智能才能完成的复杂工作。但不同的时代、不同的人对这种“复杂工作”的理解是不同的。 [1] 2017年12月，人工智能入选“2017年度中国媒体十大流行语”。</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "v-feature",
  data() {
    return {
      msg: "成 / 果 / 展 / 示"
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
.feature-content {
  height: 100%;
  width: 100%;
}
.text-uppercase-feature {
  line-height: 20px;
  text-align: center;
  white-space: pre-wrap;
}
.contain {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.containone {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3px;
}
.image {
  width: 200px;
  height: 150px;
}
.word {
  font-size: 14px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
.img-responsive {
  width: 50%;
  position: relative;
  top: -30px;
}
.col-md-6Right {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
#feature {
  width: 100%;
}
</style>

<!-- end feature -->
