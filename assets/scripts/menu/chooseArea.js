// Essa função é executada quando o documento HTML é carregado e pronto para manipulação. 
// Ela envolve o código dentro dela para garantir que seja executado apenas quando o documento estiver pronto.
$(document).ready(function (e) {
  // Essa linha de código aplica um plugin chamado "rwdImageMaps" em todas as imagens que possuem o atributo "usemap".
  // Esse plugin permite tornar as áreas de imagem sensíveis ao redimensionamento responsivo.
  $('img[usemap]').rwdImageMaps();

  $('area').on('click', function () {
    alert($(this).attr('alt') + ' clicked');
  });
});

/*
Essas funções são chamadas quando determinados elementos são abertos no menu. 
Cada função realiza uma série de animações e efeitos visuais para mostrar o conteúdo correspondente na página.
Os elementos "#main-menu", "#loading_apresentacao", "#loading_trabalho", etc., 
são animados usando o método "animate" para alterar sua altura e mostrar/ocultar. 
Os elementos correspondentes, como "#apresentacao", "#trabalho", etc., 
são exibidos usando o método "fadeIn". Além disso, outros elementos como "#back_menu", 
"#back_menu_top" e "#tt" também são exibidos gradualmente usando o método "fadeIn".
*/

function openApresentacao() {
  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () { // 2000
    // Animation complete.
  });

  $("#loading_apresentacao").fadeIn(1000).fadeOut(3000, function () { // 1000  3000
    $("#apresentacao").fadeIn(1000); // 1000
  });

  $("#back_menu").fadeIn(1000); // 1000
  $("#back_menu_top").fadeIn(5000); // 5000
  $("#tt").fadeIn(5000); // 5000
}


function openTrabalho() {
  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });

  $("#loading_trabalho").fadeIn(1000).fadeOut(3000, function () {
    $("#trabalho").fadeIn(1000);
  });

  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openPublicacoes() {
  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });

  $("#loading_publicacoes").fadeIn(1000).fadeOut(3000, function () {
    $("#publicacoes").fadeIn(1000);
  });

  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openTestemunhos() {
  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });

  $("#loading_testemunhos").fadeIn(1000).fadeOut(3000, function () {
    $("#testemunhos").fadeIn(1000);
  });

  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openEquipa() {
  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });

  $("#loading_equipa").fadeIn(1000).fadeOut(3000, function () {
    $("#equipa").fadeIn(1000);
  });

  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openBoasPraticas() {
  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });

  $("#loading_boas_praticas").fadeIn(1000).fadeOut(3000, function () {
    $("#boas_praticas").fadeIn(1000);
  });

  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

/*

$(document).ready(function (e) {
  $('img[usemap]').rwdImageMaps();

  $('area').on('click', function () {
    alert($(this).attr('alt') + ' clicked');
  });
});

function applyHoverEffect(area) {
  area.classList.add('hover-effect');
}

function removeHoverEffect(area) {
  area.classList.remove('hover-effect');
}

function openApresentacao() {
  console.log("openApresentacao");
  // Remover o efeito hover de outras áreas
  var areas = document.querySelectorAll('.desktop-map area');
  areas.forEach(function (area) {
    removeHoverEffect(area);
  });

  // Aplicar o efeito hover na área
  var area = document.querySelector('.desktop-map area[title="APRESENTAÇÃO"]');
  applyHoverEffect(area);

  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });
  // IMAGE GOING ALL THE WAY UP THEN ALL THE WAY DOWN HERE
  $("#apresentacao").fadeIn(1000);
  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openTrabalho() {
  console.log("openTrabalho");
  // Remover o efeito hover de outras áreas
  var areas = document.querySelectorAll('.desktop-map area');
  areas.forEach(function (area) {
    removeHoverEffect(area);
  });

  // Aplicar o efeito hover na área
  var area = document.querySelector('.desktop-map area[title="TRABALHO EM REDE"]');
  applyHoverEffect(area);

  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });
  $("#tendecias").fadeIn(1000);
  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openPublicacoes() {
  console.log("openPublicacoes");
  // Remover o efeito hover de outras áreas
  var areas = document.querySelectorAll('.desktop-map area');
  areas.forEach(function (area) {
    removeHoverEffect(area);
  });

  // Aplicar o efeito hover na área
  var area = document.querySelector('.desktop-map area[title="PUBLICAÇÕES CIENTÍFICAS"]');
  applyHoverEffect(area);

  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });
  $("#publicacoes").fadeIn(1000);
  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openTestemunhos() {
  console.log("openTestemunhos");
  // Remover o efeito hover de outras áreas
  var areas = document.querySelectorAll('.desktop-map area');
  areas.forEach(function (area) {
    removeHoverEffect(area);
  });

  // Aplicar o efeito hover na área
  var area = document.querySelector('.desktop-map area[title="TESTEMUNHOS"]');
  applyHoverEffect(area);

  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });
  $("#testemunhos").fadeIn(1000);
  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openEquipa() {
  console.log("openEquipa");
  // Remover o efeito hover de outras áreas
  var areas = document.querySelectorAll('.desktop-map area');
  areas.forEach(function (area) {
    removeHoverEffect(area);
  });

  // Aplicar o efeito hover na área
  var area = document.querySelector('.desktop-map area[title="EQUIPA"]');
  applyHoverEffect(area);

  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });
  $("#equipa").fadeIn(1000);
  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

function openBoasPraticas() {
  console.log("openBoasPraticas");
  // Remover o efeito hover de outras áreas
  var areas = document.querySelectorAll('.desktop-map area');
  areas.forEach(function (area) {
    removeHoverEffect(area);
    console.log("removeHoverEffect");
  });

  // Aplicar o efeito hover na área
  var area = document.querySelector('.desktop-map area[title="BOAS PRÁTICAS"]');
  applyHoverEffect(area);
  console.log(area);

  $("#main-menu").animate({
    'height': 'toggle'
  }, 2000, function () {
    // Animation complete.
  });
  $("#boas_praticas").fadeIn(1000);
  $("#back_menu").fadeIn(1000);
  $("#back_menu_top").fadeIn(5000);
  $("#tt").fadeIn(5000);
}

*/