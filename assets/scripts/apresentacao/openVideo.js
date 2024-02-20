function apresentacaoPlayVideo() {
    // Obtém a referência ao elemento de vídeo com o ID "apresentacao-video"
    var video = document.getElementById("apresentacao-video");
    // Obtém a referência ao elemento com o ID "apresentacao-player"
    var player = document.getElementById("apresentacao-player");
    // Define a URL do vídeo que será reproduzido no elemento de vídeo
    video.src = "https://www.youtube.com/embed/E9YTRLm9SQs?autoplay=1";
    // Define o estilo do elemento de vídeo para que seja exibido (display: block)
    video.style.display = "block";
    // Define o estilo do elemento do player para que seja ocultado (display: none)
    player.style.display = "none";
    video.style.pointerEvents = "initial";
}