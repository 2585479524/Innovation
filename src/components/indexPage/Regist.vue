<template>
  <div class="hello">
    <div class="container container-home">
      <div>
        <div class="sign">
          <div class="sign-login">
            <el-button
              class="login"
              type="text"
              style="width:10px"
              round
              @click="dialogFormVisible = true"
            >登录|</el-button>

            <el-dialog title="登录" :visible.sync="dialogFormVisible" center width="30%">
              <!-- 插入测试 -->
              <el-form
                :model="ruleForm2"
                status-icon
                :rules="rules2"
                ref="ruleForm2"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="账号" prop="num">
                  <el-input v-model.number="ruleForm2.num" style="width:80%"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm2.pass"
                    auto-complete="off"
                    style="width:80%"
                  ></el-input>
                </el-form-item>

                <Select
                  class="select"
                  prefix="ios-pricetag"
                  placeholder="请选择你的身份"
                  style="width:72.5%"
                  v-model="item"
                >
                  <Option v-for="item in cityList" :value="item" :key="item">{{ item }}</Option>
                </Select>
                <br>
                <br>
                <div class="secret">
                  <el-form-item label="记住密码" prop="delivery" class="secret-el">
                    <el-switch v-model="ruleForm2.delivery"></el-switch>
                  </el-form-item>
                  <span>
                    <a>忘记密码？</a>
                  </span>
                </div>
              </el-form>
              <!-- 插入测试 -->
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false; resetForm('ruleForm2')">取 消</el-button>
                <el-button
                  type="primary"
                  @click="loginAction"
                  :loading="openLoading"
                  v-model="dialogFormVisible"
                >登 录</el-button>
              </div>
            </el-dialog>
          </div>

          <div class="sign-login">
            <el-button
              class="login"
              type="text"
              style="width:10px"
              round
              @click="dialogSignup = true"
            >注册</el-button>
            <el-dialog title="注册" :visible.sync="dialogSignup" center width="30%">
              <!-- 插入测试 -->
              <el-form
                :model="registForm"
                status-icon
                :rules="rules2"
                ref="registForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="账号" prop="num">
                  <el-input v-model.number="registForm.num" style="width:80%"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="registForm.pass"
                    auto-complete="off"
                    style="width:80%"
                  ></el-input>
                </el-form-item>

                <el-form-item label="邮箱" prop="email">
                  <el-input type="Email" style="width:80%" v-model="registForm.email"></el-input>
                </el-form-item>

                <Select
                  class="select"
                  prefix="ios-pricetag"
                  placeholder="请选择你的身份"
                  style="width:72.5%"
                  v-model="item"
                >
                  <Option v-for="item in cityList" :value="item" :key="item">{{ item }}</Option>
                </Select>
                <br>
                <br>
              </el-form>
              <!-- 插入测试 -->
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogSignup = false; resetForm('registForm')">取 消</el-button>
                <el-button
                  type="primary"
                  :loading="registLoading"
                  @click="registAction"
                  v-model="dialogFormVisible"
                >注册</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
    <!--container-->
  </div>
  <!--hello-->
</template>

<script>
import axios from "axios";
export default {
  name: "Regist",
  data() {
    var checkNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (!myreg.test(value)) {
            callback(new Error("请输入正确的手机号码"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      cityList: ["学生", "教师"],
      item: "",
      openLoading: false,
      registLoading: false,
      ruleForm2: {
        pass: "",
        num: "",
        delivery: false
      },
      registForm: {
        pass: "",
        num: "",
        email: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],

        num: [{ validator: checkNum, trigger: "blur" }]
      },
      dialogTableVisible: false,
      dialogFormVisible: "",
      dialogSignup: false,
      form: {
        name: "",
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //提交成功做的动作
          this.dialogFormVisible = false;
          return true;
        } else {
          console.log("error submit!!");

          return false;
        }
      });
      //console.log(this.item)
      /*if (this.item == "学生") {
        this.$router.push({ name: "coursestudents" });
      } else if (this.item == "教师") {
        this.$router.push({ name: "courseteacher" });
      }*/
      return true;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    loginAction() {
      if (this.submitForm("ruleForm2")) {
        this.axiosLoginUser();
      }
    },
    registAction() {
      if (this.submitForm("registForm")) {
        this.axiosRegistUser();
      }
    },
    axiosLoginUser() {
      axios({
        url: "http://39.107.102.246/user/login",
        method: "post",
        data: {
          name: this.ruleForm2.num,
          password: this.ruleForm2.pass,
          autoLogin: ""
        }
      })
        .then(response => {
          console.log(response);
          if (response.data.status == 0 && response.data.msg) {
            new Promise((resolve, reject) => {
              localStorage.userInfo = { userName: this.username };
              setTimeout(() => {
                resolve();
              }, 500);
            })
              .then(() => {
                alert("登陆成功");
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            alert("登陆失败");
          }
        })
        .catch(error => {
          console.log("用户名或密码错误!");
        });
    },
    axiosRegistUser() {
      this.dialogFormVisible = false;
      axios({
        url: "http://39.107.102.246/user/register",
        method: "post",
        data: {
          name: this.registForm.num,
          password: this.registForm.pass,
          email: this.registForm.email
        }
      })
        .then(response => {
          console.log(response);
          if (response.data.status == 0) {
            alert("注册成功!");
          } else {
            this.openLoading = false;
            alert("账号已被占用，注册失败!");
          }
        })
        .catch(error => {
          console.log(error);
          alert("邮箱已被占用，注册失败!");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 768px) {
  .container {
    width: 70%;
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
.sign {
  display: flex;
  margin-left: 1000px;
  margin-top: -10px;
}
.dialog-footer {
  margin-top: -50px;
}

.select {
  margin-left: 60px;
}
</style>