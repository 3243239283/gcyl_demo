define(['jquery'],function(jquery){
    //转账切换
    var $tranbtn=$('.tranbtn a');
    $tranbtn.on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        if($(this).text()=="转至账户"){
            $('.account').show().siblings().hide();
        }else{
            $('.account').hide().siblings().show();
        }
    });

    //转账明细切换
    var $trdetail=$('.detail_btn a')
    $trdetail.on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });


});