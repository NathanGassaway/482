$(document).ready(function(){
	
	$(".arrow-button").click(function(){
		window.location.href = "http://www.nathangassaway.com/home";
	});
	openProject = function(){
		$(".project-container").click(function(){
			var container = $(this).children(".project-content");
			$(container).show();
			$(".arrow-button").hide();
			$(".close-button").show();
		});
	}

	closeProject = function(){
		$(".close-button").click(function(e){
			var container = $(".project-container").children(".project-content");
			$(container).hide();
			$(".arrow-button").show();
			$(".close-button").hide();
		});
	}

	openProject();
	
	closeProject();

});