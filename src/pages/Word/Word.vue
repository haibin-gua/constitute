<template>
  <div>
      <word-header></word-header>
      <div class="img">
          <i style="font-size:.6rem;" class="iconfont icon-dancishu"></i>
      </div>
      <div class="input">
          <input type="text" placeholder="请输入英语单词" v-model="word">
      </div>
      <div class="btn">
          <van-button round type="info" @click="query">查询</van-button>
      </div>
      <div class="list">
          <ul>
              <li v-for="item in list" :key="item.index">
                  <span>{{item.word}}</span><span>{{item.explain}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import WordHeader from '../Public/Header'
export default {
    components:{
        WordHeader
    },
    data(){
        return{
            word:'',
            list:[]
        }
    },
    methods:{
        query(){
            let word = this.word
            let key = '78BA033CEDAE76AFD45123C569420334'
            if(this.word.length !==0){
                this.list.length = 0;
                this.$http.post('http://hn216.api.yesapi.cn/?&s=App.Common_Dictionary.Search&return_data=0&keyWord='+word+'&app_key='+key)
                .then(res=>{
                    let data = res.data.data;
                    console.log(data)
                    for(let item of data.result){
                        this.list.push(item)
                    }
                    console.log(this.list)
                })
            }else{
                this.$toast('请输入内容')
            }
        }
    }
}
</script>

<style scoped>
    .img{
        margin:0 auto;
        margin-top:1.4rem;
        width:.8rem;
        height: .8rem;
        border-radius: 50%;
        border:1px solid gray;
        text-align: center;
        line-height: .8rem;
    }
    .input{
        width:2.6rem;
        height: 1rem;
        border-radius: .1rem;
        border:1px solid gray;
        overflow: hidden;
        margin:0 auto;
        margin-top:.15rem;
    }
    .input>input{
        width:100%;
        height: 100%;

    }
    .btn{
        text-align: center;
        margin-top:.15rem;
    }
    .van-button--normal{
        font-size: .24rem;
    }
    .list{
        margin-top:.2rem;
    }
    .list>ul>li{
        padding:.1rem .2rem;
        border-bottom: 1px solid gray;
    }
    .list>ul>li>span{
        font-size: .2rem;
        margin-right: .2rem;
    }
</style>