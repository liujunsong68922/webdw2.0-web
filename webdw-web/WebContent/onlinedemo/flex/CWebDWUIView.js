var xmlHttpReturn; // 定义Ajax调用以后产生的全局返回值存放位置,Ajax调用通过jQuery实现
var _webdwui = null;
var convertRate = 0.3;
//回调函数
function WebdwUI_callback() {
	alert("enter callback");
	var status = xmlHttpReturn.status;
	alert("status:"+status);

	if(status == 200){
		alert(xmlHttpReturn.message);
	}else{
		console.log(xmlHttpReturn.message);
		alert("Message:" + xmlHttpReturn.message);
	}
}

function removeAllChild(){

}

function drawAllChild(){
}
		
	/**
	 * setDataobject function 这一方法用来在界面上设置数据窗口对象
	 */
function setDataobject(token,dwname){
		var surl="/webdw/setdataobject?token="+token+"&dwname="+dwname;
		// 增加随机数
		surl = surl+"&rand="+(Math.random()*100);
		
		xmlHttpReturn="";
		$.ajax({
            type: "GET",
            url: surl,
            data: "",
            async:false,
            dataType: "json",
            success: function(data){
            	// get return data.
				console.log(data);
				xmlHttpReturn = data;
				// 调用全局性的回调函数，回调函数在调用者的界面上进行定义
				WebdwUI_callback();
				return xmlHttpReturn;
            }
		});
	}
	
	/**
	 * setDataobject function 这一方法用来在界面上设置数据窗口对象
	 */
	insertrow(token,uuid){
		var surl="/webdw/insertrow?token="+token+"&uuid="+uuid;
		// 增加随机数
		surl = surl+"&rand="+(Math.random()*100);
		
		xmlHttpReturn="";
		$.ajax({
            type: "GET",
            url: surl,
            data: "",
            async:false,
            dataType: "json",
            success: function(data){
            	// get return data.
				console.log(data);
				xmlHttpReturn = data;
				// 调用全局性的回调函数，回调函数在调用者的界面上进行定义
				WebdwUI_callback();
				return xmlHttpReturn;
            }
		});
	}
	/**
	 * setDataobject function 这一方法用来在界面上设置数据窗口对象
	 */
	deleterow(token,uuid){
		var surl="/webdw/deleterow?token="+token+"&uuid="+uuid+"&rowid="+this.rowid;
		// 增加随机数
		surl = surl+"&rand="+(Math.random()*100);
		
		xmlHttpReturn="";
		$.ajax({
            type: "GET",
            url: surl,
            data: "",
            async:false,
            dataType: "json",
            success: function(data){
            	// get return data.
				console.log(data);
				xmlHttpReturn = data;
				// 调用全局性的回调函数，回调函数在调用者的界面上进行定义
				WebdwUI_callback();
				return xmlHttpReturn;
            }
		});
	}	
	/**
	 * 这一方法用来在界面上设置数据窗口对象，并检索后台数据
	 */
	retrieve(token,dwname,args){
		var surl="/webdw/retrieve?token="+token+"&dwname="+dwname+"&args="+args;
		// 增加随机数
		surl = surl+"&rand="+(Math.random()*100);
		
		xmlHttpReturn="";
		$.ajax({
            type: "GET",
            url: surl,
            data: "",
            async:true,
            dataType: "json",
            success: function(data){
            	// get return data.
				alert(data);
				xmlHttpReturn = data;
				// 调用全局性的回调函数，回调函数在调用者的界面上进行定义
				WebdwUI_callback();
				return xmlHttpReturn;
            }
		});
	}
	
	/**
	 * 这一方法用来在界面上设置数据窗口对象，并检索后台数据
	 */
	setrow(uuid,rowid){
		this.rowid = rowid;
		//var surl="/webdw/setrow?uuid="+uuid+"&rowid="+rowid;
		// 增加随机数
		//surl = surl+"&rand="+(Math.random()*100);
		
		//xmlHttpReturn="";
//		$.ajax({
//            type: "GET",
//            url: surl,
//            data: "",
//            async:false,
//            dataType: "json",
//            success: function(data){
//            	// get return data.
//				console.log(data);
//				xmlHttpReturn = data;
//				// 调用全局性的回调函数，回调函数在调用者的界面上进行定义
//				//WebdwUI_callback();
//				return xmlHttpReturn;
//            }
//		});
	}
	
	/**
	 * 这一方法用来在界面上设置数据窗口对象，并检索后台数据
	 */
	setitem(uuid,rowid,colid,data){
		this.rowid = rowid;
		var surl="/webdw/setitem?uuid="+uuid+"&rowid="+rowid+"&colid="+colid+"&data="+data;
		// 增加随机数
		surl = surl+"&rand="+(Math.random()*100);
		
		xmlHttpReturn="";
		$.ajax({
            type: "GET",
            url: surl,
            data: "",
            async:false,
            dataType: "json",
            success: function(data){
            	// get return data.
				console.log(data);
				xmlHttpReturn = data;
				// 调用全局性的回调函数，回调函数在调用者的界面上进行定义
				//WebdwUI_callback();
				return xmlHttpReturn;
            }
		});
	}
	
	/**
	 * 这一方法用来在界面上设置数据窗口对象，并检索后台数据
	 */
	update(token,uuid){
		//this.rowid = rowid;
		var surl="/webdw/update?token="+token+"&uuid="+uuid;
		// 增加随机数
		surl = surl+"&rand="+(Math.random()*100);
		
		xmlHttpReturn="";
		$.ajax({
            type: "GET",
            url: surl,
            data: "",
            async:false,
            dataType: "json",
            success: function(data){
            	// get return data.
				console.log(data);
				xmlHttpReturn = data;
				// 调用全局性的回调函数，回调函数在调用者的界面上进行定义
				WebdwUI_callback();
				return xmlHttpReturn;
            }
		});
	}
}


		
		//如果传入转换比例，则使用新的转换比例
		if(_convertRate !=null){
			this.convertRate = _convertRate;
		}
		
		// 通用属性
		this.id = uiobj.id;
		this.name = uiobj.name;
		this.classname = uiobj.classname;
		this.text = uiobj.text;
		this.rowid = uiobj.rowid;
		this.colid = uiobj.colid;
		
		// 位置信息,乘以转换比例
		this.left = uiobj.left * this.convertRate;
		this.top = uiobj.top * this.convertRate;
		this.width = uiobj.width * this.convertRate;
		this.height = uiobj.height * this.convertRate;
		
		// 组合框的特定信息
		this.values = uiobj.values;
		this.selectedIndex = uiobj.selectedIndex;
		
		// 单选钮的特定信息
		this.children = uiobj.childElements;
		
		// 检查框的特定信息
		this.value = uiobj.value;
		
		// 节点信息初始化
		this.node = null;
		this.textnode = null;
		
		this.toHTMLNode();
	}
	
	/**
	 * convert this object to HTML DOM node
	 */
	toHTMLNode(){
	}

