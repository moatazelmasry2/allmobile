var Dom = YAHOO.util.Dom;
var Event=YAHOO.util.Event;
var tt_view_w;
var tt_view_h;
var screenPos;
function ttResetSize(e) {
	tt_view_w=Dom.getViewportWidth();
	tt_view_h=Dom.getViewportHeight();
}

function ttResetScroll(e) {
	screenPos={x:Dom.getDocumentScrollLeft(),y:Dom.getDocumentScrollTop()};
}



var yh_tt;

var tt_header=document.createElement('div');
tt_header.id='tt_header';
tt_header.className='tt_header';

var tt_inner=document.createElement('div');
tt_inner.id='tt_inner';
tt_inner.className='yh_tooltip';

var tt_div=document.createElement('div');
tt_div.id='yh_tt';
tt_div.className='yh_tt_div';
tt_div.appendChild(tt_inner);

function init_tt() {
	document.body.appendChild ( tt_div );
	yh_tt=new YAHOO.widget.Overlay('yh_tt',{visible:false});
	yh_tt.setBody ( tt_div );
	yh_tt.render(document.body);
	tt_div.style.display='';
	Event.addListener ( window, 'resize', ttResetSize );
	Event.addListener ( window, 'scroll', ttResetScroll );
	ttResetSize();
	ttResetScroll();
}

Event.onDOMReady( init_tt );


function _moveNodes(dst,src) {
 var c; // tmp
 // empty dst
 while ( (c=dst.firstChild) ) {
  dst.removeChild(c);
 }
 // move src to dst
 while ( (c=src.firstChild) ) {
  dst.appendChild(src.removeChild(c));  
 }
}

var tt_curElem;
var tt_size={w:200,h:200}; // initial size..

function showTip(e,elem) {
	//elem=Event.getTarget(e);
	var reposition=tt_curElem != elem;
	if (tt_curElem != elem) {
		if (!elem.tt_div) return; // have to try again :)
		if (tt_curElem) {
			// put tt_inner children back in tt_curElem
			//var td=YAHOO.util.Dom.get(tt_curElem.tt_div);
			/*for (var x=0;x<tt_inner.childNodes.length;++x) {
			 td.appendChild ( tt_inner.removeChild(tt_inner.childNodes[x]) );
			} */
			_moveNodes(Dom.get(tt_curElem.tt_div),tt_inner);
			
		}
		tt_div.innerHTML=''; // just a safety check
		tt_curElem=elem;
		
		if (!elem.tt_noheader) {
			tt_div.appendChild(tt_header);
		}

		_moveNodes ( tt_inner, Dom.get(elem.tt_div) );
		tt_div.appendChild ( tt_inner );
		
	}
	
	yh_tt.show();
		
	var r=Dom.getRegion('yh_tt');	
	tt_size={w:r.right-r.left,h:r.bottom-r.top};
	
	var p=Event.getXY(e);
	var newPos=[p[0]+15,p[1]+15];
	// reposition higher if div goes beyond bottom of screen
	// bottom of viewable screen:
	var bs=screenPos.y+tt_view_h
	var swap=0;
	if (newPos[1] + tt_size.h > bs) {
		swap++;
		newPos[1] -= tt_size.h + newPos[1]-bs;
	}
		
	// right of screen
	var ls=screenPos.x+tt_view_w;
	if (newPos[0] + tt_size.w > ls) {
		swap++;
		newPos[0] -= tt_size.w+newPos[0]-ls;
	}
	
	// instead of moving, redo the orientation
	if (swap>1) {
		newPos=[p[0]-15-tt_size.w,
				p[1]-15-tt_size.h];
	}
		
	//logDebug ( newPos );
	yh_tt.cfg.setProperty(
		'xy', newPos);

	
	
}

function hideTip(e) {
	yh_tt.hide();
}


function createTip ( elem,divid ) {

	if (arguments.length<3) arguments[2]=true; // default to use header
	
	if (!yh_tt || !elem || elem.tt_div ) return; // not yet initialized	
	elem.tt_div=divid;
	elem.tt_noheader=!arguments[2];
	
	Event.addListener ( elem, 'mouseover', showTip, elem );
	Event.addListener ( elem, 'mouseout', hideTip );
	Event.addListener ( elem, 'mousemove', showTip, elem );
	
}




