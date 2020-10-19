var isPause = true;
var music_src = document.getElementById("player");


function mp() {
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