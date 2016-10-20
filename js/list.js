define(['jquery'],function(jquery){
    //第一种写法
    $.ajax({
        url:"js/json/list.json",
        dataType:"json",
        type:"get",
        success:function(data){
            //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
            var myTemplate = Handlebars.compile($("#template_recommend").html());
            //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
            $('#recommend').html(myTemplate(data));
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
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#template_recommend").html());
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#recommend').html(myTemplate(data));
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
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#template_recommend").html());
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#recommend').html(myTemplate(data));
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
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#template_recommend").html());
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#recommend').html(myTemplate(data));
            }
        });
    })

});