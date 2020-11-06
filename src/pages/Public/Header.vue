<template>
  <div class="hd">
      <div class="back" @click="back">
          <i style="font-size:.3rem;" class="iconfont icon-back"></i>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .hd{
        position: fixed;
        top:0;
        left:0;
        right: 0;
        bottom:0;
        height: .5rem;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0 .02rem .1rem;
        z-index: 999999;
    }
    .hd .back{
        position:absolute;
        left:.1rem;
        top:50%;
        transform: translateY(-50%);
    }
</style>