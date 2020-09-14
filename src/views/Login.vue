<template>
    <div class="login-page">
        <div class="login-center">
            <div class="login-left">
                <img src="../assets/images/insert.png" alt="alt" />
            </div>
            <div class="login-right">
                <div>
                    您好，
                    <br/>欢迎登录数据填报管理系统
                </div>
                <div>账号登录</div>

                <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="loginApp">
                    <a-form-item>
                        <a-input size="large" v-decorator="['userName',{ rules: [{ required: true, message: '请输入您的账号！' }] },]" placeholder="请输入账号">
                            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input-password size="large" v-decorator="['password',{ rules: [{ required: true, message: '请输入您的密码！' }] },]" type="password" placeholder="请输入密码">
                            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input-password>
                    </a-form-item>
                    <!-- <a-form-item>
                        <div class="yzm">
                            <div>
                                <a-input size="large" placeholder="请输入图形验证码" v-decorator="['code',{ rules: [{ required: true, message: '请输入验证码！' }] },]" />
                            </div>
                            <div @click="verify">
                                <a href="javascript:void(0)">
                                    <img :src="verifyCodeImage" id="validateimg" title="看不清楚?请点击刷新验证码" />
                                </a>
                            </div>
                        </div>
                    </a-form-item> -->
                    <a-form-item>
                        <a-button size="large" type="primary" html-type="submit" class="login-form-button loginBtn" @click="loginApp">
                            登录
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    components: {

    },
    data() {
        return {
            code2: "",
            verifyCodeImage: this.$store.state.serviceUrl + "verify",
            form: this.$form.createForm(this, { name: 'horizontal_login' }),
            userInfo: []
        };
    },
    methods: {
        // 验证码方法
        verify() {
            this.verifyCodeImage = this.$store.state.serviceUrl + "verify";
        },
        onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        },

        // 验证登录信息
        valiLogin(data) {
            console.log(data);
            // this.axios.defaults.headers.post['Content-Type'] = 'application/json';

            this.userdata = {
                "验证码": "",
                "密码": data.password,
                "用户名": data.userName
            }
  
            var _self=this;
            this.axios.post('user/login', this.userdata).then(res => {
                let user = res.data.data;
                _self.axios.defaults.headers['Authorization'] = user.授权码;
                _self.$store.commit('setUser', user);


                // sessionStorage.setItem('Authorization',JSON.stringify(res.data.授权码));
            //      this.xzdata = {
            //     "administrative": "",
            //     "administrative_code": "",
            //     "end": this.endTime,
            //     "start": this.startTime,
            //     "submitter": ""
            // }
          
            // var url = this.$store.state.serviceUrl + 'action/check/query';
            // this.axios.post( 'action/check/query', this.xzdata).then(res => {
            //     console.log(res);
            //     if (res.data.code == 0) {
            //         // this.$message.success('新增成功');
            //     } else {
            //         // this.$message.error('新增失败');
            //     }
            // });
                  this.$router.push({name: "Check"})     
                // _self.axios.get("dictionary/query/性别")
                // .then(function(res2){
                //     console.log(res2);
                // })
                // this.userInfo=[{name:data.userName,password:data.password}];
                //  sessionStorage.setItem('user',JSON.stringify(this.userInfo));
            });

        },
        loginApp(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.valiLogin(values);
                }
            });
        }
    },
    mounted() {
        // this.createCode();
    }
};
</script>

<style lang="scss" scoped="scoped">
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.loginBtn {
  box-shadow: 0px 4px 16px 0px rgba(40, 122, 199, 0.48);
  margin-top: 41px;
}

.login-page {
  width: 100%;
  height: 100%;
  padding: calc((100vh - 793px) / 2) 0;
  background-image: url("../assets/images/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  > .login-center {
    width: 1528px;
    height: 793px;
    // background: violet;
    margin: 0 auto;
    // overflow: hidden;
    > .login-left {
      width: 1065px;
      height: 793px;
      float: left;
      > img {
        width: 100%;
      }
    }
    > .login-right {
      width: 463px;
      height: 793px;
      background-color: #fff;
      padding: 101px 39px 173px 55px;
      float: left;
      > div:first-child {
        height: 61px;
        font-size: 24px;
        font-family: PingFang SC Regular, PingFang SC Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #333333;
        line-height: 30px;
      }
      > div:nth-child(2) {
        width: 72px;
        height: 17px;
        margin: 116px auto 39px;
        font-size: 18px;
        font-family: PingFang SC Regular, PingFang SC Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #333333;
        line-height: 18px;
      }
      .yzm {
        height: 40px;
        overflow: hidden;
        > div:first-child {
          width: 238px !important;
          margin-right: 8px;
          float: left;
        }
        > div:last-child {
          width: 120px;
          height: 40px;
          font-size: 25px;
          text-align: center;
          letter-spacing: 8px;
          color: #ffffff;
          float: left;
          cursor: pointer;
        }
        #validateimg {
          width: 120px;
          height: 40px;
        }
      }
      > div:last-child {
        > .btn {
          height: 42px;
          font-size: 16px;
          font-family: PingFang SC Regular, PingFang SC Regular-Regular;
          font-weight: 400;
          color: #fffefe;
          line-height: 16px;
        }
      }
    }
  }
}
</style>