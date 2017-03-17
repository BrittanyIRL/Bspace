$(document).ready(function(){
//center on scroll 
$('.scrollspy').scrollSpy();
// mobile nav
 $(".button-collapse").sideNav();

//headline resizing dynamically 

$("#intro").fitText(0.9, { minFontSize: '16px', maxFontSize: '70px' });

$(".statementText").fitText(1.4, { minFontSize: '16px', maxFontSize: '55px'});

// external link colors to match their site brands
$(".external-links li").hover(function(){
	if($(this).hasClass("resume")){
		$(this).find(".fa").css("color", "#fff");
	}
	else if($(this).hasClass("github")){
		$(this).find(".fa").css("color", "#6cc644");
	}
	else if($(this).hasClass("codepen")){
		$(this).find(".fa").css("color", "#FCD000");
	}
	else if($(this).hasClass("linkedin")){
		$(this).find(".fa").css("color", "#0077b5");
	}
	else if($(this).hasClass("twitter")){
		$(this).find(".fa").css("color", "#1DA1F2");
	}
	else if($(this).hasClass("instagram")){
		$(this).find(".fa").css("color", "#833AB4");
	}
	else if($(this).hasClass("flickr")){
		$(this).find(".fa").css("color", "#ff0084");
	}
	else if($(this).hasClass("blog")){
		$(this).find(".fa").css("color", "#d54e21");
	}
}, 
function(){
	$(this).find(".fa").css("color", "#16FFBD");
});

// copyright year update 
let year = new Date();
year = year.getFullYear();
$("#current-year").text(year);

});
