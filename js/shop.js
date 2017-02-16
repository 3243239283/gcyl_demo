define(['jquery','layer','cssjs!layercss'],function(jquery,layer){
    /*关注事件*/
    $('.follow').on('click',function(){
        if($(this).hasClass('care')){
            $(this).removeClass('care');
            $(this).children('i').html('&#xe608;');
            layer.open({
                style:'color:#FFFFFF;font-size:3.2rem;width:200px;padding:40px 0;',
                content: '取消关注',
                skin: 'msg',
                time: 1.5
            });
        }else{
            $(this).addClass('care');
            $(this).children('i').html('&#xe612;');
            layer.open({
                style:'color:#FFFFFF;font-size:3.2rem;width:200px;padding:40px 0;',
                content: '关注成功',
                skin: 'msg',
                time: 1.5
            });
        }        
    });
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

});