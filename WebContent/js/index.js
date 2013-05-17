(function() {
    var Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event;

    Event.onDOMReady(function() {
        
      YAHOO.namespace("example.container");
      
      var tabView = new YAHOO.widget.TabView('quicksearch');

      var quicksearch = document.getElementById("quicksearch");
      YAHOO.example.container.module2 = new YAHOO.widget.Overlay("module2");
      YAHOO.example.container.module2.appendToBody(quicksearch);
      YAHOO.example.container.module2.render("module");
      YAHOO.example.container.module2.cfg.setProperty("xy", [700,200]);
      YAHOO.example.container.module2.show();

      initlist();
      initSellList();
      YAHOO.util.Event.onContentReady("divSearch", function () {
          
          var oButton = new YAHOO.widget.Button({ 
              //type: "push", 
              id: "searchBtn", 
              label : lang.getMessage("Title.SearchNow"),
              //href: "result.html", 
              container: "divSearch" });
          oButton.on("click", function(e){
              var fields = YAHOO.autos.quicksearch.fields;
        	  //var category = fields.category.value;
        	  //category = category? category : false;
        	  var brand = fields.brands.value;
        	  brand = brand? brand : false;
        	  var model = fields.models.value;
        	  model = model? model : false;
        	  var manuDate = fields.manuDate.value;
        	  manuDate = manuDate? manuDate : false;
        	  var oilType = fields.oilTypes.value;
        	  oilType = oilType ? oilType : false;
        	  var country = fields.countries.value;
        	  country = country ? country : false;
        	  //var status = fields.status.value;
        	  //status = status? status : false;
        	  var price = fields.price.value;
        	  price = price? price : false;
        	  var meter = fields.meter.value;
        	  meter = meter? meter : false;
        				
        	  var request = YAHOO.autos.consts.resultpkwsearch;
        	  request += "request=searchpkw";
        		
        	  
        	  //var request = category != 0? "category=" + category + "&" : "";
        	  
        	  request += brand?"brand=" + brand + "&" : "";
        	  request += model? "model=" + model + "&" : "";
        	  request += manuDate?"manuDateTo=" + manuDate + "&" : "";
        	  request += oilType? "oilType=" + oilType + "&" : "";
        	  //request += status!=0? "status=" + status + "&" : "";
        	  request += country? "country=" + country + "&" : "";
        	  request += price? "priceTo=" + price + "&" : "";
        	  request += meter? "meterTo=" + meter + "&" : "";
        	  window.location = request;
          });
      } );
      YAHOO.util.Event.onContentReady("divDetailSearch", function () {
          var oButton = new YAHOO.widget.Button({ 
              type: "link", 
              id: "searchDetailedBtn", 
              label: lang.getMessage("Title.DetailSearch"), 
              href: "detail_search.html", 
              container: "divDetailSearch" });
      } );
    });
})();


