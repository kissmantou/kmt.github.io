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
