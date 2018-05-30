//fadeShow

function fade(id, duration, frames, toOpacity) {
    var fps = frames / duration;
    var element = document.getElementById(id);
    if(!element.style.opacity){element.style.opacity = "1"}
    var step = (toOpacity - parseInt(element.style.opacity)) / fps;

    while (element.style.opacity > toOpacity) {
        element.style.opacity = parseInt(element.style.opacity) + step;
        setTimeout(1 / fps);
    }
}

function fadeShow() {
    var index = 1;
    while(1 === 1){
        fade('fadeImage', "out", 1, 30, 0);
        setTimeout(5000);
        document.getElementById('fadeImage').src = "images/index/fadeShow/" + (index + 1);
        index++;
    }
}