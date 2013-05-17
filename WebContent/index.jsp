<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@  include file="modules/i18n.jsp"%>
<%@  include file="modules/base.jsp"%>
    
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript">
<!--
var curUrl = "<%= vars.getMessage("JSP.Main")%>"; 
//-->
</script>

<title>سيارات</title>

<link rel="stylesheet" type="text/css" href="resources/yui2/build/assets/skins/sam/skin.css">  

<!-- yui3 css -->
<!-- <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/combo?3.3.0/build/cssreset/reset-min.css&3.3.0/build/cssfonts/fonts-min.css&3.3.0/build/cssgrids/grids-min.css"> -->

<link rel="stylesheet" href="resources/yui3/build/cssreset/reset.css" type="text/css">
<link rel="stylesheet" href="resources/yui3/build/cssfonts/fonts.css" type="text/css">
<link rel="stylesheet" href="resources/yui3/build/cssgrids/grids.css" type="text/css">


<link rel="stylesheet" type="text/css" href="css/skin.css" />
<link rel="stylesheet" type="text/css" href="css/index.css" />
<link rel="stylesheet" type="text/css" href="css/layout.css" />
<link rel="stylesheet" type="text/css" href="modules/top/css/menu.css" />
<link rel="stylesheet" type="text/css" href="modules/quicksearch/css/quicksearch.css" />
<%
if ("ar".equals(session.getAttribute("lang"))) {
    %>
    <link rel="stylesheet" type="text/css" href="css/arabic.css" />
    <link rel="stylesheet" type="text/css" href="modules/quicksearch/css/arabic.css" />
    <%
}
%>


<!-- Combo-handled YUI JS files --> 

<!-- <script src="http://yui.yahooapis.com/3.3.0/build/yui/yui-min.js" charset="utf-8"></script>  -->
<script type="text/javascript" src="js/yahoo.js" charset="utf-8"></script> 
<script type="text/javascript" src="resources/yui2/build/get/get.js" charset="utf-8"></script>
<script type="text/javascript" src="resources/yui2/build/connection/connection.js" charset="utf-8"></script> 

<script type="text/javascript" src="js/consts.js"></script>
<script type="text/javascript" src="modules/top/menu.js" charset="utf-8"></script>
<script type="text/javascript" src="js/index.js" charset="utf-8"></script>
<script type="text/javascript" src="modules/quicksearch/quicksearch.js" charset="utf-8"></script>
<script type="text/javascript" src="modules/quicksearch/quicksell.js" charset="utf-8"></script>
<script type="text/javascript" src="js/utils/url.js" charset="utf-8"></script>
<script type="text/javascript" src="js/utils/ui.js" charset="utf-8"></script>
<script src="resources/yui2/build/json/json.js" charset="utf-8"></script>

</head>

<body class=" yui-skin-sam">

    <div class="yui3-g">
        <div class="yui3-u-1-6" id="left_col">
            <div class="content">left col</div>
        </div>
        
        <div class="yui3-u-5-6" id="layout">
            
            <div id="hd">
                <%@ include file="modules/top/top_menu.jsp" %>
            </div>
    
            <div id="main">
                <div class="content">
                    <%@ include file="modules/quicksearch/quicksearch.jsp" %>
                </div>
            </div>
    
            <div id="ft">
                ft
            </div>
                
        </div>
        
    </div>


</body>
</html>