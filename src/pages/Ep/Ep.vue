<template>
  <div>
      <ep-header></ep-header>
      <div class="body">
          <div class="por1">
              <div class="por1-hd">
                  <h3>全国疫情</h3>
                  <span class="time">更新时间 {{time}}</span>
              </div>
              <div class="por1-bd">
                  <ul>
                      <li>
                          <div class="data orange">{{confirmedNum}}</div>
                          <div class="txt">现有确诊</div>
                          <div class="yd">昨日<big class="orange">+{{confirmed_inc}}</big></div>
                      </li>
                      <li>
                          <div class="data">{{deadNum}}</div>
                          <div class="txt">死亡人数</div>
                          <div class="yd">昨日<big>+{{dead_inc}}</big></div>
                      </li>
                      <li>
                          <div class="data green">{{curedNum}}</div>
                          <div class="txt">治愈人数</div>
                          <div class="yd">昨日<big class="green">+{{cured_inc}}</big></div>
                      </li>
                      <li>
                          <div class="data red1">{{sum}}</div>
                          <div class="txt">累计确诊</div>
                          <div class="yd"><big class="red1">暂无数据</big></div>
                      </li>
                      <li>
                          <div class="data red2">{{externalConfirmedNum}}</div>
                          <div class="txt">境外输入确诊</div>
                          <div class="yd"><big class="red2">暂无数据</big></div>
                      </li>
                      <li>
                          <div class="data yellow">{{suspectedNum}}</div>
                          <div class="txt">疑似病例</div>
                          <div class="yd"><big class="yellow">暂无数据</big></div>
                      </li>
                      <li>
                          <div class="data violet">{{asymptomaticNum}}</div>
                          <div class="txt">无症状感染者</div>
                          <div class="yd"><big class="violet">暂无数据</big></div>
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
              <div class="asym" style="position:relative;" v-show="isshow3">
                <div class="shade"><span>暂无数据</span></div>
                  <div id="asym1" style="width:4.1rem;height:2.6rem;margin-left:-.2rem"></div>
              </div>
              <div class="asym" v-show="isshow4"  style="position:relative;">
                <div class="shade"><span>暂无数据</span></div>
                  <div id="asym2" style="width:4.1rem;height:2.6rem;margin-left:-.2rem"></div>
              </div>
              <div class="btns">
                  <div :class="['btn','left',red3]" @click="btn3">现有无症状感染者</div>
                  <div :class="['btn','right',red4]" @click="btn4">新增无症状感染者</div>
              </div>
          </div>
          <div class="por4">
            <div class="por4-new" style="position:relative;">
              <div class="shade"><span>暂无数据</span></div>
               <div id="new" style="width:4.1rem;height:2.6rem;margin-left:-.2rem"></div>
            </div>
            <h6>该数据不包含港澳台地区的新增确诊病例</h6>
          </div>
          <div class="por5">
            <h3>全国疫情趋势</h3>
            <div class="bro">
              <div id="bro1" v-show="bro1" style="width:4.1rem;height:2.6rem;margin-left:-.2rem"></div>
              <div id="bro2" v-show="bro2" style="width:4.1rem;height:2.6rem;margin-left:-.2rem"></div>
              <div id="bro3" v-show="bro3" style="width:4.1rem;height:2.6rem;margin-left:-.2rem"></div>
              <div id="bro4" v-show="bro4" style="width:4.1rem;height:2.6rem;margin-left:-.2rem"></div>
              <div id="bro5" v-show="bro5" style="width:4.1rem;height:2.6rem;margin-left:-.2rem"></div>
            </div>
            <div class="btns">
              <div :class="['btn','left',red5]" @click="btn5">现有确诊/<br>现有疑似</div>
              <div :class="['btn','right',red6]" @click="btn6">新增确诊/<br>新增疑似</div>
              <div :class="['btn','right',red7]" @click="btn7">全国疫情<br>累计趋势</div>
              <div :class="['btn','right',red8]" @click="btn8">境外输入<br>趋势</div>
              <div :class="['btn','right',red9]" @click="btn9">病死率/<br>自愈率</div>
            </div>
          </div>
          <div class="por6">
            <h3>全国省市疫情</h3>
            <div class="bd">
              <div class="bd-hd">
                <ul>
                  <li>地区</li>
                  <li style="color:#C04B00;background:#FFF1E9">现有</li>
                  <li style="color:#F2A417;background:#FDF2DC">新增</li>
                  <li style="color:#AE212C;background:#F7E8EA">累计</li>
                  <li style="backgroudn:#E8F1FF">死亡</li>
                  <li style="color:#87DAF6">治愈</li>
                </ul>
              </div>
              <div class="list">
                <ul>
                  <li v-for="item in citylist" :key="item.index">
                    <span>{{item.name}}</span>
                    <span>{{item.currentConfirmedNum}}</span>
                    <span style="color:#F2A71F;">暂无数据</span>
                    <span>{{item.confirmedNum}}</span>
                    <span>{{item.deadNum}}</span>
                    <span>{{item.curedNum}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import EpHeader from '../Public/Header'
import '../../../static/china'
import dayjs from 'dayjs'
export default {
    data(){
        return{
            red:'active',
            red2:'',
            red3:'active',
            red4:'',
            red5:'active',
            red6:'',
            red7:'',
            red8:'',
            red9:'',
            isshow:true,
            isshow2:false,
            isshow3:true,
            isshow4:false,
            bro1:true,
            bro2:false,
            bro3:false,
            bro4:false,
            bro5:false,
            confirmedNum:'',
            deadNum:'',
            suspectedNum:'暂无数据',
            curedNum:'',
            sum:'',
            asymptomaticNum:'',
            externalConfirmedNum:'',
             confirmed_inc:'',
             dead_inc:'',
             cured_inc:'',
             time:'',
             citylist:[]
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
        btn3(){
            this.red3 = 'active'
            this.red4 = ''
            this.isshow3 = true
            this.isshow4 = false
        },
        btn4(){
            this.red3 = ''
            this.red4 = 'active'
            this.isshow3 = false
            this.isshow4 = true
        },
        btn5(){
          this.red5 = 'active'
          this.bro1 = true
          this.bro2 = false
          this.bro3 = false
          this.bro4 = false
          this.bro5 = false
          this.red6 = ''
          this.red7 = ''
          this.red8 = '' 
          this.red9 = ''
        },
        btn6(){
          this.red6 = 'active'
          this.bro1 = false
          this.bro2 = true
          this.bro3 = false
          this.bro4 = false
          this.bro5 = false
          this.red5 = ''
          this.red7 = ''
          this.red8 = '' 
          this.red9 = ''
        },
        btn7(){
          this.red7 = 'active'
          this.bro3 = true
          this.bro2 = false
          this.bro1 = false
          this.bro4 = false
          this.bro5 = false
          this.red6 = ''
          this.red5 = ''
          this.red8 = '' 
          this.red9 = ''
        },
        btn8(){
          this.red8 = 'active'
          this.bro1 = false
          this.bro2 = false
          this.bro3 = false
          this.bro4 = true
          this.bro5 = false
          this.red6 = ''
          this.red7 = ''
          this.red5 = '' 
          this.red9 = ''
        },
        btn9(){
          this.red9 = 'active'
          this.bro1 = false
          this.bro2 = false
          this.bro3 = false
          this.bro4 = false
          this.bro5 = true
          this.red6 = ''
          this.red7 = ''
          this.red8 = '' 
          this.red5 = ''
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
            data:[]
        }
    ]
};
      //获取数据
      this.$http.post('https://route.showapi.com/2217-2?showapi_appid=424316&showapi_timestamp=20201109013619&showapi_sign=824ab60a19b84e00a7782f63045704b2')
        .then(res=>{
          var data = []
          let data2 = res.data.showapi_res_body.todayDetailList
          for(let item of data2){
               let item2 = JSON.parse(JSON.stringify(item).replace(/currentConfirmedNum/g,'value'))
               data.push(JSON.parse(JSON.stringify(item2).replace(/provinceName/g,'name')))
          }
          for(let list of data){
            list.name = list.name.replace('省','');
            list.name = list.name.replace('维吾尔自治区','');
            list.name = list.name.replace('壮族自治区','');
            list.name = list.name.replace('回族自治区','');
            list.name = list.name.replace('自治区','');
            list.name = list.name.replace('市','');
          }
          // console.log(data)
          //填入数据
        map1.setOption({
          series:[{
            name: '确诊数',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                show: true,
                color: 'rgb(249, 249, 249)',
                fontsize:12
            },
            data:data
          }]
      })
        })
         // 使用刚指定的配置项和数据显示图表。
      map1.setOption(option);
  },
          myEcharts2(){
            // console.log(this.data)
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
            data: []
        }
    ]
};
      //获取数据
      // let date = dayjs(dayjs())
      // function formatZero(num) {   //解决单数没有0的问题
      //    if(num.length < 2){
      //      return '0' + num
      //    }else return num
      // }
      // let datestr = String(date.$y) + formatZero(String(date.$M+1)) + formatZero(String(date.$D-1));
      this.$http.post('https://route.showapi.com/2217-2?showapi_appid=424316&showapi_timestamp=20201109013619&showapi_sign=824ab60a19b84e00a7782f63045704b2')
        .then(res=>{
          // console.log(res)
          let sum = []
          let data = res.data.showapi_res_body.todayDetailList;
          for(let item of data){
               let item2 = JSON.parse(JSON.stringify(item).replace(/confirmedNum/g,'value'))
               sum.push(JSON.parse(JSON.stringify(item2).replace(/provinceName/g,'name')))
          }
          for(let list of sum){
            list.name = list.name.replace('省','');
            list.name = list.name.replace('维吾尔自治区','');
             list.name = list.name.replace('壮族自治区','');
            list.name = list.name.replace('回族自治区','');
            list.name = list.name.replace('自治区','');
            list.name = list.name.replace('市','');
          }
          // console.log(sum)
          //填入数据
        map2.setOption({
          series:[{
            name: '确诊数',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                show: true,
                color: 'rgb(249, 249, 249)',
                fontsize:12
            },
            data:sum
          }]
      })
        })
		  // 使用刚指定的配置项和数据显示图表。
		  map2.setOption(option);
          },
          myEcharts3(){
              // 基于准备好的dom，初始化echarts实例
            var asym1 = this.$echarts.init(document.getElementById('asym1'));
            var option = {
    xAxis: {
        type: 'category',
        data: ['新疆', '广东', '四川', '浙江', '江苏', '河南', '福建','湖北','湖南','河北'],
        axisTick:{
            show:false  
        },
        axisLabel:{
             rotate:45,
             color:'#979797',
             fontSize:8
        }
    },
    yAxis: {
        type: 'value',
        axisTick:{
            show:false
        },
        axisLabel:{
          fontSize:10
        }
    },
    series: [{
        data: [0, 0, 0, 0, 0, 0, 0],
        type: 'bar',
        itemStyle:{
            color:'#9153AE'
        },
        barMaxWidth:10
    }]
};
        //获取数据
        
            // 使用刚指定的配置项和数据显示图表。
		  asym1.setOption(option);
          },
          myEcharts4(){
              // 基于准备好的dom，初始化echarts实例
            var asym2 = this.$echarts.init(document.getElementById('asym2'));
            var option = {
    xAxis: {
        type: 'category',
        data: ['新疆', '广东', '四川', '浙江', '江苏', '河南', '福建','湖北','湖南','河北'],
        axisTick:{
            show:false  
        },
        axisLabel:{
             rotate:45,
             color:'#979797',
             fontSize:8
        }
    },
    yAxis: {
        type: 'value',
        axisTick:{
            show:false
        },
        axisLabel:{
          fontSize:10
        }
    },
    series: [{
        data: [0, 0, 0, 0, 0, 0, 0],
        type: 'bar',
        itemStyle:{
            color:'#9153AE'
        },
        barMaxWidth:10
    }]
};
            // 使用刚指定的配置项和数据显示图表。
		  asym2.setOption(option);
          },
          myEcharts5(){
              // 基于准备好的dom，初始化echarts实例
            var news = this.$echarts.init(document.getElementById('new'));
            var option = {
              title:{
       text:'昨日新增分布',
       left:20,
       textStyle:{
           fontWeight:'bold',
           fontSize:20
       }
   },
              tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
              right:80,
              top:5,
        data:[{
            name:'本土新增',
            textStyle:{
                fontSize:8,
                color:'#5EACE7'
            }
        },{
            name:'境外输入',
             textStyle:{
                fontSize:8,
                color:'#EA4D34'
            },
        }],
        itemWidth:5,
        itemHeight:5
    },
    xAxis: {
        type: 'category',
        data: ['新疆', '广东', '四川', '浙江', '江苏', '河南', '福建','湖北','湖南','河北'],
        axisTick:{
            show:false
        },
        axisLabel:{
             rotate:45,
             color:'#979797',
             fontSize:8
        }
    },
    yAxis: {
        type: 'value',
        axisTick:{
            show:false
        },
        axisLabel:{
          fontSize:10
        }
    },
    series: [
      {
            name: '本土新增',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
            barGap: '-100%',//添加此配置项即为重叠效果
            itemStyle:{
              color:'#5EACE7'
            },
            barMaxWidth:10
        },
        {
            name: '境外输入',
            type: 'bar',
            barWidth: '60%',
            data: [0, 0, 0, 0, 0, 0, 0],
            barGap: '-100%',//添加此配置项即为重叠效果
            itemStyle:{
              color:'#EA4D34'
            },
            barMaxWidth:10
        }
    ]
};    
            // 使用刚指定的配置项和数据显示图表。
		  news.setOption(option);
          },
          myEcharts6(){
            // 基于准备好的dom，初始化echarts实例
            var bro1 = this.$echarts.init(document.getElementById('bro1'));
            var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
            name:'现有确诊',
            textStyle:{
                color:'#E96C28'
            }
        },{
            name:'现有疑似',
            textStyle:{
                color:'#FFC339'   
            }
        }]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
            interval:15  
        },
        data: ['01.23', '01.24', '01.25', '01.26', '01.27', '01.28', '01.29','01.20','01.31','02.01','02.02','02.03','02.04','02.05','02.06','02.07','02.08']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '现有确诊',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#E96C28'
            },
            data: [0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0]
        },
        {
            name: '现有疑似',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#FFE4A5'
            },
            
            data: [0, 182, 191, 234, 290, 330, 310,0, 132, 101, 134, 90, 230, 210]
        }
    ]
};
      //获取数据
      //根据开始日期和结束日期获取所有日期的方法
