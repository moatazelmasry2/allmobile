<%@page import="org.allmobil.utils.Html"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div id="module" class="yui-pe-content">
                    </div>
                
    <div id="quicksearch" class="yui-navset">
    <ul class="yui-nav">
        <li><a href="#tab1"><em><%= lang.getMessage("Title.Sell")%></em></a></li>
        <li class="selected"><a href="#tab2"><em><%= lang.getMessage("Title.Buy")%></em></a></li>
    </ul>            
    <div class="yui-content">
        <div id="tabSell">
            <%@ include file="quicksell.jsp" %>
        </div>
        <div id="tab2">
            <div id="buyContent" class="yui3-g">
                <div class="yui3-u-1-5">
                    <%= Html.createImageLinkAsString(null, "vImgList vImgListSpace", "pkw", "vImageItem", "#", lang.getMessage("Title.Pkw"), null ) %>
                    <%= Html.createImageLinkAsString(null, "vImgList", "lkw", "vImageItem", "#", lang.getMessage("Title.Lkw"), null ) %>
                    <%= Html.createImageLinkAsString(null, "vImgList", "heavy", "vImageItem", "#", lang.getMessage("Title.Heavy"), null ) %>
                    <%= Html.createImageLinkAsString(null, "vImgList", "tools", "vImageItem", "#", lang.getMessage("Title.Tools"), null ) %>
                </div>
                
                
                <div class="yui3-u-1-3">
                    <div class="vSpaceTop">
                        <%= lang.getMessage("Title.New")%>
                        <input type="checkbox" id="newcars" align="right" dir="rtl">
                    </div>
                    <%= Html.createMenuButton("modelList", "mentry", lang.getMessage("Title.Model"))%>
                    <%= Html.createMenuButton("manudateList", "mentry", lang.getMessage("Title.ManuDateFrom"))%>
                    <%= Html.createMenuButton("oiltypeList", "mentry", lang.getMessage("Title.OilType"))%>
                    <div class="mentry"></div>
                    <div id="divSearch" class="mentry"></div>
                </div>
                
                
                <div class="yui3-u-1-3">
                    <div class="vSpaceTop">
                        <%= lang.getMessage("Title.Used")%>
                        <input type="checkbox" id="oldcars" align="right" dir="rtl" checked="checked">
                    </div>
                    <%= Html.createMenuButton("brandList", "mentry", lang.getMessage("Title.Brand"))%>
                    <%= Html.createMenuButton("priceList", "mentry", lang.getMessage("Title.PriceTo"))%>
                    <%= Html.createMenuButton("meterList", "mentry", lang.getMessage("Title.NumKmTo"))%>
                    <%= Html.createMenuButton("countryList", "mentry", lang.getMessage("Title.Country"))%>
                    <div id="divDetailSearch" class="mentry">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>