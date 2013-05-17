<%@page import="org.allmobil.utils.ServletUtils"%>
<%@page import="org.allmobil.db.Queries"%>
<%@page import="org.allmobil.utils.StringUtils"%>
<%@page import="org.allmobil.entities.PKW"%>
<%@page import="org.allmobil.server.ServVars"%>
<%@page import="java.net.URI"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@  include file="../i18n.jsp"%>
<%@  include file="../base.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript">
<!--
<%
String uid = request.getParameter("uid");
String curUrl = StringUtils.appendStrings(vars.getMessage("JSP.PKW_OFFER"), "?request=getpkw&uid=", uid);

String imgFolder = session.getServletContext().getRealPath(vars.getMessage("SERVER.IMGS"));


if (uid == null) {
    %>
    alert ('invalid uid');
    window.location = YAHOO.autos.consts.home;
    <%
}
PKW pkw = Queries.getInstance().getPKWByUid(uid, LangCode.valueOf(langID), imgFolder);
%>
var uid = "<%=uid%>";
var curUrl = "<%=curUrl%>";


//-->
</script>


<title></title>

<link rel="stylesheet" type="text/css" href="../../resources/yui2/build/assets/skins/sam/skin.css">  
<link rel="stylesheet" type="text/css" href="../../resources/yui2/build/container/assets/container-core.css" />

<link rel="stylesheet" type="text/css" href="../../resources/yui3/build/cssreset/reset.css" />
<link rel="stylesheet" type="text/css" href="../../resources/yui3/build/cssfonts/fonts.css" />
<link rel="stylesheet" type="text/css" href="../../resources/yui3/build/cssgrids/grids-min.css" />

<link rel="stylesheet" type="text/css" href="../../css/skin.css" />
<link rel="stylesheet" type="text/css" href="../../css/layout.css" />
<link rel="stylesheet" type="text/css" href="../../modules/top/css/menu.css" />
<link rel="stylesheet" type="text/css" href="../../modules/imgupload/css/uploader.css" />
<link rel="stylesheet" type="text/css" href="css/pkw_offer.css" />
<link rel="stylesheet" type="text/css" href="css/skin.css" />
<%
if ("ar".equals(session.getAttribute("lang"))) {
    %>
    <link rel="stylesheet" type="text/css" href="../../css/arabic.css" />
    <link rel="stylesheet" type="text/css" href="css/arabic.css" />
    <%
}
%>

<script type="text/javascript" src="../../js/yahoo.js"></script> 

<script type="text/javascript" src="../../js/consts.js"></script>
<script type="text/javascript" src="../../modules/top/menu.js"></script>

<script type="text/javascript" src="../../js/utils/url.js"></script>
<script type="text/javascript" src="../../js/utils/ui.js"></script>
<script type="text/javascript" src="pkw_offer.js"></script>
<script type="text/javascript">
YAHOO.namespace("autos.pkwoffer");
YAHOO.autos.pkwoffer.pkw = {
	images : "<%=pkw.imgs %>"	
};
</script>
</head>

<body class="yui-skin-sam">

<div class="yui3-g">
        <div class="yui3-u-1-12" id="left_col">
            <div class="content">left col</div>
        </div>
        
        <div class="yui3-u-3-4" id="layout">
            
            <div id="hd">
                <%@ include file="../../modules/top/top_menu.jsp" %>
            </div>
    
            <div id="main">
                
                <div class="yui3-g bd">
                    <div class="yui3-u-19-24">
                        <div class="panel_header"></div>
                        <div id="main_panel">
                            <%@ include file="basic_info.jsp" %>
                            <%@ include file="extended_info.jsp" %>
                        </div>
                    </div>
                </div>
                <div class="ft">This is footer</div>
            </div>
    
            <div id="ft">
                ft
            </div>
                
        </div>
        <div class="yui3-u-1-12"></div>
    </div>
    
<script>


</script>
</body>
</html>