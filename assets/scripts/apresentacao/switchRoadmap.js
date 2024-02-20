function changeContent(contentId) {
    var image = document.getElementById('roadmap-img');
    //var container = document.querySelector('.roadmap-container');
    var divs = document.getElementsByClassName('container text-left roadmap-text')[0].children;
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id === contentId) {
            divs[i].style.display = 'block';
        } else {
            divs[i].style.display = 'none';
        }
    }
    //container.style.marginBottom = '35em';
    image.src = './assets/images/' + contentId + '.png';
}