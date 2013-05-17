package org.allmobil.utils;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.allmobil.entities.ImageEntity;
import org.allmobil.entities.ImageEntity.ImageType;
import org.allmobil.i18n.LangCode;
import org.allmobil.server.ServVars;

public class ServletUtils {

    private static ServVars vars = new ServVars();

    public static Integer getInt(HttpServletRequest request, String keyName, int defaultValue) {
        String value = request.getParameter(keyName);
        return getInt(value, defaultValue);
    }

    public static Integer getInt(String param, int defaultValue) {
        int returnInt = defaultValue;

        try {
            returnInt = Integer.parseInt(param);
        } catch (Exception e) {
            // Nothing to do, we have a default value
        }
        return new Integer(returnInt);
    }
    public static Boolean getBoolean(HttpServletRequest request, String keyName, boolean defaultValue) {
        String value = request.getParameter(keyName);
        boolean returnBool = defaultValue;
        try {
            returnBool = Boolean.parseBoolean(value);
        } catch (Exception e) {
            // Nothing to do, we have a default value
        }
        return new Boolean(returnBool);
    }

    /**
     * Get images from the {@link HttpServletRequest} from parameter imgs
     * 
     * @param request
     * @return
     * @throws IOException
     */
    public static List<ImageEntity> getImages(HttpServletRequest request) throws IOException {
        String imgsString = request.getParameter("imgs");

        String imgFolder = request.getSession().getServletContext().getRealPath(vars.getMessage("SERVER.IMGS"));
        return getImages(imgsString, imgFolder);
    }

    public static List<ImageEntity> getImages(String imgsString, String imgFolder) throws IOException {

        List<ImageEntity> imgs = new ArrayList<ImageEntity>();
        if ((imgsString != null) && (imgsString.length() > 0)) {

            String tokens[] = imgsString.split(",");

            for (String token : tokens) {

                File path = getImagePath(imgFolder, token);

                ImageType type;

                if (token.contains("_full")) {
                    type = ImageType.full;
                    ImageEntity entity = new ImageEntity(0, type, 0, path);
                    imgs.add(entity);

                    String prev = token.replace("_full", "_prev");
                    File prevFile = getImagePath(imgFolder, prev);
                    type = ImageType.preview;
                    entity = new ImageEntity(0, type, 0, prevFile);
                    imgs.add(entity);

                    String icon = token.replace("_full", "_icon");
                    File iconFile = getImagePath(imgFolder, icon);
                    type = ImageType.icon;
                    entity = new ImageEntity(0, type, 0, iconFile);
                    imgs.add(entity);
                } else {
                    continue;
                }

            }
        }
        return imgs;
    }

    protected static File getImagePath(String imgFolder, String imgName) throws IOException {
        StringBuffer buff = new StringBuffer();
        buff.append(imgFolder).append("/").append(imgName);
        File file = new File(buff.toString());
        if (!file.exists()) {
            throw new IOException("Image does not exist: " + file.getAbsolutePath());
        }
        return file;
    }

    public static String getImagesFolder(HttpServletRequest request) {
        return request.getSession().getServletContext().getRealPath(vars.getMessage("SERVER.IMGS"));
    }

    public static void writeImageAnswer(HttpServletResponse response, BufferedImage img) {
        try {

            response.setContentType("image/png");
            OutputStream out = response.getOutputStream();
            ImageIO.write(img, "PNG", out);
            out.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void writeStringAnswer(HttpServletResponse response, String answer) throws ServletException {
        try {
            Charset csets = Charset.forName("UTF-8");
            response.setContentType("text/plain; charset=UTF-8");
            PrintWriter writer = response.getWriter();
            ByteBuffer bytebuff = csets.encode(answer);
            byte[] bytearr = new byte[bytebuff.remaining()];
            bytebuff.get(bytearr);
            String s = new String(bytearr, 0, bytearr.length, "UTF-8");
            System.out.println(s);
            writer.println(s);
            writer.close();
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    public static LangCode getLanguage(HttpServletRequest request) {
        String lang = (String) request.getAttribute("lang");
        if (lang == null) {
            return LangCode.en;
        } else {
            return LangCode.valueOf(lang);
        }

    }
}
