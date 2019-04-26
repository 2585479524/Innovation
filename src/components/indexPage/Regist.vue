<template>
  <div class="hello">
    <div class="container container-home">
      <div>
        <div class="sign-success" v-if="Loginisok">
          <div class="login-success-message">欢迎{{userName}}</div>
          <el-button
            class="login-exit-button"
            type="primary"
            size="mini"
            round
            @click="Loginexit"
          >退出登录</el-button>
        </div>
        <div class="sign" v-else>
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
                :model="loginForm"
                status-icon
                :rules="rules2"
                ref="loginForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="账号" prop="num">
                  <el-input v-model.number="loginForm.num" style="width:80%"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="loginForm.pass"
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
                    <el-switch v-model="loginForm.delivery"></el-switch>
                  </el-form-item>
                  <span>
                    <a>忘记密码？</a>
                  </span>
                </div>
              </el-form>
              <!-- 插入测试 -->
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false; resetForm('loginForm')">取 消</el-button>
                <el-button
                  type="primary"
                  @click="LoginSubmit('loginForm')"
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
                  <el-input type="Email" style="width:80%" v-model.email="registForm.email"></el-input>
                </el-form-item>

                <br>
                <br>
              </el-form>
              <!-- 插入测试 -->
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogSignup = false; resetForm('registForm')">取 消</el-button>
                <el-button
                  type="primary"
                  :loading="registLoading"
                  @click="submitForm('registForm')"
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
import { setTimeout } from "timers";
import { error } from "util";
import store from "../../stores/store";
import { mapState, mapMutations } from "vuex";
import api from "../../api/index.js"
export default {
  name: "Regist",
  data() {
    var checkNum = (rule, value, callback) => {
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          var regmyreg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (!regmyreg.test(value)) {
            callback(new Error("请输入正确的手机号码"));
          } else {
            callback();
          }
        }
      }, 300);
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      }
      setTimeout(() => {
        var regpassword = /\w{6,16}/;
        if (this.value != "" && !regpassword.test(value)) {
          callback(new Error("密码由字母数字下划线组成6-16位"));
        } else {
          callback();
        }
      }, 300);
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        var regemail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        if (this.value != "" && !regemail.test(value)) {
          callback(new Error("请输入正确的邮箱"));
        } else {
          callback();
        }
      }, 300);
    };

    return {
      cityList: ["学生", "教师"],
      item: "",
      Loginisok: false,
      openLoading: false,
      registLoading: false,
      loginForm: {
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
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        num: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { validator: checkNum, trigger: "blur" }
        ],
        email: [{ validator: validateEmail, trigger: "blur" }]
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
    }; //return
  },
  created() {
    let localStorageInfo = JSON.parse(localStorage.getItem("loginInfo"));
    if (localStorageInfo) {
      this.Loginisok = true;
    }
    // window.onload = function(e) {
    //   let localStorageInfo = JSON.parse(localStorage.getItem("loginInfo"));
    //   this.num = localStorageInfo.name;
    //   console.log(num);
      
    // };
  },
  computed: {
    ...mapState(["userName"])
  },
  methods: {
    ...mapMutations(["update"]),
    submitForm(registForm) {
      this.$refs[registForm].validate(valid => {
        if (valid) {
          //提交成功做的动作
          this.axiosRegistUser();
        } else {
          alert("请输入正确的信息!");
          return false;
        }
      });
    },
    LoginSubmit(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          //提交成功操作
          this.axiosLoginUser();
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    axiosLoginUser() {
      axios({
        url: api.url+"/user/login",
        method: "post",
        data: {
          name: this.loginForm.num,
          password: this.loginForm.pass,
          autoLogin: ""
        }
      })
        .then(response => {
          if (response.data.status == 0 && response.data.msg) {
            new Promise((resolve, reject) => {
              const info = {
                name: response.data.data.name,
                email: response.data.data.email,
                identity: response.data.data.identity
              };
              //储存localStorage
              localStorage.setItem("loginInfo", JSON.stringify(info));

              setTimeout(() => {
                resolve();
              }, 500);
            })
              .then(() => {
                this.update({
                  num: response.data.data.name
                });

                this.Loginisok = true;
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
          console.log("未知错误!");
        });
    },
    axiosRegistUser() {
      axios({
        url: api.url+"/user/register",
        method: "post",
        data: {
          name: this.registForm.num,
          password: this.registForm.pass,
          email: this.registForm.email
        }
      })
        .then(response => {
          if (response.data.status == 0) {
            alert("注册成功!");
          } else if (response.data.status == -1) {
            alert("用户名或邮箱已被注册!");
          } else if (response.data.status == -3) {
            alert("请输入正确的信息!");
          }
        })
        .catch(error => {
          console.log(error);
          alert("未知错误!");
        });
    },
    Loginexit() {
      localStorage.removeItem("loginInfo");
      this.Loginisok = false;
    }
  } //methods
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
  margin-left: 65px;
}
.sign-success {
  display: flex;
  margin-left: 1000px;
  margin-top: -10px;
}
.login-success-message {
  font-size: 14px;
}
.login-exit-button {
  margin-left: 15px;
}
</style>