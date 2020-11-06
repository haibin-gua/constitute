<template>
  <div>
      <express-header></express-header>
      <div class="hint"><van-notice-bar
        left-icon="volume-o"
        text="仅支持圆通，申通，天天，百世快递"
        /></div>
      <div class="img">
          <i style="font-size:.6rem;" class="iconfont icon-wuliu"></i>
      </div>
      <div class="input">
          <input type="text" placeholder="请输入运单号" v-model="code">
      </div>
      <div class="log">
          <select name="" id="" v-model="selectactive" @change="selectlog($event)">
              <option v-for="item in log" :key="item.key" :value="item.id">{{item.name}}</option>
          </select>
      </div>
      <div class="btn" @click="query">
          <van-button round type="info" size="normal">查询</van-button>
      </div>
      <div class="list" v-if="isshow2">
          <ul>
              <li v-for="item in list" :key="item.index">
                  <div class="time">{{item.AcceptTime}}</div>
                  <div class="txt">{{item.AcceptStation}}</div>
              </li>
          </ul>
      </div>
      <div class="empty" v-if="isshow">暂无轨迹信息</div>
  </div>
</template>

<script>
import ExpressHeader from '../Public/Header'
export default {
    data(){
        return{
            isshow:false,
            isshow2:true,
            code:'',
            list:[],
            log:[{
                id:'YTO',
                name:'圆通快递'
            },{
                id:'STO',
                name:'申通快递'
            },{
                id:'HTKY',
                name:'百世快递'
            },{
                id:'HHTT',
                name:'天天快递'
            }],
            selectactive:'YTO'  //默认选中
        }
    },
    components:{
        ExpressHeader
    },
    methods:{
        selectlog(event){
            // console.log(event.target.value)
            var value = event.target.value
            this.selectactive = value
        },
        query(){
            let key = '78BA033CEDAE76AFD45123C569420334'
            let code = this.code
            let value = this.selectactive
            console.log(value)
            if(this.code.length !== 0){
                this.$http.post('http://hn216.api.yesapi.cn/?s=App.KdAPI.Track&return_data=0&ShipperCode='+value+'&LogisticCode='+code+'&app_key='+key)
                .then(res=>{
                    console.log(res)
                    let data = res.data.data.KdAPI.Traces
                    if(data.length !== 0){
                        this.isshow = false
                        this.isshow2 = true
                        for(let item of data){
                        this.list.unshift(item)
                        }
                    }else{
                        this.isshow = true;
                        this.isshow2 = false
                    }
                })
            }else{
                this.$toast('请输入内容');
            }
        }
    }
}
</script>

<style scoped>
    .img{
        width:1rem;
        height: 1rem;
        margin:0 auto;
        margin-top:1rem;
        border-radius: 50%;
        overflow: hidden;
        border:1px solid gray;
    }
    .img i{
       line-height: 1rem;
    }
    .input{
        width:3rem;
        height: .5rem;
        border:1px solid gray;
        border-radius: .2rem;
        overflow: hidden;
        margin:0 auto;
        margin-top:.1rem;
    }
    .input input{
        width:100%;
        height: 100%;
        padding-left:.1rem;
    }
    .btn{
        margin-top:.1rem;
        text-align: center;
    }
    .van-button--normal{
        font-size: .24rem;
    }
    .list{
        padding:0 .2rem;
        margin-top:.2rem;
    }
    .list>ul>li::after{
        content: "";
        background: url('../../assets/images/jt.png') no-repeat;
        background-size: contain;
        width:.5rem;
        height: .5rem;
        position: absolute;
        left:.3rem;
        bottom:.3rem;
    }
    .list>ul>li{
        position: relative;
        height: 2rem;
    }
    .list>ul>li:last-child::before{
        display: none;
    }
    .list>ul>li:first-child{
        color: orange;
    }
    .list .time{
        float: left;
        font-size: .2rem;
        width:20%;
        margin-right: 5%;
    }
    .list .txt{
        float: left;
        font-size: .2rem;
        width:75%;
    }
    .log{
        width:3rem;
        height: .5rem;
        border:1px solid gray;
        border-radius: .2rem;
        overflow: hidden;
        margin:0 auto;
        margin-top:.1rem;
    }
    .log>select{
        width:100%;
        height: 100%;
        background: #ffffff;
    }
    .hint{
        margin-top:.7rem;
    }
    .empty{
        text-align: center;
    }
</style>