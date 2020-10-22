var isPause = true;



function mp(u) {
    var music_src = document.getElementById(u);
    try {
       if(isPause){
            music_src.play();
            isPause = false;
       }
        else{
            music_src.pause();
            isPause = true;
        }
    }
     catch (error) {
        alert(error);
}
}

