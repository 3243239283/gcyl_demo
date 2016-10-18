/* 
 * description: validMethod.js 校验方法拓展 依赖校验插件可应用于注册，登录
 * author: LL
 * date: 2016/10/18
 *
 */
define(['jquery','validate'],function(){
	var defaultErrMsg = '校验失败，请检查'; //默认提示信息
	/* 用户名校验 */
	$.validator.addMethod('regexUserName', function(value, element) {  
	    return this.optional(element) || /^(?![0-9]+$)[0-9A-Za-z]{4,16}$/.test(value);  
	}, defaultErrMsg);
	
	/*邮箱格式校验*/
	$.validator.addMethod("isEmail", function(value, element){
	    var length = value.length;
	    return (this.optional(element) || length == 11 && /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value));
	}, defaultErrMsg);

	/* 手机号码校验 */
	function isMobile(value){
		return (value.length == 11 && /^1[34578]\d{9}$/.test(value));
	}
	
	$.validator.addMethod("isMobile", function(value, element){
	    var length = value.length;
	    return (this.optional(element) || length == 11 && /^1[34578]\d{9}$/.test(value));
	}, defaultErrMsg);
	
	$.validator.addMethod("isPhone", function(value, element){
		var length = value.length;
			return (this.optional(element)||length<=20&&length>=6 &&/^\d+$/.test(value));
	}, defaultErrMsg);
    //验证手机号码是否是当前用户已绑定手机号
    $.validator.addMethod( "checkEqualMobilePhone",function(value,element){     
        var a=true;  
        $.ajax({
        	type:"get",
        	url:"/user/checkEqualMobilePhone.html",  
        	async:false,
        	cache:false,
        	data:{ mobilePhone:$('#mobilePhone').val()},
        	dataType:"html",
        	scriptCharset:"UTF-8",
        	success:function(data){  
	            if(!data){  
	                a=false;  
	            }  
	        }
        });  
        return a;  
    } ,  "新手机号不能用已绑定手机号相同" );    
    
    
	
	$.validator.addMethod("isEmail", function(value, element){
	    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
	}, defaultErrMsg);

	/* 密码校验 */
	$.validator.addMethod("regexPasswords", function(value, element) { 
		// 8-16位字符，其中包括至少一个字母和一个数字
	    return this.optional(element) || /^(?![^a-zA-Z]+$)(?!\D+$).{8,16}$/.test(value);  
	}, defaultErrMsg);
	
	/* 不能相等校验 */
	$.validator.addMethod("diffTo", function(value, element, param) { 
		return this.optional(element) || value!=$(param).val();
	}, defaultErrMsg);

	/* 选择地区 */
	$.validator.addMethod("area", function(value, element) {
	    if(value == 'empty'){
	    	return false;
	    }else{
	    	return true;
	    }

	}, defaultErrMsg);

	/* 正整数 */
	$.validator.addMethod("plusInteger", function(value, element) {
		if(value <= 0){
			return false;
		}
		return this.optional(element) || /^\d+$/.test(value);
	}, '请输入正整数');

	/* 数字 */
	$.validator.addMethod("number", function(value, element) {
		if(value <= 0){
			return false;
		}
		return this.optional(element) || /^\d+(\.\d+)?$/.test(value);
	}, defaultErrMsg);


	/* 去除敏感字符 */
	function stripHtml(value) {
		// remove html tags and space chars
		return value.replace(/<.[^<>]*?>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ')
		// remove punctuation
		.replace(/[.(),;:!?%#$'"_+=\/\-]*/g,'');
	}

	/* 获取字符串长度（区分中英文，一个中文为2个字符长度，一个英文为1个字符长度）
     * @param
     * str: 字符串
     * 
     */
    function getLength(str){
        var len = 0;
        var a = str.split("");
        for (var i=0; i<a.length; i++) {
            if (a[i].charCodeAt(0) < 299) {
                len++;
            } else {
                len+=2;
            }
        }
        return len;
    }

	/* 最大字数 */
	jQuery.validator.addMethod("maxWords", function(value, element, params) {
		var stripStr = stripHtml(value);
		$(element).val(stripStr);
		return getLength(stripStr) <= params * 2;

	}, jQuery.validator.format("最多输入 {0} 个字"));

	
	/* 身份证号码格式校验 */	
	$.validator.addMethod("isCardId", function(value, element) {		
		if(value < 0){
			return false;
		}
		return this.optional(element) || /^\d+(\.\d+)?$/.test(value);
		
	}, defaultErrMsg); 


	// -S-身份证验证方法
	function isIdCardNo(num) {
	    var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
	    var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
	    var varArray = new Array();
	    var intValue;
	    var lngProduct = 0;
	    var intCheckDigit;
	    var intStrLen = num.length;
	    var idNumber = num;
	    // initialize
	    if ((intStrLen != 15) && (intStrLen != 18)) {
	        return false;
	    }
	    // check and set value
	    for (i = 0; i < intStrLen; i++) {
	        varArray[i] = idNumber.charAt(i);
	        if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
	            return false;
	        } else if (i < 17) {
	            varArray[i] = varArray[i] * factorArr[i];
	        }
	    }
	    if (intStrLen == 18) {
	        //check date
	        var date8 = idNumber.substring(6, 14);
	        if (isDate8(date8) == false) {
	            return false;
	        }
	        // calculate the sum of the products
	        for (i = 0; i < 17; i++) {
	            lngProduct = lngProduct + varArray[i];
	        }
	        // calculate the check digit
	        intCheckDigit = parityBit[lngProduct % 11];
	        // check last digit
	        if (varArray[17] != intCheckDigit) {
	            return false;
	        }
	    }
	    else {        //length is 15
	        //check date
	        var date6 = idNumber.substring(6, 12);
	        if (isDate6(date6) == false) {
	            return false;
	        }
	    }
	    return true;
	}
	// -S-身份证验证导入
	$.validator.addMethod("isIdCardNo", function (value, element) {
	    return this.optional(element) || isIdCardNo(value);
	}, "请正确输入您的身份证号码");

	//8位日期校验
	function isDate8(sDate) {
	    if (!/^[0-9]{8}$/.test(sDate)) {
	        return false;
	    }
	    var year, month, day;
	    year = sDate.substring(0, 4);
	    month = sDate.substring(4, 6);
	    day = sDate.substring(6, 8);
	    var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	    if (year < 1700 || year > 2500) return false
	    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
	    if (month < 1 || month > 12) return false
	    if (day < 1 || day > iaMonthDays[month - 1]) return false
	    return true
	}

	//时间校验，在今天之前beforeToday
	$.validator.addMethod("beforeToday", function (value, element) {
		var valueDate = value.split('-');
		var valueDateStr = valueDate.join('');
		if(!isDate8(valueDateStr)){
			return false;
		}
		var date = new Date(valueDate[0] + '/' + valueDate[1] + '/' + valueDate[2]);
		var now = new Date();
		return date <= now;
	}, defaultErrMsg);

	$.validator.addMethod("editorIsNull", function (value, element) {
		var str = value.replace(/[ ]/g,"");
		if(str.length>0){
			return true;
		}
		return false;
	}, defaultErrMsg);

    //有限合伙企业信息：只允许输入字母数字校验
	$.validator.addMethod("chrnum", function(value, element) {
		var chrnum = /^([a-zA-Z0-9]+)$/;
		return this.optional(element) || (chrnum.test(value));
	}, "只能输入数字和字母");
	
	//有限合伙企业信息：只允许输入字母+数字+“-”校验
	$.validator.addMethod("chrnumtwo", function(value, element) {
		var chrnumtwo = /^([a-zA-Z0-9\-]+)$/;
		return this.optional(element) || (chrnumtwo.test(value));
	}, "只能输入数字、字母、-");
	
	//汉字
	$.validator.addMethod("chinese", function (value, element) {
	    var chinese = /^[\u4E00-\u9FFF]+$/;
	    return this.optional(element) || (chinese.test(value));
	}, "姓名格式不对");

}); 