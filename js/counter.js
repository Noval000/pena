const counters = document.querySelectorAll('[data-counter]');

if (counters) {
    counters.forEach(counter=> {
        counter.addEventListener('click' , e => {
            const target = e.target;

            if (target.closest('.counter__button')) {
                let value = parseInt(target.closest('.counter').querySelector('input').value);

                if (target.classList.contains('counter__button_plus')) {
                    value++;
                } else {
                    --value;
                }

                if (value<=0) {
                    value = 0;
                    target.closest('.counter').querySelector('.counter__button').classList.add('disabled')
                } else {
                    target.closest('.counter').querySelector('.counter__button').classList.remove('disabled')
                }

                target.closest('.counter').querySelector('input').value = value;
            }
        })
    })
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 153){
        $('.fixed-mobile').addClass("dis");         
    }
    else{
        $('.fixed-mobile').removeClass("dis");         
    }
});






jQuery(($) => {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 780) $(".to-up").fadeIn();
        else $(".to-up").fadeOut();
    });
    $(".to-up").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 566);
        return false;
    });
});







