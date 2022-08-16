(function ($) {
  Drupal.behaviors.bitcoin = {
        attach: function (context, settings) {

          // Home Slider JS //
          jQuery('#home-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: 3000,
            smartSpeed: 1500, 
            dots: true,
            merge:true,
            nav: false
          });   
          
          // Testimonial Slider JS //
          jQuery('#testimonial-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: 4000,
            smartSpeed: 2000, 
            dots: true,
            nav: false
          });  
           
          
          // Blog Slider JS //
          jQuery('#blog-slider').owlCarousel({
            items: 3,
            autoplay: true,
            margin: 15,
            dots: false,
            nav: true,	
            singleItem:true,
            navigation: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    autoplay: true,
                },
                768:{
                    items:2,
                },
                1000:{
                    items:3,
                    loop:false
                }
            }
          }); 
          
          // Brand Slider JS //
          jQuery('#brand-slider').owlCarousel({
            items: 5,
            autoplay: 1000,
            loop: true,
            dots: false,
            singleItem:true,
            navigation: false,
            addClassActive:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                768:{
                    items:4,
                    nav:false
                },
                1000:{
                    items:5,
                    loop:false
                }
            }
          }); 
          
          // Wrap Div for services section //
          var divs = jQuery(".section-services .service-block > .service-card");
          for(var i = 0; i < divs.length; i+=3) {
            divs.slice(i, i+3).wrapAll("<div class='service-column'></div>");
          }

          // Blog Section //
          jQuery( ".blog-details a, .footer-blog-details a").once().wrap( "<li class='month'></li>" );


          // Back to top JS //
          jQuery(window).scroll(function(){
            var showAfter = 10;
            if ( jQuery(this).scrollTop() > showAfter ) { 
              jQuery('.back-to-top').fadeIn();
            } else { 
              jQuery('.back-to-top').fadeOut();
            }
          });
          
          // Click event to scroll to top //
          jQuery('.back-to-top').click(function(){
            jQuery('html, body').animate({scrollTop : 0},fast);
            return false;
          });

      }
  };
}(jQuery));
