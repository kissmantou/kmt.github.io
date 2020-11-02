function alo(txt, info,con){ 
    this.txt ='名称:  '+ txt; 
    this.info ='简介:  ' + info; 
    this.con = '配置:  ' + con
} 

//  -- pytho --
var 脚本 = new alo("阴阳师脚本","一个自动挂机刷阴阳师大多数副本的脚本",'配置adb;配置opencv(可以使用pip一键安装);使用pyinstall打包');

var 迷宫 = new alo("迷宫","一个简单的迷宫，使用方向键移动，使用del键刷新地图，使用回车开始游戏",'配置pygame(可以使用pip一键安装);使用pyinstall打包');



//  -- java --
var 对比文本java = new alo("对比文本java版本","简单的对比文本是否相符，可以返回错字位置和错字内容",'实例化TestString，参数1为string(原文本)，参数2为string(对比文本)');


//  -- android --
var 计算器 = new alo("计算器","在2016年使用Android制作的计算机软件，由于水平非常业余，所以代码看起来非常谢特",'使用android studio(pc)或aide(android)打开直接编译运行');

//  -- web --
var 主站 = new alo("此网站代码","与2020年11月2日大体正式完工，会逐步小更新",'解压开双击index.html直接运行，若需最新代码请按f12直接查看');