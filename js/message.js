define(['jquery','laytpl'],function(jquery,laytpl){

    //请求消息信息json
    $.ajax({
        url:"../../js/json/msgtxt.json",
        dataType:"json",
        type:"get",
        success:function(data){            
            var tpl = document.getElementById('tpl3').innerHTML; //读取模版
            //方式一：异步渲染（推荐）
            laytpl(tpl).render(data, function(render){
                document.getElementById('msg_detail').innerHTML = render;
            });
        }
    });



});