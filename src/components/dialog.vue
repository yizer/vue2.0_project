<template>
  <div>
    <div class="dialog-wrap" v-if = "isShow">
      <div class="dialog-cover"  v-if = "isShow" @click = "onClose()"></div>
      <div class="dialog-content"  v-if = "isShow">
        <p class="dialog-close" @click = "onClose()">X</p>
        hello
        <slot>empty</slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClose () {
        this.$emit('onClose')
      }
    }
  }
</script>
<style scoped>
  .dialog-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .dialog-cover {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #000;
    opacity:0.3;
    z-index: 2;
    z-index: 1;
    left: 0;
    top: 0;
  }
  .dialog-content {
    width: 50%;
    max-height: 50%;
    position: fixed;
    left: 50%;
    top: 20%;
    margin-left: -25%;
    font-size: 1.4em;
    background-color: #fff;
    padding: 2%;
    z-index: 2;
    border: 2px solid #464068;
  }
  .dialog-close {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    cursor:pointer;
  }
  .dialog-close:hover {
  color: #4fc08d;
}
</style>
