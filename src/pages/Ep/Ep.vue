<template>
  <div>
      <ep-header></ep-header>
      <div class="body">
          <div class="por1">
              <div class="por1-hd">
                  <h3>全国疫情</h3>
                  <span class="time">更新时间 2020/11/07 18:00</span>
              </div>
              <div class="por1-bd">
                  <ul>
                      <li>
                          <div class="data orange">586</div>
                          <div class="txt">现有确诊</div>
                          <div class="yd">昨日<big class="orange">+5</big></div>
                      </li>
                      <li>
                          <div class="data">586</div>
                          <div class="txt">死亡人数</div>
                          <div class="yd">昨日<big>+5</big></div>
                      </li>
                      <li>
                          <div class="data green">586</div>
                          <div class="txt">治愈人数</div>
                          <div class="yd">昨日<big class="green">+5</big></div>
                      </li>
                      <li>
                          <div class="data red1">586</div>
                          <div class="txt">累计确诊</div>
                          <div class="yd">昨日<big class="red1">+5</big></div>
                      </li>
                      <li>
                          <div class="data red2">586</div>
                          <div class="txt">境外输入确诊</div>
                          <div class="yd">昨日<big class="red2">+5</big></div>
                      </li>
                      <li>
                          <div class="data yellow">586</div>
                          <div class="txt">疑似病例</div>
                          <div class="yd">昨日<big class="yellow">+5</big></div>
                      </li>
                      <li>
                          <div class="data violet">586</div>
                          <div class="txt">无症状感染者</div>
                          <div class="yd">昨日<big class="violet">+5</big></div>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="por2">
              <div class="map" v-show="isshow">
                  <div id="map1" style="width:5rem;height:3rem;margin-left:-.7rem"></div>
              </div>
              <div class="map" v-show="isshow2">
                  <div id="map2" style="width:5rem;height:3rem;margin-left:-.7rem"></div>
              </div>
              <div class="btns">
                  <div :class="['btn','left',red]" @click="btn1">现有确诊</div>
                  <div :class="['btn','right',red2]" @click="btn2">累计确诊</div>
              </div>
          </div>
          <div class="por3">
              <h3>前日无症状感染者分布</h3>
              <div class="asym">
                  <div id="asym1" style="width:5rem;height:3rem;"></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import EpHeader from '../Public/Header'
