$(document).ready(function(){

	// var counter = 0;

	$(".arrow-button").click(function(){
		window.location.href = "http://www.nathangassaway.com/";
	});
	openProject = function(){
		$(".project-container").click(function(){

			var container = $(this).children(".project-content");
			// var content = $(container).children(".project-images");
			// var slideShow = $(content).children(".slideshow");
			// var slide = $(slideShow).children(".slide");

			// if(counter < $(slide).length) $(slide).hide();
   //  		$(slide).eq(counter).show();

			$(container).show();
			$(".arrow-container").hide();
			$(".close-container").show();
			$(".project-container").hide();
			$(this).show();
			$(document).scrollTop(0);
			$("body").css("background-color", "#f0f0f0")
		});
	}

	closeProject = function(){
		$(".close-button").click(function(e){
			var container = $(".project-container").children(".project-content");
			$(container).hide();
			$(".arrow-container").show();
			$(".close-container").hide();
			$(".project-container").show();
			$("body").css("background-color", "#1a1a1a")

			// counter = 0;
		});
	}

	closeProjectEsc = function(){
		$(document).keyup(function(e) {
	 	if (e.keyCode == 27) {
	 		var container = $(".project-container").children(".project-content");
			$(container).hide();
			$(".arrow-container").show();
			$(".close-container").hide();
			$(".project-container").show();
	 	}
	});
	};

	containerImage = function(){
		// $(".project-container").eq(this).css("background-image")
	};

	// ajaxDelay = function(){
	// }

	// slideShow = function(){

	// 	$(".slideshow").click(function(){
	// 		var slide = $(this).children(".slide")
	// 		console.log(slide.length)
	// 		console.log(counter);

	// 		if(counter < $(slide).length) $(slide).hide();
 //    		$(slide).eq(counter).show();
 //    		counter++;

 //    		if(counter >= slide.length) {
 //    			counter = 0;
 //    		}
	// 	});
	// }

	containerImage();

	openProject();

	// slideShow();

	closeProject();

	closeProjectEsc();

});
