<template>
  <div>
      <cartoon-header></cartoon-header>
      <div>

      </div>
  </div>
</template>

<script>
import CartoonHeader from '../Public/Header'
export default {
    components:{
        CartoonHeader
    },
    mounted() {
        this.$http.get('http://apis.juhe.cn/mobile')
            .then(res=>{
                console.log(res)
            })
    }
}
</script>

<style scoped>

</style>