define(['jquery','layer','cssjs!layercss'],function(jquery,layer){
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