/**
 * 
 */
YAHOO.namespace("autos.uploader");

function getImage(parent) {
    var el = parent.firstChild;
            
    while (el) { // walk through till as long as there's an element
        if (el.nodeName.toUpperCase() == "IMG") { // found an image
            // flickr uses "_s" suffix for small, and "_m" for big
            // images respectively
            //return el.src.replace(/_s\.jpg$/, "_m.jpg");
        	return el.src.replace("_icon", "_prev");
        }
        el = el.nextSibling;
    }
    
    return "";
}


YAHOO.util.Event.onContentReady("uploader", function () {
	
	var oPushButton1 = new YAHOO.widget.Button("upload_img"); 
	
	var W3CDOM = (document.createElement && document.getElementsByTagName);

	function initFileUploads(id, parent) {
		if (!W3CDOM) return;
		var fakeFileUpload = document.createElement('div');
		//fakeFileUpload.id = id;
		fakeFileUpload.className = 'fakefile';
		var image = document.createElement('img');
		image.src= YAHOO.autos.consts.base + 'modules/imgupload/css/img/document-open-5.png';
		if (langID == 'ar') {
			fakeFileUpload.appendChild(image);
			fakeFileUpload.appendChild(document.createElement('input'));
		} else {
			fakeFileUpload.appendChild(document.createElement('input'));
			fakeFileUpload.appendChild(image);
		}
		
		var x = document.getElementsByTagName('input');
		for (var i=0;i<x.length;i++) {
			if (x[i].type != 'file') continue;
			if (x[i].parentNode.className != 'fileinputs') continue;
			x[i].className = 'file hidden';
			var clone = fakeFileUpload.cloneNode(true);
			x[i].parentNode.appendChild(clone);
			x[i].relatedElement = clone.getElementsByTagName('input')[0];
			x[i].onchange = x[i].onmouseout = function () {
				this.relatedElement.value = this.value;
			};
		}
	}
	

	
	YAHOO.autos.uploader.panel1 = new YAHOO.widget.Panel("uploadDialog", { width:"320px", visible:false, constraintoviewport:true } );
	YAHOO.autos.uploader.panel1.render();
	initFileUploads();

	YAHOO.util.Event.addListener("upload_img", "click", YAHOO.autos.uploader.panel1.show, YAHOO.autos.uploader.panel1, true);
	
	var uploadHandler = {
	    upload: function(o) {
	    	o.argument[0].hide();
		    var div = document.getElementById('upload-list');
		    var t = o.responseText;
				
				try {
					t = Url.decode(t);
					
					var imgs = YAHOO.lang.JSON.parse(t);
					YAHOO.autos.uploader.imgs=imgs;
					YAHOO.autos.uploader.imgsJson = t;
					var listElem = document.getElementById("carousel");
					listElem.innerHTML = "";
					listElem.innerHTML = "";
					for (i=0; i< imgs.length; i++) {
						var li = document.createElement("li");
						var imgElem = document.createElement("img");
						imgElem.setAttribute("src",YAHOO.autos.consts.imgs + imgs[i].full.replace("_full","_icon"));
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
		                    spotlight.innerHTML = "<img src=\""+getImage(item)+"\">";
		                }
		            });
		                
		            carousel.render(); // get ready for rendering the widget
		            carousel.show();   // display the widget

				}catch (e) {
					alert(e);
				}
				
		},
	    failure: function(e) {
	        alert(e);	
	    },
	    argument: [YAHOO.autos.uploader.panel1]
	};
	
	YAHOO.autos.uploader.uploadFile = function () {
	    var form = document.getElementById('uploadForm');
	    YAHOO.util.Connect.setForm(form,true);
	    var request =
	        YAHOO.util.Connect.asyncRequest('POST','/autos/servlet?request=upload',uploadHandler,null);
	};
});