# encoding: utf-8

import time
from flask import request, make_response
from wechat import wechat, wechatConfig
import xml.etree.ElementTree as ET


@wechat.route('/tools/', methods=['GET', 'POST'])
def tools():
    if request.method == 'GET':
        token= 'javaweixinToken'
        return wechatConfig.wechat_auth(token, request.args)
    else:
        req = request.stream.read()
        resultData = ET.fromstring(req)

        toUser = resultData.find('ToUserName').text
        fromUser = resultData.find('FromUserName').text
        content = resultData.find('Content').text

        resultContent = wechatConfig.wechat_mode(content)

        formData = "<xml><ToUserName><![CDATA[%s]]></ToUserName><FromUserName><![CDATA[%s]]></FromUserName><CreateTime>%s</CreateTime><MsgType><![CDATA[%s]]></MsgType><Content><![CDATA[%s]]></Content><FuncFlag>0</FuncFlag></xml>"
        response = make_response(formData % (fromUser, toUser, str(int(time.time())), 'text', resultContent))
        response.content_type = 'application/xml'
        return response


#if __name__ == '__main__':
#    app.run(host="127.0.0.1",port=8001, debug=True)