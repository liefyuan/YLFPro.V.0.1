/**
 * Created by yuanlifu on 2017/10/1.
 */


/*********************第一幅饼状图**************************/
function loadOneColumn() {
    var myChart = echarts.init(document.getElementById('echartsPie1'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '网站访问IP排行',
            x:'center',
            y:'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     orient: 'horizontal',
        //     x: 'left',
        //     data: []
        // },
        toolbox: {
            show: true,
            feature: {
                mark: { show: false },
                dataView: { show: true, readOnly: false },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [{
            name: '发布排行',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: []
        }]
    });
    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'get',
        url: '/api/v0.1/asset/pie-1/',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组
                brower.push({
                    name: item.department,
                    value: item.num
                });
            });
            myChart.hideLoading();    //隐藏加载动画
            myChart.setOption({        //加载数据图表
                // legend: {
                //     data: names
                // },
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

/*******************第二幅饼状图****************************/
function loadTwoColumn() {
    var myChart = echarts.init(document.getElementById('echartsPie2'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '信息发布排行',
            x:'center',
            y:'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
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
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [{
            name: '发布排行',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: []
        }]
    });
    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'get',
        url: '/api/v0.1/asset/pie-2/',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组
                brower.push({
                    name: item.department,
                    value: item.num
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
loadTwoColumn();

/********************第三幅饼状图***************************/
function loadThreeColumn() {
    var myChart = echarts.init(document.getElementById('echartsPie3'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '信息发布排行',
            x:'center',
            y:'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
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
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [{
            name: '发布排行',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: []
        }]
    });
    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'get',
        url: '/api/v0.1/asset/pie-3/',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组
                brower.push({
                    name: item.department,
                    value: item.num
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
loadThreeColumn();

/********************第四幅饼状图***************************/
function loadFourColumn() {
    var myChart = echarts.init(document.getElementById('echartsPie4'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        color: ['#ff7d27', '#47b73d', '#fcc36e', '#57a2fd', "#228b22"],//饼图颜色
        title: {
            text: '信息发布排行',
            x:'center',
            y:'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
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
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [{
            name: '发布排行',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: []
        }]
    });
    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画
    var names = [];    //类别数组（用于存放饼图的类别）
    var brower = [];
    $.ajax({
        type: 'get',
        url: '/api/v0.1/asset/pie-4/',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result.list, function (index, item) {
                names.push(item.department);    //挨个取出类别并填入类别数组
                brower.push({
                    name: item.department,
                    value: item.num
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
loadFourColumn();

/*************************第一幅折线图*********************************/
function loadOneLine() {
    var myChart = echarts.init(document.getElementById('asset-line'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        title: {
            text: '网站月访问'
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
        url : "/api/v0.1/asset/web-month-visit/",    //请求发送到Servlet处
        //       data : {},
        dataType : "json",        //返回数据形式为json
        success : function(result) {
         //请求成功时执行该函数内容，result即为服务器返回的json对象
         if (result) {
        //              alert(result["data"]);
                for(var i=1;i<result["data"].length;i++){
        //                      alert(result["data"][i]["name"]);
                    names.push(result["data"][i]["name"]);    //挨个取出名称并填入类别数组
                 }
                for(var i=1;i<result["data"].length;i++){
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
loadOneLine();

 /*************************第二幅折线图*********************************/
function loadTwoLine() {
    var myChart = echarts.init(document.getElementById('asset-line2'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        title: {
            text: '网站年访问'
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
        url : "/api/v0.1/asset/web-year-visit/",    //请求发送到Servlet处
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
loadTwoLine();
/***********************************************/

var navigation = responsiveNav("#nav", {customToggle: "#toggle"});