YAHOO.namespace("autos.sellpkw");
YAHOO.autos.sellpkw.fields = {
	category : null,
	brands : null,
	models : null,
	manuDate : null,
	numDoors : null,
	numSeats : null,
	oilTypes : null,
	price : null,
	meter : null,
	countries : null,
	status : null,
	conditioner : null,
	leather : null,
	power_steering : null,
	gearTypes : null,
	colors : null,
	navigator : null,
	windshield : null,
	abs : null,
	fourx4 : null,
	alarm : null,
	xenon : null,
	airbags : null,
	central_locks : null
};

(function() {
    var Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event;

    Event.onDOMReady(function() {
      var ui = new YAHOO.utils.UI();
      var fields = YAHOO.autos.sellpkw.fields;
      
	  YAHOO.util.Event.onContentReady("content", function () {
	  });
	  
	  YAHOO.util.Event.onContentReady("basic", function () {

	  });
      
      YAHOO.util.Event.onContentReady("brandList", function () {
    	  
    	  var onclickFn = function (p_sType, p_aArgs, p_oItem) {
	  			var sText = p_oItem.cfg.getProperty("text");
	  			var value = p_oItem.value;
	  			var brands = YAHOO.autos.sellpkw.fields.brands;
	  			brands.set("label", sText);
	  			brands.value = value;
	  			var models = YAHOO.autos.sellpkw.fields.models;
	  			var onclickModel = function (p_sType, p_aArgs, p_oItem) {
		  			var sText = p_oItem.cfg.getProperty("text");
		  			models.set("label", sText);
		  			models.value = p_oItem.value; 
		  		};
		  		if (!value || value == 0 ) {
		  			//ui.updateMenu("", YAHOO.autos.sellpkw.fields.models.getMenu(), onclickModel);
		  		} else {
		  			ui.updateMenu("request=GetModels&brandid=" + value, YAHOO.autos.sellpkw.fields.models, onclickModel, true);
		  			//models.set("label", models.getMenu().getItem(0).cfg.getProperty("text"));
		  			 
		  		}
	  			
	  		};
  	      var brands = ui.createAjaxMenu("request=GetBrands", this, onclickFn, true);
  	      YAHOO.autos.sellpkw.fields.brands = brands;
      });
  	
      YAHOO.util.Event.onContentReady("catList", function () {
    	  YAHOO.autos.sellpkw.fields.category = ui.createAjaxMenu("request=GetCategories", this, null, true);
      });
      
      YAHOO.util.Event.onContentReady("modelList", function () {
    	  YAHOO.autos.sellpkw.fields.models = ui.createAjaxMenu("request=getmodels&brandid=1", this, null, true);
      });
  	
      YAHOO.util.Event.onContentReady("manudateList", function () {
    	  var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
    			var sText = p_oItem.cfg.getProperty("text");
        		oMenuButton5.set("label", sText);
        		oMenuButton5.value = p_oItem.value;
    		};

    		var menuBut = [
    		    //{ text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } }
    		];
    		
     		for ( i = 2012 ; i >= 1900; i--) {
     			menuBut.push({ text: i.toString(), value: i, onclick: { fn: onMenuItemClick } });
     		}
    		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", /*label: lang.getMessage("Title.All"),*/ name: "mymenubutton",
    														menu: menuBut, container: this });
    		YAHOO.autos.sellpkw.fields.manuDate = oMenuButton5;
    		oMenuButton5.getMenu().setInitialSelection();
    		oMenuButton5.set("label", menuBut[0].text);
    		oMenuButton5.value = menuBut[0].value;
      });
      
      YAHOO.util.Event.onContentReady("numDoors", function () {
    	  var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
    			var sText = p_oItem.cfg.getProperty("text");
        		oMenuButton5.set("label", sText);
        		oMenuButton5.value = p_oItem.value;
    		};

    		var menuBut = [
    		    //{ text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } }
    		];
    		
     		for ( i = 2; i <= 10; i++) {
     			menuBut.push({ text: i.toString(), value: i, onclick: { fn: onMenuItemClick } });
     		}
    		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: lang.getMessage("Title.All"), name: "mymenubutton", 
    														menu: menuBut, container: this });
    		YAHOO.autos.sellpkw.fields.numDoors = oMenuButton5;
    		oMenuButton5.getMenu().setInitialSelection();
    		oMenuButton5.set("label", menuBut[0].text);
    		oMenuButton5.value = menuBut[0].value;
      });
      
      YAHOO.util.Event.onContentReady("numSeats", function () {
    	  var onMenuItemClick = function (p_sType, p_aArgs, p_oItem) {
    			var sText = p_oItem.cfg.getProperty("text");
        		oMenuButton5.set("label", sText);
        		oMenuButton5.value = p_oItem.value;
    		};

    		var menuBut = [
    		    //{ text: lang.getMessage("Title.All"), value: 0, onclick: { fn: onMenuItemClick } }
    		];
    		
     		for ( i = 2; i <= 10; i++) {
     			menuBut.push({ text: i.toString(), value: i, onclick: { fn: onMenuItemClick } });
     		}
    		var oMenuButton5 = new YAHOO.widget.Button({ type: "menu", label: lang.getMessage("Title.All"), name: "mymenubutton", 
    														menu: menuBut, container: this });
    		YAHOO.autos.sellpkw.fields.numSeats = oMenuButton5;
    		oMenuButton5.getMenu().setInitialSelection();
    		oMenuButton5.set("label", menuBut[0].text);
    		oMenuButton5.value = menuBut[0].value;
      });
  	
  YAHOO.util.Event.onContentReady("oiltypeList", function () {
		YAHOO.autos.sellpkw.fields.oilTypes = ui.createAjaxMenu("request=getOilTypes", this, null, true);
	});
  	YAHOO.util.Event.onContentReady("statusList", function () {
  		YAHOO.autos.sellpkw.fields.status = ui.createAjaxMenu("request=getstatus", this, null, true);
  	});
  	
  	YAHOO.util.Event.onContentReady("cityList", function () {
  		YAHOO.autos.sellpkw.fields.cities = ui.createAjaxMenu("", this);
  	});
  	
  	YAHOO.util.Event.onContentReady("price", function () {
  		YAHOO.autos.sellpkw.fields.price = this;
    });
  	
  	YAHOO.util.Event.onContentReady("meter", function () {
  		YAHOO.autos.sellpkw.fields.meter = this;
    });
  	
  	YAHOO.util.Event.onContentReady("countryList", function () {
  		YAHOO.autos.sellpkw.fields.countries = ui.createAjaxMenu("request=GetCountries", this, null, true);
  	});
  	
  	YAHOO.util.Event.onContentReady("paymentList", function () {
    });
  	
  	YAHOO.util.Event.onContentReady("gearList", function () {
  		YAHOO.autos.sellpkw.fields.gearTypes =ui.createAjaxMenu("request=GetGearTypes", this, null, true);
    });
  	
  	YAHOO.util.Event.onContentReady("colorList", function () {
  		YAHOO.autos.sellpkw.fields.colors = ui.createAjaxMenu("request=getcolors", this, null, true);
	});
  	
  	YAHOO.util.Event.onContentReady("ext_col1", function () {
  		 
  		fields.leather = ui.createCheckBox("leather_seats", lang.getMessage("Title.Leather_Seats"), "leather_div");
  		fields.power_steering = ui.createCheckBox("power_steering", lang.getMessage("Title.PowerSteering"), "power_div");
  		fields.alarm  = ui.createCheckBox("alarm", lang.getMessage("Title.Alarm"), "alarm_div");
    });
  	
  	YAHOO.util.Event.onContentReady("ext_col2", function () {
  		fields.central_locks  = ui.createCheckBox("central_locks", lang.getMessage("Title.Central_Locks"), "locks_div");
  		fields.navigator  = ui.createCheckBox("navigator", lang.getMessage("Title.Navigator"), "navi_div");
  		fields.fourx4  = ui.createCheckBox("fourx4", lang.getMessage("Title.4X4"), "4x4_div");
  		fields.airbags  = ui.createCheckBox("airbags", lang.getMessage("Title.Airbags"), "airbags_div");
    });
  	
  	YAHOO.util.Event.onContentReady("ext_col3", function () {
 		 
  		fields.windshield = ui.createCheckBox("windshield", lang.getMessage("Title.Auto_Windschield"), "windshield_div");
  		fields.conditioner = ui.createCheckBox("conditioner", lang.getMessage("Title.AirConditioner"), "conditioner_div");
  		fields.abs  = ui.createCheckBox("abs", lang.getMessage("Title.ABS"), "abs_div");
  		fields.xenon  = ui.createCheckBox("xenon", lang.getMessage("Title.Xenon"), "xenon_div");
    });
  	
  	YAHOO.util.Event.onContentReady("uploadForm", function () {
  		
	});
  	
  	YAHOO.util.Event.onContentReady("desc_text", function () {
  		var textA = document.getElementById("desc_text");
  		var counter = document.getElementById("lCounter");
  		var lcount = 10000;
  		var limit = 10000;
  		counter.innerHTML = lcount;
  		YAHOO.util.Event.addListener("desc_text", "keyup", function(event) {
  			if ( textA.textLength > limit ) {
  				textA.value = textA.value.slice(0, limit);
  				lcount = 0;
  			} else {
  				lcount = limit - textA.textLength;
  			}
  			counter.innerHTML = lcount;
  		});

	});
  	
  	YAHOO.autos.sellpkw.submit = function(e) {
  		var fields = YAHOO.autos.sellpkw.fields;
  		var category = fields.category.value;
  		category = category? category : false;
  		var brand = fields.brands.value;
  		brand = brand? brand : false;
  		var model = fields.models.value;
  		model = model? model : false;
  		var manuDate = fields.manuDate.value;
  		manuDate = manuDate? manuDate : false;
  		var numDoors = fields.numDoors.value;
  		numDoors = numDoors? numDoors : false; 
  		var numSeats = fields.numSeats.value;
  		numSeats = numSeats? numSeats : false;
  		var oilType = fields.oilTypes.value;
  		oilType = oilType ? oilType : false;
  		var country = fields.countries.value;
  		country = country ? country : false;
  		var gearType = fields.gearTypes.value;
  		gearType = gearType? gearType : false;
  		var color = fields.colors.value;
  		color = color? color : false;
  		var status = fields.status.value;
  		status = status? status : false;
  		var price = fields.price.value;
		price = parseInt(price);
		if (isNaN(price)) {
			alert(lang.getMessage("Msg.InsertPrice"));
			fields.price.focus();
			return;
		}
  				
  		var meter = fields.meter.value;
  		meter = parseInt(meter);
		if (isNaN(meter)) {
			alert(lang.getMessage("Msg.InsertKm"));
			fields.meter.focus();
			return;
		}
		
  		var conditioner = fields.conditioner.get("checked");
  		var leather = fields.leather.get("checked");
  		var powerSteering = fields.power_steering.get("checked");
  		var navigator = fields.navigator.get("checked");
  		var windshield = fields.windshield.get("checked");
  		var abs = fields.abs.get("checked");
  		var fourx4 = fields.fourx4.get("checked");
  		var alarm = fields.alarm.get("checked");
  		var xenon = fields.xenon.get("checked");
  		var airbags = fields.airbags.get("checked");
  		var central_locks = fields.central_locks.get("checked");
  		var desc = document.getElementById("desc_text").value;
  		
  		var req = YAHOO.autos.consts.servlet;
  		req +="request=sellPkw";
  		
  		
  		var request = category != 0? "category=" + category + "&" : ""; 
  		request += "brand=" + brand + "&";
  		request += model!=0? "model=" + model + "&" : "";
  		request += manuDate?"manuDate=" + manuDate + "&" : "";
  		request += numDoors!=0? "numDoors=" + numDoors + "&" : "";
  		request += numSeats!=0? "numSeats=" + numSeats + "&" : "";
  		request += oilType!=0? "oilType=" + oilType + "&" : "";
  		request += status!=0? "status=" + status + "&" : "";
  		request += country!=0? "country=" + country + "&" : 0;
  		request += gearType!=0? "gearType=" + gearType + "&" : "";
  		request += "price=" + price + "&";
  		request += "meter=" + meter + "&";
  		request += color!=0? "color=" + color + "&" : "";
  		request += conditioner? "conditioner=true&" : "";
  		request += leather? "leather=true&" : "";
  		request += powerSteering? "powerSteering=true&" : "";
  		request += navigator? "navigator=true&" : "";
  		request += windshield? "windshield=true&" : "";
  		request += abs? "abs=true&" : "";
  		request += fourx4? "fourx4=true&" : "";
  		request += alarm? "alarm=true&" : "";
  		request += xenon? "xenon=true&" : "";
  		request += airbags? "airbags=true&" : "";
  		request += central_locks? "central_locks=true&" : "";
  		request += desc.length > 0 ? "desc=" + desc + "&" : "";
  		if (YAHOO.autos.uploader.imgs) {
  			var imgs = YAHOO.autos.uploader.imgs; 
  			var vals = "";
  			for (i=0; i < imgs.length; i++) {
  				if (i > 0 ) {
  					vals += ",";
  				}
  				vals += imgs[i].full ;//+ ","; + imgs[i].preview;
  			}
  			
  			request+= "imgs=" + vals;
  		}
  		
  		var form = document.createElement("form");
  		
  		var callback = {
  			success : function(o) {
  				var t = o.responseText.replace("\n","").replace("\r","");
  				window.location = YAHOO.autos.consts.pkwOffer + t;
  			},
  			failure : function(o) {
  				alert(o.statusText);
  			}
  		} ;
  		var con = YAHOO.util.Connect;
  		con.setDefaultPostHeader(false);
  		con.initHeader("Content-Type", "text/plain; charset=utf-8", true); 
  		var url = req;
  		con.asyncRequest("POST", url, callback, request);
  	};
  	
  	
  	var sell1 = new YAHOO.widget.Button({  
        label:"Sell",  
        id:"sell1",  
        container:"submit1" }); 
  	
  	var sell2 = new YAHOO.widget.Button({  
        label:"Sell",  
        id:"sell12",  
        container:"submit2" });
  	sell1.on("click", YAHOO.autos.sellpkw.submit); 
  	sell2.on("click", YAHOO.autos.sellpkw.submit);
    });
})();


