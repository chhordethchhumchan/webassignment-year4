  // ===============scroll up and scroll down==============
  var iScrollPos = 0;

  function menu_fixed() {
      var headTop = $("#head").outerHeight();
      var iCurScrollPos = $(this).scrollTop();
      if (iScrollPos > headTop) {
          $("#menu").css("position", "fixed");
          $("#menu").css("top", "0");
          $("#menu").css("width", "100%");
          $("#menu").css("z-index", "10");
          $("#menu .navbar").css("border-bottom-color", "#0073b1");
      } else {
          $("#menu").css("position", "");
          $("#menu").css("top", "");
          $("#menu .navbar").css("border-bottom-color", "");
      }

      iScrollPos = iCurScrollPos;
  }

  function right_side_bar() {
      var menuHeight = $("#menu .navbar").outerHeight();
      var heightTop = $("#height-header").outerHeight();
      var iCurScrollPos = $(this).scrollTop();
      if (iScrollPos > heightTop) {
          $(".sidebar-sticky").css("position", "fixed");
          $(".sidebar-sticky").css("top", menuHeight + 'px');
      } else {
          $(".sidebar-sticky").css("position", "");
          $(".sidebar-sticky").css("top", menuHeight + '');
      }
  }
  $(window).scroll(function() {
      menu_fixed();
      right_side_bar();

  });


  //   Menu
  $('#menu .navbar-nav a').on('click', function() {
      $('#menu .navbar-nav').find('li.active').removeClass('active');
      $(this).parent('li').addClass('active');
  });