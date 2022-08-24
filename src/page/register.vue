<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-registerForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="registerForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            type="password"
            v-model="registerForm.passWord"
            autocomplete="off"
            @input="input"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', stengthClass]"></div>
            <div class="letter">
              <span>弱</span><span>中</span><span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="repassWord">
          <el-input
            type="password"
            v-model="registerForm.repassWord"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')" style="background-color:#2bb8aa;border-color:#2bb8aa">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer>
      <span
        >©2022 美团版权所有 meituan.com 京ICP证070791号
        京公网安备11010502025545号</span
      >
    </footer>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须为6-16位的字母数字下划线组成"));
      } else {
        if (this.registerForm.repassWord !== "") {
          this.$refs.registerForm.validateField("repassWord");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.passWord) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        passWord: "",
        repassWord: "",
      },
      stengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        passWord: [{ validator: validatePass, trigger: "blur" }],
        repassWord: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api
            .register({
              params: this.registerForm,
            })
            .then((res) => {
              if (res.data.status === "success") {
                this.$router.push({ name: "login" });
              } else {
                alert(res.data.msg);
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    input() {
      var regStr = /(\w)+/g;
      // var regNum = /(\d)+/g;
      // var reg = /_/g;
      // var strongth =
        // this.registerForm.passWord.match(reg) &&
        // this.registerForm.passWord.match(regStr)
        //  && this.registerForm.passWord.match(regNum);

      if (
        this.registerForm.passWord.length > 20 ||
        (this.registerForm.passWord.length > 6 && regStr)
      ) {
        this.stengthClass = "strong";
      } else if (this.registerForm.passWord.length < 6) {
        this.stengthClass = "week";
      } else if (!this.registerForm.passWord) {
        this.stengthClass = "";
      } else {
        this.stengthClass = "nomal";
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/register";
</style>