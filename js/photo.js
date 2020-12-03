const photo_src = ["../photo/main1.jpg", "../photo/main2.jpg", "../photo/main3.jpg"];
let num = -1;

function slideshow_timer() {
    if (num === 2) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById("mainPhoto").src = photo_src[num];
}

setInterval(slideshow_timer, 3000);
