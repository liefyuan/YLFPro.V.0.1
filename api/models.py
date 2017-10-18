# encoding: utf-8


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