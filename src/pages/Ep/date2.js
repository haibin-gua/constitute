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
       dateArr[i] = date1.getFullYear() + "-" + monthStr + "-"  
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
console.log(list)