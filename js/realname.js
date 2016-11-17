define(['jquery','layer','uploadify','cssjs!layercss','cssjs!uploadcss','validate','validMethod'],function(jquery,layer){
    
    var $realNameForm = $('#realname'),
        $btnRealNameIden = $(".mitbtn"),
        $cardId = $("#cardId");

    /* 提示信息配置，此处配置与表单中各项的name相对应，下同 */  
    var msgText = {
        realname: {
            required: "请输入姓名",
            errorContent:"请输入真实姓名"
        },
        userid:{
            required:"请输入身份证号",
            errorContent:"身份证号格式错误",
            remote: "身份证号已被使用"
        },
        banshen:{
            required: "请上传持证半身照"
        },
        shent:{
            required: "请上传身份证正面照"
        },
        shenb:{
            required: "请上传身份证反面照"
        }
    }
    var realNameIdenConfig = {
        //校验成功后执行函数
        submitHandler:function(){

        },
        //表单规则配置
        rules:{
            realname:{
                required: true
            },
            userid:{
                required: true,
                minlength: 18,
                maxlength: 18,
                isIdCardNo: true
                /*remote:{
                    type: "post",
                    url: "/user/checkCardId.html",
                    dataType: "json",
                    data:{
                        cardId:function(){
                            return $("#cardId").val();
                        }
                    }
                }*/
            },
            banshen:{
                required: true
            },
            shent:{
                required: true
            },
            shenb:{
                required: true
            }
        },
        //提示信息配置
        messages: {
            realname:{
                required: msgText.realname.required
            },
            userid:{
                required: msgText.userid.required,
                minlength: msgText.userid.errorContent,
                maxlength: msgText.userid.errorContent,
                isIdCardNo: msgText.userid.errorContent
                /*remote: msgText.userid.remote*/
            },
            banshen:{
                required: msgText.banshen.required
            },
            shent:{
                required: msgText.shent.required
            },
            shenb:{
                required: msgText.shenb.required
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
    /* 表单校验绑定 */
    $realNameForm.validate(realNameIdenConfig);
    $btnRealNameIden.on('click', function(){
        $realNameForm.eq(0).submit();
    });

    /*图片上传*/
    $('.up_imgbtn').on('click',function(){
        alert('暂未完善！');
    });


});















