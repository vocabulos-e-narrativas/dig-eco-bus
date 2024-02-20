const testemunhosVideo = document.getElementById("testemunhos-video");
const testemunhosPlayer = document.getElementById("testemunhos-player");
const privacidadeLink = document.getElementById("privacidade");
const protecaoLink = document.getElementById("protecao");
const piratariaLink = document.getElementById("pirataria");
const lixoLink = document.getElementById("lixo");

const privacidadeP = document.getElementById("p-privacidade");
const protecaoP = document.getElementById("p-protecao");
const piratariaP = document.getElementById("p-pirataria");
const lixoP = document.getElementById("p-lixo");


function changeVideo(link, video, paragraph) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        testemunhosVideo.src = video;
        testemunhosPlayer.style.display = "block";
        testemunhosPlayer.style.margin = "14% auto 0";
        testemunhosVideo.style.pointerEvents = "none";
        hideAllParagraphs();
        paragraph.style.display = "block";
    });
}

function hideAllParagraphs() {
    const paragraphs = document.querySelectorAll(".container p[id^='p-']");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    }
}

changeVideo(privacidadeLink, "https://www.youtube.com/embed/E9YTRLm9SQs", privacidadeP);
changeVideo(protecaoLink, "https://www.youtube.com/embed/by9pOZUTd_E", protecaoP);
changeVideo(piratariaLink, "https://www.youtube.com/embed/GK0ok3ZCXwM", piratariaP);
changeVideo(lixoLink, "https://www.youtube.com/embed/LEkhKtxFIE8", lixoP);

function testemunhosPlayVideo() {
    testemunhosVideo.src += "?autoplay=1";
    testemunhosVideo.style.display = "block";
    testemunhosPlayer.style.display = "none";
    testemunhosVideo.style.pointerEvents = "initial";
}