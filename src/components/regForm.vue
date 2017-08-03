<template>
  <div class="regform">
    <h2>Singup form future</h2>
    <div class="formInfo" @onchange = "">
      <p>enter your person info</p>
      <input type="text" class="firstName" v-model = "firstName" placeholder="First name">
      <input type="text" placeholder="Last name" v-model="lastName">
    </div>
    <div class="formInfo">
    <p>Enter your account info</p>
    <input type="text" placeholder="Email address">
    <input type="password" placeholder="PasssWord">
    <input type="password" placeholder="Confirm password">
    </div>
    <div>
      <p class="register" @click = "register()">REGISTER YOUR ACCOUNT NOW</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'isShow': 'boolean'
  },
  data () {
    return {
      firstName:'',
      lastName:'',
      obj:[]

    }
  },
  computed: {
    userErrors () {
      let status, errorText
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '±ØÐë°üº¬@'
      }
      else {
        status = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let status, errorText
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '±ØÐë°üº¬@'
      }
      else {
        status = true
        errorText = ''
      }
      return {
        status,
        errorText
      }
    }
  },
  watch:{
    firstName: function (firstName) {
      this.obj[firstName] = firstName
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    },
    register () {
      this.$emit('a')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
  .regform{
    width: 80%;
    padding-bottom: 20px;
    padding:16px 40px;
    color: #bbb;
    margin: 0 auto;
    text-align: center;
    h2{
      color: #aaa;
      font-size: 24px;
      height: 60px;
      line-height: 60px;
    }
  }
  .formInfo{
    width: 80%;
    margin-bottom: 12px;
    margin: 0 auto;
    p{
      height: 30px;
      font-size: 14px;
      text-align: left;
    }
    input{
      width: 100%;
      padding: 5px;
      background-color: #fff;
      margin-bottom: 16px;
    }
  }
  .register{
    margin:0 auto;
    margin-top: 15px;
    background: url("../assets/reg_bg.png") repeat-x 0 0;
    height:50px;
    border-radius: 5px;
    width: 80%;
    color: #fff;
    line-height: 51px;
    cursor:pointer;
  }

</style>
