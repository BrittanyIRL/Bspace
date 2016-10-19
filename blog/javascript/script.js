$(document).ready(function(){
	//home page 
	$("#homeContainer > div").hover(function(){
		$(this).find(".excerptHover").addClass("show");
	},
	function(){
		$(this).find(".excerptHover").removeClass("show");
	})
})