


$(document).ready(function () {
	"use strict";
	
	
	function logoSwitch() {
		$('.altLogo').each(function () {
			$(this).css('top',
				$('.startLogo').offset().top - $(this).closest('.page').offset().top
			);
		});
	}

	$(document).scroll(function () {
		logoSwitch();
	});

	logoSwitch();

	// MENU

	$(".burgerMenuButton").click(function () {
		$(".burgerMenu").toggleClass("open");
		$(".burgerMenuButton").toggleClass("toggle");
	});

	$(".burgerLink").click(function () {
		$(".burgerMenu").toggleClass("open");
		$(".burgerMenuButton").toggleClass("toggle");
	});
	
	$(".burgerAskButton").click(function () {
		$(".askForm").toggleClass("askForm-open");
		
	});

	$(".profil-besked").click(function () {
		$(".askForm").toggleClass("askForm-open");
		
	});
	
	var scrollTop = 0;
  $(document).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 100) {
      $(".nav-bacground").addClass("nav-bacground-scroll");
    } else if (scrollTop < 100) {
      $(".nav-bacground").removeClass("nav-bacground-scroll");
    } 
    
  }); 
	
	

	$(".up-cycling-rapport-button").click(function () {
		
		$(".up-cycling-rapport").toggleClass("up-cycling-show");

	});

	$(".up-cycling-rapport-hide-button").click(function () {
		$(".up-cycling-rapport").toggleClass("up-cycling-show");
		
	});
	
	$(".mums-rapport-button").click(function () {
		
		$(".mums-rapport").toggleClass("mums-show");

	});

	$(".mums-rapport-hide-button").click(function () {
		$(".mums-rapport").toggleClass("mums-show");
		
	});
	
	
	
	$(".remowe-show").click(function () {
		$(".up-cycling-rapport").removeClass("up-cycling-show");
		$(".mums-rapport").removeClass("mums-show");
		$(".burgerMenu").removeClass("open");
		$(".askForm").removeClass("askForm-open");
		$(".burgerMenuButton").removeClass("toggle");
		$(".flow1-container").removeClass("show-flow1");
		$(".flow2-container").removeClass("show-flow2");
		$(".flow3-container").removeClass("show-flow3");
		$(".flow4-container").removeClass("show-flow4");
		$(".eksamen1-container").removeClass("show-eksamen1");
	});
	
	
	$(".flow1-button").click(function () {
		
		$(".flow1-container").toggleClass("show-flow1");
	});

	$(".flow2-button").click(function () {
		$(".flow2-container").toggleClass("show-flow2");
	});
	
	$(".flow3-button").click(function () {
		$(".flow3-container").toggleClass("show-flow3");
	});
	
	$(".flow4-button").click(function () {
		$(".flow4-container").toggleClass("show-flow4");
	});
	
	//$(".flow5-button").click(function () {
//		$(".eksamen1-container").toggleClass("show-eksamen1");
//	});
	
	$(".eksamen1-button").click(function () {
		$(".eksamen1-container").toggleClass("show-eksamen1");
	});
	
	
	
	
	
	
	$(".eksamen1-sub").click(function () {
		$("#eksamen1-tab1").prop("checked", true);
	});
	$(".eksamen2-sub").click(function () {
		$("#eksamen1-tab2").prop("checked", true);
	});
	$(".eksamen3-sub").click(function () {
		$("#eksamen1-tab3").prop("checked", true);
	});
	$(".eksamen4-sub").click(function () {
		$("#eksamen1-tab4").prop("checked", true);
	});
	$(".eksamen5-sub").click(function () {
		$("#eksamen1-tab5").prop("checked", true);
	});
	$(".eksamen6-sub").click(function () {
		$("#eksamen1-tab6").prop("checked", true);
	});
	$(".eksamen7-sub").click(function () {
		$("#flow2-tab3").prop("checked", true);
	});
	
	
	
	
	
	
	
	

});
