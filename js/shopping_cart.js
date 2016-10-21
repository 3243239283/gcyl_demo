define(['jquery','index','layer','cssjs!layercss','quoevent','quostand'],function(jquery){
	/*编辑*/
	$(".shopping_cart>.cart>.goodsnum").on("click",".edit", function() {
		var amount=parseInt($('.reduce').val());	//商品数量
		if($(this).text()=='编辑'){
			$(this).text('完成');
			$(this).parent().nextAll().find('.count').show();
			$(this).parent().nextAll().find('.num').hide();
		}else{
			$(this).text('编辑');
			$(this).parent().nextAll().find('.num').html('x'+amount);
			$(this).parent().nextAll().find('.count').hide();
			$(this).parent().nextAll().find('.num').show();
		}		
	});
	/*商品数量增减事件*/
	$(".shopping_cart>.cart>.goodstxt>.count").on("click",".reduce", function() {
		var num=parseInt($(this).prev().val());
		num++;
		$(this).prev().attr('value',num);
	});
	$(".shopping_cart>.cart>.goodstxt>.count").on("click",".plus", function() {
		var num=parseInt($(this).next().val());
		if(num>1){
			num--;
			$(this).next().attr('value',num);
		}else{
			layer.open({
                style:'padding:40px 0;color:#FFFFFF;font-size:3.2rem;',
                content: '不能再减少了',
                skin: 'msg',
                time: 1 //2秒后自动关闭
            });
		}		
	});
	/*左滑删除事件*/
	Quo('.shop_delete').swipeLeft(function(){
		$(this).siblings('.go_delete').css('right','0');
	});
	Quo('.shop_delete').swipeRight(function(){
		$(this).siblings('.go_delete').css('right','-129px');
	});
	/*删除*/
	$(".delatebtn").on("click",function(){
		if($(this).parents('.cart').children('.goodstxt').length==1){
			$(this).parents('.cart').remove();
		}else{
			$(this).parent().parent().remove();
		}
	});

});