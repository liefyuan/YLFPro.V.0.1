# encoding: utf-8

from api import api
from views import response_headers
from models import get_request_ip
import json
import os
import sys

from config import APP_LOG


REQUEST_LIST_VIEW_NUM = 1000
LOG_CONTENT = []
# ######################网站监控台--Asset的API数据部分--开始############################# #

IP_DATAS = {
        "list": [
            {"department": "127.0.0.1", "num": 1}
        ]
    }

@api.before_request
def read_all_log():
    with open(os.path.join(APP_LOG, 'run.log')) as f:
        global LOG_CONTENT
        LOG_CONTENT = f.readlines()  # 读出日志的所有行
        f.close()
    for i in range(len(LOG_CONTENT)):  # 这里就是将日志中的特殊条目忽略掉
        if LOG_CONTENT[i][0] == '{':  # 判断开始的字符是不是特殊条目
            continue
        else:
            LOG_CONTENT[i] = LOG_CONTENT[i + 1]  # 是的话就用后面的条目替代掉当前的



# 网站监控台第一个饼状图数据API
@api.route('/v0.1/asset/pie-1/', methods=['GET'])
def asset_pie_1():
    global IP_DATAS
    global LOG_CONTENT
    print sys.getsizeof(LOG_CONTENT)
    print LOG_CONTENT
    ip_sum = []
    if len(LOG_CONTENT) >= REQUEST_LIST_VIEW_NUM:
        list_view_num = REQUEST_LIST_VIEW_NUM
    else:
        list_view_num = len(LOG_CONTENT)
    for i in range(list_view_num):
        ip = get_request_ip(LOG_CONTENT[-i])
        ip_sum.append(ip)
    myset = set(ip_sum)  # 统计IP地址总的出现次数
    for item in myset:
        last = {"department": str(item), "num": ip_sum.count(item)}
        IP_DATAS["list"].append(last)
    print sys.getsizeof(IP_DATAS)
    print IP_DATAS
    content = json.dumps(IP_DATAS)
    resp = response_headers(content)
    return resp


# 网站监控台第二个饼状图数据API
@api.route('/v0.1/asset/pie-2/', methods=['GET', 'POST'])
def asset_pie_2():
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


# 网站监控台第三个饼状图数据API
@api.route('/v0.1/asset/pie-3/', methods=['GET', 'POST'])
def asset_pie_3():
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


# 网站监控台第四个饼状图数据API
@api.route('/v0.1/asset/pie-4/', methods=['GET', 'POST'])
def asset_pie_4():
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


# 网站监控台asset月访问数据API
@api.route('/v0.1/asset/web-month-visit/', methods=['GET'])
def asset_web_month_visit():
    datas = {
        "data": [
            {"name": "0", "num": 0}
        ]
    }
    ip_sum = []
    with open(os.path.join(APP_LOG, 'run.log')) as f:
        line = f.readlines()  # 读出日志的所有行
        f.close()
    for i in range(len(line)):  # 这里就是将日志中的特殊条目忽略掉
        if line[i][0] == '{':  # 判断开始的字符是不是特殊条目
            continue
        else:
            line[i] = line[i + 1]  # 是的话就用后面的条目替代掉当前的

    if len(line) >= REQUEST_LIST_VIEW_NUM:
        list_view_num = REQUEST_LIST_VIEW_NUM
    else:
        list_view_num = len(line)
    for i in range(list_view_num):
        ip = get_request_ip(line[-i])
        ip_sum.append(ip)
    myset = set(ip_sum)    # 统计IP地址总的出现次数
    for item in myset:
        last = {"name": str(item), "num": ip_sum.count(item)}
        datas["data"].append(last)
    content = json.dumps(datas)
    resp = response_headers(content)
    return resp


# 网站监控台asset年访问数据API
@api.route('/v0.1/asset/web-year-visit/', methods=['GET'])
def asset_web_year_visit():
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

# ######################网站监控台--Asset的API数据部分--结束############################# #
