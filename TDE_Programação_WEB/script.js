// Exibe conteúdo conforme scroll da página
$(document).ready(function() {
    function isElementInView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function showContentOnScroll() {
        $('.hidden-content').each(function() {
            if (isElementInView(this)) {
                $(this).addClass('visible');
            }
        });
    }

    showContentOnScroll();

    $(window).scroll(function() {
        showContentOnScroll();
    });
});


// Exibe resposta de enviado no form de contato
$("#contactForm").submit(function(event) {
    
    event.preventDefault();
    
    alert("Mensagem enviada com sucesso!");
});