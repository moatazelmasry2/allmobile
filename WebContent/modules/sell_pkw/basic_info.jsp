<%@page import="org.allmobil.utils.Html"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<div id="basic" class="vspace_top">
    <div class="yui3-u-1-24"></div>
    <div class="yui3-u-5-24">
        <!-- ***************  column 1 ********************************* -->
        <div class="mentry"></div>
         <%= Html.createMenuButton("oiltypeList", "mentry", lang.getMessage("Title.OilType"))%>
         <%= Html.createMenuButton("colorList", "mentry", lang.getMessage("Title.Color"))%>
         <%= Html.createMenuButton("numDoors", "mentry", lang.getMessage("Title.Num_Doors"))%>
        <div class="mentry"></div>
    </div>
    
    <!-- ******************   column2  ******************************** -->
    <div class="yui3-u-1-12"></div>
    
    <div class="yui3-u-5-24">
        <%= Html.createMenuButton("catList", "mentry", lang.getMessage("Title.Category"))%>
        <%= Html.createMenuButton("modelList", "mentry", lang.getMessage("Title.Model"))%>
        <%= Html.createMenuButton("gearList", "mentry", lang.getMessage("Title.Gear"))%>
        <%= Html.createMenuButton("numSeats", "mentry", lang.getMessage("Title.Num_Seats"))%>
        <%= Html.createTextInput("price", "mentry", lang.getMessage("Title.Price"))%>
    </div>
    <!-- *********************   column 3 ******************************************* -->
    <div class="yui3-u-1-12"></div>
    <div class="yui3-u-5-24">
        <%= Html.createMenuButton("statusList", "mentry", lang.getMessage("Title.Status"))%>
        <%= Html.createMenuButton("brandList", "mentry", lang.getMessage("Title.Brand"))%>
        <%= Html.createMenuButton("manudateList", "mentry", lang.getMessage("Title.ManuDate"))%>
        <div class="mentry"></div>
        <%= Html.createTextInput("meter", "mentry", lang.getMessage("Title.MeterList") )%>
        <%= Html.createMenuButton("countryList", "mentry", lang.getMessage("Title.Country") )%>
        <form action="POST" action="/autos/servlet?request=sell_pkw" id="submit1" class="mentry">
        </form>
        
    </div>
</div>