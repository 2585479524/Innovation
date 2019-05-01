<template>
  <div class="hello">
    <div class="container container-home">
      <div>
        <div class="sign-success" v-if="loginIsOk">
          <div class="login-success-message">
            <span>欢迎</span>
            <span>{{$store.state.userName}}</span>
          </div>
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
              <el-form
                :model="loginForm"
                status-icon
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

                <div class="secret">
                  <el-form-item label="记住密码" prop="delivery" class="secret-el">
                    <el-switch v-model="loginForm.delivery"></el-switch>
                  </el-form-item>
                  <el-form-item label="自动登录" prop="autoLogin" class="secret-el">
                    <el-switch v-model="loginForm.autoLogin"></el-switch>
                  </el-form-item>
                </div>
                <div class="forget-password">
                  <span>
                    <a>忘记密码？</a>
                  </span>
                </div>

                <br>
              </el-form>
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
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogSignup = false; resetForm('registForm')">取 消</el-button>
                <el-button
                  type="primary"
                  :loading="registLoading"
                  @click="submitForm('registForm');"
                  v-model="dialogSignup"
                >注册</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import { error } from "util";
import store from "../../stores/store";
import { mapState, mapMutations } from "vuex";
import { open } from "fs";

export default {
  name: "Regist",
  inject:['reload'],
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
      item: "",
      loginIsOk: false,
      openLoading: false,
      registLoading: false,
      loginForm: {
        pass: "",
        num: "",
        autoLogin: false,
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

      dialogFormVisible: false,
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
    this.getCookie();
    let localStorageInfo = JSON.parse(localStorage.getItem("loginInfo"));
    if (localStorageInfo) {
      this.loginIsOk = true;
      this.$store.state.userName = localStorageInfo.name;
    } else {
      console.log();
    }
  },
  mounted() {
    this.autoLogin();
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
          this.$elementMessage("请输入正确信息！", "warning");
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
    //自动登录
    autoLogin() {
      this.axios({
        url: "/user/login/auto",
        method: "post"
      })
        .then(response => {
         
          let user = response.data.data.name;
          let cookieName = this.$store.state.userName;
          if (user == cookieName) {
            this.loginIsOk = true;
            this.$message({
              message: "欢迎回来" + this.$store.state.userName,
              type: "success"
            });
          } else {
            this.loginIsOk = false;
          }
        })
        .catch();
    },
    //用户登录
    axiosLoginUser() {
      if (this.loginForm.autoLogin) {
        this.loginForm.delivery = true;
      }
      
      this.axios({
        url: "/user/login",
        method: "post",
        data: {
          name: this.loginForm.num,
          password: this.loginForm.pass,
          autoLogin: this.loginForm.autoLogin
        }
      })
        .then(response => {
          if (response.data.status == 0 && response.data.msg) {
            const info = {
              name: response.data.data.name,
              email: response.data.data.email,
              identity: response.data.data.identity
            };
            //储存localStorage
            localStorage.setItem("loginInfo", JSON.stringify(info));
            //设置COOKIES保存用户信息
            this.setCookies(
              this.loginForm.num,
              this.loginForm.pass,
              7,
              this.loginForm.delivery,
              this.loginForm.autoLogin
            );
            this.update({
              num: response.data.data.name
            });
            this.loginIsOk = true;

            this.$message({
              message: "欢迎回来" + this.$store.state.userName,
              type: "success"
            });
            this.dialogFormVisible = false;
          } else if (this.loginForm.num == "" || this.loginForm.pass == "") {
            this.$elementMessage("请输入用户名和密码！", "error");
          } else {
            this.$elementMessage("用户名或密码错误，登陆失败！", "error");
          }
        })
        .catch();
    },
    //用户登录END//

    //用户注册
    axiosRegistUser() {
      this.axios({
        url: "/user/register",
        method: "post",
        data: {
          name: this.registForm.num,
          password: this.registForm.pass,
          email: this.registForm.email
        }
      })
        .then(response => {
          if (response.data.status == 0) {
            this.$elementMessage("注册成功,请登录！", "success");
            this.dialogSignup = false;
          } else if (response.data.status == -1) {
            this.$elementMessage("用户名或邮箱已被注册!", "error");
          } else if (response.data.status == -3) {
            this.$elementMessage("请输入正确的信息!", "error");
          }
        })
        .catch(error => {
          console.log(error);
          this.$elementMessage("未知错误!", "error");
        });
    },
    //用户注册END//

    //退出
    Loginexit() {
      this.$confirm("你确定要退出, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          localStorage.removeItem("loginInfo");
          this.clearCookie();
          this.loginIsOk = false;
          this.$store.state.userName = '';
          this.$message({
            type: "success",
            message: "您已退出!"
          });
          this.reload()
        })
        .catch();
    },
    //退出END//

    setCookies(c_name, c_pwd, exdays, remeberFlag) {
      
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);

        window.document.cookie =
          "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie =
          "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie =
          "remeberFlag" +
          "=" +
          remeberFlag +
          ";path=/;expires=" +
          exdate.toGMTString();
    },
    getCookie() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下

        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          
          if (arr2[0] == "userName") {
            this.$store.state.userName = arr2[1];
          } 
        }
      }
    },
    clearCookie(){
      this.setCookies("","",-1,"")
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
.secret {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}
.forget-password {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 100px;
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