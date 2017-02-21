define(['jquery','pay','layer','cssjs!layercss'],function(jquery,pay,layer){
    /*转发*/
    $('.forward').click(function(){
        layer.open({
            content: '转发',
            btn: ['确定', '取消'],
            skin: 'footer',
            yes: function(index){
                layer.open({
                    content: '转发成功',
                    time: 1.5
                })
            }
        });
    });
    /*立即抢*/
    $('.promptly a').on('click',function(){
        $('body').css('overflow','hidden');
        $('.rob').show();
    })
    $('.rob_tlt a').on('click',function(){
        $('body').css('overflow','visible');
        $('.rob').hide();
    });
    $('.add_num span').on('click',function(){
        $('.rob_sum').attr('value',parseInt($(this).text()));
    });

});