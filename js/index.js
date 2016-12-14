define(['jquery','layer','cssjs!layercss','flexslider','cssjs!flexslidercss'],function(jquery,layer,flexslider){
    /*筹划中产品提示弹窗：layer*/
    $('.charitable').click(function(){
        layer.open({
            style:'color:#FFFFFF;font-size:3.2rem;padding:40px 0;',
            content: '正在筹划中...',
            skin: 'msg',
            time: 2
        });
    });

    /*首页banner/服务分类切换效果*/
    $(".flexslider").flexslider({
    	animation: "slide",
    	animationLoop: true,
    	slideshow:true,
    	slideshowSpeed: 5000,
    	directionNav: false
    });

});