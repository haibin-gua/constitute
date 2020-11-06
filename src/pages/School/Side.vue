<template>
  <div>
      <school-header></school-header>
      <div class="bd" v-for="item in schools" :key="item.index">
          <div class="img">
              <img src="" :alt="item.school_name">
          </div>
          <div class="name">
              {{item.school_name}}
          </div>
          <div class="level">
              <big>学校类型：</big>{{item.school_level}}
          </div>
          <div class="pro">
              <big>所在省份：</big>{{item.school_province}}
          </div>
          <div class="city">
              <big>所在城市：</big>{{item.school_city}}
          </div>
          <div class="website">
              <big>学校官网：</big><a :href="item.school_website">{{item.school_website}}</a>
          </div>
      </div>
  </div>
</template>

<script>
import SchoolHeader from '../Public/Header'
export default {
    components:{
        SchoolHeader
    },
    data(){
        return{
            schools:[]
        }
    },
    mounted(){
       console.log(this.$route.params)
       let key = '78BA033CEDAE76AFD45123C569420334'
       let name = this.$route.params.name
       this.$http.post('http://hn216.api.yesapi.cn/?s=App.Common_University.Search&school_name='+name+'&app_key='+key)
            .then(res=>{
                this.schools.push(res.data.data.schools[0])
                console.log(this.schools)
            })
    }
}
</script>

<style scoped>
    .bd{
        margin-top:.5rem;
        padding:0 .2rem;
        overflow: hidden;
    }
    .bd .img{
        width:1.6rem;
        height: 1.6rem;
        border:1px solid red;
        font-size: .24rem;
        margin:0 auto;
        margin-top:.2rem;
    }
    .bd .name{
        text-align: center;
        margin-top:.2rem;
    }
    .bd .level{
        text-align: left;
        color: #333333;
        font-size: .3rem;
        margin-top:.25rem;
    }
    .bd .level>big{
        font-weight: bold;
    }
    .bd .pro{
        text-align: left;
        color: #333333;
        font-size: .3rem;
        margin-top:.25rem;
    }
    .bd .pro>big{
        font-weight: bold;
    }
    .bd .city{
        text-align: left;
        color: #333333;
        font-size: .3rem;
        margin-top:.25rem;
    }
    .bd .city>big{
        font-weight: bold;
    }
    .bd .website{
        text-align: left;
        color: #333333;
        font-size: .3rem;
        margin-top:.25rem;
    }
    .bd .website>big{
        font-weight: bold;
    }
    .bd .website>a{
        font-size: .26rem;
    }
</style>