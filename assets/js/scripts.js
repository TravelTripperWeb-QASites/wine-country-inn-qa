$(document).ready(function(){
	var height = $(window).height();  //getting windows height
	jQuery('#homePageMainSlider').css('height',height+'px');   //and setting height of carousel
	jQuery('#accomPageSlider').css('height',height+'px');   //and setting height of carousel


	setScrollHeader();  
  	$(window).scroll(function (event) {
	    setScrollHeader();
	});
});

function setScrollHeader(){
	var scroll = $(window).scrollTop();
    if(scroll == 0){
    	$(".navbar-section").removeClass("scroll-header");
    } else {
    	$(".navbar-section").addClass("scroll-header");
    }	
}

