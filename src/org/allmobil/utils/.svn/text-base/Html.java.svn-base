/*--
 *  Portions of this code is taken from www.deegree.org
 *  This file is part of deegree, http://deegree.org/
 Copyright (C) 2001-2009 by:
 Department of Geography, University of Bonn
 and
 lat/lon GmbH

 This library is free software; you can redistribute it and/or modify it under
 the terms of the GNU Lesser General Public License as published by the Free
 Software Foundation; either version 2.1 of the License, or (at your option)
 any later version.
 This library is distributed in the hope that it will be useful, but WITHOUT
 ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 details.
 You should have received a copy of the GNU Lesser General Public License
 along with this library; if not, write to the Free Software Foundation, Inc.,
 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA

 Contact information:

 lat/lon GmbH
 Aennchenstr. 19, 53177 Bonn
 Germany
 http://lat-lon.de/

 Department of Geography, University of Bonn
 Prof. Dr. Klaus Greve
 Postfach 1147, 53001 Bonn
 Germany
 http://www.geographie.uni-bonn.de/deegree/

 e-mail: info@deegree.org
 */
package org.allmobil.utils;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.allmobil.i18n.LangCode;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.w3c.dom.Text;

/**
 * These functions is mostly for internal use to create yui controls
 * 
 * @author elmasry
 * 
 */
public class Html {

