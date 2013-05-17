(function() {
    var Dom = YAHOO.util.Dom,
        Event = YAHOO.util.Event;

    Event.onDOMReady(function() {
        var layout = new YAHOO.widget.Layout({
            minWidth: 100,
            minHeight: 1200,
        	//width:500,
        	
            units: [
//                { position: 'top', height: 100, resize: false, body: 'top1', header: 'Top', gutter: '5px', collapse: true, resize: true, maxHeight: 100 },
                { position: 'bottom', header: 'Bottom', height: 100, resize: true, body: '', /*gutter: '5px',*/ collapse: true, maxHeight: 130 },
                { position: 'left', width: 200, resize: false, body: "left1", gutter: '2px 5px', collapse: false, scroll: true, maxWidth: 300 },
                //{ position: 'right', width: 170, resize: false, gutter: '2px 5px', collapse: false, scroll: true, maxWidth: 400 },
                { position: 'center', height: 50, width: 700,resize: false, body: 'center1', header: 'Center', scroll: true, gutter: '5px', collapse: false, resize: false, maxHeight: 100 }
            ]
        });
        layout.render();
        
      YAHOO.namespace("example.container");
      

      var quicksearch = document.getElementById("quicksearch");
      YAHOO.example.container.module2 = new YAHOO.widget.Overlay("module2");
      YAHOO.example.container.module2.appendToBody(quicksearch);
      YAHOO.example.container.module2.render("module");
      YAHOO.example.container.module2.cfg.setProperty("xy", [850,200]);
      YAHOO.example.container.module2.show();

      initlist();
      YAHOO.util.Event.onContentReady("divSearch", function () {
          
          var oButton = new YAHOO.widget.Button({ 
              type: "link", 
              id: "searchBtn", 
              label: "ابحث الاَن!", 
              href: "result.html", 
              container: "divSearch" });
      } );
      YAHOO.util.Event.onContentReady("divDetailSearch", function () {
          var oButton = new YAHOO.widget.Button({ 
              type: "link", 
              id: "searchDetailedBtn", 
              label: "بحث متقدم", 
              href: "result.html", 
              container: "divDetailSearch" });
      } );
      
      
/** ***********    don't touch **************/
    });
})();