var day1 = '2020-05-09';
// var day2 = '2018-01-09';
var date = new Date();
var formatDate = function (date) {  
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();  
    var minute = date.getMinutes();  
    minute = minute < 10 ? ('0' + minute) : minute; 
    var second= date.getSeconds();  
    second = minute < 10 ? ('0' + second) : second;  
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second;  
};
var day2 = formatDate(date).slice(0,10)
// console.log(day2)
function get(day1, day2) {  
  var getDate = function(str) {  
       var tempDate = new Date();  
       var list = str.split("-");  
       tempDate.setFullYear(list[0]);  
       tempDate.setMonth(list[1] - 1);  
       tempDate.setDate(list[2]);  
       return tempDate;  
   }  
   var date1 = getDate(day1);  
   var date2 = getDate(day2);  
   if (date1 > date2) {  
       var tempDate = date1;  
       date1 = date2;  
       date2 = tempDate;  
   }  
   date1.setDate(date1.getDate() + 1);  
   var dateArr = [];  
   var i = 0;  
   while (!(date1.getFullYear() == date2.getFullYear()  
           && date1.getMonth() == date2.getMonth() && date1.getDate() == date2  
           .getDate())) {  
        var dayStr =date1.getDate().toString();  
        if(dayStr.length ==1){  
          dayStr="0"+dayStr;  
        }  
        var monthStr = (date1.getMonth() + 1).toString();
        if(monthStr.length ==1){  
          monthStr="0"+monthStr;  
        }  
       dateArr[i] = date1.getFullYear() + "" + monthStr + ""  
               + dayStr;  
       i++;  
       /* 
        * document.write("<div style='display:block'>" + date1.getFullYear() + 
        * "-" + (date1.getMonth() + 1) + "-" + date1.getDate() + "</div>"); 
        */  
       // document.write(dateArr[i] + "<br>");  
       date1.setDate(date1.getDate() + 1);  
   }  
  dateArr.splice(0,0,day1)
  dateArr.push(day2);
//   console.log(dateArr);
  return dateArr;  
}
get(day1, day2)
var list = get(day1,day2)
for(let item of list){
  this.$http.post('https://route.showapi.com/2217-6?date='+item+'&country=china&showapi_appid=424316&showapi_sign=824ab60a19b84e00a7782f63045704b2')
    .then(res=>{
      console.log(res)
    })
}


          // 使用刚指定的配置项和数据显示图表。
		  bro1.setOption(option);
          },
          myEcharts7(){
            // 基于准备好的dom，初始化echarts实例
            var bro2 = this.$echarts.init(document.getElementById('bro2'));
            var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
            name:'现有确诊',
            textStyle:{
                color:'#E96C28'
            }
        },{
            name:'现有疑似',
            textStyle:{
                color:'#FFC339'   
            }
        }]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
            interval:15  
        },
        data: ['01.23', '01.24', '01.25', '01.26', '01.27', '01.28', '01.29','01.20','01.31','02.01','02.02','02.03','02.04','02.05','02.06','02.07','02.08']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '现有确诊',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#E96C28'
            },
            data: [0, 132, 101, 134, 90, 230, 210,0, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '现有疑似',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#FFE4A5'
            },
            
            data: [0, 182, 191, 234, 290, 330, 310,0, 132, 101, 134, 90, 230, 210]
        }
    ]
};
          // 使用刚指定的配置项和数据显示图表。
		  bro2.setOption(option);
          },
          myEcharts8(){
            // 基于准备好的dom，初始化echarts实例
            var bro3 = this.$echarts.init(document.getElementById('bro3'));
            var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
            name:'现有确诊',
            textStyle:{
                color:'#E96C28'
            }
        },{
            name:'现有疑似',
            textStyle:{
                color:'#FFC339'   
            }
        }]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
            interval:15  
        },
        data: ['01.23', '01.24', '01.25', '01.26', '01.27', '01.28', '01.29','01.20','01.31','02.01','02.02','02.03','02.04','02.05','02.06','02.07','02.08']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '现有确诊',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#E96C28'
            },
            data: [0, 132, 101, 134, 90, 230, 210,0, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '现有疑似',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#FFE4A5'
            },
            
            data: [0, 182, 191, 234, 290, 330, 310,0, 132, 101, 134, 90, 230, 210]
        }
    ]
};
          // 使用刚指定的配置项和数据显示图表。
		  bro3.setOption(option);
          },
          myEcharts9(){
            // 基于准备好的dom，初始化echarts实例
            var bro4 = this.$echarts.init(document.getElementById('bro4'));
            var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
            name:'现有确诊',
            textStyle:{
                color:'#E96C28'
            }
        },{
            name:'现有疑似',
            textStyle:{
                color:'#FFC339'   
            }
        }]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
            interval:15  
        },
        data: ['01.23', '01.24', '01.25', '01.26', '01.27', '01.28', '01.29','01.20','01.31','02.01','02.02','02.03','02.04','02.05','02.06','02.07','02.08']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '现有确诊',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#E96C28'
            },
            data: [0, 132, 101, 134, 90, 230, 210,0, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '现有疑似',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#FFE4A5'
            },
            
            data: [0, 182, 191, 234, 290, 330, 310,0, 132, 101, 134, 90, 230, 210]
        }
    ]
};
          // 使用刚指定的配置项和数据显示图表。
		  bro4.setOption(option);
          },
          myEcharts10(){
            // 基于准备好的dom，初始化echarts实例
            var bro5 = this.$echarts.init(document.getElementById('bro5'));
            var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
            name:'现有确诊',
            textStyle:{
                color:'#E96C28'
            }
        },{
            name:'现有疑似',
            textStyle:{
                color:'#FFC339'   
            }
        }]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
            interval:15  
        },
        data: ['01.23', '01.24', '01.25', '01.26', '01.27', '01.28', '01.29','01.20','01.31','02.01','02.02','02.03','02.04','02.05','02.06','02.07','02.08']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '现有确诊',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#E96C28'
            },
            data: [0, 132, 101, 134, 90, 230, 210,0, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '现有疑似',
            type: 'line',
            stack: '总量',
            smooth:true,
            itemStyle:{
                color:'#FFE4A5'
            },
            
            data: [0, 182, 191, 234, 290, 330, 310,0, 132, 101, 134, 90, 230, 210]
        }
    ]
};
          // 使用刚指定的配置项和数据显示图表。
		  bro5.setOption(option);
          }
    },
    created(){
      this.$http.post('https://route.showapi.com/2217-2?showapi_appid=424316&showapi_timestamp=20201109013619&showapi_sign=824ab60a19b84e00a7782f63045704b2')
        .then(res=>{
          let time = res.data.showapi_res_body.updateTime
          this.time = time
          let data = res.data.showapi_res_body.todayStatictic
          this.confirmedNum = data.confirmedNum  //现有确诊
          this.deadNum = data.deadNum  //死亡病例
          if(data.suspectedNum == -1){
            this.suspectedNum = '暂无数据'
          }else{
            this.suspectedNum = data.suspectedNum
          }
          this.curedNum = data.curedNum //自愈病例
          this.sum = data.confirmedNum + data.deadNum + data.curedNum  //累计确诊
          this.externalConfirmedNum = data.externalConfirmedNum //境外确诊
          this.asymptomaticNum = data.asymptomaticNum  //无症状感染者
          // console.log(res)
          let city = []
          let data2 = res.data.showapi_res_body.todayDetailList;
          for(let item of data2){
               city.push(JSON.parse(JSON.stringify(item).replace(/provinceName/g,'name')))
          }
          for(let list of city){
            list.name = list.name.replace('省','');
            list.name = list.name.replace('维吾尔自治区','');
            list.name = list.name.replace('壮族自治区','');
            list.name = list.name.replace('回族自治区','');
            list.name = list.name.replace('自治区','');
            list.name = list.name.replace('市','');
          }
          this.citylist = city
        })

          let date = dayjs(dayjs())
          function formatZero(num) {   //解决单数没有0的问题
         if(num.length < 2){
           return '0' + num
         }else return num
      }
      let datestr = String(date.$y) + formatZero(String(date.$M+1)) + formatZero(String(date.$D-1));
        this.$http.post('https://route.showapi.com/2217-6?date='+datestr+'&country=china&showapi_appid=424316&showapi_sign=824ab60a19b84e00a7782f63045704b2')
          .then(res=>{
            let data = res.data.showapi_res_body.list[0].inc_info
            this.confirmed_inc = data.confirmed_inc  //新增确诊
            this.dead_inc = data.dead_inc  //新增死亡
            this. cured_inc = data. cured_inc  //新增自愈
          })
    },
    mounted() {
      this.myEcharts();
      this.myEcharts2();
      this.myEcharts3();
      this.myEcharts4();
      this.myEcharts5();
      this.myEcharts6();
      this.myEcharts7();
      this.myEcharts8();
      this.myEcharts9();
      this.myEcharts10();
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
        padding:0 .1rem;
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
       text-align: left;
        margin-right: .2rem;
    }
    .por4{
      margin-top:.2rem;
    }
    .por4>h6{
      color: #D7D7D7;
      font-size: .12rem;
      margin-top:-.3rem;
    }
    .por5{
      margin-top:.2rem;
    }
    .por5 h3{
        font-size: .22rem;
        font-weight: bold;
        color: #333;
        text-align: left;
        margin-right: .2rem;
    }
    .por5 .btns .btn{
      line-height: .18rem;
      height: .4rem;
      font-size: .12rem;
      padding:0 .07rem;
    }
    .por6{
      margin-top:.2rem;
    }
    .por6 h3{
        font-size: .22rem;
        font-weight: bold;
        color: #333;
        text-align: left;
        margin-right: .2rem;
    }
    .por6 .bd{
      margin-top:.2rem;
    }
    .por6 .bd-hd{
      overflow: hidden;
    }
    .por6 .bd-hd>ul>li{
      float: left;
      font-size: .14rem;
      color:#333;
      background: #333;
      width:16%;
      height: .4rem;
      text-align: center;
      line-height: .4rem;
      margin-right: .6%;
      background: #F6F6F6;
    }
    .por6 .bd-hd>ul>li:last-child{
      margin-right: 0;
    }
    .por6 .bd .list{
      margin-top:.1rem;
    }
    .por6 .bd .list>ul>li>span{
      display: inline-block;
      font-size: .14rem;
      width:16%;
      text-align: center;
      margin-right: -.06rem;
    }
    .shade{
      width:100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
      position: absolute;
      left:0;
      top:0rem;
      text-align: center;
      line-height: 2.6rem;
      z-index: 99;
    }
    .shade>span{
      display: inline-block;
      transform: rotate(45deg);
    }
</style>