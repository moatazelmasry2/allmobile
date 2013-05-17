YAHOO.util.Event.onContentReady("productsandservices", function () {

	var oMenuBar = new YAHOO.widget.MenuBar("productsandservices", { 
	                                            autosubmenudisplay: true, 
	                                            hidedelay: 750, 
	                                            lazyload: true });
	var aSubmenuData = [
	
	    lang.getMessage("Title.Home"),
	    {
	        id: "Buy", 
	        itemdata: [ 
	            { text: lang.getMessage("Title.Pkw"), url: consts.getMessage("JSP.UnderConstruction") },
	            { text: lang.getMessage("Title.Lkw"), url: consts.getMessage("JSP.UnderConstruction") },
	            { text: lang.getMessage("Title.Heavy"), url: consts.getMessage("JSP.UnderConstruction") },
	            { text: lang.getMessage("Title.Tools"), url: consts.getMessage("JSP.UnderConstruction") }
	        ]
	    },
	    {
	        id: "Sell", 
	        //text : "بيع سيارتك",
	        itemdata: [ 
	             { text: lang.getMessage("Title.Pkw"), url: consts.getMessage("JSP.Sell_PKW") },
	            { text: lang.getMessage("Title.Lkw"), url: consts.getMessage("JSP.UnderConstruction") },
	            { text: lang.getMessage("Title.Heavy"), url: consts.getMessage("JSP.UnderConstruction") },
	            { text: lang.getMessage("Title.Tools"), url: consts.getMessage("JSP.UnderConstruction") }
	        ]
	    },
	    {
	        id: "Accounts", 
	        //text : "حسابات",
	        itemdata: [ 
				{ text: lang.getMessage("Title.Register"), url: consts.getMessage("JSP.UnderConstruction") },
				{ text: lang.getMessage("Title.Login"), url: consts.getMessage("JSP.UnderConstruction") }
	        ]
	    },
	    {
	        id: "Help", 
	        //text : "تعليمات",
	        itemdata: [
	            { text: lang.getMessage("Title.Help"), url: consts.getMessage("JSP.UnderConstruction") },
	            { text: lang.getMessage("Title.TOS"), url: consts.getMessage("JSP.UnderConstruction") }
	        ]
	    },
	    {
	        id: "companies", 
	        itemdata: [
	            /*{ text: "شركات خاصه", url: "http://360.yahoo.com" },
	            { text: "شركات حكوميه", url: "http://members.yahoo.com" }*/
	        ]
	    },
	    {
	        id: "communication", 
	        //text : "اتصل بنا",
	        itemdata: [ 
	            /*{ text: lang.getMessage("Title.Telephone"), url: "http://360.yahoo.com" },
	            { text: "فاكس", url: "http://members.yahoo.com" }*/
	        ]
	    }
	];
	
	//
	if (langID == "ar") {
		aSubmenuData.reverse();
	}
	var ua = YAHOO.env.ua,
	    oAnim;  // Animation instance
	
	function onSubmenuBeforeShow(p_sType, p_sArgs) {
	
	    var oBody,
	        oElement,
	        oShadow,
	        oUL;
	
	
	    if (this.parent) {
	
	        oElement = this.element;
	        oShadow = oElement.lastChild;
	        oShadow.style.height = "0px";
	        if (oAnim && oAnim.isAnimated()) {
	            oAnim.stop();
	            oAnim = null;
	        }
	        oBody = this.body;
	
	
	        //  Check if the menu is a submenu of a submenu.
	
	        if (this.parent && 
	            !(this.parent instanceof YAHOO.widget.MenuBarItem)) {
	        
	            if (ua.gecko || ua.opera) {
	            
	                oBody.style.width = oBody.clientWidth + "px";
	            }
	            
	            if (ua.ie == 7) {
	                oElement.style.width = oElement.clientWidth + "px";
	            }
	        }
	
	        oBody.style.overflow = "hidden";
	        oUL = oBody.getElementsByTagName("ul")[0];
	        oUL.style.marginTop = ("-" + oUL.offsetHeight + "px");
	    }
	}
	
	function onTween(p_sType, p_aArgs, p_oShadow) {
	
	    if (this.cfg.getProperty("iframe")) {
	        this.syncIframe();
	    }
	
	    if (p_oShadow) {
	        p_oShadow.style.height = this.element.offsetHeight + "px";
	    }
	
	}
	
	function onAnimationComplete(p_sType, p_aArgs, p_oShadow) {
	
	    var oBody = this.body,
	        oUL = oBody.getElementsByTagName("ul")[0];
	
	    if (p_oShadow) {
	        p_oShadow.style.height = this.element.offsetHeight + "px";
	    }
	
	
	    oUL.style.marginTop = "";
	    oBody.style.overflow = "";
	    
	
	    if (this.parent && 
	        !(this.parent instanceof YAHOO.widget.MenuBarItem)) {
	
	
	        if (ua.gecko || ua.opera) {
	            oBody.style.width = "";
	        }
	        
	        if (ua.ie == 7) {
	            this.element.style.width = "";
	        }
	    }
	}
	
	
	function onSubmenuShow(p_sType, p_sArgs) {
	
	    var oElement,
	        oShadow,
	        oUL;
	
	    if (this.parent) {
	
	        oElement = this.element;
	        oShadow = oElement.lastChild;
	        oUL = this.body.getElementsByTagName("ul")[0];
	    
	        oAnim = new YAHOO.util.Anim(oUL, 
	            { marginTop: { to: 0 } },
	            .5, YAHOO.util.Easing.easeOut);
	
	
	        oAnim.onStart.subscribe(function () {
	
	            oShadow.style.height = "100%";
	        
	        });
	
	
	        oAnim.animate();
	
	        if (YAHOO.env.ua.ie) {
	            oShadow.style.height = oElement.offsetHeight + "px";
	            oAnim.onTween.subscribe(onTween, oShadow, this);
	        }
	
	        oAnim.onComplete.subscribe(onAnimationComplete, oShadow, this);
	    }
	}
	
	
	oMenuBar.subscribe("beforeRender", function () {
	
		var nSubmenus = aSubmenuData.length,
			i;
	
	    if (this.getRoot() == this) {
			for (i = 0; i < nSubmenus; i++) {
	        	this.getItem(i).cfg.setProperty("submenu", aSubmenuData[i]);
			}
	    }
});


oMenuBar.subscribe("beforeShow", onSubmenuBeforeShow);
oMenuBar.subscribe("show", onSubmenuShow);
oMenuBar.render();
 
});



