<template>
    <div>
         <school-header></school-header>
         <div class="search">
             <div class="input">
                 <input type="text" placeholder="请输入内容" v-model="name">
             </div>
             <div class="btn" @click="search">搜索</div>
         </div>
         <div class="bd">
             <div class="hot" v-if="isshow">
             <div class="txt">热门大学：</div>
             <ul v-for="item in hot" :key="item.index">
                 <li @click="side">{{item.name}}</li>
             </ul>
            </div>
            <!-- 搜索提示 -->
            <van-empty v-if="isshow2" image="search" description="请输入正确的关键字" />
            <div class="list">
                <ul v-for="item of schools" :key="item.index">
                    <li @click="side">{{item.school_name}}</li>
                </ul>
            </div>
         </div>
    </div>
</template>

<script>
import SchoolHeader from '../Public/Header'
export default {
    data(){
        return{
            name:'',
            isshow:true,
            isshow2:false,
            hot:[{
                name:'清华大学'
            },
            {
                name:'北京大学'
            },
            {
                name:'武汉大学'
            },
            {
                name:'南京大学'
            }],
            schools:new Array
        }
    },
    components:{
        SchoolHeader
    },
    methods:{
        side(){
            let name = event.target.innerText
            this.$router.push({name:'Side',params:{name:name}})
        },
        search(){
            let key = '78BA033CEDAE76AFD45123C569420334'
            let name = this.name
            if(this.name.length !== 0){
                this.schools = []
                this.$http.post('http://hn216.api.yesapi.cn/?s=App.Common_University.Search&school_name='+name+'&app_key='+key)
                .then(res=>{
                    let data = res.data.data
                    console.log(res)
                    if(data.schools.length == 0){
                        this.isshow = false
                        this.isshow2 = true
                    }else{
                        this.isshow = false
                        for(let item of data.schools){
                            this.schools.push(item)
                        }
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
    .search{
        background: green;
        height: .8rem;
        padding:0 .2rem;
        margin-top:.5rem;
        overflow: hidden;
    }
    .search .input{
        width:2.7rem;
        height: .5rem;
        overflow: hidden;
        border-radius: .2rem;
        border:1px solid red;
        margin-top:.15rem;
        float: left;
    }
    .search .input>input{
        width:100%;
        height: 100%;
        border:none;
        padding-left:.15rem;
    }
    .search .btn{
        float: right;
        width:.6rem;
        height: .5rem;
        background: pink;
        line-height: .5rem;
        margin-top:.15rem;
        border-radius: .15rem;
        font-size: .24rem;
        text-align: center;
    }
    .bd{
        padding:0 .2rem;
    }
    .bd .hot{
        margin-top:.1rem;
    }
    .bd .hot .txt{
        font-size: .22rem;
        font-weight: bold;
    }
    .bd .hot>ul>li{
        float: left;
        font-size: .18rem;
        background: gray;
        padding:.05rem;
        margin-right: .06rem;
        margin-top:.06rem;
        color: #ffffff;
    }
    .bd .list{
        margin-top:.2rem;
    }
    .bd .list>ul>li{
        height:.5rem;
        background: #ffffff;
        font-size: .24rem;
    }
</style>