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

/* -- 分割线-- */
var list_disply = [0,0,0,0]
function dow(i){
    var dis_view = document.getElementById(i);
    if(dis_view.style.display=='none'){
        dis_view.style.display='block'
    }
    else{
        dis_view.style.display='none'
    }

}