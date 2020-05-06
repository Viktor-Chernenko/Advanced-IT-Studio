"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // === slider ===
  // var mySwiper = new Swiper('.slider-top .swiper-container', {
  //     navigation: {
  //         nextEl: '.slider-top .swiper-button-next',
  //         prevEl: '.slider-top .swiper-button-prev'
  //     },
  //     pagination: {
  //         el: '.slider-top .swiper-pagination',
  //         clickable: 'true'
  //     }
  // });
  // var galleryThumbs = new Swiper('.detailed-product-card .gallery-thumbs', {
  //     slidesPerView: 3,
  //     spaceBetween: 5,
  //     loop: true,
  //     loopedSlides: 5,
  //     watchSlidesVisibility: true,
  //     watchSlidesProgress: true
  //   });
  //   var galleryTop = new Swiper('.detailed-product-card .gallery-top', {
  //     loop: true,
  //     loopedSlides: 5,
  //     thumbs: {
  //       swiper: galleryThumbs
  //     }
  // });
  // === / slider ===
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
  // === nav-catalog  ===
  // if($(".btn_catalog").length > 0) {
  //   var btn_catalog = $('.btn_catalog'),
  //       list_catalog = $('.catalog').children('.catalog-list'),
  //       btn_catalog_close = $('.btn-catalog-close');
  //       btn_catalog.click(function (e) { 
  //     e.preventDefault();
  //     list_catalog.toggleClass('catalog-list_active');
  //   });
  //   if($(document).width() <= 425 ) {
  //     btn_catalog_close.click(function (e) { 
  //       e.preventDefault();
  //       list_catalog.toggleClass('catalog-list_active');
  //     });
  //   }
  // }
  // === nav-catalog  ===
  // === Маска для ввода телефона в секции Сервис ===
  // var form_tel = $('.form-tel__input');
  // if (form_tel.length > 0) {
  // form_tel.mask("+7 (999) 999 - 9999");
  // }
  // === Кнопки выбора страницы с списком товаров ===
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
  // === tabs ===
  // if ($(".tabs-1").length > 0) {
  //   var tab_1 = $(".tabs-1__label");
  //   tab_1.click(function () {
  //       tab_1.removeClass('tabs-1__label_active')
  //       $(this).addClass('tabs-1__label_active')
  //   });
  // }
  // if ($(".tabs-color").length > 0) {
  //   var tab_color = $(".tabs-color__label");
  //   tab_color.click(function () {
  //     var val = $(this).find('.tabs-color-box').css('background-color');
  //       tab_color.removeClass('tabs-color__label_active')
  //       $(this).addClass('tabs-color__label_active')
  //       console.log(val)
  //       $('.profile-color__img-box').css('border-color', val);
  //   });
  // }
  // === / tabs ===
  // === select ===
  // $(document).click(function(event) {
  //   if (!$(event.target).closest(".dropdown__current").length) {
  //     $(".dropdown__current").parent().removeClass('dropdown_open');
  //   }   
  // });
  // $('.dropdown__current').click(function(e){
  //   e.preventDefault();
  //   var button =  $(this),
  //     parent = button.parent();
  //   if(window.__lastOpenedButton && window.__lastOpenedButton != button)
  //   {
  //     window.__lastOpenedButton.parent().removeClass('dropdown_open');
  //   }
  //     parent.toggleClass('dropdown_open');
  //     window.__lastOpenedButton = button;
  // })
  // $(".dropdown").each(function() {
  //   var btn = $(this).find('[type="radio"]'),
  //     value = $(this).find('.dropdown__current');
  //     btn.change(function(){
  //       value.text($(this).val());
  //     });
  // });
  // === select ===
  // === pop ===
  // if($(".btn-pop-up").length > 0) {
  //   var btn_pop_up = $('.btn-pop-up'),
  //       pop_up = $('.app').children('.pop-up'),
  //       btn_close_pop_up = $('.app').children('.pop-up').find('.btn-close');
  //   btn_pop_up.click(function (e) { 
  //     e.preventDefault();
  //     pop_up.addClass('pop-up_active');
  //   });
  //   btn_close_pop_up.click(function (e) { 
  //     e.preventDefault();
  //     pop_up.removeClass('pop-up_active');
  //   });
  // }
  // === pop ===
});