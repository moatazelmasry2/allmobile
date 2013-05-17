YAHOO.util.Event.onDOMReady(function () {
	YAHOO.namespace("autos.pkwoffer");
	
	YAHOO.autos.pkwoffer.getImage = function (parent) {
	    var el = parent.firstChild;
	            
	    while (el) { 
	        if (el.nodeName.toUpperCase() == "IMG") {
	            
	        	return el.src.replace("_icon", "_prev");
	        }
	        el = el.nextSibling;
	    }
	    return "";
	};
	
	YAHOO.autos.pkwoffer.initCarousel = function() {
		
		var imgs = YAHOO.autos.pkwoffer.pkw.images;
		var folder = YAHOO.autos.consts.imgs;
		imgs = imgs.split(",");
		var listElem = document.getElementById("carousel");
		listElem.innerHTML = "";
		if ( imgs.length > 0 ) {
			for (i=0; i< imgs.length; i++) {
				var link = document.createElement("a");
				var path = folder + imgs[i];
				link.setAttribute("href", path);
				var li = document.createElement("li");
				var imgElem = document.createElement("img");
				imgElem.setAttribute("src",path.replace("_full","_icon"));
				li.appendChild(imgElem);
				listElem.appendChild(li);
			}
			var spotlight   = YAHOO.util.Dom.get("spotlight"),
	        carousel    = new YAHOO.widget.Carousel("container");
	        spotlight.innerHTML = "";
	        carousel.on("itemSelected", function (index) {
	            // item has the reference to the Carousel's item
	            var item = carousel.getElementForItem(index);
	
	            if (item) {
	                spotlight.innerHTML = "<img src=\""+YAHOO.autos.pkwoffer.getImage(item)+"\">";
	            }
	        });
	            
	        carousel.render(); // get ready for rendering the widget
	        carousel.show();   // display the widget
		} else {
			//var li = document.createElement("li");
			var container = document.getElementById("spotlight");
			var imgElem = document.createElement("img");
			imgElem.setAttribute("src",YAHOO.autos.consts.noimage.replace("full","prev"));
			container.appendChild(imgElem);
		}
	};
	
	YAHOO.autos.pkwoffer.initCarousel();
	
});
