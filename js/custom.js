   

    // owl-carousel


      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                    items:3
            },
            1000:{
                items:4
            }
        }
          })

     
      

      //initiating jQuery
     jQuery(function($) {
                $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class
                  $('.navbar-wrapper').stickUp();
                });
              });

     // WOW
   new WOW().init();

   // animationCounter
   $('.demo1').animationCounter({
          start: 1,
          end: 104,
          
          step: 1,
          delay: 100
        });
   $('.demo2').animationCounter({
          
          start: 1,
          end: 580,
          step: 2,
          delay: 30
        });
   $('.demo3').animationCounter({
          start: 1,
          end: 1678,
          
          step: 2,
          delay: 10
        });


   