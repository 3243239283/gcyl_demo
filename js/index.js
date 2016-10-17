define(['jquery','layer','cssjs!layercss'],function(jquery,layer){
    $('.charitable').click(function(){
        layer.open({
            style:'color:#FFFFFF;font-size:3.2rem;padding:40px 0;',
            content: '正在筹划中...',
            skin: 'msg',
            time: 2
        });
    });

});