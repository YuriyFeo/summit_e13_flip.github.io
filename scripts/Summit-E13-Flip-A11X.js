document.addEventListener(
    "DOMContentLoaded",
    function() {
        var winH = $(window).height();
        $(".up-fade-out").each(function(index, element) {
            if (winH > $(this).offset().top) {
                $(this).addClass("ufo-in");
            }
        });
        $(".fade-out").each(function(index, element) {
            if (winH > $(this).offset().top) {
                $(this).addClass("fo-in");
            }
        });
    },
    false
);




$(document).scroll(function(event) {
    var sT = $(this).scrollTop();
    var winH = $(window).height();

    $(".up-fade-out").each(function(index, element) {
        if (sT + winH * 0.9 > $(this).offset().top) {
            $(this).addClass("ufo-in");
        } else {
            $(this).removeClass("ufo-in");
        }
    });
    $(".olshow").each(function(index, element) {
        var olshow = $(this);
        if (sT + winH * 2 > olshow.offset().top + 300) {

            olshow.children('.photos-block').addClass('opacitystart');
            olshow.children('.connect-block').addClass('opacitystart');
            olshow.children('.content').addClass('opacitystart');
            olshow.addClass("olshow-s");

        } else {


            olshow.children('.photos-block').removeClass('opacitystart');
            olshow.children('.connect-block').removeClass('opacitystart');
            olshow.children('.content').removeClass('opacitystart');
            olshow.removeClass("olshow-s");

        }
    });
    $(".polshow").each(function(index, element) {
        var polshow = $(this).children('.poutline');
        if (sT + winH * 2 > polshow.offset().top + 300) {
            polshow.children('.content').addClass('opacitystart');
            polshow.addClass("olshow-s");

        } else {
            polshow.children('.content').removeClass('opacitystart');
            polshow.removeClass("olshow-s");

        }
    });
    $(".fade-out").each(function(index, element) {
        if (sT + winH * 0.9 > $(this).offset().top) {
            $(this).addClass("fo-in");
        } else {
            $(this).removeClass("fo-in");
        }
    });
    $(".r-fade-out").each(function(index, element) {
        if (sT + winH * 0.9 > $(this).offset().top + $(this).height() * 0.7) {
            $(this).addClass("fo-in");
        } else {
            $(this).removeClass("fo-in");
        }
    });
});