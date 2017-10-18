# encoding: utf-8

import os


# 找出IP地址
def get_request_ip(source):
    for i in range(0, len(source), 1):
        if source[i] == '.':  # 日志中特有的.代表IP地址的
            for start in range(i, i - 5, -1):  # 往前面找空格符号
                if source[start] == ' ':
                    pass
            for end in range(i, i + 20, 1):  # 往后面找空格符号
                if source[end] == ' ':
                    target = source[start + 1:end]  # 得到完整的IP地址
                    return target


# 找出时间
def get_request_time(source):
    for i in range(0, len(source), 1):
        if source[i] == '[':
            test = source[i + 4]
            if source[i + 4] == ':':  # 如果中括号后面第四个字符是：则跳过这个标志符号
                continue
            else:
                start = i
                for end in range(i, len(source), 1):
                    if source[end] == ']':
                        target = source[start + 1:end]
                        return target


# 找出方法
def get_request_method(source):
    for i in range(0, len(source), 1):
        if source[i] == '/':
            test = source[i - 1]
            if source[i - 1] != ' ':  # 如果/前面不是空格符号就跳过，继续寻找
                continue
            else:
                end = i - 1
                for start in range(end - 5, end, 1):
                    if source[start] == ' ':
                        target = source[start:end]
                        return target


# 找出其他信息
def get_request_other(source):
    pass

