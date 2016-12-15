define(['jquery','layer','cssjs!layercss'],function(jquery,layer){
    var $not_return=$('.not_return');
    var $has_also=$('.has_also');

    $('.crebtn a').on('click',function(){
        if($(this).hasClass('selected')){
            $(this).siblings().removeClass('selected');
            return true;
        }else{
            $(this).addClass('selected').siblings().removeClass('selected');
        }
    })

    $.ajax({
        //获取产品列表(http://120.27.196.116:8022/Shop/GetProductList)
        url:"../../js/json/credit.json",
        dataType:"json",
        type:"get",
        success:function(data){
            for (var i = 0; i<data.list.length; i++){
                var Html="";
                if(data.list[i].state==1){
                    Html+='<li>';
                    Html+='<div class="tltbox">';
                    Html+='<span class="num"><i class="iconfont">&#xe62f;</i>'+data.list[i].money+'</span>';
                    Html+='<span class="tlt">抵押期权:<em>'+data.list[i].qiquan+'</em></span>';
                    Html+='<span class="time">'+data.list[i].time+'</span>';
                    Html+='<div class="clear"></div>';
                    Html+='</div>';
                    Html+='<div class="txtbox">';
                    Html+='<span class="ice_state"><em>还款</em></span>';
                    Html+='<span class="tlt">解冻期权:<em>'+data.list[i].jiedong+'</em></span>';
                    Html+='<span class="lastdate"><em>最后还款日:</em>'+data.list[i].date+'</span>';
                    Html+='<div class="clear"></div>';
                    Html+='</div>';
                    Html+='</li>';                    
                }else{
                    Html+='';
                }
                $('.crelist ul').prepend(Html);
            }
        }
    });

    $not_return.on('click',function(){
        $('.crelist ul').empty();
        $.ajax({
            //获取产品列表(http://120.27.196.116:8022/Shop/GetProductList)
            url:"../../js/json/credit.json",
            dataType:"json",
            type:"get",
            success:function(data){
                for (var i = 0; i<data.list.length; i++){
                    var Html="";
                    if(data.list[i].state==1){
                        Html+='<li>';
                        Html+='<div class="tltbox">';
                        Html+='<span class="num"><i class="iconfont">&#xe62f;</i>'+data.list[i].money+'</span>';
                        Html+='<span class="tlt">抵押期权:<em>'+data.list[i].qiquan+'</em></span>';
                        Html+='<span class="time">'+data.list[i].time+'</span>';
                        Html+='<div class="clear"></div>';
                        Html+='</div>';
                        Html+='<div class="txtbox">';
                        Html+='<span class="ice_state"><em>还款</em></span>';
                        Html+='<span class="tlt">解冻期权:<em>'+data.list[i].jiedong+'</em></span>';
                        Html+='<span class="lastdate"><em>最后还款日:</em>'+data.list[i].date+'</span>';
                        Html+='<div class="clear"></div>';
                        Html+='</div>';
                        Html+='</li>';                    
                    }else{
                        Html+='';
                    }
                    $('.crelist ul').prepend(Html);
                }
            }
        });
    });

    $has_also.on('click',function(){
        $('.crelist ul').empty();
        $.ajax({
            //获取产品列表(http://120.27.196.116:8022/Shop/GetProductList)
            url:"../../js/json/credit.json",
            dataType:"json",
            type:"get",
            success:function(data){
                for (var i = 0; i<data.list.length; i++){
                    var Html="";
                    if(data.list[i].state==2){
                        Html+='<li>';
                        Html+='<div class="tltbox">';
                        Html+='<span class="num"><i class="iconfont">&#xe62f;</i>'+data.list[i].money+'</span>';
                        Html+='<span class="tlt">抵押期权:<em>'+data.list[i].qiquan+'</em></span>';
                        Html+='<span class="time">'+data.list[i].time+'</span>';
                        Html+='<div class="clear"></div>';
                        Html+='</div>';
                        Html+='<div class="txtbox">';
                        Html+='<span class="has_ice">已还<i class="iconfont">&#xe70a;</i><em>'+data.list[i].yihuan+'</em></span>';
                        Html+='<span class="tlt">解冻期权:<em>'+data.list[i].jiedong+'</em></span>';
                        Html+='<span class="lastdate"><em>最后还款日:</em>'+data.list[i].date+'</span>';
                        Html+='<div class="clear"></div>';
                        Html+='</div>';
                        Html+='</li>';                    
                    }else{
                        Html+='';
                    }
                    $('.crelist ul').prepend(Html);
                }
            }
        });
    });
    

});















