$(document).ready(function(){
	//home page 
	$("#homeContainer > div").hover(function(){
		$(this).find(".excerptHover").addClass("show");
	},
	function(){
		$(this).find(".excerptHover").removeClass("show");
	});




	//FOOTER
	// external link colors to match their site brands
$(".footer-links li").hover(function(){
	if($(this).hasClass("github")){
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

})