define(['jquery','laytpl'],function(jquery,laytpl){
    //第一种写法
    $.ajax({
        url:"js/json/list.json",
        dataType:"json",
        type:"get",
        success:function(data){
            
            var tpl = document.getElementById('tpl').innerHTML; //读取模版
            //方式一：异步渲染（推荐）
            laytpl(tpl).render(data, function(render){
                document.getElementById('recommend').innerHTML = render;
            });

        }
    });
    //第二种写法
    /*$.getJSON("js/json/list.json",function(data){
        var tpl = document.getElementById('tpl').innerHTML; //读取模版
        //方式一：异步渲染（推荐）
        laytpl(tpl).render(data, function(render){
            document.getElementById('recommend').innerHTML = render;
        });
    })*/
});