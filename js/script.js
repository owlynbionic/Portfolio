$(document).ready(function(){
/* ======================
      fullnav
   ======================
*/
  $(".footernavcont").click(function() {
    $(".fullnav").slideToggle(1000);
    $(".projmenu").toggleClass('active')
    $(".projfolder").toggleClass('active')
    // $(".sidebar").toggleClass("active")

});

/* ======================
      menu
   ======================
*/
    $(".menu-icon").click(function(){
        $(".menu-icon").toggleClass("active")
        $(".dropdown").toggleClass("active");
    });

    $(".menu-logo").click(function(){
        $(".sidebar").toggleClass("active")
    });

    $('.home').click(function(){
      $('.screen').toggleClass('active');
    });

    $('.menu_svg').click(function(){
        $('ul').toggleClass('active');
    });
  /* ======================
      scroll to top - note: remake this
    ======================
  */
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $('.scrollToTop').fadeIn();
        $('.scrollToTop').addClass('visible');
      } else {
        $('.scrollToTop').fadeOut();
        $('.scrollToTop').removeClass('visible');
      }
    });
        $('.scrollToTop').click(function(){
          $('html, body').animate({scrollTop: 0}, 1000)
        })


        // $('#pagepiling').pagepiling({
        //     navigation: {
        //         'textColor': '#fff',
        //         'bulletsColor': '#fff',
        //         'position': 'right',
        //         'tooltips':['Norway','Switzerland','Australia','Italy']
        //     }
        // });
});


/*
=============================
 Circle Landing
=============================
 */
$(document).on('mouseover', '.landing-container .column', function(){
  //   $(this).addClass('active_landing').siblings().removeClass('active_landing');
  })
  
  $(document).on('mouseover', '.circle_container .circle', function(){
    $(this).addClass('active_projects').siblings().removeClass('active_projects');
  //   $("body").css("background-color", "white");
  })
  $(document).on('mouseleave', '.circle_container .circle', function(){
      $(this).addClass('deactive_projects').siblings().removeClass('deactive_projects');
      // $("body").css("background-color", "gray");
    })

/*
=============================
 Flex Landing
=============================
 */
$(document).on('mouseover', '.landing-container .column', function(){
  $(this).addClass('active').siblings().removeClass('active');
})

// on click, opens up screen
const trainingPlan = document.getElementById("training-plan");
const trainingWidget = document.getElementById("training-widget");

function openScreen() {
  trainingPlan.style.display = "none";
}

function closeScreen() {
  if (trainingPlan.style.display === "none") {
      trainingPlan.style.display = "block";
  } else {
      trainingPlan.style.display = "none";
  }
}
/*
=============================
 Circle Landing
=============================
 */
// landing - hover
$(document).on('mouseover', '.landing-container .column', function(){
  $(this).addClass('active_landing').siblings().removeClass('active_landing');
})

$(document).on('mouseover', '.circle_container .circle', function(){
  $(this).addClass('active_projects').siblings().removeClass('active_projects');
})

/*
=============================
 Dark Theme
=============================
 */
/* darklight box */
$(document).ready(function(){
  $('ul.darklight').click(function(){
    $('ul.darklight').toggleClass('dl-active');
    $('body').toggleClass('dl-dark');


  })
})

/* darklight switch */
$(document).ready(function(){
  $('input.darklight-switch').click(function(){
    $('body').toggleClass('dl-dark');
  })
})

/* ======================
    sticky nav
    execute function when offset = nav
   ======================
*/

window.onscroll = function(){
  stickyNav()
};

const navbar2 = document.getElementById("navbar");
const sticky = navbar2.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= 100 + sticky)
  {
      navbar2.classList.add("sticky");
  } 
  else {
      navbar2.classList.remove("sticky");
  }

}
