<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<div id="uploader">
    <button id="upload_img"><%= lang.getMessage("Title.AddImages")%></button>
    
    <div id="uploadDialog" class="yui-pe-content">
        <div class="hd"><%= lang.getMessage("Desc.UpImages")%></div>
        <div class="bd">
            <form name="attachmentForm" id="uploadForm" enctype="multipart/form-data" method="POST" action="/autos/servlet?request=upload">
                <%
                String s = "<div class=\"fileinputs\"><input type=\"file\" name=\"_target\" size=\"80\"/>&nbsp;&nbsp;</div>";
                for (int i=0;i<5;i++) {
                    out.write(s);
                }
                %>
                <!-- <div class="fileinputs">
                    <input type="file" name="target" size="80"/>&nbsp;&nbsp;
                </div>
                <div class="fileinputs">
                    <input type="file" name="target" size="80" />&nbsp;&nbsp;
                </div>
                <div class="fileinputs">
                    <input type="file" name="target" size="80" />&nbsp;&nbsp;
                </div>
                <div class="fileinputs">
                    <input type="file" name="target" size="80" />&nbsp;&nbsp;
                </div>
                <div class="fileinputs">
                    <input type="file" name="target" size="80" />&nbsp;&nbsp;
                </div> -->
                <div class="upBox">
                    <input type="button" value="<%= lang.getMessage("Title.UploadImgs") %>" onclick="YAHOO.autos.uploader.uploadFile()"/>
                </div>
            </form> 
        </div>
    </div>
    <div id="container">
        <ol id="carousel">
        </ol>
    </div>
    <div id="spotlight"></div>
    
    <div id="upload-list"></div>
</div>