define(['jquery','layer','cssjs!layercss','validate','validMethod','inputlimit'],function(jquery,layer){
    var $joinform = $('#joinform'),
        $phonenum = $('.phonenum'), //手机号码
        $btncarry = $(".carry");

    /* 提示信息配置，此处配置与表单中各项的name相对应，下同 */  
    var msgText = {
        joinname: {
            required: "商家名称不能为空"
        },
        joinphone:{
            required:"联系电话不能为空",
            rangelength:"手机号码必须为11位",
            isMobile:"手机号码格式错误"
        },
        joinemail:{
            required: "联系邮箱不能为空",
            isEmail:"邮箱格式错误"
        },
        joinseat:{
            required: "所在地不能为空"
        },
        joinaddress:{
            required: "详细地址不能为空"
        },
        licenimg:{
            required: "请上传营业执照"
        },
        pro_btn:{
            required: "请阅读勾选竞拍须知"
        }
    }
    var realNameIdenConfig = {
        //校验成功后执行函数
        submitHandler:function(){

        },
        //表单规则配置
        rules:{
            joinname:{
                required: true
            },
            joinphone:{
                required: true,
                rangelength:[11,11],
                isMobile:true
            },
            joinemail:{
                required: true,
                isEmail:true
            },
            joinseat:{
                required: true
            },
            joinaddress:{
                required: true
            },
            licenimg:{
                required: true
            },
            pro_btn:{
                required: true
            }
        },
        //提示信息配置
        messages: {
            joinname:{
                required: msgText.joinname.required
            },
            joinphone:{
                required: msgText.joinphone.required,
                rangelength: msgText.joinphone.rangelength,
                isMobile: msgText.joinphone.isMobile
                /*remote: msgText.userid.remote*/
            },
            joinemail:{
                required: msgText.joinemail.required,
                isEmail: msgText.joinemail.isEmail
            },
            joinseat:{
                required: msgText.joinseat.required
            },
            joinaddress:{
                required: msgText.joinaddress.required
            },
            licenimg:{
                required: msgText.licenimg.required
            },
            pro_btn:{
                required: msgText.pro_btn.required
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
                content: '提交成功！请耐心等待审核结果',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        },
        onfocusout: false,
        onkeyup:false
    }

    /*输入校验*/
    fnInputLimit($phonenum,4,'keyup');//手机号码

    /* 表单校验绑定 */
    $joinform.validate(realNameIdenConfig);
    $btncarry.on('click', function(){
        $joinform.eq(0).submit();
    });
});















