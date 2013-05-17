<%@page import="org.allmobil.utils.StringUtils"%>
<%@page import="org.allmobil.entities.PKW"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <%//PKW pkw = null; %>
    
    <div class="title"><%= StringUtils.appendStrings(pkw.brand, ", ", pkw.model)%></div>
    <div id="basic" class="yui3-g">
        <div class="yui3-u-1-2 col1" id="pic_div">
            <div id="container">
                <ol id="carousel">
                </ol>
            </div>
            <div id="spotlight"></div>
        </div>
        <div class="yui3-u-1-6 col2" id=quick_info>
            <div id="price"><%=pkw.price%> $</div>
            <div><span><%= StringUtils.appendStrings(pkw.category,", ", pkw.status)%></span></div>
            <div class="parSeparator"></div>
            <div><%= pkw.oilType%></div>
            <div><%= pkw.manuYear%></div>
            <div><%= StringUtils.appendStrings(pkw.numKm, lang.getMessage("Title.Km"))%> </div>
        </div>
        <div class="yui3-u-1-6 col3" id=owner>owner info</div>
    </div>
    <div class="separator"> </div>
    
    