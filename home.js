$(document).ready(function(){

<<<<<<< HEAD
	var openLanding = document.getElementById("landing-container");
=======
	var openLanding = document.getElementById("landing-container"); //check this probs won't need
	var arrowContainer = document.getElementById("arrowContainer"); //function in play.js
>>>>>>> design-page-developing

	$(".arrow-button").click(function(){
		window.location.href = "http://www.nathangassaway.com/home";
	});

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