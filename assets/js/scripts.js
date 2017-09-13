
var fbAppId = '750157678442177';
window.fbAsyncInit = function() {
FB.init({appId: fbAppId, status: true, cookie: true,
xfbml: true});
};
(function() {
var e = document.createElement('script'); e.async = true;
e.src = document.location.protocol +
'//connect.facebook.net/en_US/all.js';
document.getElementById('fb-root').appendChild(e);
}());

$(document).ready(function(){


	$('.fb-share').click(function(e){ 
        e.preventDefault();
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.shares',
            action_properties: JSON.stringify({
                object : {
                   'og:url': window.location.href,
                   'og:title': $("h3.blog-details-title").text(),
                   'og:description': $(".blog-description").text(),
                   'og:image:width': '1200',
                   'og:image:height': '650',
                   'og:image': $(".post-img").css("backgroundImage").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')
                }
            })
        });
    });

    $('.twitter-share').click(function() {
       // window.open("https://www.w3schools.com");       

        var url = window.location.href;
        var media = $(".post-img").css("backgroundImage").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
        var desc = $("h3.blog-details-title").text();    
        $('meta[name="twitter:image"]').attr('content', media);
        var hash = "%23wcountryinn";

        window.open("https://twitter.com/share?text="+encodeURIComponent(desc)+hash+
        "&url="+url, "","toolbar=no, scrollbars=no, resizable=no, top=0, right=0");
        return false;
    });

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

	$(".owl-carousel").owlCarousel({
	    dots: false,
	    nav: true,
	    margin: 30,
	    responsiveClass: true,
	    responsive: {
	      0: {
	        items: 1
	      },
	      960: {
	        items: 2
	      },
	      1366: {
	        items: 3,
	        loop: false
	      }
	    }
	  });	




});


function setScrollHeader(){
	var scroll = $(window).scrollTop();
	if(window.innerWidth > 992) {		
	    if(scroll == 0){
	    	$(".navbar-section").removeClass("scroll-header");
	    } else {
	    	$(".navbar-section").addClass("scroll-header");
	    }	
	}
}

