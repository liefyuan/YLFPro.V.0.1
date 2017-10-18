# encoding: utf-8

from flask_restful import Api, Resource, reqparse, abort
from api import api


api = Api(api)


USER_LIST = {
    1: {'name': 'Michael'},
    2: {'name': 'Tom'}
}

parser = reqparse.RequestParser()
parser.add_argument('name', type=str)


def abort_if_not_exist(user_id):
    if user_id not in USER_LIST:
        abort(404, message="User {} doesn't exist".format(user_id))


class MyApi(Resource):
    @staticmethod
    def post():
        args = parser.parse_args(strict=True)
        print args

        return args, 201

    @staticmethod
    def get():
        return u'这是GET一个数据！'


class User(Resource):
    @staticmethod
    def get(user_id):
        abort_if_not_exist(user_id)
        return USER_LIST[user_id]

    @staticmethod
    def delete(user_id):
        abort_if_not_exist(user_id)
        del USER_LIST[user_id]
        return '', 204

    @staticmethod
    def put(user_id):
        args = parser.parse_args(strict=True)
        USER_LIST[user_id] = {'name': args['name']}
        return USER_LIST[user_id], 201


class UserList(Resource):
    # get请求返回全局变量所有的元素
    @staticmethod
    def get():
        return USER_LIST

    # post请求在全局字典变量中添加一个元素
    @staticmethod
    def post():
        args = parser.parse_args(strict=True)
        user_id = int(max(USER_LIST.keys()))+1
        USER_LIST[user_id] = {'name': args['name']}
        return USER_LIST[user_id], 201

api.add_resource(UserList, '/users')
api.add_resource(User, '/users/<int:user_id>')
api.add_resource(MyApi, '/')
