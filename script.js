$(window).on('load', function() {
	$('.loader').fadeOut('slow');
});


$(".toggle").click(function() {
	if($(".toggle").attr("src")=="css/images/icon-hamburger.svg") {
		$(".toggle").attr("src","css/images/icon-close.svg");
		$(".nav-toggle").css("display", "block");
	} else {
		$(".toggle").attr("src","css/images/icon-hamburger.svg");
		$(".nav-toggle").css("display", "none");
	}
});




