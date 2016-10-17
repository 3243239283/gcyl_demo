define(['jquery','validate','layer','cssjs!layercss'],function(jquery,validate,layer){
    /*竞拍须知*/
    $('.next').click(function(){        
        var $save=$('#save').is(':checked');
        if($save==true){
            return true;
        }else{
            layer.open({
                style:'padding:40px 0;color:#FFFFFF;font-size:3.2rem;',
                content: '请阅读并遵循竞拍规则',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
            return false;
        }
    });
    /*确认出价*/
    /*输入金额校验*/
    $('.offerform').validate({
        rules: {
          moneyinput:{
              required: true,
              digits:true
          }
        },
        messages: {
            moneyinput:{
                required:'金额不能为空',
                digits:'请输入正确的金额'
            }
        },
        errorLabelContainer: '.errorbox',
        submitHandler:function(){
            layer.open({
                style: 'color:#333333;font-size:3.2rem;line-height:50px;',
                content: '<p>出价成功！您的光彩币已被冻结,</p><p>30天后释放请耐心等待竞拍结果</p>',
                btn: '确定'
            });
        }
    });
    $('.offernext').click(function(){
        $('.offerform').submit();
    })
});















