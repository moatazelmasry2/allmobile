<%@page import="org.allmobil.utils.StringUtils"%>
<%@page import="javax.xml.parsers.DocumentBuilder"%>
<%@page import="org.allmobil.entities.PKW"%>
<%@page import="org.allmobil.utils.Html"%>
<%@page import="org.w3c.dom.Element"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <%//PKW pkw = null; %>
    <div id="extended" class="yui3-g">
        <div class="yui3-u-1-2">
            <div class="title2"><%= lang.getMessage("Title.TechnicalSpecs")%></div>
            <div class="titleUnderline"></div>
            <div class="yui3-g">
                <%
                
                StringBuffer ext_col1 = new StringBuffer(500);
                StringBuffer ext_col2 = new StringBuffer(500);
                
                ext_col1.append(Html.createDivAsString(null, "entry itemOdd", lang.getMessage("Title.Status")));
                ext_col2.append(Html.createDivAsString(null, "entry itemOdd", String.valueOf(pkw.status)));
                ext_col1.append(Html.createDivAsString(null, "entry itemEven", lang.getMessage("Title.Category")));
                ext_col2.append(Html.createDivAsString(null, "entry itemEven", String.valueOf(pkw.category)));
                ext_col1.append(Html.createDivAsString(null, "entry itemOdd", lang.getMessage("Title.Brand")));
                ext_col2.append(Html.createDivAsString(null, "entry itemOdd", String.valueOf(pkw.brand)));
                ext_col1.append(Html.createDivAsString(null, "entry itemEven", lang.getMessage("Title.Model")));
                ext_col2.append(Html.createDivAsString(null, "entry itemEven", String.valueOf(pkw.model)));
                ext_col1.append(Html.createDivAsString(null, "entry itemOdd", lang.getMessage("Title.ManuDate")));
                ext_col2.append(Html.createDivAsString(null, "entry itemOdd", String.valueOf(pkw.manuYear)));
                ext_col1.append(Html.createDivAsString(null, "entry itemEven", lang.getMessage("Title.NumKm")));
                ext_col2.append(Html.createDivAsString(null, "entry itemEven", StringUtils.appendStrings(String.valueOf(pkw.numKm)
                        ," ", lang.getMessage("Title.Km") ) ) );
                ext_col1.append(Html.createDivAsString(null, "entry itemOdd", lang.getMessage("Title.OilType")));
                ext_col2.append(Html.createDivAsString(null, "entry itemOdd", String.valueOf(pkw.oilType)));
                ext_col1.append(Html.createDivAsString(null, "entry itemEven", lang.getMessage("Title.Num_Doors")));
                ext_col2.append(Html.createDivAsString(null, "entry itemEven", String.valueOf(pkw.numDoors)));
                ext_col1.append(Html.createDivAsString(null, "entry itemOdd", lang.getMessage("Title.Num_Seats")));
                ext_col2.append(Html.createDivAsString(null, "entry itemOdd", String.valueOf(pkw.numSeats)));
                ext_col1.append(Html.createDivAsString(null, "entry itemEven", lang.getMessage("Title.Color")));
                ext_col2.append(Html.createDivAsString(null, "entry itemEven", String.valueOf(pkw.color)));
                ext_col1.append(Html.createDivAsString(null, "entry itemOdd", lang.getMessage("Title.Color")));
                ext_col2.append(Html.createDivAsString(null, "entry itemOdd", String.valueOf(pkw.country)));
                ext_col1.append(Html.createDivAsString(null, "entry itemEven", lang.getMessage("Title.Gear")));
                ext_col2.append(Html.createDivAsString(null, "entry itemEven", String.valueOf(pkw.gearType)));
                %>
                
                <div class="yui3-u-1-2"><%=ext_col1.toString() %></div>
                <div class="yui3-u-1-2"><%=ext_col2.toString() %></div>
            </div>
            <div>
                <div class="title2 vspace_top"><%= lang.getMessage("Title.Features")%></div>
                <div class="titleUnderline"></div>
                <%
                StringBuffer features = new StringBuffer(500);
                if (pkw.abs) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.ABS")));
                }
                if (pkw.airbags) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.Airbags")));
                }
                if (pkw.airconditioner) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.AirConditioner")));
                }
                if (pkw.alarm) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.Alarm")));
                }
                if (pkw.automaticWindshield) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.Auto_Windschield")));
                }
                if (pkw.centralLocks) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.Central_Locks")));
                }
                if (pkw.fourx4) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.4X4")));
                }
                if (pkw.leatherSeats) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.Leather_Seats")));
                }
                if (pkw.navigator) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.Navigator")));
                }
                if (pkw.powerSteering) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.PowerSteering")));
                }
                if (pkw.xenon) {
                    features.append(Html.createLiAsString(null, "liItem", null, lang.getMessage("Title.Xenon")));
                }
                %>
                <ul class="list"><%=features.toString() %></ul>                
            </div>
            <%
            if ( pkw.description != null && pkw.description.length() > 0 ) {
            %>
            <div>
                <div class="title2 vspace_top"><%= lang.getMessage("Title.Description")%></div>
                <div class="titleUnderline"></div>
                <div class="entry"><%=pkw.description %></div>
            </div>
            <%
            }
            %>
        </div>
    </div>
