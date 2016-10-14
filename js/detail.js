require(['jquery','flexslider','cssjs!flexslidercss'], function (jquery,flexslider){
    //require()函数接受两个参数。
    //第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
    //第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
    //加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。

    //详情页banner切换
    $(".flexslider").flexslider({
    	animation: "slide",
    	animationLoop: true,
    	slideshow:true,
    	slideshowSpeed: 3000,
    	directionNav: false
    });

});


























