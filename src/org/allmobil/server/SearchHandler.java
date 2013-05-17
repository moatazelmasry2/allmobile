package org.allmobil.server;

import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.allmobil.db.Queries;
import org.allmobil.entities.PKWSearch;
import org.allmobil.i18n.LangCode;
import org.allmobil.utils.ServletUtils;

public class SearchHandler {

    Queries queries = Queries.getInstance();

    public void handle(HttpServletRequest request, HttpServletResponse response) throws ParseException, IOException,
            ServletException, SQLException {
        String req = request.getParameter("request");
        if (req != null) {
            if ("searchpkw".equals(req.toLowerCase())) {
                this.handleSearchPKW(request, response);
            }
        }

    }

    protected void handleSearchPKW(HttpServletRequest request, HttpServletResponse response) throws ParseException,
            IOException, ServletException, SQLException {

        Map<String, String[]> map = request.getParameterMap();
        String imgFolder = ServletUtils.getImagesFolder(request);
        LangCode code = ServletUtils.getLanguage(request);
        int page = ServletUtils.getInt(request, "page", 1);

        PKWSearch pkwsearch = this.queries.searchPKW(map, code, imgFolder);
        ServletUtils.writeStringAnswer(response, pkwsearch.serialize());
    }
}
