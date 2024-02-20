function backToMenu() {
    // Fade out (desvanecer) as classes de elementos com a classe "info_section" durante 1000 milissegundos (1 segundo)
    $(".info_section").fadeOut(1000);
    // Fade out o elemento com o ID "back_menu" durante 1000 milissegundos (1 segundo)
    $("#back_menu").fadeOut(1000);
    // Fade out o elemento com o ID "back_menu_top" durante 1000 milissegundos (1 segundo)
    $("#back_menu_top").fadeOut(1000);
    // Animação no elemento com o ID "main-menu" alterando sua altura para 'toggle' (alternar entre mostrar e ocultar) durante 2000 milissegundos (2 segundos)
    $("#main-menu").animate({
        'height': 'toggle'
    }, 2000, function () {
        // Função de retorno opcional que é executada quando a animação é concluída
        // Pode ser usado para executar código adicional após a animação ser concluída
    });
}