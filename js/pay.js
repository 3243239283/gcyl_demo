define(['jquery','index','layer','cssjs!layercss'],function(jquery){
    
    /*商品数量增减事件*/
    $(".count").on("click",".reduce", function() {
        var num=parseInt($(this).prev().val());
        num++;
        $(this).prev().attr('value',num);
    });
    $(".count").on("click",".plus", function() {
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

});