<template>
  <div class="footer">
    <Row>
      <Col span="9">
        <img src="@/assets/indeximg/logo2.png" style="width:200px; height:50px;" alt>
        <p>
          <Icon custom="ivu-icon ivu-icon-ios-contact" size="24"></Icon>研发团队
        </p>
        <p>
          <Icon custom="ivu-icon ivu-icon-ios-at" size="24"></Icon>官方微博
        </p>
        <p>
          <Icon custom="ivu-icon ivu-icon-ios-mail" size="24"></Icon>管理员邮箱
        </p>
      </Col>
      <Col span="5" v-for="(item, index) in listInfo" :key="index">
        <h1>{{item.title}}</h1>
        <div class="contact">
          <ul>
            <li v-for="(i, index) in item.subTitle">
              <a href="/">{{i}}</a>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
    <div class="down">
      <span class="info">
        <span>平台公众号:xxxxxxxxx</span>
        <span>管理员邮箱：xxxxxxxxx@163.com</span>
        <span>地址：山东省青岛胶州市福州南路236号</span>
      </span>
      <span class="icp">鲁公网安备 xxxxxxxxxxxx号</span>
      <div class="clear"></div>
      <span class="copy">版权所有 © 青岛工学院</span>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      listInfo: [
        {
          title: "课程资源平台",
          subTitle: ["web前端", "web后端", "软件工程", "人工智能", "网络安全"]
        },
        {
          title: "创新创业平台",
          subTitle: ["创业资讯", "项目模拟", "导师推荐", "课题申报", "成果展示"]
        },
        {
          title: "协同合作平台",
          subTitle: ["项目讨论", "协同作业", "流程事要", "校企合作"]
        }
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  background: #0b2747;
  color: #fff;
  padding: 10px 200px 0;
}
.footer li {
  list-style: none;
  font-size: 14px;
}
.footer .down {
  border-top: 1px solid #ccc;
  margin: 15px 0 0;
  padding: 5px 0 0;
}
</style>
