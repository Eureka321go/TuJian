var  CalendarObj=function(){

  this.currentdate=new Date();

  //今天的日期
  this.currentDateInfo={
     year:this.currentdate.getFullYear(),
     month:this.currentdate.getMonth()+1,
     date:this.currentdate.getDate(),
     day:this.currentdate.getDay()
  };

  //是否闰年
  this.isRun=function(year){
    if((year%4==0 && year%100!=0) || (year%400==0)){
      return 29;
    }else{
      return 28;
    }
  }

  //返回年的每个月天数,参数为某年份
  this.getMonthNums=function(year){
    return [
      {key:31,month:1},
      {key:this.isRun(year),month:2},
      {key:31,month:3},
      {key:30,month:4},
      {key:31,month:5},
      {key:30,month:6},
      {key:31,month:7},
      {key:31,month:8},
      {key:30,month:9},
      {key:31,month:10},
      {key:30,month:11},
      {key:31,month:12}
    ];
  }


  //返回某年某月份1号星期几
  this.getMonthStartDay=function(obj){
    /*
    * obj{
    *    year:xxx,
    *    month:xxx   eg:1,2,3...
    * }
    * */
    var newMonth;
    if(obj.month<10){
      newMonth="0"+obj.month;
    }else{
      newMonth=obj.month;
    }
    var Day=new Date(obj.year+'/'+newMonth+'/01').getDay();
    //周日为0
    if(Day==7){
      Day=0;
    }
    return Day;

  }

  //根据年份和月份，返回对象，对象包含年的信息和每天的数组
  this.initialMonth=function(obj){
    /*
    * obj{
    *   year:xxxx,
    *   month:xxxx
    * }
    * */
    //获取当前月的1号是星期几
    var day=this.getMonthStartDay(obj);
    //初始化数组，最后要返回的数组
    var  arr={
      data:[], //每天的信息
      info:obj //包含年份和月份
    };
    //从第几个星期开始，根据当前月1号星期几，就有几个空的天对象
    for(var i=0;i<day;i++){
      arr.data.push({
        ...obj,
        date:"",
        week:""
      })
    }
    //获取当前月天数
    var currentMonthNum=this.getMonthNums(obj.year)[obj.month-1];
    var week=day;//用来设置每天的星期几
    //循环月天数
    for(var i=0;i<currentMonthNum.key;i++){
      var currentDate=i+1;//获取日
      //获取今天或者明天
      var text=this.todayAndTomorrow(obj,i+1);
      //每天的具体信息，包括年，月，日，星期
      var otherInfo={
        ...obj,
        week:week,
        date:currentDate,
        text:text
      }
      /*
      * other{
      *   year:xxx,
      *   month:xxx,
      *   week:xxx,
      *   date:xxxx
      * }
      * */
      arr.data.push(otherInfo);
      //week++放在后面，因为第一次week是月的1号
      week++;
      week==7 ?week=0 :week; //周日为0
    }
    return arr
  }


  this.todayAndTomorrow=function(obj,i){
    var Month=new Date().getMonth()+1;
    var year=new Date().getFullYear();
    var nextDate=new Date().getDate()+1;
    //获取这个月的最后一天
    var lastDate=this.getMonthNums(year)[Month-1].key;
    if(nextDate>lastDate){
      if(year<12){
        Month++;
        nextDate=1;
      }else{
        year++;
        Month=1;
        nextDate=1;
      }
    }
    if(obj.year==year && obj.month==Month && i== nextDate){
      return "明天"
    }
    if(obj.year== new Date().getFullYear() && obj.month==new Date().getMonth()+1 && i== new Date().getDate()){
      return "今天"
    }
    return false
  }

  //分装要显示本月后的几个月日期,返回数组对象。使用方法为:获取结果后遍历调用initialMonth
  this.afterMonthShow=function(num){
    if(num<=0){
      return false;
    }
    //num表示要显示本月后的几个月,Number:1,2,3.....
    var currentMonth=new Date().getMonth()+1;//获取本月
    var arr=[];//最后要返回的数组
    for(var i=1;i<=num;i++){
      var NextYear=0;//最后要返回的年份
      var Nextmonth=0;//最后要返回的月份
      var afterMonth=currentMonth+i;//月份+你想要的月份
      var a=12-currentMonth;//距离下一年还有几个月
      var b=afterMonth-a;//总和的月份扣距离下一年的月数
      if(b/12<0){
        //  b/12<0说明你需要的最后一个月份在本年内
        b=currentMonth+1
      }else{
        /*
        *说明在本年外，那么b表示在新的一年当中的1月份。
        * 为何还要+1?
        * 例子，假设是2年后的1月份。那么24/12=2....0
        * 2表示正好是年的倍数，余0，是1月份。所以要+1.
        * */
        b=b%12+1;
      }
      Nextmonth=b;
      NextYear=Math.floor((afterMonth-a)/12);
      if(NextYear<0){
        NextYear=new Date().getFullYear();
      }else{
        NextYear+=new Date().getFullYear();
      }
      var obj={
        month:Nextmonth,
        year:NextYear
      }
      arr.push(obj);
    }
    return arr;
  }

  //综合方法,直接返回json数据
  this.allMonths=function(num){
    //num为你要显示的所有月份，从本月份开始算
      var arr=this.afterMonthShow(num-1);
      var arr2=[
        {year:new Date().getFullYear(),month:new Date().getMonth()+1},
        ...arr
     ];
      var arr3=[];
      for(var i=0;i<arr2.length;i++){
        arr3.push(this.initialMonth(arr2[i]));
      }
      return arr3;

  }

}
var calendarObj=new CalendarObj();

/*
*    Created by Chason
* 使用方法:通过initialMonth来生成某年月份的每天的星期几，几号，当前年份，当前月份
*
*         通过afterMonthShow来生成除本月后的要显示的几个月(不包括本月份)，参数
*         为Number。注意:此方法返回结果是本月之后N个月的数据
*
*         通过allMonths来生成你需要的所有月份，包括本月份,参数为Number
*         注意，返回结果是当前月和往后的N个月
*
*
*         注意:所有方法都基于本月往后推，如果需要不同月份，需要分别执行
*         initialMonth({year:xxx,month:xxxx})返回月份每天的信息
* */
 export  default calendarObj;

