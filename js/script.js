$(document).ready(function(){
    const slider = $(".slide-one").owlCarousel({
        loop:true,
        margin:15,
        autoplay:1,
        nav:false,
        autoplayHoverPause:true,
        smartSpeed:800,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
$(document).ready(function(){
    const slider = $(".slide-two").owlCarousel({
        loop:true,
        margin:15,
        autoplay:1,
        nav:false,
        autoplayHoverPause:true,
        smartSpeed:800,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});







