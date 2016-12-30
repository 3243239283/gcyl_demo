define(['jquery','index','layer','cssjs!layercss'],function(jquery){
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
	
	
	/*删除*/
	$(".delatebtn").on("click",function(){
		if($(this).parents('.cart').children('.goodstxt').length==1){
			$(this).parents('.cart').remove();
		}else{
			$(this).parent().parent().remove();
		}
	});

	/*合计*/
	$('.tobtn_num').on('click',function(){
		if($(this).prop("checked"))
        {
            console.log("选中");
            $('input[name="cart"]').prop('checked',true);
        }else{
            console.log('未选中');
            $('input[name="cart"]').prop('checked',false);
        }
	});

	$('input[name="cart"]').on('click',function(){
		if($(this).prop("checked"))
        {
            return true;
        }else{
            $('.tobtn_num').prop('checked',false);
        }
	})

});