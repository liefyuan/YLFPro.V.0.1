/**
 * Created by yuanlifu on 2017/9/18.
 */

var a = echarts;
var b = echarts;
var myChart = a.init(document.getElementById('dv-first'));
var myCharts = b.init(document.getElementById('dv-second'));
 // 显示标题，图例和空的坐标轴
myChart.setOption({
    title: {
         text: '爬虫今日抓取数据图'
    },
    tooltip : {
    trigger: 'axis'
    },
    legend: {
        data:['今日数据']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            // restore : {show: true},
            // saveAsImage : {show: true}
        }
    },
    calculable : true,

     xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : []
        }
    ],
     yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
     series : [
        {
            name:'最多数量',
            type:'line',
            data:[],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },]
 });
             // 显示标题，图例和空的坐标轴
 myCharts.setOption({
     title: {
         text: '爬虫今日抓取数据图'
     },
     tooltip : {
    trigger: 'axis'
    },
    legend: {
        data:['今日数据']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            // restore : {show: true},
            // saveAsImage : {show: true}
        }
    },
    calculable : true,

     xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : []
        }
    ],
     yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
     series : [
        {
            name:'最多数量',
            type:'line',
            data:[],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },]
 });
 myCharts.showLoading();    //数据加载完之前先显示一段简单的loading动画
 myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画

 var names=[];    //名称数组（实际用来盛放X轴坐标值）
 var nums=[];    //数量数组（实际用来盛放Y坐标值）
 $.ajax({
 type : "get",
//       async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
 url : "/api/v0.1/iot/test/echarts/line/",    //请求发送到Servlet处
//       data : {},
 dataType : "json",        //返回数据形式为json
 success : function(result) {
     //请求成功时执行该函数内容，result即为服务器返回的json对象
     if (result) {
//              alert(result["data"]);
            for(var i=0;i<result["data"].length;i++){
//                      alert(result["data"][i]["name"]);
               names.push(result["data"][i]["name"]);    //挨个取出名称并填入类别数组
             }
            for(var i=0;i<result["data"].length;i++){
//                      alert(result["data"][i]["num"]);
                nums.push(result["data"][i]["num"]);    //挨个取出数量并填入销量数组
              }
            myChart.hideLoading();    //隐藏加载动画
            myCharts.hideLoading();
            myChart.setOption({        //加载数据图表
                xAxis: {
                    data: names
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '数量',
                    data: nums
                }]
            });
            myCharts.setOption({        //加载数据图表
                xAxis: {
                    data: names
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '数量',
                    data: nums
                }]
            });
     }

},
 error : function(errorMsg) {
     //请求失败时执行该函数
 alert("图表请求数据失败!");
 myChart.hideLoading();
 myCharts.hideLoading();
 }
});
