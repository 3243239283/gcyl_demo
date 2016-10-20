define(['jquery','layer','cssjs!layercss'],function(jquery,layer){
    //第一种写法
    $.ajax({
        url:"../../js/json/obligation1.json",
        dataType:"json",
        type:"get",
        success:function(data){
            //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
            var myTemplate = Handlebars.compile($("#table-template").html()); 
            //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
            $('#obligation').html(myTemplate(data));
        }
    });
    /*全部*/
    $('.obli_state1').on('click',function(){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        $('#obligation').empty();
        $.ajax({
            url:"../../js/json/obligation1.json",
            dataType:"json",
            type:"get",
            success:function(data){
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#table-template").html()); 
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#obligation').html(myTemplate(data));
            }
        });
    });
    $('.obli_state2').on('click',function(){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        $('#obligation').empty();
        $.ajax({
            url:"../../js/json/obligation2.json",
            dataType:"json",
            type:"get",
            success:function(data){
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#table-template").html()); 
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#obligation').html(myTemplate(data));
            }
        });
    });
    $('.obli_state3').on('click',function(){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        $('#obligation').empty();
        $.ajax({
            url:"../../js/json/obligation3.json",
            dataType:"json",
            type:"get",
            success:function(data){
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#table-template").html()); 
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#obligation').html(myTemplate(data));
            }
        });
    });
    $('.obli_state4').on('click',function(){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        $('#obligation').empty();
        $.ajax({
            url:"../../js/json/obligation4.json",
            dataType:"json",
            type:"get",
            success:function(data){
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#table-template").html()); 
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#obligation').html(myTemplate(data));
            }
        });
    });
    $('.obli_state5').on('click',function(){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        $('#obligation').empty();
        $.ajax({
            url:"../../js/json/obligation5.json",
            dataType:"json",
            type:"get",
            success:function(data){
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#table-template").html()); 
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#obligation').html(myTemplate(data));
            }
        });
    });
    $('.obli_state6').on('click',function(){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        $('#obligation').empty();
        $.ajax({
            url:"../../js/json/obligation6.json",
            dataType:"json",
            type:"get",
            success:function(data){
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#table-template").html()); 
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#obligation').html(myTemplate(data));
            }
        });
    });
    $('.obli_state7').on('click',function(){
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
        $('#obligation').empty();
        $.ajax({
            url:"../../js/json/obligation7.json",
            dataType:"json",
            type:"get",
            success:function(data){
                //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
                var myTemplate = Handlebars.compile($("#table-template").html()); 
                //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
                $('#obligation').html(myTemplate(data));
            }
        });
    });

    $('.confirmbtn').on('click',function(){
        layer.open({
            style:'font-size:3.2rem;',
            content: '支付成功',
            btn: '确定'
        });
    })




});