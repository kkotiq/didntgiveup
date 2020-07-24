$(document).ready(function(){
    $('.header__menu-icon').on('click', function(){
        $('.navigation-menu').slideDown();
        $('.header__menu-icon').hide();
        $('.header__menu-close').show();

    });

    $('.header__menu-close').on('click', function(){
        $('.navigation-menu').slideUp();
        $('.header__menu-close').hide();
        $('.header__menu-icon').show();
    });

    $('nav a').on('click', function(e){
        e.preventDefault();
        
        let href = $(this).attr('href');
        let offset = $(href).offset().top;
        $('body, html').animate({
            scrollTop: offset,
        }, 700);
    });

    $('.up-button').on('click', function(){
        $('body, html').animate({
            scrollTop: 0,
        }, 700);
    });

    $('.more-info').on('click', function(){
        $('body, html').addClass('scroll-disabled')
        $('.popup').fadeIn();
    });

    $('.header__call-button').on('click', function(){
        $('body, html').addClass('scroll-disabled')
        $('.popup').fadeIn();
    });

    $('.footer__call-button').on('click', function(){
        $('body, html').addClass('scroll-disabled')
        $('.popup').fadeIn();
    });

    $('.popup__submit-button').on('click', function(){
        if ($('.popup__form-input').length == 0) {
            $('.popup__form-input').addClass('error');
        } else {
            $('.popup__form-input').removeClass('error');
        }
    });

    $(document).mouseup(function (e){ 
        let popup = $('.popup__form-container');
        if (!popup.is(e.target)
          && popup.has(e.target).length === 0){
              $('.popup').fadeOut(); 
              $('body, html').removeClass('scroll-disabled');
          }
        });
});