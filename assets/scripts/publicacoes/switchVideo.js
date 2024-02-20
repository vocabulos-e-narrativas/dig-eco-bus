const video3Video = document.getElementById("video3-video");
const video3Player = document.getElementById("video3-player");
const video1Link = document.getElementById("video1");
const video2Link = document.getElementById("video2");
const video4Link = document.getElementById("video4");
const video5Link = document.getElementById("video5");

function changeVideo(link, video) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        video3Video.src = video;
        video3Player.style.display = "block";
        video3Player.style.margin = "14% auto 0";
        video3Video.style.pointerEvents = "none";
    });
}

changeVideo(video1Link, `https://www.youtube.com/embed/E9YTRLm9SQs`);
changeVideo(video2Link, `https://www.youtube.com/embed/by9pOZUTd_E`);
changeVideo(video4Link, `https://www.youtube.com/embed/GK0ok3ZCXwM`);
changeVideo(video5Link, `https://www.youtube.com/embed/LEkhKtxFIE8`);

function publicacoesPlayVideo() {
    video3Video.src += "?autoplay=1";
    video3Video.style.display = "block";
    video3Player.style.display = "none";
    video3Video.style.pointerEvents = "initial";
}