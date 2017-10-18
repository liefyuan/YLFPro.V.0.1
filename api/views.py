# encoding: utf-8

from flask import request, Response
from api import api
import json


# 设置json返回头
def response_headers(content):
    resp = Response(content)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


# 网页发送信息POST，网页接收数据信息GET
@api.route('/v0.1/iot_first/', methods=['GET', 'POST'])
def iot_first():
    if request.method == 'GET':
        f = open("D:/Output/SHARE/javaTest.txt", "r")
        lines = f.readlines()  # 读取全部内容
        return str(lines)
    if request.method == 'POST':
        return 'post ok!'


# API测试iot中echarts线性图表数据请求
@api.route('/v0.1/iot/test/echarts/line/', methods=['GET', 'POST'])
def iot_test_echarts_line():
    datas = {
        "data": [
            {"name": "allpe", "num": 100},
            {"name": "peach", "num": 123},
            {"name": "Pear", "num": 234},
            {"name": "avocado", "num": 20},
            {"name": "cantaloupe", "num": 1},
            {"name": "Banana", "num": 77},
            {"name": "Grape", "num": 43},
            {"name": "apricot", "num": 0}
        ]
    }
    content = json.dumps(datas)
    resp = response_headers(content)
    return resp


# API测试iot中echarts设备热点图的数据请求
@api.route('/v0.1/iot/test/echarts/scatter/', methods=['GET', 'POST'])
def iot_test_echarts_scatter():
    datas = {
        "data": [
            {"name": u"海门", "value": [121.15, 31.89]},
            {"name": u'鄂尔多斯', "value": [109.781327, 39.608266]},
            {"name": u'南通', "value": [121.05, 32.08]},
            {"name": u'拉萨', "value": [91.11, 29.97]},
            {"name": u'云浮', "value": [112.02, 22.93]},
            {"name": u'梅州', "value": [116.1, 24.55]},
            {"name": u'文登', "value": [122.05, 37.2]},
            {"name": u'上海', "value": [121.48, 31.22]},
            {"name": u'葫芦岛', "value": [120.836932, 40.711052]},
            {"name": u'常熟', "value": [120.74, 31.64]},
            {"name": u'东莞', "value": [113.75, 23.04]},
            {"name": u'河源', "value": [114.68, 23.73]},
            {"name": u'寿光', "value": [118.73, 36.86]},
            {"name": u'盘锦', "value": [122.070714, 41.119997]},
            {"name": u'大连', "value": [121.62, 38.92]},
            {"name": u'成都', "value": [104.06, 30.67]},
            {"name": u'大同', "value": [113.3, 40.12]},
            {"name": u'镇江', "value": [119.44, 32.2]},
            {"name": u'桂林', "value": [110.28, 25.29]},
            {"name": u'张家界', "value": [110.479191, 29.117096]},
            {"name": u'宜兴', "value": [119.82, 31.36]},
            {"name": u'北海', "value": [109.12, 21.49]},
            {"name": u'西安', "value": [108.95, 34.27]},
            {"name": u'金坛', "value": [119.56, 31.74]},
            {"name": u'东营', "value": [118.49, 37.46]},
            {"name": u'牡丹江', "value": [129.58, 44.6]},
            {"name": u'郑州', "value": [113.65, 34.76]},
            {"name": u'哈尔滨', "value": [126.63, 45.75]},
            {"name": u'聊城', "value": [115.97, 36.45]},
            {"name": u'芜湖', "value": [118.38, 31.33]},
            {"name": u'唐山', "value": [118.02, 39.63]},
            {"name": u'平顶山', "value": [113.29, 33.75]},
            {"name": u'邢台', "value": [114.48, 37.05]},
            {"name": u'德州', "value": [116.29, 37.45]},
            {"name": u'济宁', "value": [116.59, 35.38]},

        ]
    }
    content = json.dumps(datas)
    resp = response_headers(content)
    return resp


# API测试iot-overview中echart环形图表数据请求
@api.route('/v0.1/iot/test/echarts/pie/', methods=['GET', 'POST'])
def iot_test_echarts_pie():
    datas = {
        "list": [
            {"department": "和平区", "num": 480},
            {"department": "河西区", "num": 380},
            {"department": "河东区", "num": 366},
            {"department": "河北区", "num": 320},
            {"department": "南开区", "num": 300}
        ]
    }
    content = json.dumps(datas)
    resp = response_headers(content)
    return resp


# API测试iot-overview中第三个折线图表数据请求
@api.route('/v0.1/iot/test/echarts/line-third/', methods=['GET', 'POST'])
def iot_test_echarts_line_third():
    datas = {
        "jinJian": [
            {"AREA": "选址阶段", "LANDNUM": 190},
            {"AREA": "用地阶段", "LANDNUM": 200},
            {"AREA": "设计方案", "LANDNUM": 310},
            {"AREA": "工程规划", "LANDNUM": 290},
            {"AREA": "施工许可", "LANDNUM": 260},
            {"AREA": "销售许可", "LANDNUM": 300},
            {"AREA": "规划验收", "LANDNUM": 320},
            {"AREA": "综合验收", "LANDNUM": 290},
            {"AREA": "档案验收", "LANDNUM": 280}],
        "banJie": [
            {"AREA": "选址阶段", "LANDNUM": 100},
            {"AREA": "用地阶段", "LANDNUM": 120},
            {"AREA": "设计方案", "LANDNUM": 140},
            {"AREA": "工程规划", "LANDNUM": 160},
            {"AREA": "施工许可", "LANDNUM": 180},
            {"AREA": "销售许可", "LANDNUM": 200},
            {"AREA": "规划验收", "LANDNUM": 220},
            {"AREA": "综合验收", "LANDNUM": 240},
            {"AREA": "档案验收", "LANDNUM": 250}
        ]
    }
    content = json.dumps(datas)
    resp = response_headers(content)
    return resp


# 没有发现API错误处理
@api.errorhandler(403)
def page_not_found():
    content = json.dumps({"error_code": "403"})
    resp = response_headers(content)
    return resp


@api.errorhandler(404)
def page_not_found():
    content = json.dumps({"error_code": "404"})
    resp = response_headers(content)
    return resp


@api.errorhandler(400)
def page_not_found():
    content = json.dumps({"error_code": "400"})
    resp = response_headers(content)
    return resp


@api.errorhandler(410)
def page_not_found():
    content = json.dumps({"error_code": "410"})
    resp = response_headers(content)
    return resp

