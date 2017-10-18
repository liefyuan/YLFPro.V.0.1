# encoding: utf-8

from flask import render_template
from test import test


@test.route('/')
def home():
    print '__name__', __name__
    return render_template('test/test.html')


@test.route('/iot_first/')
def iot_first():
    return render_template('test/iot_first.html')


# TCP透传网页
@test.route('/test/tcp_test/')
def tcp_test():
    return render_template('test/tcp-test.html')


# UDP透传网页
@test.route('/test/udp_test/')
def udp_test():
    return render_template('test/udp-test.html')
