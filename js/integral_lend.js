define(['jquery','validate','layer','cssjs!layercss','validMethod','inputlimit'],function(jquery,validate,layer){
    
    /*保存*/
    var $lendform = $('#lendform'),
        $alsoform=$('#alsoform'),
        $audit = $('.audit'),
        $also_audit=$('.also_audit'),
        $lendnum=$('input[name="lendnum"]');

    /* 提示信息配置，此处配置与表单中各项的name相对应，下同 */  
    var msgText = {
        lendnum: {
            required: "股权数不能为空"
        },
        indeal:{
            required: "请阅读勾选协议"
        }
    }
    var integralLend= {
        //校验成功后执行函数
        submitHandler:function(){

        },
        //表单规则配置
        rules:{
            lendnum:{
                required: true
            },
            indeal:{
                required: true
            }
        },
        //提示信息配置
        messages: {
            lendnum:{
                required: msgText.lendnum.required
            },
            indeal:{
                required: msgText.indeal.required
            }
        },
        //重写showErrors
        showErrors: function (errorMap, errorList) {
            var msg = "";
            $.each(errorList, function (i, v) {
                //msg += (v.message + "\r\n");
                //在此处用了layer的方法,显示效果更美观
                layer.open({
                    style:'color:#FFFFFF;font-size:3rem;line-height:50px;',
                    content: v.message,
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                return false;
            });
        },

        submitHandler:function(){
            layer.open({
                style:'color:#FFFFFF;font-size:3rem;line-height:50px;',
                content: '提交成功！',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        },
        onfocusout: false,
        onkeyup:false
    }
    /*输入校验*/
    fnInputLimit($lendnum,4,'keyup');//期权股数

    /* 表单校验绑定 */
    $lendform.validate(integralLend);
    $audit.on('click', function(){
        $lendform.eq(0).submit();
    });


    var msgText = {
        lendnum: {
            required: "积分数不能为空"
        }
    }
    var integralAlso= {
        //校验成功后执行函数
        submitHandler:function(){

        },
        //表单规则配置
        rules:{
            lendnum:{
                required: true
            }
        },
        //提示信息配置
        messages: {
            lendnum:{
                required: msgText.lendnum.required
            }
        },
        //重写showErrors
        showErrors: function (errorMap, errorList) {
            var msg = "";
            $.each(errorList, function (i, v) {
                //msg += (v.message + "\r\n");
                //在此处用了layer的方法,显示效果更美观
                layer.open({
                    style:'color:#FFFFFF;font-size:3rem;line-height:50px;',
                    content: v.message,
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                return false;
            });
        },

        submitHandler:function(){
            layer.open({
                style:'color:#FFFFFF;font-size:3rem;line-height:50px;',
                content: '确认成功！',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        },
        onfocusout: false,
        onkeyup:false
    }

    /* 表单校验绑定 */
    $alsoform.validate(integralAlso);
    $also_audit.on('click', function(){
        $alsoform.eq(0).submit();
    });

});















