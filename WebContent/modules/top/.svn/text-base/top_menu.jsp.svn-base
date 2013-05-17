<%@page import="java.util.Collections"%>
<%@page import="org.allmobil.i18n.LangCode"%>
<%@page import="org.allmobil.server.ServVars"%>
<%@page import="org.allmobil.utils.Html"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="yui3-g header">
    <div class="yui3-u-2-3">
        <div id="productsandservices" class="yuimenubar yuimenubarnav">
            <div class="bd header">
                <ul class="first-of-type">
                
                    <%
                    List<String> list = new ArrayList<String>();
                    //ServVars vars = new ServVars();
                    list.add(Html.createItemMenu(null, null, null, 
                            vars.getMessage("JSP.Main"), lang.getMessage("Title.Home")));
                    list.add(Html.createItemMenu(null, "yuimenubaritem", "yuimenubaritemlabel", 
                            vars.getMessage("JSP.UnderConstruction"), lang.getMessage("Title.BuyCar")));
                    list.add(Html.createItemMenu(null, "yuimenubaritem", "yuimenubaritemlabel", 
                            vars.getMessage("JSP.Sell_PKW"), lang.getMessage("Title.SellCar")));
                    list.add(Html.createItemMenu(null, "yuimenubaritem", "yuimenubaritemlabel", 
                            vars.getMessage("JSP.UnderConstruction"), lang.getMessage("Title.Accounts")));
                    list.add(Html.createItemMenu(null, "yuimenubaritem", "yuimenubaritemlabel", 
                            vars.getMessage("JSP.UnderConstruction"), lang.getMessage("Title.Instructions")));
                    list.add(Html.createItemMenu(null, "yuimenubaritem", "yuimenubaritemlabel", 
                            vars.getMessage("JSP.UnderConstruction"), lang.getMessage("Title.Companies")));
                    list.add(Html.createItemMenu(null, "yuimenubaritem", "yuimenubaritemlabel", 
                            vars.getMessage("JSP.UnderConstruction"), lang.getMessage("Title.CallUs")));
                    
                    if (code == LangCode.ar) {
                        Collections.reverse(list);
                    }
                    for (String item : list) {
                        out.write(item);
                        out.write("\n");
                    }
                    %>
                </ul>
            </div>
        </div>
    </div>
    <div class="yui3-u-1-3 lang-menu">
        <div id="lang" class="yui3-menu yui3-menu-horizontal">
            <div class="yui3-menu-content"><!-- Content box -->
                <ul>
                    <li class="yui3-menuitem"><!-- Bounding box -->
                    	<!-- <a class="yui3-menuitem-content" href="/autos/servlet?lang=ar">  -->
                        <a class="yui3-menuitem-content" href="javascript:changeLang(curUrl, 'ar')">
                    	العربيه
                    	</a>
                    </li>
                    <li class="yui3-menuitem"><!-- Bounding box -->
                        <a class="yui3-menuitem-content" href="javascript:changeLang(curUrl, 'en')">
                        English
                        </a>
                    </li>
    
                </ul>
            </div>
        </div>
    </div>
</div>