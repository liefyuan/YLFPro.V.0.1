# encoding: utf-8

from flask import render_template, redirect, session, request
from asset import asset
from models import *
import os
from functools import wraps
from config import APP_LOG


REQUEST_LIST_VIEW_NUM = 1000

DATAS = [
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


# 登录、注册认证函数
def liefyuan(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        user = session.get('asset_login', None)  # 取得登录标志
        if user:
            return fn(*args, **kwargs)  # 登录了就返回请求
        else:
            return redirect('/asset/asset_login/')
    return wrapper


# 登录
@asset.route('/asset_login/', methods=['GET', 'POST'])
def asset_login():
    if request.method == 'GET':
        return render_template("asset/login.html")
    if request.method == 'POST':
        u = request.form['username']
        p = request.form['password']
        if (u == "liefyuan") & (p == "123456"):
            session['asset_login'] = True
            return redirect('/asset/')
        else:
            return render_template("asset/login.html")


# 登出
@asset.route('/asset_logout/', methods=['GET', 'POST'])
@liefyuan
def asset_logout():
    if request.method == 'GET':
        session['asset_login'] = False
        return redirect('/home')


# 网站监控台
@asset.route('/')
@liefyuan
def asset_home():
    datas = [
        {'num': '0', 'ip': '127.0.0.1', 'time': '2017-10-1', 'method': 'GET', 'other': None},
    ]
    with open(os.path.join(APP_LOG, 'run.log')) as f:
        line = f.readlines() #读出日志的所有行
        f.close()
    for i in range(len(line)):#这里就是将日志中的特殊条目忽略掉
        if line[i][0] == '{':#判断开始的字符是不是特殊条目
            continue
        else:
            line[i] = line[i+1]#是的话就用后面的条目替代掉当前的
    if len(line) >= REQUEST_LIST_VIEW_NUM:
        list_view_num = REQUEST_LIST_VIEW_NUM
    else:
        list_view_num = len(line)
    for i in range(list_view_num):
        ip = get_request_ip(line[-i])
        time = get_request_time(line[-i])
        method = get_request_method(line[-i])
        other = get_request_other(line[-i])
        last = {'num': str(1+i), 'ip': str(ip), 'time': str(time), 'method': str(method), 'other': str(other)}
        datas.append(last) # 将新的条目添加到末尾
    return render_template('asset/asset.html', datas=datas)


# 只是一个路由重定向
@asset.route('/iot/', methods=['GET', 'POST'])
def asset_iot():
    return redirect('/asset/iot/1')


# IOT页面的所有页面
@asset.route('/iot/<pageid>', methods=['GET', 'POST'])
def asset_iot_pageid(pageid):
    id = str(pageid)
    if id == '1':
        context = {
            'device_num_progress': 60,
            'data_storage_progress': 70,
            'sys_load_progress': 80,
            'sys_ram_progress': 90
        }
        return render_template('asset/asset-iot-overview.html', **context)
    elif id == '2':
        return render_template('asset/asset-iot-device.html', route=u'设备管理')
    elif id == '3':

        return render_template('asset/asset-iot-data.html', route=u'数据管理', datas=DATAS)
    elif id == '4':
        return render_template('asset/asset-iot-view.html', route=u'数据可视化')
