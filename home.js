$(document).ready(function(){

	
	document.getElementById("video").controls = false;

	//if user is still at top of page
	setTimeout(function(){
		if($(window).scrollTop() === 0) {
			$(".content-container").show();
			// $("html, body").animate({
			// 	scrollTop: $(".header-container").offset().top
			// }, 1000);
	   	}
   	}, 2000)
});