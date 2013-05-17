<%@page import="org.allmobil.server.ServVars"%>
<%@page import="java.net.URI"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@  include file="../i18n.jsp"%>
<%@  include file="../base.jsp"%>

<%

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript">
<!--
var curUrl = "<%= vars.getMessage("JSP.Sell_PKW")%>"; 
//-->
</script>



<title></title>

<link rel="stylesheet" type="text/css" href="../../resources/yui2/build/assets/skins/sam/skin.css">  

<!-- <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/combo?3.3.0/build/cssreset/reset-min.css&3.3.0/build/cssfonts/fonts-min.css&3.3.0/build/cssgrids/grids-min.css"> -->
<link rel="stylesheet" type="text/css" href="../../resources/yui3/build/cssreset/reset.css" />
<link rel="stylesheet" type="text/css" href="../../resources/yui3/build/cssfonts/fonts.css" />
<link rel="stylesheet" type="text/css" href="../../resources/yui3/build/cssgrids/grids-min.css" />

<link rel="stylesheet" type="text/css" href="../../css/skin.css" />
<link rel="stylesheet" type="text/css" href="../../css/layout.css" />
<link rel="stylesheet" type="text/css" href="../../modules/top/css/menu.css" />
<link rel="stylesheet" type="text/css" href="../../modules/imgupload/css/uploader.css" />
<link rel="stylesheet" type="text/css" href="css/sell_pkw.css" />
<%
if ("ar".equals(session.getAttribute("lang"))) {
    %>
    <link rel="stylesheet" type="text/css" href="../../css/arabic.css" />
    <link rel="stylesheet" type="text/css" href="css/arabic.css" />
    <%
}
%>

<script type="text/javascript" src="../../js/yahoo.js"></script> 
<!--  
<script type="text/javascript" src="../../resources/yui2/build/get/get.js"></script>
<script type="text/javascript" src="../../resources/yui2/build/connection/connection.js"></script> 
<script type="text/javascript" src="../../resources/yui2/build/json/json.js"></script>
<script type="text/javascript" src="../../resources/yui2/build/dragdrop/dragdrop-min.js"></script>
<script type="text/javascript" src="../../resources/yui2/build/carousel/carousel-min.js"></script>
-->

<script type="text/javascript" src="../../js/consts.js"></script>
<script type="text/javascript" src="../../modules/top/menu.js"></script>

<script type="text/javascript" src="../../js/utils/url.js"></script>
<script type="text/javascript" src="../../js/utils/ui.js"></script>
<script type="text/javascript" src="../../modules/imgupload/uploader.js"></script>
<script type="text/javascript" src="sell_pkw.js"></script>


</head>

<body class="yui-skin-sam">

<div class="yui3-g" id="page">
        <div class="yui3-u-1-6" id="left_col">
            <div class="content">left col</div>
        </div>
        
        <div class="yui3-u-3-4" id="layout">
            
            <div id="hd">
                <%@ include file="../../modules/top/top_menu.jsp" %>
            </div>
    
            <div id="main">
                <%@ include file="sell_pkw_box.jsp" %>
            </div>
    
            <div id="ft">
                ft
            </div>
                
        </div>
        <div class="yui3-u-1-12"></div>
    </div>
    

    <div class="yui-content">
        <div id="tab2">
            
        </div> 
    </div>
<script>


</script>
</body>
</html>