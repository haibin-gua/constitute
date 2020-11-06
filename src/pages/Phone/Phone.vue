<template>
  <div>
      <phone-header></phone-header>
      <div class="img">
          <i style="font-size:.8rem;" class="iconfont icon-PhoneMoney"></i>
      </div>
      <div class="input">
          <input type="text" placeholder="请输入手机号" v-model="code">
      </div>
      <div class="btn">
          <van-button round type="info" @click="query">查询</van-button>
      </div>
      <div class="addr"><big>地址：</big>{{info.addr}}</div>
      <div class="sp"><big>运营商：</big>{{info.sp}}</div>
  </div>
</template>

<script>
import PhoneHeader from '../Public/Header'
export default {
    data(){
        return{
            code:'',
            info:{
                addr:'',
                sp:''
            }
        }
    },
    components:{
        PhoneHeader
    },
    methods:{
        query(){
            let key = '78BA033CEDAE76AFD45123C569420334'
            let code = this.code
            this.$http.post('http://hn216.api.yesapi.cn/?&s=App.Common_Phone.QueryLocation&return_data=0&phone='+code+'&app_key='+key)
                .then(res=>{
                    let data = res.data.data
                    if(data.info.province !== data.info.city){
                        this.info.addr = data.info.province + data.info.city
                    }else{
                        this.info.addr = data.info.city
                    }
                    this.info.sp = data.info.sp
                })
        }
    }
}
</script>

<style scoped>
    .img{
         margin:0 auto;
        margin-top:1rem;
        width:1rem;
        height: 1rem;
        border-radius: 50%;
        border:1px solid gray;
        text-align: center;
        line-height: 1rem;
    }
    .input{
        width:2.8rem;
        height: .5rem;
        margin:0 auto;
        margin-top:.15rem;
        border:1px solid gray;
        border-radius: .2rem;
        overflow: hidden;
    }
    .input>input{
        width:100%;
        height: 100%;
        border:none;
        padding-left:.15rem;
    }
    .btn{
        margin-top:.1rem;
        text-align:center;
    }
    .van-button--normal{
        font-size: .28rem;
    }
    .addr{
        padding:.2rem;
        text-align: left;
        font-size: .3rem;
    }
    .addr>big{
        font-weight: bold;
    }
    .sp{
        padding:.2rem;
        text-align: left;
        font-size: .3rem;
    }
    .sp>big{
        font-weight: bold;
    }
</style>