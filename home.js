$(document).ready(function(){

	var openLanding = document.getElementById("landing-container");
	var arrowContainer = document.getElementById("arrowContainer");

	// document.getElementById("video").controls = false;

	// //if user is still at top of page
	// setTimeout(function(){
	// 	if($(window).scrollTop() === 0) {
	// 		$(".content-container").show();
	// 		// $("html, body").animate({
	// 		// 	scrollTop: $(".header-container").offset().top
	// 		// }, 1000);
	//    	}
 //   	}, 2000)

	$.ajax({
	url:"https://www.kimonolabs.com/api/429gz3gu?apikey=onTT1v1xy7KG7WEYMgtZXlRHeHCnWEpn",
	crossDomain: true,
	dataType: "jsonp",
	success: function (response) {
	//Do something with the response
	var okay = response.results.collection1[0].property1
	console.log(okay)
	},
	error: function (xhr, status) {
	console.log(error);
	}
	}),

	openLanding.onclick = function(){
	window.location.href = "http://www.nathangassaway.com/home";
	}

});