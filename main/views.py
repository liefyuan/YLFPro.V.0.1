# encoding: utf-8

from flask import render_template
from main import main


@main.route('/')
@main.route('/home/')
def home():
    print '__name__', __name__
    return render_template('main/home.html')


@main.route('/test/pie_test/')
def pie_test():
    return render_template('test/pie-test.html')


@main.route('/article/<page>')
def article(page):
    page = str(page)
    if page == u'iot-17-10-1':
        return render_template('article/iot-17-10-1.html')
