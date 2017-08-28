$(document).ready(function(){
	var height = $(window).height();  //getting windows height
	jQuery('#homePageMainSlider').css('height',height+'px');   //and setting height of carousel
	jQuery('#accomPageSlider').css('height',height+'px');   //and setting height of carousel


	setScrollHeader();  
  	$(window).scroll(function (event) {
	    setScrollHeader();
	});

  	  	$(".filter").on("click", function () {
    	var $this = $(this);
	    // if we click the active tab, do nothing
	    if (!$this.hasClass("active")) {
	        $(".filter").removeClass("active");
	        $this.addClass("active"); // set the active tab
	        var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
	        $filter == 'all' ? // if we select "view all", return to initial settings and show all
	        $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn()
	        : // otherwise
	        $(".fancybox").fadeOut(0).filter(function () {
	            return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
	        }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
	    } // if
    }); // on

	$("#lightGallery").lightGallery({
		selector: ".item",
		counter: !1,
		fullScreen: !1
	}), $("img.lazy").show();

});


function setScrollHeader(){
	var scroll = $(window).scrollTop();
    if(scroll == 0){
    	$(".navbar-section").removeClass("scroll-header");
    } else {
    	$(".navbar-section").addClass("scroll-header");
    }	
}

