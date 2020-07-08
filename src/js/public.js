
//通过id名称获取元素标签
// function $id(idName){
// 	return document.getElementById(idName);
// }
//获取 mim - max之前的随机整数
function getRand(min,max){
	return parseInt(Math.random() * (max - min + 1)) + min;
}
//获取六位十六进制随机颜色值
function getColor(){
	var color = "#";
	var str = "0123456789abcdef";//0-15
	for (var i = 0; i < 6; i++) {
		var rand = getRand(0,15);
		color += str.charAt(rand);//
	}
	return color;//#0000ff
}
//随机获取验证码
function getYZM(num){
	var yzm = "";
	//var str = "0123456789abcd"
	for (var i = 0; i < num; i++) {
		var rand = getRand(48,122);
		if((rand >= 48 && rand <= 57) || (rand >= 65 && rand <= 90) || (rand >= 97 && rand <= 122)){
			yzm += String.fromCharCode(rand);
		}else{
			i--;
		}
	}
	return yzm;
}
//获取本地化时间
function dateToString(date){
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	var str = y + "年" + getDb(m) + "月" + getDb(d) + "日 ";
	str += getDb(h) + ":" + getDb(f) + ":" + getDb(s) + " ";
	str += week[w];
	return str; //2019年X月X日 00:00:00 星期X
}
function getDb(num){
	return num < 10 ? 0 + "" + num : num;
}

//设置一个时间差，返回秒数。
function diff(startTime,endTime){
	return (endTime.getTime() - startTime.getTime())/1000
}
//
//跨IE8以下浏览器通过className获取元素集合
function getByClassName(className){//
	var elementArr = [];
	var ele = document.getElementsByTagName("*");//获取所有元素标签
	for (var i = 0; i < ele.length; i++) {
		if(ele[i].className == className){
			elementArr.push(ele[i]);
		}
	}
	return elementArr;
}
//把新节点插入到目标节点的后面
function insertAfter(newEle,targetEle){
	var parent = targetEle.parentNode;
	//判断targetEle是否是最后一个子节点
	if(parent.lastChild === targetEle){
		//如果是就直接添加到父节点的最后
		parent.appendChild(newEle);
	}else{
		//如果不是就找到下一个兄弟节点，把新节点添加到这个兄弟节点的前面
		parent.insertBefore(newEle,targetEle.nextElementSibling);
	}
}
//跨浏览器兼容ie8及以下获取事件对象的button属性
function getEventButton(eve){
	if(eve){
		//现代浏览器
		return eve.button;
	}else{//ie8及以下浏览器环境
		var b = window.event.button;
		switch(b){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;
		}
	}
}
//跨浏览器兼容ie8阻止事件冒泡
function stopProp(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}
//跨浏览器兼容ie8阻止元素默认行为
function prevDefault(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}
//跨浏览器兼容ie8实现事件监听
function addEvent(ele,eve,fn){
	if(ele.addEventListener){
		ele.addEventListener(eve,fn);
	}else{
		ele.attachEvent("on"+eve,fn);
	}
}
//跨浏览器兼容ie8及以浏览器实现获取计算后元素样式值。
function getStyle(ele,attr){
	if(window.getComputedStyle){//现代浏览器
		return window.getComputedStyle(ele,null)[attr];
	}else{//ie8
		return ele.currentStyle[attr];
	}
}
//cookie设置
function setCookie(key,val,date){
	//有效期不一定会设置
	if(date){
		document.cookie = key+"="+val+";expires="+date;
	}else{
		document.cookie = key+"="+val;
	}
}
//删除cookie;
function removeCookie(key){
	document.cookie = key + "=;expires=" + new Date(0);
}
//获取cookie
function getCookie(key){
	var cStr = document.cookie;
	var arr = cStr.split("; ");
	//["userName=tom", "goods=apple", "user=student", "aa=xxx"]
	//console.log(arr);
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].split("=")[0] == key){
			return arr[i].split("=")[1];
		};
	}
	return null;
}