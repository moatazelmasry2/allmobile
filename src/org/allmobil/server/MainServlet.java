package org.allmobil.server;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.Properties;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.allmobil.db.Queries;
import org.allmobil.entities.PKW;
import org.allmobil.i18n.LangCode;
import org.allmobil.utils.ImageUploader;
import org.allmobil.utils.ImageUtils;
import org.allmobil.utils.ServletUtils;
import org.allmobil.utils.StringUtils;

/**
 * Servlet implementation class MainServlet
 */
public class MainServlet extends HttpServlet {

    /**
     * 
     */
    private static final long serialVersionUID = 8493470002052263307L;

    private Queries query = Queries.getInstance();
    ServVars vars = new ServVars();
    private LangCode language = LangCode.en;
    private SellHandler sellHandler;
    private SearchHandler searchHandler;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public MainServlet() {
        super();

    }

    /**
     * @see Servlet#init(ServletConfig)
     */
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        try {
            this.sellHandler = new SellHandler();
            this.searchHandler = new SearchHandler();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // super.doGet(request, response);
        this.handleRequest(request, response);
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,
            IOException {
        // super.doPost(request, response);
        this.handleRequest(request, response);
    }

    protected void handleRequest(HttpServletRequest request, HttpServletResponse response) {

        try {
            String req = request.getParameter("request");
            String lang = request.getParameter("lang");
            if (req != null) {
                req = req.toLowerCase();
            }

            if ((req != null) && (req.length() > 0)) {

                if ("getcategories".equals(req)) {
                    this.handleGetCategories(request, response);
                } else if ("getcountries".equals(req)) {
                    this.handleGetCountries(request, response);
                } else if ("getcities".equals(req)) {

                } else if ("getbrands".equals(req)) {
                    this.handleGetBrands(request, response);
                } else if ("getmodels".equals(req)) {
                    this.handleGetModel(request, response);
                } else if (("getoiltypes").equals(req)) {
                    this.handleGetOilTypes(request, response);
                } else if (("getstatus").equals(req)) {
                    this.handleGetStatus(request, response);
                } else if (("getcolors").equals(req)) {
                    this.handleGetColors(request, response);
                } else if (("getgeartypes").equals(req)) {
                    this.handleGetGearTypes(request, response);
                } else if ("upload".equals(req)) {
                    this.handleUpload(request, response);
                } else if ("getimg".equals(req)) {
                    this.handleGetImage(request, response);
                } else if ("sellpkw".equals(req)) {
                    this.sellHandler.handle(request, response);

                } else if ("getpkw".equals(req)) {
                    this.handleGetPKW(request, response);
                } else if (req.startsWith("search")) {
                    this.searchHandler.handle(request, response);
                } else {
                    response.sendError(500, "unknown request" + req);
                }
            }
            if (lang != null) {
                this.handleLang(request, response, lang);
            }
        } catch (Exception e) {
            try {
                response.sendError(500, StringUtils.stackTraceToString(e));
            } catch (Exception ex) {
                e.printStackTrace();
            }
            e.printStackTrace();
        }
    }

    protected void handleGetBrands(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String result = this.query.getBrandsAsJson(this.language);
        ServletUtils.writeStringAnswer(response, result);
    }

    protected void handleGetModel(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        try {
            String fkParam = request.getParameter("brandid");
            StringUtils.isValid(fkParam, "fk in getModel request is null");
            int fk = Integer.parseInt(fkParam);
            String result = this.query.getModelsAsJson(fk);
            ServletUtils.writeStringAnswer(response, result);
        } catch (Exception e) {

        }

    }

    protected void handleGetOilTypes(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String result = this.query.getOilTypesAsJson(this.language);
        ServletUtils.writeStringAnswer(response, result);
    }

    protected void handleGetStatus(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String result = this.query.getStatusAsJson(this.language);

        ServletUtils.writeStringAnswer(response, result);
    }

    protected void handleGetCountries(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String result = this.query.getCountriesAsJson(this.language);
        ServletUtils.writeStringAnswer(response, result);
    }

    protected void handleGetCategories(HttpServletRequest request, HttpServletResponse response)
            throws ServletException {
        String result = this.query.getCategoriesAsJson(this.language);
        ServletUtils.writeStringAnswer(response, result);
    }

    protected void handleGetColors(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String result = this.query.getColorsAsJson(this.language);
        ServletUtils.writeStringAnswer(response, result);
    }

    protected void handleGetGearTypes(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        String result = this.query.getGearTypesAsJson(this.language);
        ServletUtils.writeStringAnswer(response, result);
    }

    protected void handleGetPKW(HttpServletRequest request, HttpServletResponse response) {
        String uidS = request.getParameter("uid");

        LangCode code = ServletUtils.getLanguage(request);
        // uid does not exist or cannot be parsed
        int id = -1;
        if (uidS == null) {
            String idS = request.getParameter("id");
            try {
                id = Integer.parseInt(idS);
            } catch (Exception e) {
                try {
                    response.sendError(HttpServletResponse.SC_BAD_REQUEST,
                            "for the request getpkw is neither uid nor id defined");
                } catch (Exception ex) {
                    e.printStackTrace();
                    return;
                }
            }
        }

        PKW pkw = null;
        String imgFolder = ServletUtils.getImagesFolder(request);

        try {
            if (uidS != null) {
                pkw = this.query.getPKWByUid(uidS, code, imgFolder);
            } else {
                // at this moment we know for sure that either uid or id is
                // valid
                pkw = this.query.getPKWByid(id, code, imgFolder);
            }
            ServletUtils.writeStringAnswer(response, pkw.serialize());
        } catch (Exception e) {
            // TODO handle exception properly
            try {
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Server Error");
            } catch (Exception ex) {
                e.printStackTrace();
            }
        }

    }

    protected void handleUpload(HttpServletRequest request, HttpServletResponse response) {

        try {
            File f = new File(this.getServletContext().getRealPath(this.vars.getMessage("SERVER.IMGS")));
            Properties props = ServletHandler.saveImages(request, f);
            ServletUtils.writeStringAnswer(response, ImageUploader.imgPropsToJson(props));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    protected void handleGetImage(HttpServletRequest request, HttpServletResponse response) {
        try {
            String imgName = request.getParameter("name");
            if ((imgName == null) || (imgName.length() == 0)) {
                throw new NullPointerException("the passed parameter name is null or empty");
            }

            String path = this.getServletContext().getRealPath("/img/" + imgName);
            File f = new File(path);
            if (!f.exists()) {
                throw new IOException("does not exist" + f.getCanonicalPath());
            }
            BufferedImage img = ImageUtils.loadImage(f);
            ServletUtils.writeImageAnswer(response, img);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void handleLang(HttpServletRequest request, HttpServletResponse response, String lang) throws IOException {
        if ("en".equals(lang)) {
            request.getSession().setAttribute("lang", "en");
            this.language = LangCode.en;
        } else if ("ar".equals(lang)) {
            request.getSession().setAttribute("lang", "ar");
            this.language = LangCode.ar;
        }

        String defaultUrl = "/autos/index.jsp";
        String redirect = request.getParameter("redirect");
        redirect = URLDecoder.decode(redirect, "UTF-8");
        if ((redirect != null) && (redirect.length() > 0)) {
            defaultUrl = redirect;
        }

        response.sendRedirect(defaultUrl);
    }

}
