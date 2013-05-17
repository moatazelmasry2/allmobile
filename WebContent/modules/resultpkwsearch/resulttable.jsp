<%@page import="org.allmobil.utils.StringUtils"%>
<%@page import="org.allmobil.entities.PKW"%>
<%@page import="org.allmobil.entities.PKWSearch"%>
<%@page import="org.allmobil.i18n.LangCode"%>
<%@page import="org.allmobil.utils.ServletUtils"%>
<%@page import="org.allmobil.db.Queries"%>
<%@page import="org.allmobil.utils.KVPUtils"%>
<%@page import="java.util.Map"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
Map<String, String[]> params = request.getParameterMap();
Queries q = Queries.getInstance();
String imgFolder = ServletUtils.getImagesFolder(request);
PKWSearch search = q.searchPKW(params, code, imgFolder);
%>
<script type="text/javascript">
<!--
var params = {};
<%
for (String name : params.keySet()) {
    %>
    params['<%=name%>']='<%=params.get(name)%>';
    <%
}
%>
var paramString = '<%=KVPUtils.kvpTpString(params) %>';
//-->
</script>
    <div id="main">
        <div id="dynamicdata">
        	<table id="result">
        		<thead>
        			<tr>
        				<th>Description</th>
        				<th>Misc</th>
        				<th>Price</th>
        				<th></th>
        			</tr>
        		</thead>
        		<tbody>
        			<%
        			for (PKW pkw : search.result) {
						%>
						<tr>
							<td><%=StringUtils.appendStrings(pkw.brand,", ", pkw.model) %></td>
							<td><%=StringUtils.appendStrings(pkw.manuYear) %><br/>
							<%=StringUtils.appendStrings(pkw.numKm) %><br/>
							<%=pkw.country %>
							</td>
							<td><%=StringUtils.appendStrings(pkw.price, " $") %></td>
							<td></td>
						</tr>
						<%        				
        			}
        			%>
        		</tbody>
        	</table>
        </div>
    </div>