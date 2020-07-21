$(document).ready(function(){
    $('.header__menu-icon').on('click', function(){
        if ($('.navigation-menu').css('display') == 'block') {
            $('.navigation-menu').slideUp();
        } else {
            $('.navigation-menu').slideDown();
        }
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

    $('.call-menu__button').on('click', function(){
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

        $('.popup__notification').fadeIn();
        setTimeout(function(){
            $('.popup__notification').fadeOut();
        }, 2000);
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