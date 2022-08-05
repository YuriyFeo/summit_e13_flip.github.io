$(function() {

    if ($('.sub-group').length > 0) {
        var arrAll = [];

        let $team_slider_2 = $(".sub-feature-nav");
        let $team_slider = $(".sub-feature-content");

        $team_slider_2.each(function() {
            let n = $(this).children().length;
            $(this).data("number", n);

            let e = $(this).html();
            arrAll.push(e);
        });

        let team_slider_settings_2 = {
            dots: false,
            arrows: false,

            centerPadding: 0,

            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".sub-feature-content",
            swipe: false,
            touchMove: false,
            centerMode: true,
            focusOnSelect: true,

            prevArrow: `<div class="slider__class1-prev setbg"></div>`,
            nextArrow: `<div class="slider__class1-next setbg"></div>`,
            responsive: [{
                breakpoint: 575,
                settings: {
                    infinite: false,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            }, ],
        };

        let team_slider_settings = {
            fade: true,
            //fadeз‚єж·Ўе…Ґж·Ўе‡є
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
            touchMove: true,
            adaptiveHeight: true,
            asNavFor: ".sub-feature-nav",
        };

        function slider_nav() {
            let slider_nav_uni = 0;

            $team_slider_2.each(function() {
                slider_nav_uni++;
                $(this).addClass(`sub-feature-nav${slider_nav_uni}`);

                let n = $(this).children().length;

                let arrA = JSON.parse(JSON.stringify(team_slider_settings_2));
                arrA.asNavFor = `.sub-feature-content${slider_nav_uni}`;
                arrA.slidesToShow = n;
                $(this).slick(arrA);
            });
        }

        function slider_content() {
            let slider_content_uni = 0;

            $team_slider.each(function() {
                slider_content_uni++;
                $(this).addClass(`sub-feature-content${slider_content_uni}`);
                let arrB = JSON.parse(JSON.stringify(team_slider_settings));
                arrB.asNavFor = `.sub-feature-nav${slider_content_uni}`;
                $(this).slick(arrB);
            });
        }

        function pushsomethingin() {
            let numC = 0;
            $team_slider_2.each(function() {
                numC++;
                $(this).removeClass(
                    `sub-feature-nav${numC} slick-initialized slick-slider`
                );
                $(this).html(arrAll[numC - 1]);

                let w = $("html").width();

                if (w < 575) {
                    if ($(this).data("number") < 4) {
                        let k = 4 - $(this).data("number");
                        for (i = 0; i < k; i++) {
                            $(this).append(
                                `<li class="cannotclick"><div style="width:85px;height:85px"></div></li>`
                            );
                        }
                    }
                }
            });
            slider_nav();
            let numD = 0;
            $team_slider_2.each(function() {
                numD++
                let $slickSlide = $(`.sub-feature-nav${numD} .slick-slide`)
                let kk = $(this).data('number')
                $slickSlide.each(function() {
                    if ($(this).data("slick-index") >= (kk)) {
                        $(this).addClass("cannotclick")
                    }
                })

            });
            buttonCheck();
        }

        var resizeTimer = null;
        $(window).bind("resize", function() {
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                pushsomethingin();
            }, 500);
        });
        pushsomethingin();
        slider_content();

        // click function

        function buttonCheck() {
            $team_slider_2.each(function() {
                let now = $(this).find(".slick-center").data("slick-index");
                let end = $(this).data("number") - 1;
                if (now == 0) {
                    $(this).find(".slider__class1-prev").addClass("displaynone");
                } else {
                    $(this).find(".slider__class1-prev").removeClass("displaynone");
                }

                if (now == end) {
                    $(this).find(".slider__class1-next").addClass("displaynone");
                } else {
                    $(this).find(".slider__class1-next").removeClass("displaynone");
                }
            });
        }
        buttonCheck();

        $('.sub-feature-nav').on("click", ".slick-arrow", function(e) {
            e.preventDefault();
            buttonCheck();
        });

        $('.sub-feature-nav').on("click", ".slick-slide", function(e) {
            e.preventDefault();
            buttonCheck();
        });
    }

    if ($("#pd-slideshow").length > 0) {
        $("#pd-slideshow").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 1000,
            fade: true,
            pauseOnHover: true,
        });
    }

    if ($("#pd-recommand").length > 0) {
        $("#pd-recommand").slick({
            dots: true,
            arrows: true,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: `<div class="pd-recommand-prev pd-recommand-arrow setbg"></div>`,
            nextArrow: `<div class="pd-recommand-next pd-recommand-arrow setbg"></div>`,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: true,
                },
            }, ],
        });
    }





});