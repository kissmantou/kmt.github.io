//alert(GetUrlPath()+"java/")

function re(){
    window.location.href='../index.html';
}

function GetUrlPath(){
    var url = document.location.toString();				
    if(url.indexOf("/") != -1){
        url = url.substring(0,  url.lastIndexOf("/html/")) ;
}
    　　　　return url+'/file/';
}

function dow(i){
    var dis_view = document.getElementById(i);
    if(dis_view.style.display=='none'){
        dis_view.style.display='block'
    }
    else{
        dis_view.style.display='none'
    }

}

function download(path,name){
    document.getElementById("link").href = "../file/"+path;
    eval('document.getElementById("p0_text").innerHTML='+name+'.txt;') //使用eval纯粹是懒，看见了别笑话
    eval('document.getElementById("p1_text").innerHTML='+name+'.info;')
    eval('document.getElementById("p2_text").innerHTML='+name+'.con;')
}
