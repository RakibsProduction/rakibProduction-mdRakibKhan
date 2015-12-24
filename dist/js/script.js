// sliding menu on mobile screen
$(function mobileNav() {
  var mobilenav = $('div#navbar-mobile'),
  mainnav   = $('div#navbar-main'),
  navToggle = $('div.navbar-toggle').children('a');
  width     = $(window).width();

  if (width < 769) {
    mobilenav.html(mainnav.html());

    navToggle.on('click', function (){
      if (mobilenav.children('ul').hasClass("expanded")) {
        mobilenav.children('ul.expanded').removeClass("expanded").slideUp(250);
        $(this).removeClass("open");
      } else {
        mobilenav.children('ul').addClass("expanded").slideDown(250);
        $(this).addClass("open");
      }
    });
  }
});

// dynamic header size
$(function dynamicHeader() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  var height = $(window).height();

  if(!isMobile && height > 750) {
    $('#site-header').css({'height': height + 10 + "px"});
  }
});
