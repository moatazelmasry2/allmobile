/**
 * 
 */

function initSellList() {
var ui = new YAHOO.utils.UI();
	
	YAHOO.util.Event.onContentReady("sellBrandList", function () {
		ui.createAjaxMenu("request=GetBrands", this);
  	});
	
	YAHOO.util.Event.onContentReady("sellManudate", function () {

  	});
	
	YAHOO.util.Event.onContentReady("sellOiltypeList", function () {
		ui.createAjaxMenu("request=getOilTypes", this);
  	});
	
	YAHOO.util.Event.onContentReady("sellCityList", function () {
		ui.createAjaxMenu("", this);
  	});
	
	YAHOO.util.Event.onContentReady("sellModelList", function () {
		ui.createAjaxMenu("", this);
  	});
	
	YAHOO.util.Event.onContentReady("sellPrice", function () {

  	});
	
	YAHOO.util.Event.onContentReady("sellMeter", function () {

  	});
	
	YAHOO.util.Event.onContentReady("sellCountryList", function () {
		ui.createAjaxMenu("request=GetCountries", this);
  	});
	YAHOO.util.Event.onContentReady("sellStatusList", function () {
		ui.createAjaxMenu("request=GetStatus", this);
  	});
	
	YAHOO.util.Event.onContentReady("quickSellBtnDiv", function () {
        var oButton = new YAHOO.widget.Button({ 
            type: "link", 
            id: "quickSellBtn", 
            label: lang.getMessage("Title.SellNow"), 
            href: "modules/sell_pkw/index.jsp", 
            container: this });
    } );

}