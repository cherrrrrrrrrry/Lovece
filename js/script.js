$('.testimotials .testimotials-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
	draggable: true,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true
});

$('.gallery-mob .gallery-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
	draggable: true,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true
});

$(document).ready(function() {
	$('.menu-trigger').click(function() {
		$('nav ul').slideToggle(500);
	});

	$(window).resize(function() {
		if ($(window).width > 960 ) {
			$('nav ul').removeAttr('style');
		}
	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('header').addClass("sticky");
	} else {
		$('header').removeClass("sticky");
	}
});

lightbox.option({
	'wrapAround': true
})

$(document).ready(function() {
	PopUpHide();
});
	function PopUpShow() {
    	$("#popup").show(750);
	}
    function PopUpHide() {
		$("#popup").hide(750);
    }

$(document).ready(function () {
	$("#logo, #main-menu, #assortiment, #buy, #footer-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});