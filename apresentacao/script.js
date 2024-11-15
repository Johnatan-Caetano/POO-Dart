$(document).ready(function() {
    function activateCarousel() {
        // Verifica se a tela é menor ou igual a 768px (mobile)
        if ($(window).width() <= 48 * 16 && $('.navbar-mobile').length === 0) { // 768px = 48rem
            // Cria uma nova navbar móvel com carrossel apenas uma vez
            $('.navbar-mobile').append(`
                <div class="nav-carousel">
                    <a href="/src/template/historia-poo/historia-poo.html">Historia do POO</a>
                    <a href="template/historia-dart/historia-dart.html">Historia do Dart</a>
                    <a href="template/atributos-dart/atr-dart.html">Atributos do Dart</a>
                    <a href="#">Atributos do Paradigma</a>
                </div>
            `);

            // Ativa o carrossel na navbar mobile com setas nas laterais
            $('.nav-carousel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
                prevArrow: "<button type='button' class='slick-prev'>&#9664;</button>",
                nextArrow: "<button type='button' class='slick-next'>&#9654;</button>"
            });
        }
    }

    // Ativa o carrossel ao carregar a página, se necessário
    activateCarousel();

    // Verifica a largura da janela ao redimensionar
    $(window).resize(function() {
        // Remove a navbar mobile se a tela for maior que 768px (desktop)
        if ($(window).width() > 48 * 16 && $('.navbar-mobile').length > 0) { // 768px = 48rem
            $('.navbar-mobile').remove();
        } else {
            activateCarousel(); // Reativa o carrossel se for redimensionado para uma tela menor
        }
    });
});
