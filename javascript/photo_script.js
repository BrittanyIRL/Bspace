$(document).ready(function(){
	$(".disabled_link").prop("disabled", true);
	$(".disabled_link").prop("title", "coming soon");
  $(".disabled_link").removeAttr('href');
	$(".disabled_link").css("color", "rgb(239,213,200)");



	//home page
	$("#homeContainer > div").hover(function(){
		$(this).find(".excerptHover").addClass("show");
	},
	function(){
		$(this).find(".excerptHover").removeClass("show");
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



$('#fullpage_latest').fullpage({
    //Navigation
        navigation: false,
        showActiveTooltip: false,
        slidesNavigation: true,
        //Scrolling
        css3: true,
        scrollingSpeed: 900,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 12000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: true,
        normalScrollElements: '.normal_scroll',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        fixedElements: '#slide-out',
        responsiveWidth: 0,
        responsiveHeight: '100vh',
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){
        },
        afterLoad: function(anchorLink, index){
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        }
  });
