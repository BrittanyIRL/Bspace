$(document).ready(function(){
	//home page
	$("#homeContainer > div").hover(function(){
		$(this).find(".excerptHover").addClass("show");
	},
	function(){
		$(this).find(".excerptHover").removeClass("show");
	});

 // color hover on external links

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
 },
 function(){
 	$(this).find(".fa").css("color", "#C15492");
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
	$(this).find(".fa").css("color", "#C15492");
});

// Initialize collapse button
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

})
