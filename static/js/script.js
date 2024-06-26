(function(a) {
    a(window).on("load", function() {
        a("#status").fadeOut();
        a("#preloader").delay(350).fadeOut("slow");
        a("body").delay(350).css({
            overflow: "visible"
        })
    });
  

    $(document).ready(function () {
        // 初始化 Magnific Popup 插件
        $('.image-link').magnificPopup({type:'image'});
    });
 
    var b = a(".counter");
    if (b.length > 0) {
        b.counterUp({
            delay: 20,
            time: 3000
        })
    } 
 
    var n = a(".quote-wrapper");
    if (n.length > 0) {
        n.owlCarousel({
            loop: true,
            autoplayTimeout: 3500,
            nav: false,
            margin: 20,
            responsive: {
                320: {
                    items: 1
                },
                681: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 5
                }
            }
        })
    }
 
    new WOW().init();
 
 
    var c = a(".right-nav a, .demo a");
    if (c.length > 0) {
        c.on("click", function(d) {
            a(document).off("scroll");
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                var t = a(this.hash)
                  , m = a(".navbar").height() - 2;
                t = t.length ? t : a("[name=" + this.hash.slice(1) + "]");
                if (t.length) {
                    a("html,body").animate({
                        scrollTop: t.offset().top - m
                    }, 1000);
                    return false
                }
            }
        })
    }

    
 
}
)(jQuery);
