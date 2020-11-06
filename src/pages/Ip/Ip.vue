<template>
  <div>
      <ip-header></ip-header>
      <div class="form">
          <form action="">
              <div class="input">
                  <input type="text" placeholder="请输入需要查询的ip" v-model="ip">
              </div>
              <div class="btn">
                  <input type="submit" value="查询" @click="query">
              </div>
              <div class="add">
                  {{add}}
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import IpHeader from '../Public/Header'
export default {
    data(){
        return{
            ip:'',
            add:''
        }
    },
    components:{
        IpHeader
    },
    methods:{
        query:function(){
            let ip = this.ip
            let key = '78BA033CEDAE76AFD45123C569420334'
            this.$http.post('http://hn216.api.yesapi.cn/?s=App.Open_Baidu.LocationIP&app_key='+key+'&ip='+ip)
                .then(res=>{
                    console.log(res)
                    let data = res.data.data
                    if(data.err_code == 1){
                        this.add = 'IP地址非法'
                        console.log(this.add)
                    }else{
                        this.add = data.content.address 
                    }
                })
        }
    }
}
</script>

<style scoped>
    .form{
        padding:0 .2rem;
        text-align: center;
        margin-top:2rem;
    }
    .form .input{
        height: .5rem;
        overflow: hidden;
        border-radius: .2rem;
        border:.01rem solid red;
        padding-left:.2rem;
    }
    .form .input>input{
        width: 100%;
        height: 100%;
    }
    .form .btn{
       margin-top:.2rem;
    }
    .form .btn>input{
        width:100%;
        height: 100%;
        background: greenyellow;
        width:1.2rem;
        height: .5rem;
        margin:0 auto;
        border-radius: .2rem;
    }
    .form .add{
        margin-top:.5rem;
    }
</style>