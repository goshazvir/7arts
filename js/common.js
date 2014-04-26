$(document).ready(function() {
	$('.js-btn-popup1').click(function(event) {
		$('.js-popup1').addClass('is-active');
		$('.overlay').addClass('is-active');
		return false;
	});
	$('.js-btn-popup2').click(function(event) {
		$('.js-popup2').addClass('is-active');
		$('.overlay').addClass('is-active');
		return false;
	});
	$('.popup__close, .overlay').click(function(event) {
		$('.popup').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		return false;
	});

});