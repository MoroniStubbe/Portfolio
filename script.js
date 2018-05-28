//fadeShow

function fade(id, direction, duration, frames, to) {
    var fps = frames / duration;
    var element = document.getElementById(id);
    var opacity = element.style.opacity.value;
    if (direction === "in") {
        while(element.style.opacity.value < to){
            setTimeout(1 / fps);
        }
    }else if(direction === "out"){
        while(element.style.opacity.value > to){
            element.style.opacity = opacity + (to - opacity) / fps;
            setTimeout(1 / fps);
        }
    }
}
function fadeShow() {
    fade('fadeImage', "out", 1, 30, 0);
    setTimeout(5000);
    fade('fadeImage', "in", 1, 30, 1);
}