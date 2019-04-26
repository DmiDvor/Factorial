
$(document).ready(function($){


    $(this).on('click', 'a[href^="#"]', function () {
        $('html, body').animate({
            scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top 
        }, 1000 );
        return false;
    });

    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');

    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") {
                $(scrollDiv).fadeOut("slow");
            } else $(scrollDiv).fadeIn("slow");
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        });
    };
    $("#go-top").scrollToTop();
    
});
   


