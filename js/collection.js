define(['jquery','laytpl'],function(jquery,laytpl){
    //第一种写法
    $.ajax({
        url:"../../js/json/collection.json",
        dataType:"json",
        type:"get",
        success:function(data){
            var tpl = document.getElementById('tpl2').innerHTML; //读取模版
            //方式一：异步渲染（推荐）
            laytpl(tpl).render(data, function(render){
                document.getElementById('collection').innerHTML = render;
            });

        }
    });
    /*所有店铺*/
    $('.store').click(function(){
        $(this).addClass('collnow');
        $(this).parent().siblings().children().removeClass('collnow');
        $('#collection').empty();
        $.ajax({
            url:"../../js/json/collection.json",
            dataType:"json",
            type:"get",
            success:function(data){               
                var tpl = document.getElementById('tpl2').innerHTML; //读取模版
                //方式一：异步渲染（推荐）
                laytpl(tpl).render(data, function(render){
                    document.getElementById('collection').innerHTML = render;
                });
            }
        });
    });
    /*所有商品*/
    $('.commodity').click(function(){
        $(this).addClass('collnow');
        $(this).parent().siblings().children().removeClass('collnow');
        $('#collection').empty();
        $.ajax({
            url:"../../js/json/commodity.json",
            dataType:"json",
            type:"get",
            success:function(data){                
                var tpl = document.getElementById('tpl2').innerHTML; //读取模版
                //方式一：异步渲染（推荐）
                laytpl(tpl).render(data, function(render){
                    document.getElementById('collection').innerHTML = render;
                });
            }
        });
    });
});