<template>
    <div>
      <div class="app-head">
        <div class="app-head-inner">
          <img src="../assets/header.png" alt="">
          <div class="head-nav">
            <ul class="nav-list">
              <li @click = "logClick">登录</li>
              <li class="nav-pile">|</li>
              <li @click = "regClick">注册</li>
              <li class="nav-pile">|</li>
              <li @click = "aboutClick">关于</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="app-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="app-foot">
        <p>@2017 chaodt MIT</p>
      </div>
      <my-dialog :is-show="isShowLogDialog" @on-close = "closeDialog('isShowLogDialog')">
        <log-form></log-form>
      </my-dialog>
      <my-dialog :is-show="isShowRegDialog" @on-close = "closeDialog('isShowRegDialog')">
        <reg-form  @a = "regSuccess()"></reg-form>
      </my-dialog>
      <my-dialog :is-show="isShowAboutDialog" @on-close = "closeDialog('isShowAboutDialog')">
        <p class="about">本颁告在调研数据的基础上,采用定型鱼定量的疾射是的舒深入分析转成市场的发展和驱动与in关于鱼雨爱罂粟,抓扯市场背后的产科也得双方的首发送达方式大法师立即点击发送进口发动机萨克拉附近卡死降幅扩大数据库发送到放假啊的深刻理解 房贷收紧房贷卡死降幅多空双方军事科技疯狂杀戮解放路的手机费拉萨会计分录大开杀戒发大水啦附加费的手机费卡死降幅卡萨帝反多了几分撒咖啡店</p>
      </my-dialog>
     </div>
</template>
<script>
import MyDialog  from "./dialog.vue"
import LogForm from "./logForm.vue"
import RegForm from "./regForm.vue"
    export default {
      components:{
        MyDialog,
        LogForm,
        RegForm
      },
      data () {
        return {
          isShowAboutDialog:false,
          isShowLogDialog:false,
          isShowRegDialog:false,
        }
      },
      methods: {
        logClick () {
            this.isShowLogDialog = true;
        },
        regClick () {
            this.isShowRegDialog = true;
        },
        aboutClick () {
            this.isShowAboutDialog = true;
        },
        closeDialog (attr) {
          console.log(attr);
          console.log(this[attr]);
          this[attr] = false;
        },
        regSuccess () {
          console.log(123);
        }
      }
    }
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
  margin-left: 15px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
.about{
  width: 80%;
  margin: 0 auto;
  line-height: 30px;
  font-size: 18px;
  text-indent: 36px;
  color: #aaa;
  padding-bottom: 15px;
}
</style>

