/**
 * 
 */
YAHOO.namespace('utils'); 

YAHOO.utils.UI = function() {
	
};

YAHOO.utils.UI.prototype = {
	
	createAjaxMenu : function(request, container, onclickFn, selectFirst, defaultItem) {
		
		var oMenuButton5;
		
  		var onMenuItemClick;
  		if (!onclickFn) {
  			onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  	  			var sText = p_oItem.cfg.getProperty("text");
  	      		oMenuButton5.set("label", sText);
  	      		oMenuButton5.value = p_oItem.value;
  	  		};
  		} else {
  			onMenuItemClick = onclickFn;
  		}
  		
  		var menuBut = [];
	  	//menuBut.push({ text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } });

  		var callback = {
  			success : function(o){
  				var t = o.responseText;
  				
  				try {
  					//t = Url.decode(t);
  					
  					var brands = YAHOO.lang.JSON.parse(t);
  					var menu = oMenuButton5.getMenu();
  					menuBut = [];
  					if (defaultItem){
  						menuBut.push({ text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } });
  					}
  					for ( i=0; i< brands.length; i++) {
  						
  						menuBut.push({
  							text : brands[i].name,
  							value : brands[i].id,
  							onClick : {fn: onMenuItemClick}
  						});
  					}
  					menu.itemData = menuBut;
  					if (o.argument[3]) {
  						menu.setInitialSelection();
  	  					oMenuButton5.set("label", menuBut[0].text);
  	  					oMenuButton5.value = menuBut[0].value;
  					}
  					
  				} catch (e) {
  					alert("UI error parsing json response");
  				}
  			},
  			failure : function(o) {
  				alert(o);
  			}, 
  			argument : [menuBut, container, request, selectFirst]
  		};
  		
  		/*
  		 * If the widget does not exist, then create it, otherwise use it
  		 */
  		oMenuButton5 = new YAHOO.widget.Button({ type: "menu", /*label: lang.getMessage("Title.All"),*/ name: "mymenubutton", 
			menu: menuBut, container: container });
		if ( request != null && request.length != 0 ) {
  			var con = YAHOO.util.Connect;
	  		con.setDefaultPostHeader(false);
	  		con.initHeader("Content-Type", "application/json; charset=utf-8", true); 
	  		var url = YAHOO.autos.consts.servlet + request;
	  		con.asyncRequest("GET", url, callback);
  		} else {
  			var menu = oMenuButton5.getMenu();
  			menuBut = [];
			if (defaultItem){
				menuBut.push({ text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } });
				oMenuButton5.set("label", menuBut[0].text);
				oMenuButton5.value = 0;
			}
			menu.itemData = menuBut;
			
  		}
  		return oMenuButton5;
	},

	updateMenu : function(request, button, onclickModel, selectFirst, defaultItem) {
	
		
		var callback = {
			success : function(o){
				var t = o.responseText;
				
				try {
					t = Url.decode(t);
					
					var brands = YAHOO.lang.JSON.parse(t);
					
					var menuBut = [];
					if (defaultItem) {
						menuBut.push({ text: lang.getMessage("Title.All"), value: 0, onclick: { fn: o.argument[1] } });
					}
					for ( i=0; i< brands.length; i++) {
						
						menuBut.push({
							text : brands[i].name,
							value : brands[i].id,
							onClick : {fn: o.argument[1]}
						});
					}
					
					
					var menu = o.argument[0].getMenu();
					if (YAHOO.util.Dom.inDocument(menu.element)) { 
						menu.clearContent(); 
						menu.addItems(menuBut);
						menu.render();
					} else {
						menu.itemData = menuBut; 
					}
					if (o.argument[2] && menuBut.length > 0) {
						o.argument[0].set("label", menuBut[0].text);
						o.argument[0].value = menuBut[0].value;
					} else {
						o.argument[0].set("label", "");
						o.argument[0].value = "";
					}
					
				} catch (e) {
					alert(e);
				}
			},
			failure : function(o) {
				alert(o);
			}, 
			argument : [button, onclickModel, selectFirst]
		};
			
		if ( request != null && request.length != 0 ) {
			var con = YAHOO.util.Connect;
	  		con.setDefaultPostHeader(false);
	  		con.initHeader("Content-Type", "application/json; charset=utf-8", true); 
	  		var url = YAHOO.autos.consts.servlet + request;
	  		con.asyncRequest("GET", url, callback);
		} else {
			var menuBut = [];
			//menuBut.push({ text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onclickModel } });
			if (YAHOO.util.Dom.inDocument(menu.element)) { 
				menu.clearContent(); 
				menu.addItems(menuBut);
				menu.render();
			} else {
				menu.itemData = menuBut; 
			}
		}
	},
	
	createCheckBox : function(id, title, container) {
		var checkChange = function(event) {
  			var el = YAHOO.util.Dom.get(id + '-button');
  			if (event.newValue) {
  				el.style.backgroundImage = 'url(css/img/checkbox.png)';
  			} else {
  				el.style.backgroundImage = 'url(css/img/uncheck.png)';
  			}
  		};
  		var checkbox = new YAHOO.widget.Button({  
  			type: "checkbox",  
  			label: title,  
  			id: id,  
  			container: container,  
  			checked: false,
  			checkedChange: { fn: checkChange },
  			CSS_CLASS_NAME : "mentry"
  		}); 
  		checkbox.on("checkedChange", checkChange);
  		return checkbox;
	}
};