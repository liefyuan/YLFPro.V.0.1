/**
 * Created by yuanlifu on 2017/9/18.
 */

function loadFirstLine() {
    var myChart = echarts.init(document.getElementById('ov-first-content-1'));
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

         }

        },
        error : function(errorMsg) {
         //请求失败时执行该函数
         alert("图表请求数据失败!");
         myChart.hideLoading();
        }
    });
};
loadFirstLine();


 /**********************环形饼状图****************************/
function loadOneColumn() {
    var myChart = echarts.init(document.getElementById('secondPieChart'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '信息发布排行',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: []
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        series: [{
            name: '发布排行',
            type: 'pie',
            radius: ['50%', '70%'],  //设置环形的空间大小
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: []
        }]
    });
    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'get',
        url: '/api/v0.1/iot/test/echarts/pie/',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组
                brower.push({
                    value: item.num,
                    name: item.department
                });
            });
            myChart.hideLoading();    //隐藏加载动画
            myChart.setOption({        //加载数据图表
                legend: {
                    data: names
                },
                series: [{
                    data: brower
                }]
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChart.hideLoading();
        }
    });
};
loadOneColumn();

/********************第三个折线图*******************/
function loadTwoLine() {
    var myChart = echarts.init(document.getElementById('thirdLineChart'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        title: {
            text: '异步数据加载示例'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['进件', '办结']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: {
            type: 'category',
            boundaryGap: false, //取消左侧的间距
            data: []
        },
        yAxis: {
            type: 'value',
            splitLine: { show: false },//去除网格线
            name: ''
        },
        series: [{
            name: '进件',
            type: 'line',
            symbol: 'emptydiamond',    //设置折线图中表示每个坐标点的符号 emptycircle：空心圆；emptyrect：空心矩形；circle：实心圆；emptydiamond：菱形
            data: []
        },
        {
            name: '办结',
            type: 'line',
            symbol: 'emptydiamond',    //设置折线图中表示每个坐标点的符号 emptycircle：空心圆；emptyrect：空心矩形；circle：实心圆；emptydiamond：菱形
            data: []
        }]
    });
    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（实际用来盛放X轴坐标值）
    var series1 = [];
    var series2 = [];
    $.ajax({
        type: 'get',
        url: '/api/v0.1/iot/test/echarts/line-third/',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.jinJian, function (index, item) {
                names.push(item.AREA);    //挨个取出类别并填入类别数组
                series1.push(item.LANDNUM);
            });
            $.each(result.banJie, function (index, item) {
                series2.push(item.LANDNUM);
            });
            myChart.hideLoading();    //隐藏加载动画
            myChart.setOption({        //加载数据图表
                xAxis: {
                    data: names
                },
                series: [{
                    data: series1
                },
                {
                    data: series2
                }]
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChart.hideLoading();
        }
    });
};
loadTwoLine();