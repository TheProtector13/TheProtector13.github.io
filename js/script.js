(function ($) {
    'use strict';

    // Reaplace text
    var intervalId = window.setInterval(function () {
        $(".changing-word").each(function () {
            var texts = $(this).data("options");
            var index = $(this).data("selectedid") + 1;
            if (index >= texts.length) {
                index = 0;
            }
            $(this).addClass("fade-out");

            var obj = $(this);
            setTimeout(function () {
                obj.data("selectedid", index);
                obj.html(texts[index]);
                obj.removeClass("fade-out");
            }, 400); 
        });
    }, 3000);

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        var
            /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
            c2left = document.getElementById('l2').offsetLeft,
            c2top = document.getElementById('l2').offsetTop,
            c3left = document.getElementById('l3').offsetLeft,
            c3top = document.getElementById('l3').offsetTop,
            c4left = document.getElementById('l4').offsetLeft,
            c4top = document.getElementById('l4').offsetTop,
            c5left = document.getElementById('l5').offsetLeft,
            c5top = document.getElementById('l5').offsetTop,
            c6left = document.getElementById('l6').offsetLeft,
            c6top = document.getElementById('l6').offsetTop,
            c7left = document.getElementById('l7').offsetLeft,
            c7top = document.getElementById('l7').offsetTop,
            c8left = document.getElementById('l8').offsetLeft,
            c8top = document.getElementById('l8').offsetTop,
            c9left = document.getElementById('l9').offsetLeft,
            c9top = document.getElementById('l9').offsetTop;

        var w = window.innerWidth;
        var h = window.innerHeight;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;
            var offsetpercentX = window.innerWidth / w;
            var offsetpercentY = window.innerHeight / h;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left * offsetpercentX, c2top * offsetpercentY, x, y, 25);
            mouseParallax('l3', c3left * offsetpercentX, c3top * offsetpercentY, x, y, 20);
            mouseParallax('l4', c4left * offsetpercentX, c4top * offsetpercentY, x, y, 35);
            mouseParallax('l5', c5left * offsetpercentX, c5top * offsetpercentY, x, y, 30);
            mouseParallax('l6', c6left * offsetpercentX, c6top * offsetpercentY, x, y, 45);
            mouseParallax('l7', c7left * offsetpercentX, c7top * offsetpercentY, x, y, 30);
            mouseParallax('l8', c8left * offsetpercentX, c8top * offsetpercentY, x, y, 25);
            mouseParallax('l9', c9left * offsetpercentX, c9top * offsetpercentY, x, y, 40);
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // projects slider
    $('.projects-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})(jQuery);