/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if (wScroll > 1100 && wScroll < 1650) {
        $('#myVideo1').trigger('play')
        console.log(wScroll); 
        
    } else {
        $('#myVideo1').trigger('pause')
        console.log ("ini wScroll : " +wScroll)
    
    }
});

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes


function myFunction(x) {   // Fungsi play Video SMK.mp4 in mobile phone
  if (x.matches) { 

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        if (wScroll > 1000 && wScroll < 1300) {     
            $('#myVideo1').trigger('play')
            console.log("oOKOKOKOK  " + wScroll)
        } else {
            $('#myVideo1').trigger('pause')
        }
    });
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



})(jQuery); // End of use strict
    // // Collapse Navbar
    // var navbarCollapse = function () {
    //     if  ($('#mainNav').offset().top > 1000) {
    //         $('video').trigger('play')
    //     } else {
    //         $("video").trigger("pause");
    //     }
    // };
    // // Collapse now if page is not at top
    // navbarCollapse();
    // // Collapse the navbar when page is scrolled
    // $(window).scroll(navbarCollapse);


