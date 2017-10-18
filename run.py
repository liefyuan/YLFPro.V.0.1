# encoding: utf-8

from flask import Flask
from api import api
from wechat import wechat
from test import test
from asset import asset
from main import main
from gevent import monkey

import config


app = Flask(__name__)

app.config.from_object(config)  # 添加config的配置


# 指定模板路径，可以是相对路径，也可以是绝对路径。
# 指定静态文件前缀，默认静态文件路径同前缀
app = Flask(__name__, template_folder='templates', static_folder='static',)

app.register_blueprint(api, url_prefix='/api')  # 注册api蓝图，并指定前缀。
app.register_blueprint(wechat, url_prefix='/wechat')  # 注册微信平台，并指定前缀
app.register_blueprint(asset, url_prefix='/asset')  # 注册asset蓝图，并指定前缀。
app.register_blueprint(test, url_prefix='/test')  # 注册test蓝图，并指定前缀。
app.register_blueprint(main)  # 注册main蓝图，没有指定前缀。
monkey.patch_all()

app.config['SECRET_KEY'] = '@#$%HGSH&DHSHBCfhncndj'

if __name__ == '__main__':
    app.run(host="127.0.0.1",port=5001, debug=True)
