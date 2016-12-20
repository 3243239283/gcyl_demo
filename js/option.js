define(['jquery','index','flexslider','cssjs!flexslidercss'],function(jquery,flexslider){
    $(".flexslider").flexslider({
    	animation: "slide",
    	animationLoop: true,
    	slideshow:true,
    	slideshowSpeed: 5000,
    	directionNav: false
    });

});