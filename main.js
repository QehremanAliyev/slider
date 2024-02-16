var i = 0;
var images = [
    "./images/c++.png",
    "./images/loading.gif",
    "./images/html.png",
    "./images/loading.gif",
    "./images/js.png",
    "./images/loading.gif",
    "./images/python.jpg",
    "./images/loading.gif"
];
const time = 1000;

function changeImage() {
    document.querySelector("#slide").src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImage, time);

}

window.onload = changeImage;

