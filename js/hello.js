

function re(){
    window.location.href='../index.html';
}


function GetUrlPath(){
    var url = document.location.toString();				
    if(url.indexOf("/") != -1){
        url = url.substring(0,  url.lastIndexOf("")) ;
}
    　　　　return url;
}

function dow(i){
    var dis_view = document.getElementById(i);
    if(dis_view.style.display=='none'){
        dis_view.style.display='block'
    }
    else{
        dis_view.style.display='none'
    }
    playsound()

}

function download(path,name){
    document.getElementById("link").href = "../file/"+path;
    document.getElementById("p0_text").innerHTML= name.txt;
    document.getElementById("p1_text").innerHTML= name.info;
    document.getElementById("p2_text").innerHTML= name.con;
    playsound()
}

function playsound(){
    var music_src = document.getElementById('click');
    music_src.play();

}