/**
 * Created by yuanlifu on 2017/9/18.
 */

var myChart = echarts.init(document.getElementById('hot-map'));
var option = {
    backgroundColor: '#404a59',  		// 图表背景色
    geo: {
        map: 'china',
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#242424'
            },
            emphasis: {
                borderColor: '#00ff00',
                areaColor: '#2a333d'
            }
        }
    },
    color: [
        'rgba(0, 204, 255, 0.8)'  // 散点的颜色
    ],
    title : {
        text: '设备热点图',
        x:'center',
        textStyle : {
            color: '#fff'
        }
    },
    legend: {
        orient: 'vertical',
        x:'left',
        y:'center',
        data:['设备热点'],
        textStyle : {
            color: '#fff'
        }
    },
    toolbox: {
        backgroundColor : '#ffffff',
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series: [
        {
            roam: true,
            name:'设备热点',// series名称
            type: 'scatter', // series图表类型
            coordinateSystem: 'geo' // series坐标系类型
        }
    ]

};
myChart.setOption(option);
myChart.showLoading();
var datas = [];
$.ajax({
     type : "get",
//       async : true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
     url : "/api/v0.1/iot/test/echarts/scatter/",    //请求地址
     dataType : "json",        //返回数据形式为json
     success : function(result) {
         //请求成功时执行该函数内容，result即为服务器返回的json对象
         if (result) {
//              alert(result["data"]);
                for(var i = 0;i<result["data"].length;i++){
                     var temp = {name : result["data"][i]["name"], value : result["data"][i]["value"]};
                     datas.push(temp);
                }
                console.log("新的json数组:"+JSON.stringify(datas));
                myChart.setOption({        //加载数据图表
                    series: [{
                        data : datas
                    }]
                });
         }
    },
     error : function(errorMsg) {
         //请求失败时执行该函数
         alert("图表请求数据失败!");
         myChart.hideLoading();
     }
});
myChart.hideLoading();
