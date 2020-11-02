function alo(txt, info,con){ 
    this.txt ='名称:  '+ txt; 
    this.info ='简介:  ' + info; 
    this.con = '配置:  ' + con
} 


var 脚本 = new alo("阴阳师脚本","一个自动挂机刷阴阳师大多数副本的脚本",'配置adb;配置opencv(可以使用pip一键安装);使用pyinstall打包');

var 迷宫 = new alo("迷宫","一个简单的迷宫，使用方向键移动，使用del键刷新地图，使用回车开始游戏",'配置pygame(可以使用pip一键安装);使用pyinstall打包');

var 对比文本java = new alo("对比文本java版本","简单的对比文本是否相符，可以返回错字位置和错字内容",'实例化TestString，参数1为string(原文本)，参数2为string(对比文本)');
    