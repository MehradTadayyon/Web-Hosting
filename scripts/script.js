$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 80,
    autoplay: true,
    autoplayTimeout:4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            
        },
        768: {
            items: 2,
            nav: true
        },
        992 : {
            items : 2,
            nav: true
        }
    }
})