import '../../../static/china'
export default {
    data(){
        return{
            red:'active',
            red2:'',
            isshow:true,
            isshow2:false
        }
    },
    components:{
        EpHeader
    },
    methods:{
        btn1(){
            this.red = 'active'
            this.red2 = ''
            this.isshow = true
            this.isshow2 = false
        },
        btn2(){
            this.red = ''
            this.red2 = 'active'
            this.isshow = false
            this.isshow2 = true
        },
        myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var map1 = this.$echarts.init(document.getElementById('map1'));
		  // 指定图表的配置项和数据
		  var option = {
              title: {
        text: '中国疫情图',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国疫情图']
    },
    visualMap: {
        type: 'piecewise',
        pieces: [
            {min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28'},
            {min: 500, max: 999, label: '确诊500-999人', color: '#4e160f'},
            {min: 100, max: 499, label: '确诊100-499人', color: '#974236'},
            {min: 10, max: 99, label: '确诊10-99人', color: '#ee7263'},
            {min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7'},
        ],
        itemWidth:5,
        itemHeight:5,
        textStyle:{
            fontSize:10
        },
        left:60,
        bottom:'bottom'
        // color: ['#E0022B', '#E09107', '#A3E00B']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series: [
        {
            name: '确诊数',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                show: true,
                color: 'rgb(249, 249, 249)',
                fontsize:12
            },
            data: [
               {
                  name: '北京',
                  value: 212
                }, {
                  name: '天津',
                  value: 60
                }, {
                  name: '上海',
                  value: 208
                }, {
                  name: '重庆',
                  value: 337
                }, {
                  name: '河北',
                  value: 126
                }, {
                  name: '河南',
                  value: 675
                }, {
                  name: '云南',
                  value: 117
                }, {
                  name: '辽宁',
                  value: 74
                }, {
                  name: '黑龙江',
                  value: 155
                }, {
                  name: '湖南',
                  value: 593
                }, {
                  name: '安徽',
                  value: 480
                }, {
                  name: '山东',
                  value: 270
                }, {
                  name: '新疆',
                  value: 29
                }, {
                  name: '江苏',
                  value: 308
                }, {
                  name: '浙江',
                  value: 829
                }, {
                  name: '江西',
                  value: 476
                }, {
                  name: '湖北',
                  value: 13522
                }, {
                  name: '广西',
                  value: 139
                }, {
                  name: '甘肃',
                  value: 55
                }, {
                  name: '山西',
                  value: 74
                }, {
                  name: '内蒙古',
                  value: 34
                }, {
                  name: '陕西',
                  value: 142
                }, {
                  name: '吉林',
                  value: 42
                }, {
                  name: '福建',
                  value: 179
                }, {
                  name: '贵州',
                  value: 56
                }, {
                  name: '广东',
                  value: 797
                }, {
                  name: '青海',
                  value: 15
                }, {
                  name: '西藏',
                  value: 1
                }, {
                  name: '四川',
                  value: 282
                }, {
                  name: '宁夏',
                  value: 34
                }, {
                  name: '海南',
                  value: 79
                }, {
                  name: '台湾',
                  value: 10
                }, {
                  name: '香港',
                  value: 15
                }, {
                  name: '澳门',
                  value: 9
                }
            ]
        }
    ]
};
		  // 使用刚指定的配置项和数据显示图表。
		  map1.setOption(option);
          },
          myEcharts2(){
		  // 基于准备好的dom，初始化echarts实例
		  var map2 = this.$echarts.init(document.getElementById('map2'));
		  // 指定图表的配置项和数据
		  var option = {
              title: {
        text: '中国疫情图',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['中国疫情图']
    },
    visualMap: {
        type: 'piecewise',
        pieces: [
            {min: 1000, max: 1000000, label: '大于等于1000人', color: '#372a28'},
            {min: 500, max: 999, label: '确诊500-999人', color: '#4e160f'},
            {min: 100, max: 499, label: '确诊100-499人', color: '#974236'},
            {min: 10, max: 99, label: '确诊10-99人', color: '#ee7263'},
            {min: 1, max: 9, label: '确诊1-9人', color: '#f5bba7'},
        ],
        itemWidth:5,
        itemHeight:5,
        textStyle:{
            fontSize:10
        },
        left:60,
        bottom:'bottom'
        // color: ['#E0022B', '#E09107', '#A3E00B']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series: [
        {
            name: '确诊数',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                show: true,
                color: 'rgb(249, 249, 249)',
                fontsize:12
            },
            data: [
               {
                  name: '北京',
                  value: 212
                }, {
                  name: '天津',
                  value: 60
                }, {
                  name: '上海',
                  value: 208
                }, {
                  name: '重庆',
                  value: 337
                }, {
                  name: '河北',
                  value: 126
                }, {
                  name: '河南',
                  value: 675
                }, {
                  name: '云南',
                  value: 117
                }, {
                  name: '辽宁',
                  value: 74
                }, {
                  name: '黑龙江',
                  value: 155
                }, {
                  name: '湖南',
                  value: 593
                }, {
                  name: '安徽',
                  value: 480
                }, {
                  name: '山东',
                  value: 270
                }, {
                  name: '新疆',
                  value: 29
                }, {
                  name: '江苏',
                  value: 308
                }, {
                  name: '浙江',
                  value: 829
                }, {
                  name: '江西',
                  value: 476
                }, {
                  name: '湖北',
                  value: 13522
                }, {
                  name: '广西',
                  value: 139
                }, {
                  name: '甘肃',
                  value: 55
                }, {
                  name: '山西',
                  value: 74
                }, {
                  name: '内蒙古',
                  value: 34
                }, {
                  name: '陕西',
                  value: 142
                }, {
                  name: '吉林',
                  value: 42
                }, {
                  name: '福建',
                  value: 179
                }, {
                  name: '贵州',
                  value: 56
                }, {
                  name: '广东',
                  value: 797
                }, {
                  name: '青海',
                  value: 15
                }, {
                  name: '西藏',
                  value: 1
                }, {
                  name: '四川',
                  value: 282
                }, {
                  name: '宁夏',
                  value: 34
                }, {
                  name: '海南',
                  value: 79
                }, {
                  name: '台湾',
                  value: 10
                }, {
                  name: '香港',
                  value: 15
                }, {
                  name: '澳门',
                  value: 9
                }
            ]
        }
    ]
};
		  // 使用刚指定的配置项和数据显示图表。
		  map2.setOption(option);
          },
          myEcharts3(){
              // 基于准备好的dom，初始化echarts实例
            var asym1 = this.$echarts.init(document.getElementById('asym1'));
            var option = {
    xAxis: {
        type: 'category',
        data: ['新疆', '广东', '四川', '浙江', '江苏', '河南', '福建','湖北','湖南','河北']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle:{
            color:'#9153AE'
        },
        barMaxWidth:10
    }]
};
            // 使用刚指定的配置项和数据显示图表。
		  asym1.setOption(option);
          }
    },
    mounted() {
      this.myEcharts();
      this.myEcharts2();
      this.myEcharts3();
  }
}
</script>

<style scoped>
    .body{
        margin-top:1rem;
        padding:0 .1rem;
    }
    .por1-hd h3{
        font-size: .22rem;
        font-weight: bold;
        color: #333;
        float: left;
        margin-right: .2rem;
    }
    .por1-hd .time{
        font-size: .14rem;
        color: #999;
        vertical-align: middle;
    }
    .por1-bd {
        margin-top: .15rem;
    }
    .por1-bd>ul>li{
        display: inline-block;
        width: 23.5%;
        margin-right: -.01rem;
        text-align: center;
        margin-bottom: .2rem;
    }
    .por1-bd>ul>li .data{
        font-size: .2rem;
        font-weight: bold;
    }
    .por1-bd>ul>li .txt{
        font-size: .12rem;
        padding:.05rem;
        background: #F4F4F4;
        text-align: center;
        margin-top:.06rem;
    }
    .por1-bd>ul>li .yd{
        font-size: .14rem;
        margin-top:.06rem;
        color: #333;
    }
    .orange{
        color: #E49265;
    }
    .green{
        color:#39C4C4;
    }
    .red1{
        color:#C3453D;
    }
    .red2{
        color:#E64426;
    }
    .yellow{
        color:#F2A417;
    }
    .violet{
        color:#86429D;
    }
    .btns{
        margin-top:.1rem;
        text-align: center;
    }
    .btns .btn{
        display: inline-block;
        width:1.1rem;
        height: .5rem;
        font-size: .16rem;
        background: #F4F5F6;
        text-align: center;
        line-height: .5rem;
        color: #333;
    }
    .btns .active{
        background: #fff;
        border:1px solid #F14C4D;
        color: #F14C4D;
    }
    .por3{
        margin-top:.2rem;
    }
    .por3 h3{
        font-size: .22rem;
        font-weight: bold;
        color: #333;
        float: left;
        margin-right: .2rem;
    }
</style>