    private static DocumentBuilder builder;
    static {
        try {
            builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static DocumentBuilder getDocumentBuilder() {
        return builder;
    }

    public static String createMenuButton(String id, String cssClass, String title) {

        Document doc = builder.newDocument();
        Element div = doc.createElement("div");
        div.setAttribute("class", cssClass);
        Element fieldset = doc.createElement("fieldset");
        fieldset.setAttribute("id", id);
        Element legend = doc.createElement("legend");
        Text text = doc.createTextNode(title);
        legend.appendChild(text);
        fieldset.appendChild(legend);
        div.appendChild(fieldset);
        return nodeToString(div, "UTF-8");
    }

    public static String createCheckBox(String id, String cssClass, String title, LangCode code) {

        StringBuffer buff = new StringBuffer(200);
        buff.append("<div class=\"").append(cssClass).append("\">\n");
        if (code == LangCode.ar) {
            buff.append("<label for=\"").append(id).append("\">").append(title).append("</label>\t\n");
            buff.append("<input type=\"checkbox\" id=\"").append(id).append("\" align=\"right\">\t\n");
        } else {
            buff.append("<input type=\"checkbox\" id=\"").append(id).append("\" align=\"right\">\t\n");
            buff.append("<label for=\"").append(id).append("\">").append(title).append("</label>\t\n");
        }

        buff.append("</div>");

        return buff.toString();
    }

    public static Element createDiv(DocumentBuilder builder, String id, String cssClass, String title) {

        Document doc = builder.newDocument();
        Element div = doc.createElement("div");
        if (id != null) {
            div.setAttribute("id", id);
        }
        if (cssClass != null) {
            div.setAttribute("class", cssClass);
        }
        if (title != null) {
            Text text = doc.createTextNode(title);
            div.appendChild(text);
        }
        return div;
    }

    public static String createDivAsString(String id, String cssClass, String title) {
        Element div = createDiv(builder, id, cssClass, title);
        return nodeToString(div, "UTF-8");
    }

    public static String createTextInput(String id, String cssClass, String title) {

        Document doc = builder.newDocument();
        Element div = doc.createElement("div");
        div.setAttribute("class", cssClass);
        Element div2 = doc.createElement("div");
        Element label = doc.createElement("label");
        label.setAttribute("for", id);
        Text text = doc.createTextNode(title);
        Element input = doc.createElement("input");
        input.setAttribute("id", id);
        input.setAttribute("type", "text");
        label.appendChild(text);
        div2.appendChild(label);
        div.appendChild(div2);
        div.appendChild(input);
        return nodeToString(div, "UTF-8");
    }

    public static String createItemMenu(String id, String cssClass, String cssItem, String href, String title) {

        Document doc = builder.newDocument();
        Element li = doc.createElement("li");
        if (id != null) {
            li.setAttribute("id", id);
        }
        if (cssClass != null) {
            li.setAttribute("class", cssClass);
        }

        Element a = doc.createElement("a");
        if (cssItem != null) {
            a.setAttribute("class", cssItem);
        }

        if (href != null) {
            a.setAttribute("href", href);
        }

        if (title != null) {
            Text text = doc.createTextNode(title);
            a.appendChild(text);
        }
        li.appendChild(a);
        return nodeToString(li, "UTF-8");
    }

    public static String createLiAsString(String id, String cssClass, String value, String title) {
        Document doc = builder.newDocument();
        Element li = doc.createElement("li");
        if (id != null) {
            li.setAttribute("id", id);
        }
        if (cssClass != null) {
            li.setAttribute("class", cssClass);
        }
        if (value != null) {
            li.setAttribute("value", value);
        }
        if (title != null) {
            Text text = doc.createTextNode(title);
            li.appendChild(text);
        }
        return nodeToString(li, "UTF-8");
    }

    public static String createImageLinkAsString(String id, String css, String imgId, String imgCss, String href,
            String title, String titleCss) {
        Document doc = builder.newDocument();
        Element div = doc.createElement("div");
        if (id != null) {
            div.setAttribute("id", id);
        }
        if (css != null) {
            div.setAttribute("class", css);
        }
        Element imgDiv = doc.createElement("div");
        if (imgId != null) {
            imgDiv.setAttribute("id", imgId);
        }
        if (imgCss != null) {
            imgDiv.setAttribute("class", imgCss);
        }
        Element a = doc.createElement("a");
        a.setAttribute("href", href);
        imgDiv.appendChild(a);
        div.appendChild(imgDiv);
        if (title != null) {
            Element textDiv = doc.createElement("div");
            Text t = doc.createTextNode(title);
            if (titleCss != null) {
                textDiv.setAttribute("class", titleCss);
            }
            textDiv.appendChild(t);
            div.appendChild(textDiv);
        }
        return nodeToString(div, "UTF-8");
    }

    /**
     * 
     * @param node
     * @param encoding
     * @return the String representation of the given node.
     */
    public static String nodeToString(Node node, String encoding) {
        StringBuilder sb = new StringBuilder(10000);

        switch (node.getNodeType()) {
        case Node.DOCUMENT_NODE: {
            Document doc = (Document) node;
            sb.append(nodeToString(doc.getDocumentElement(), ""));
            break;
        }
        case Node.ELEMENT_NODE: {
            String name = node.getNodeName();
            sb.append("\n<" + name);
            NamedNodeMap attributes = node.getAttributes();
            for (int i = 0; i < attributes.getLength(); i++) {
                Node current = attributes.item(i);
                String value = current.getNodeValue();
                if (value != null) {
                    value = StringUtils.replace(value, "&", "&amp;", true);
                    sb.append(" " + current.getNodeName() + "=\"" + value + "\"");
                }
            }
            sb.append(">");

            NodeList children = node.getChildNodes();
            if (children != null) {
                for (int i = 0; i < children.getLength(); i++) {
                    sb.append(nodeToString(children.item(i), encoding));
                }
            }

            sb.append("</" + name + ">");
            break;
        }
        case Node.CDATA_SECTION_NODE: {
            String trimmed = node.getNodeValue().trim();
            if (!trimmed.equals("")) {
                sb.append("<![CDATA[" + trimmed + "]]>");
            }
            break;
        }
        case Node.TEXT_NODE: {
            String trimmed = node.getNodeValue();
            if (trimmed != null) {
                trimmed = trimmed.trim();
                if (!trimmed.equals("")) {
                    sb.append(validateCDATA(trimmed));
                }
            }
            break;
        }
        case Node.PROCESSING_INSTRUCTION_NODE: {
            break;
        }
        case Node.ENTITY_REFERENCE_NODE: {
            break;
        }
        case Node.DOCUMENT_TYPE_NODE: {
            break;
        }
        }
        return sb.toString();
    }

    /**
     * Checks if a given CDATA-value has to be escaped if it is used as a text
     * value in an XML element. If the submitted string contains a character
     * that have to be escaped or if the string is made of more than 1500
     * characters it is encapsulated into a CDATA-section. Returns a version
     * that is safe to be used.
     * <p>
     * The method is just proofed for the UTF-8 character encoding.
     * 
     * @param cdata
     *            value to be used
     * @return the very same value (but escaped if necessary)
     * @todo refactoring required
     */
    protected static StringBuffer validateCDATA(String cdata) {
        StringBuffer sb = null;
        if ((cdata != null)
                && ((cdata.length() > 1000) || (cdata.indexOf('<') >= 0) || (cdata.indexOf('>') >= 0)
                        || (cdata.indexOf('&') >= 0) || (cdata.indexOf('"') >= 0) || (cdata.indexOf("'") >= 0))) {
            sb = new StringBuffer(cdata.length() + 15);
            sb.append("<![CDATA[").append(cdata).append("]]>");
        } else {
            if (cdata != null) {
                sb = new StringBuffer(cdata);
            }
        }
        return sb;
    }

}
