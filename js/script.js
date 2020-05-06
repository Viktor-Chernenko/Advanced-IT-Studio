"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // === nav-mobile ===
  if ($(".nav-mobile").length > 0) {
    var btn_nav_mobile = $('.nav-mobile').find('.nav-btn'),
        nav_mobile = $('.nav-mobile').find('.nav-mobile-container'),
        nav_link = $('.nav-mobile').find('.nav__link');
    btn_nav_mobile.click(function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      nav_mobile.toggleClass('nav-mobile-container_active');
    });
    nav_link.click(function (i) {
      i.preventDefault();
      btn_nav_mobile.removeClass('active');
      nav_mobile.removeClass('nav-mobile-container_active');
    });
  } // === / nav-mobile ===
  // === Scroll top ===


  $(function () {
    $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");

      if ($(window).scrollTop() != "0") {
        $(this).fadeIn("slow");
      }

      var scrollDiv = $(this);
      $(window).scroll(function () {
        if ($(window).scrollTop() == "0") {
          $(scrollDiv).fadeOut("slow");
        } else {
          $(scrollDiv).fadeIn("slow");
        }
      });
      $(this).click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, "slow");
      });
    };
  });
  $(function () {
    $("#scroll-top").scrollToTop();
  }); // === / Scroll top ===
});