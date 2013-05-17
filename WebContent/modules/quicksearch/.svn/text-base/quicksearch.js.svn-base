/**
 * 
 */
YAHOO.namespace("autos.quicksearch");
YAHOO.autos.quicksearch.fields = {
	brands : null,
	manuDate : null,
	models : null,
	oilTypes : null,
	price : null,
	meter : null,
	countries : null
};
function initlist(id, items) {
	var ui = new YAHOO.utils.UI();
	
	
	YAHOO.util.Event.onContentReady("brandList", function () {
		var onclickFn = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
  			var value = p_oItem.value;
  			var brands = YAHOO.autos.quicksearch.fields.brands;
  			brands.set("label", sText);
  			brands.value = value;
  			var models = YAHOO.autos.quicksearch.fields.models;
  			var onclickModel = function (p_sType, p_aArgs, p_oItem) {
	  			var sText = p_oItem.cfg.getProperty("text");
	  			models.set("label", sText);
	  			models.value = p_oItem.value; 
	  		};
	  		if (!value || value == 0 ) {
	  		} else {
	  			ui.updateMenu("request=GetModels&brandid=" + value, YAHOO.autos.quicksearch.fields.models, onclickModel, true, true);
	  		}
  			
  		};
  		YAHOO.autos.quicksearch.fields.brands = ui.createAjaxMenu("request=GetBrands", this, onclickFn, true, true);
  	});
	
	YAHOO.util.Event.onContentReady("manudateList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
  			YAHOO.autos.quicksearch.fields.manuDate.set("label", sText);			
  		};

  		var menuBut = [
  		    { text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } }
  		];
  		for (i = 2011 ; i >= 1990; i--) {
  			menuBut.push({ text: i.toString(), value: i, onclick: { fn: onMenuItemClick } });
  		}
  		menuBut.push({ text: "1980", value: 1980, onclick: { fn: onMenuItemClick } });
  		menuBut.push({ text: "1970", value: 1970, onclick: { fn: onMenuItemClick } });
  		menuBut.push({ text: "1960", value: 1960, onclick: { fn: onMenuItemClick } });
  		menuBut.push({ text: "1950", value: 1950, onclick: { fn: onMenuItemClick } });
  		menuBut.push({ text: "1940", value: 1940, onclick: { fn: onMenuItemClick } });
  		menuBut.push({ text: "1900", value: 1900, onclick: { fn: onMenuItemClick } });

  		YAHOO.autos.quicksearch.fields.manuDate = new YAHOO.widget.Button({ type: "menu", label: lang.getMessage("Title.All"), name: "mymenubutton", 
  														menu: menuBut, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("oiltypeList", function () {
		YAHOO.autos.quicksearch.fields.oilTypes = ui.createAjaxMenu("request=getOilTypes", this, null, true, true);
  	});
	
	YAHOO.util.Event.onContentReady("cityList", function () {
		//ui.createAjaxMenu("", this);
  	});
	
	YAHOO.util.Event.onContentReady("modelList", function () {
		YAHOO.autos.quicksearch.fields.models = ui.createAjaxMenu(null, this, null, true, true);
  	});
	
	YAHOO.util.Event.onContentReady("priceList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
  			YAHOO.autos.quicksearch.fields.price.set("label", sText);			
  		};

  		var menuBut = [
  		    { text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } }
  		];
  		
   		for ( i = 50000 ; i >= 1000; i-=5000) {
   			menuBut.push({ text: i.toString(), value: i, onclick: { fn: onMenuItemClick } });
   		}
   		YAHOO.autos.quicksearch.fields.price = new YAHOO.widget.Button({ type: "menu", label: lang.getMessage("Title.All"), name: "mymenubutton", 
  														menu: menuBut, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("meterList", function () {

  		var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
  			var sText = p_oItem.cfg.getProperty("text");
  			YAHOO.autos.quicksearch.fields.meter.set("label", sText);			
  		};

  		var menuBut = [
  		    { text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } }
  		];
  		for ( i = 50000 ; i >= 1000; i-=5000) {
   			menuBut.push({ text: i.toString(), value: i, onclick: { fn: onMenuItemClick } });
   		}
  		YAHOO.autos.quicksearch.fields.meter = new YAHOO.widget.Button({ type: "menu", label: lang.getMessage("Title.All"), name: "mymenubutton", 
  														menu: menuBut, container: this });
  	});
	
	YAHOO.util.Event.onContentReady("countryList", function () {
		YAHOO.autos.quicksearch.fields.countries = ui.createAjaxMenu("request=GetCountries", this, null, true, true );
  	});
}