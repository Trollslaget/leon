function getClientHeight() {
	return document.documentElement.clientHeight;
}
function getClientWidth() {
	return document.documentElement.clientWidth;
}

$(document).ready(function () {
	var cl_wi = getClientWidth();
	var navbar = $(".page-navbar");
	var offset = navbar.length > 0 ? navbar.offset().top : 0;
	
	$(".popup-open-btn").click(function() {
  
	  $(".popup-wrapper").addClass("active");
	});
	$(".popup-close-img").click(function() {
	  $(".popup-wrapper").removeClass("active");
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() + 100 >= offset) {
			
			navbar.addClass("fixed-top");
		} else {
			navbar.removeClass("fixed-top");
		}
	});
	if ($('.fancybox').length > 0) {
        // Если элементы присутствуют, активируем Fancybox
        $(".fancybox").fancybox();
      } 	
	// $('.navbar-item').on('click', function (e) {
	// 	e.preventDefault();
	// 	var targetId = $(this).data('scroll-to');
	// 	console.log(targetId);
	// 	console.log($(this));
	// 	$('html, body').animate({
	// 		scrollTop: $('#' + targetId).offset().top
	// 	}, 800);
	// });

	// $(".owl-reviews").owlCarousel({
	// 	responsive: {
	// 		0: { items: 1 },
	// 		575: { items: 2 },
	// 		768: { items: 2 },
	// 		992: { items: 2 },
	// 		1200: { items: 2 },
	// 	},
	// 	loop: true,
	// 	autoplay: true,
	// 	margin: 20,
	// 	autoplayTimeout: 5000,
	// 	autoplayHoverPause: false,
	// 	smartSpeed: 1000,
	// 	navText: [
	// 		'<div class="reviews_arr r_arr_l"><img src="/public/img/arr_left.svg" alt=""></div>',
	// 		'<div class="reviews_arr r_arr_r"><img src="/public/img/arrow.svg" alt=""></div>',
	// 	],
	// 	animateIn: "fadeInRight",
	// 	animateOut: "fadeOutRight",
	// 	nav: true,
	// 	dots: false,
	// });

	// $(".mmenu_btn").click(function () {
	// 	if ($(".mmenu").css("display") == "none") {
	// 		$(".mmenu").slideToggle(300);
	// 		$(this).children("img").attr("src", "/public/img/exit.svg");
	// 	} else {
	// 		$(".mmenu").slideToggle(500);
	// 		$(this).children("img").attr("src", "/public/img/burger.png");
	// 	}
	// });

	// $(".mmenu_href").click(function () {
	// 	$(".mmenu_sub").slideToggle(300);
	// });

	// $(".select").on("click", ".select__head", function () {
	// 	if ($(this).hasClass("open")) {
	// 		$(this).removeClass("open");
	// 		$(this).next().fadeOut();
	// 	} else {
	// 		$(".select__head").removeClass("open");
	// 		$(".select__list").fadeOut();
	// 		$(this).addClass("open");
	// 		$(this).next().fadeIn();
	// 	}
	// });

	// $(".modal-call").click(function () {
	// 	//$( '#'+$(this).data( 'target' ) ).removeClass('hidden');
	// 	$("#" + $(this).data("target")).fadeIn(200);
	// 	return false;
	// });

	// $(".modal-close").click(function () {
	// 	//$(this).parent().parent().addClass('hidden');
	// 	$(this).parent().parent().fadeOut(200);
	// });

	// $(".select").on("click", ".select__item", function () {
	// 	$(".select__head").removeClass("open");
	// 	$(this).parent().fadeOut();
	// 	$(this).parent().prev().html($(this).html());
	// 	$(this).parent().prev().prev().val($(this).html());
	// });

	// $(document).click(function (e) {
	// 	if (!$(e.target).closest(".select").length) {
	// 		$(".select__head").removeClass("open");
	// 		$(".select__list").fadeOut();
	// 	}
	// });

	// $("a[href^='#']").click(function () {
	// 	var _href = $(this).attr("href");
	// 	_href = _href.replace("/", "");
	// 	$("html, body").animate({ scrollTop: $(_href).offset().top - 100 });
	// 	return false;
	// });

	// $("a[href^='/#']").click(function () {
	// 	var _href = $(this).attr("href");
	// 	_href = _href.replace("/", "");
	// 	$("html, body").animate({ scrollTop: $(_href).offset().top - 100 });
	// 	return false;
	// });

	//  $(window).scroll(function(){
	//      if($(this).scrollTop() > 1000){
	//          $(".dop_menu").addClass('dop_menu_fixed');
	         
	//      }
	//      else{
	//          $(".dop_menu").removeClass('dop_menu_fixed');
	//      }

	    
	//  });
	

	// $("#dropdownIcon").click(function() {
	//     // Переключаем отображение выпадающего контента
	//     $(".dropdown-content").toggle();

	//     // Переключаем иконку между стрелкой вверх и вниз
	//     var iconSrc = $("#dropdownIcon img").attr("src");
	//     if (iconSrc === "img/svg/arrow-down.svg") {
	//       $("#dropdownIcon img").attr("src", "img/svg/arrow-up.svg");
	//     } else {
	//       $("#dropdownIcon img").attr("src", "img/svg/arrow-down.svg");
	//     }
	//   });

	// $(".collapsible").click(function () {
	// 	$(this).toggleClass("active");
    // })
	// $(".collapsible-button").click(function() {
	// 	var collapsibleContent = $(".collapsible-content");
	// 	if (collapsibleContent.css("max-height") !== "0px") {
	// 	  collapsibleContent.css("max-height", "0");
	// 	} else {
	// 	  collapsibleContent.css("max-height", collapsibleContent.prop("scrollHeight") + "px");
	// 	}
	//   });
	$("#slider-range").slider({
        range: true,
        min: 0,
        max: 1000,
        values: [0, 250],
        slide: function (event, ui) {
            $("#start-amount").val(ui.values[0]);
            $("#end-amount").val(ui.values[1]);
        },  
      });
      
      $("#start-amount").val($("#slider-range").slider("values", 0));
      $("#end-amount").val($("#slider-range").slider("values", 1));
      
      $("#start-amount, #end-amount").on("input", function() {
          var startValue = parseInt($("#start-amount").val());
          var endValue = parseInt($("#end-amount").val());
          $("#slider-range").slider("values", 0, startValue);
          $("#slider-range").slider("values", 1, endValue);
      });




	  $("#slider-range-popup").slider({
        range: true,
        min: 0,
        max: 1000,
        values: [0, 250],
        slide: function (event, ui) {
            $("#start-amount-popup").val(ui.values[0]);
            $("#end-amount-popup").val(ui.values[1]);
        },  
      });
      
      $("#start-amount-popup").val($("#slider-range-popup").slider("values", 0));
      $("#end-amount-popup").val($("#slider-range-popup").slider("values", 1));
      
      $("#start-amount-popup, #end-amount-popup").on("input", function() {
          var startValuepopup = parseInt($("#start-amount-popup").val());
          var endValuepopup = parseInt($("#end-amount-popup").val());
          $("#slider-range-popup").slider("values", 0, startValuepopup);
          $("#slider-range-popup").slider("values", 1, endValuepopup);
      });
  
	$(".collapsible").click(function() {
	
		var content = $(this).find(".content");
		var image = $(this).find(".dropdown-image");
  
		// Toggle the max-height of the content
		content.toggleClass("open");
		content.css("max-height", content.hasClass("open") ? content.prop("scrollHeight") + "px" : "0");
  
		// Toggle the rotation of the image
		image.toggleClass("open");
	  });
	
	  $('.modal-menu-close-btn').on('click', function() {
		// Найти элемент с классом modal-menu-open и удалить у него класс modal-menu-open
		$('.modal-menu-open').removeClass('modal-menu-open');
	  });
	  $('.header-phone-navigation__btn').on('click', function() {
		// Найти элемент с классом modal-menu-open и удалить у него класс modal-menu-open
		$('.modal-menu__wrapper').addClass('modal-menu-open');
	  });
  

	$(".totop").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 300);
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			$(".totop").removeClass("hidden");
		} else {
			$(".totop").addClass("hidden");
		}
	});

	$("input[type=tel]").mask("+7 (999) 999 99 99");
});
