# encoding: utf-8

import os

SECRET_KEY = os.urandom(24)  # 配置session的密码，这里是用随机24位的密码

APP_ROOT = os.path.dirname(os.path.abspath(__file__))  # 应用的根目录
APP_STATIC_TXT = os.path.join(APP_ROOT, 'static/txt')  #静态文本目录
APP_LOG = os.path.join(APP_ROOT, 'logs')               #日志文件目录