var xmlHttpReturn; // 定义Ajax调用以后产生的全局返回值存放位置,Ajax调用通过jQuery实现

/**
 * 绘图展示对象，从后台获取数据集合，并在前台负责完成展示工作
 */
class CWebDWUIView{
	// constructor function
	constructor(_parentId){
		this.uiArray = new Array();
		this.parentId = _parentId; // 绘图的根节点对象的ID和名称,代表一个界面上的DIV对象
		this.parentName = _parentId; // 名称与ID同名（基本约定）
		this.parentDom  = document.getElementById(_parentId); // 绘图的根节点对象
		this.uuid =""; //记录uuid的值
		this.rowid = 0; //当前行
		this.colid = 0; //当前列序号
	}
	
	// clean function
	// 删除设定根节点下面的所有子节点
	removeAllChild(){
		if(this.parentDom == null){
			console.log("parentDom is null;")
			return;
		}
		var children = this.parentDom.children;
		
		console.log("begin remove:children.length = "+children.length);
		
		for(var i=0;i<children.length;){
			// 从第一个开始删除，于是一个一个全删除掉了
			if(children[0] !=null){
				this.parentDom.removeChild(children[0]);
			}
		}
	}
	// draw function
	// draw all element in uiArray
	drawAllChild(){
		//this.uiArray = xmlHttpReturn;
		
		if(this.uiArray == null){
			console.log("uiArray is null,exit drawAllChild.");
			return;
		}
		if(this.parentDom == null){
			console.log("parentDom is null,exit drawAllChild.");
			return;
		}
		// 循环绘制所有对象
		// todo:根据classname来走分支对象进行DOM元素绘制
		for(var i=0;i<this.uiArray.length;i++){
			// get ui description
			var ui = this.uiArray[i];
			// convert it to dom object
			var uiComponent = new MyUIComponent(ui);
			// append it to parentObject
			//console.log("i,classname:"+i+" ,"+uiComponent.classname);
			this.parentDom.appendChild(uiComponent.node);
		}
	}	
		
	/**
	 * setDataobject function 这一方法用来在界面上设置数据窗口对象
	 */
	setDataobject(token,dwname){
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
	insert(token,uuid){
		var surl="/webdw/insert?token="+token+"&uuid="+uuid;
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
	delete(token,uuid){
		var surl="/webdw/delete?token="+token+"&uuid="+uuid+"&rowid="+this.rowid;
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
	setdata(uuid,rowid,colid,data){
		this.rowid = rowid;
		var surl="/webdw/setdata?uuid="+uuid+"&rowid="+rowid+"&colid="+colid+"&data="+data;
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
/**
 * 这个类用来封装后台获取的所有有效元素信息
 */
class MyUIComponent{
	/**
	 * constructor function
	 */
	constructor(uiobj,_convertRate){
		//转换比例，默认为0.3
		this.convertRate = 0.3;
		
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
		var node=document.createElement("div");
		node.style.position="absolute";
		node.style.left  = this.left + "px";
		node.style.top = this.top +"px";
		node.style.width  = this.width + "px";
		node.style.height = this.height +"px"
		node.style.background ="#f0f0f0";
		node.style.fontSize ="smaller";
		// 根据传入的参数的属性来进行判断走分支
		if(this.classname == "" ){
			this.classname = "JLabel";
		}
		
		// 创建一个TextNode代表JLabel，存储显示标签值
		if(this.classname == "JLabel"){
			// 创建一个TextNode代表JLabel，存储显示标签值
			var textnode=document.createTextNode(this.text);
			// 设置textnode的默认样式
			node.appendChild(textnode);
			this.node = node;
			this.textnode = textnode;
			return node;
		}
		
		// 创建一个输入文本框，存储显示标签值
		if(this.classname == "JTextField"){
            var input = document.createElement("input");
            input.type = "text";
            input.value = this.text;
            input.length = this.width+"px";
            input.rowid = this.rowid;
            input.colid = this.colid;
            
            //when onclick,set currentrow
            input.onclick = function(){
            	//alert(input.value);
            	setRow(input.rowid);
            }
            
            //when datachange, modify buffer data value
            input.onchange = function(){
            	//alert("onchange");
            	setData(input.rowid,input.colid,input.value);
            }
            node.appendChild(input);
			this.node = node;
			this.textnode = input;
			return node;
		}
		
		// 创建一个下拉选择列表
		if(this.classname == "JComboBox"){
            var input = document.createElement("select");
            // input.value = this.text;
            input.length = this.width+"px";
            console.log("combo values:"+this.values);
            // 根据返回的values字段，初始化下拉列表的数据项
            var combovalues = this.values.split("/");
            for (var combo_id = 0; combo_id <combovalues.length; combo_id++){
            	var data = combovalues[combo_id].split("\t");
            	if(data.length>1){
            		
            		var option = document.createElement("option");
            		option.setAttribute("value",data[0]);// 设置option属性值
            		option.appendChild(document.createTextNode(data[1]));
            	}
            	input.appendChild(option);
            }
            input.selectedIndex = this.selectedIndex;
            // alert("selectedIndex:"+this.selectedIndex);
            
            node.appendChild(input);
			this.node = node;
			this.textnode = input;
			return node;
		}
		
		// 开始进行单选钮的处理过程，单选钮是封装在一个JPanel里面的
		if(this.classname == "JPanel"){
			console.log("JPanel子节点数："+this.children.length);
			for(var i=0;i<this.children.length;i++){
				var mychild = this.children[i];
				
				// 处理单选按钮
				if(mychild.classname == "JRadioButton"){
					var childdiv = document.createElement("div");
					childdiv.style.top=(i * 20)+"px";
					childdiv.style.left = "0px";
					
					var childnode = document.createElement("input");
					childnode.type = "radio";
					childnode.name = this.name+"_radio";
					//设置是否选中的状态
					childnode.checked = mychild.selected;
					console.log("childnode.name:"+childnode.name);
					// 单选钮的value属性放在Tag字段里面
					childnode.value = mychild.Tag;
					console.log("childnode.value:"+childnode.value);
					// 创建一个文本节点
					console.log("mychild.Text:"+mychild.Text);
					var textnode=document.createTextNode(mychild.Text);
					
					
					childdiv.appendChild(childnode);
					childdiv.appendChild(textnode);
					node.appendChild(childdiv);
		            this.node = node;
		            this.textnode = null;
				}
			} 
			return node;
		}
		
		//开始进行复选框的编辑显示支持
		if(this.classname == "JCheckBox"){
            var input = document.createElement("input");
            input.type = "checkbox";
            input.checked = this.value;
            //input.length = this.width+"px";
            //再增加一个文本节点来显示
            var textnode=document.createTextNode(this.text);
            node.appendChild(input);
            node.appendChild(textnode);
			this.node = node;
			this.textnode = input;
			return node;			
			
		}
		console.log("不支持的classname:"+this.classname);
		this.node = node;
		return node;
	}
}
