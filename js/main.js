$(document).ready(function() {



    // Dinosaurus slider
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    //console images switch
    $('#pills-island-tab').click(function() {
        // alert('clik');
        document.getElementById("console-img").style.backgroundImage = 'url("img/map.png")';

    });
    $('#pills-movie-tab').click(function() {
        // alert('clik');
        document.getElementById("console-img").style.backgroundImage = 'url("img/movie.jpg")';
        document.getElementById("console-img").style.backgroundPosition = 'right';

    });
    $('#pills-hotel-tab').click(function() {
        // alert('clik');
        document.getElementById("console-img").style.backgroundImage = 'url("img/hotel.jpg")';

    });
    $('#pills-dining-tab').click(function() {
        // alert('clik');
        document.getElementById("console-img").style.backgroundImage = 'url("img/dining.jpeg")';

    });
    $('#pills-activities-tab').click(function() {
        // alert('clik');
        document.getElementById("console-img").style.backgroundImage = 'url("img/activity.jpg")';

    });

    $('.dino-switch').click(function() {
        // alert('ckick')
        if ($('#dino-1').hasClass("swiper-slide-active")) {
            $('#dino-title').html('Triceratops')
            $('#dino-description').html('Triceratops is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period, about 68 million years ago (mya) in what is now North America. It is one of the last known non-avian dinosaur genera, and became extinct in the Cretaceous–Paleogene extinction event 66 million years ago.')
            // alert('dino-1')
        } else if ($('#dino-2').hasClass("swiper-slide-active")) {
            $('#dino-title').html('Tyrannosaurus rex')
            $('#dino-description').html(' The species Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex or colloquially T-Rex, is one of the most well-represented of the large theropods. Tyrannosaurus lived throughout what is now western North America, on what was then an island continent known as Laramidia. ')

        } else {
            $('#dino-title').html('Dreadnoughtus')
            $('#dino-description').html('Rapetosaurus was a fairly typical sauropod, with a short and slender tail, a very long neck and a huge, elephant-like body. Its head resembles the head of a diplodocid, with a long, narrow snout and nostrils on the top of its skull. It was a herbivore and its small, pencil-like teeth were good for ripping the leaves off trees but not for chewing.')


        }


    })

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });



});
