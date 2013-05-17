YAHOO.namespace("autos.rpkws");
YAHOO.util.Event.addListener(window, "load", function() {
	YAHOO.autos.rpkws.dem = function() {
        var myColumnDefs = [
            {key:"desc",label:"Description"},
            {key:"misc",label:"Misc"},
            {key:"price",label:"Price"},
            {key:"pic",label:""}
        ];

        this.myDataSource = new YAHOO.util.DataSource(YAHOO.util.Dom.get("result"));
        this.myDataSource.responseType = YAHOO.util.DataSource.TYPE_HTMLTABLE;
        this.myDataSource.responseSchema = {
            fields: [{key:"desc"},
                    {key:"misc"},
                    {key:"price"},
                    {key:"pic"}
            ]
        };

        this.myDataTable = new YAHOO.widget.DataTable("dynamicdata", myColumnDefs, this.myDataSource,
                {caption:"Example: Progressively Enhanced Table from Markup"}
        );
        return {
            oDS: myDataSource,
            oDT: myDataTable
        };
    };
});