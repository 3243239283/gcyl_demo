/* 
 * description: mod/inputLimit.js  引用于平台所有输入数字限制
 * author: LL
 * date: 2015/09/19
 * 
 */

/*参数说明：
 * *******用于金额***************
 * type=0 : 可输入正整数，浮点数（最多能输入两位小数）
 * type=1 : 只能输入正整数
 * 
 * 
 * 
 * *******用于图形验证码***********
 * type=2 : 只能输入数字、字母（含大写）
 * 
 * 
 * *******用于输入姓名***********
 * type=3 : 只能输入中文和英文（由于输入法兼容问题，不能设置为只输入中文）
 * 
 * *******用于输入手机号等  非金额类数字***********
 * type=4 : 只能输入数字
 * 
 * *******用于输入身份证号***********
 * type=5 :	只能输入数字和最后一位大写X
 * 
 * 
 * *******用于固话  有区号***********
 * type=6 :	只能输入数字和英文-
 * 使用案例：
 * $('input').on('keyup',function(){
 * 		inputLimit(this,0);
 * });
 * 
 * 
 * 或
 * 
 * fnInputLimit('input',0,'keyup');
 * 
 * */

	
function inputLimit(obj,type){
	if(type==0){
		obj.value = obj.value.replace(/^0+(\d+)/, '$1'); //不能输入 类似00、01、0000001的数值
		obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
		obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字而不是
		obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
		obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
	}
	if(type==1){
		obj.value=obj.value.replace(/\D/g,'');
		obj.value = obj.value.replace(/^0+(\d+)/, '$1'); //不能输入 类似00、01、0000001的数值
	}
	if(type==2){
		obj.value=obj.value.replace(/[^0-9a-zA-Z]/g,'');
	}
	if(type==3){
		obj.value=obj.value.replace(/[^\a-\z\A-\Z\u4E00-\u9FA5]/g,'');
	}
	if(type==4){
		obj.value=obj.value.replace(/\D/g,'');
	}
	if(type==5){
		obj.value=obj.value.replace(/[^0-9X]/g,'');
	}
	if(type==6){
		obj.value = obj.value.replace(/[^\d-]/g,""); //清除"数字"和"-"以外的字符
		obj.value = obj.value.replace(/^\-/g,""); //验证第一个字符是数字而不是-
	}
	
}

function fnInputLimit(obj,type,event){
	$(obj).on(event,function(){
  		inputLimit(this,type);
	});
}
	
