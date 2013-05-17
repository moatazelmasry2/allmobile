<%@page import="org.allmobil.server.ServVars"%>
<%@page import="java.util.Enumeration"%>
<%@page import="java.util.Properties"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.allmobil.i18n.*"%>

<%
String langID = (String)session.getAttribute("lang");
Language lang;
LangCode code; 
if ( "ar".equals(langID) ) {
    lang = new Language(LangCode.ar);
    code = LangCode.ar;
} else {
    langID = "en";
    lang = new Language(LangCode.en);
    session.setAttribute("lang", "en");
    code = LangCode.en;
}
 
%>

<script type="text/javascript">
	//var lang = new Array();
	
	var langID = '<%= langID%>';
	String.prototype.format = function() {
	    var args = arguments;

	    return this.replace(/\{(\d+)\}/g, function() {
	        return args[arguments[1]];
	    });
	};
	
	function _getMessage(props, key, replacements) {
        
        var string = props[key];
        try {
            return string.replace(/\{(\d+)\}/g, function() {
                return replacements[arguments[1]];
            });
        } catch (e) {
            alert(e);
        }
        
        String.format.apply(string, replacements);
    }
	
	function Lang() {
		
	    var props = new Array();
		
		<%
        Properties props = lang.getProperties();
        Enumeration keys = props.keys();
        String key;
        String value;
	    while (keys.hasMoreElements() ) {
            key = (String)keys.nextElement();
            value = props.getProperty(key);
            %>
            props["<%= key%>"]="<%= value%>";
            <%
        }
       %>
       
       this.getMessage = function(key, replacements) {
    	   return _getMessage(props, key, replacements);
       };
       //this.getMessage = getMessage; 
	}
	
	var lang = new Lang();
	
	function changeLang(curUrl, lang) {
		curUrl = encodeURIComponent(curUrl);
		window.location = YAHOO.autos.consts.servlet + "lang=" + lang + "&redirect=" + curUrl;
	}
	
    function Constants() {
        
        var props = new Array();
        
        <%
        ServVars serverVars = new ServVars();
        props = serverVars.getProperties();
        keys = props.keys();
        
        while (keys.hasMoreElements() ) {
            key = (String)keys.nextElement();
            value = props.getProperty(key);
            %>
            props["<%= key%>"]="<%= value%>";
            <%
        }
       %>
       
       this.getMessage = function(key, replacements) {
           return _getMessage(props, key, replacements);
       };
    }
    
    var consts = new Constants();
	
</script>

