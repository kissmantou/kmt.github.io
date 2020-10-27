function alo(txt, info,con){ 
    this.txt ='名称:  '+ txt; 
    this.info ='简介:  ' + info; 
    this.con = '配置:  ' + con
} 


var 脚本 = new alo("阴阳师脚本","一个自动挂机刷阴阳师大多数副本的脚本",'配置adb;配置opencv(可以使用pip一键安装);使用pyinstall打包');

var 迷宫 = new alo("迷宫","一个简单的迷宫，使用方向键移动，使用del键刷新地图，使用回车开始游戏",'配置pygame(可以使用pip一键安装);使用pyinstall打包');

    