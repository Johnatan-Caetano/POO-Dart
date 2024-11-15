$(document).ready(function() {
    function activateCarousel() {
        // Verifica se a tela é menor ou igual a 768px (mobile)
        if ($(window).width() <= 768 && $('.navbar-mobile').length === 0) {
            // Cria uma nova navbar móvel com carrossel apenas uma vez
            $('body').prepend(`
                <div class="navbar-mobile">
                    <div class="nav-carousel">
                        <!--<a href="/src/template/home-page/index.html">Apresentação</a>-->
                        <a href="/trabPOO/historia-poo.html">Historia do POO</a>
                        <a href="/trabPOO/historia-dart.html">Historia do Dart</a>
                        <a href="/trabPOO/atr-dart.html">Atributos do Dart</a>
                    </div>
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
        if ($(window).width() > 768 && $('.navbar-mobile').length > 0) {
            $('.navbar-mobile').remove();
        } else {
            activateCarousel(); // Reativa o carrossel se for redimensionado para uma tela menor
        }
    });
});
