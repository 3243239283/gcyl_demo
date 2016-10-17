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
    
    /*积分有限*/
    $('.score').click(function(){
        $('#recommend').empty();
        $(this).addClass('selected').siblings().removeClass('selected');
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
    })
    /*好评有限*/
    $('.good').click(function(){
        $('#recommend').empty();
        $(this).addClass('selected').siblings().removeClass('selected');
        $.ajax({
            url:"js/json/list2.json",
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
    })
    /*距离有限*/
    $('.distance').click(function(){
        $('#recommend').empty();
        $(this).addClass('selected').siblings().removeClass('selected');
        $.ajax({
            url:"js/json/list3.json",
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
    })

});