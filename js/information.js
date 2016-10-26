define(['jquery','validate','layer','cssjs!layercss','validMethod','inputlimit'],function(jquery,validate,layer){
    /*用户名*/
    $('.namebox').on('click',function(){$(this).val('');
    });
    $('.namebox').blur(function(){
    	if($(this).val() == ''){
    		layer.open({
                style:'padding:40px 0;color:#FFFFFF;font-size:3.2rem;',
                content: '昵称格式错误',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
    	}else{
    		layer.open({
                style:'padding:40px 0;color:#FFFFFF;font-size:3.2rem;',
                content: '昵称修改成功',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
    	}
    });
    /*性别*/
    $('.gender').on('click',function(){
        $('.genderbox').show();
    })
    $('.cancel').on('click',function(){
		$('.genderbox').hide();
    });
    $('.man').on('click',function(){
        $('.usergender').val('男');
        $('.genderbox').hide();
    });
    $('.woman').on('click',function(){
        $('.usergender').val('女');
        $('.genderbox').hide();
    });
    /*地址管理*/
    $('.addbtn').on('click',function(){
        $(this).addClass('noshow');
        $('.btn_ok').removeClass('noshow');
        $('.edit').removeClass('noshow');
    });
    $('.btn_ok').on('click',function(){
        $(this).addClass('noshow');
        $('.addbtn').removeClass('noshow');
        $('.edit').addClass('noshow');
    });
    $('.delete').on('click',function(){
        $(this).parents('.add_txt').remove();
    });
    /*保存*/
    var $addnew = $('#addnew'),
        $phonenum = $('.phonenum'), //手机号码
        $btnkeep = $('.keep'),
        $edit_addnew=$('#edit_addnew'),
        $editkeep=$('.editkeep');

    /* 提示信息配置，此处配置与表单中各项的name相对应，下同 */  
    var msgText = {
        realname: {
            required: "姓名不能为空"
        },
        mobilePhone:{
            required:"请输入手机号码",
            errorContent:'手机号码格式错误',
            tips:'请输入正确的手机号码'
        },
        add_tlt:{
            required: "请输入地址"
        },
        add_txt:{
            required: "请输入详细地址"
        }
    }
    var addnewaddress = {
        //校验成功后执行函数
        submitHandler:function(){

        },
        //表单规则配置
        rules:{
            realname:{
                required: true
            },
            mobilePhone:{
                required: true,
                isMobile:true
            },
            add_tlt:{
                required: true
            },
            add_txt:{
                required: true
            }
        },
        //提示信息配置
        messages: {
            realname:{
                required: msgText.realname.required
            },
            mobilePhone:{
                required: msgText.mobilePhone.required,
                isMobile: msgText.mobilePhone.errorContent
            },
            add_tlt:{
                required: msgText.add_tlt.required
            },
            add_txt:{
                required: msgText.add_txt.required
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
                content: '地址保存成功！',
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
    $addnew.validate(addnewaddress);
    $btnkeep.on('click', function(){
        $addnew.eq(0).submit();
    });

    /*修改地址*/
    $edit_addnew.validate(addnewaddress);
    $editkeep.on('click',function(){
        $edit_addnew.eq(0).submit();
    })
});















