<template>
  <div>
      <joke-header></joke-header>
      <div class="txt">
          {{joke}}
      </div>
      <div class="btns">
          <van-button type="primary" @click="next">下一条</van-button>
          <van-button type="primary" 
            v-clipboard:copy="joke" 
            v-clipboard:success="copy">复制</van-button>
      </div>
  </div>
</template>

<script>
import JokeHeader from '../Public/Header'
export default {
    data(){
        return{
            joke:''
        }
    },
    components:{
        JokeHeader
    },
    mounted(){
        let key = '78BA033CEDAE76AFD45123C569420334'
        this.$http.post('http://hn216.api.yesapi.cn/?&s=App.Common_Joke.RandOne&return_data=0&num=1&app_key='+key)
            .then(res=>{
                this.joke = res.data.data.joke[0][0]
            })
    },
    methods:{
        copy(e){
            console.log(e.text)
            this.$notify({ type: 'success', message: '复制成功' });
        },
        next(){
            let key = '78BA033CEDAE76AFD45123C569420334'
            this.$http.post('http://hn216.api.yesapi.cn/?&s=App.Common_Joke.RandOne&return_data=0&num=1&app_key='+key)
                .then(res=>{
                    this.joke = res.data.data.joke[0][0]
                })
        }
    }
}
</script>

<style scoped>
    .txt{
        margin-top:1rem;
        padding:0 .2rem;
        text-indent: .4rem;
        font-size: .22rem;
        line-height: .3rem;
    }
    .btns{
        padding:0 .2rem;
        margin:.5rem;
    }
    .btns .van-button--normal{
        margin-right: .3rem;
    }
</style>