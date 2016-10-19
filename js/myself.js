define(['jquery','layer','cssjs!layercss','index'],function(jquery,layer){
    $('.disbtn').on('click',function(){
        layer.open({
            style:'color:#FFFFFF;font-size:3rem;line-height:50px;',
            content: '筹备中...',
            skin: 'msg',
            time: 2 //2秒后自动关闭
        });
    })
});















