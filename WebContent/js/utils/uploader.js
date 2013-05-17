/**
 * 
 */

YAHOO.namespace('utils'); 

YAHOO.utils.UI = function() {
	
};

YAHOO.utils.UI.prototype = {
		
};

function writeFileList(o) {
	var div = DOM.get('upload-list');
	div.innerHTML = o.responseText;
}

var uploadHandler = {
	upload: writeFileList,
	failure: handleError,
	argument: null
};

function uploadFile() {
	var form = DOM.get('uploadForm');
	if(form.target.value == "") {
		alert('Please select a file');
		return;
	}

	YAHOO.util.Connect.setForm(form,true);
	var request =
		YAHOO.util.Connect.asyncRequest('POST','/autos/uploader',uploadHandler,null);
	}