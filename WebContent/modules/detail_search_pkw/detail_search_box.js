/**
 * 
 */

function initlist(id, items) {
	YAHOO.util.Event.onContentReady("brandList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "BMW", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "Audi", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "Mercedes", value: 3, onclick: { fn: onMenuItemClick } }

  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("classList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "شاحنات ثقيله", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "سيارات صغيره", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "أخرى", value: 3, onclick: { fn: onMenuItemClick } }

  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	YAHOO.util.Event.onContentReady("manudateListFrom", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "2011", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "2010", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "2009", value: 3, onclick: { fn: onMenuItemClick } }

  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("manudateListTo", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "2011", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "2010", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "2009", value: 3, onclick: { fn: onMenuItemClick } }

  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("oiltypeList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "بنزين", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "ديزل", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("cityList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "القاهره", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "بغداد", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "بيروت", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "جده", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("priceListFrom", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "1000 - 2000", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "2001 - 5000 ", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "5001 - 10000", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "10000 - 20000", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("priceListTo", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "1000 - 2000", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "2001 - 5000 ", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "5001 - 10000", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "10000 - 20000", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("meterListTo", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "1000 - 2000", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "2001 - 5000 ", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "5001 - 10000", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "10000 - 20000", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	YAHOO.util.Event.onContentReady("meterListFrom", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "1000 - 2000", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "2001 - 5000 ", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "5001 - 10000", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "10000 - 20000", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("countryList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "مصر", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "العراق", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "اليمن", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "البحرين", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("paymentList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "نقداً", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "بطاقه ائتمانيه", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("modelList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "AX55", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "W650", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "SM5", value: 2, onclick: { fn: onMenuItemClick } }
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	YAHOO.util.Event.onContentReady("conditionerList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "نوع1", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "نوع2", value: 2, onclick: { fn: onMenuItemClick } }
  			
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	YAHOO.util.Event.onContentReady("gearList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "عادى", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "أوتوماتيك", value: 2, onclick: { fn: onMenuItemClick } }
  			
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("colorList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
      		oMenuButton5.set("label", sText);			
  		};

  		var aMenuButton5Menu = [
  		    { text: "الكل", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "أبيض", value: 1, onclick: { fn: onMenuItemClick } },
  			{ text: "أصفر", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "أزرق", value: 2, onclick: { fn: onMenuItemClick } },
  			{ text: "فضى", value: 2, onclick: { fn: onMenuItemClick } }
  			
  		];

  		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: "الكل", name: "mymenubutton", 
  														menu: aMenuButton5Menu, container: this });
  	});

}