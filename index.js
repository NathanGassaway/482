$(document).ready(function(){

	//if user is still at top of page
	setTimeout(function(){
		if($(window).scrollTop() === 0) {
			$("html, body").animate({
				scrollTop: $(".header-container").offset().top
			}, 1000);
	   	}
   	}, 2000)
});