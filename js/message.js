define(['jquery'],function(jquery){

    //请求消息信息json
    $.ajax({
        url:"../../js/json/msgtxt.json",
        dataType:"json",
        type:"get",
        success:function(data){
            //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
            var myTemplate = Handlebars.compile($("#tpl_detail").html());
            //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
            $('#msg_detail').html(myTemplate(data));
        }
    });



});