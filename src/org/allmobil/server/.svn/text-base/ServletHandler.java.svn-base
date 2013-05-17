package org.allmobil.server;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.InputStream;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.allmobil.utils.ImageUtils;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import flexjson.JSONSerializer;

public class ServletHandler {

    private static final JSONSerializer serializer = new JSONSerializer();
    static {
        serializer.exclude("class");
    }

    public static Properties saveImages(HttpServletRequest request, File imgFolder) {

        Properties props;
        try {
            props = new Properties();
            FileItemFactory factory = new DiskFileItemFactory();
            ServletFileUpload upload = new ServletFileUpload(factory);
            List<?> items = null;

            items = upload.parseRequest(request);

            Iterator<?> itr = items.iterator();
            int count = 0;
            while (itr.hasNext()) {
                FileItem item = (FileItem) itr.next();
                if (item.isFormField()) {
                    System.out.println("uploaded is a form field");
                } else {
                    if (item.getSize() == 0) {
                        continue;
                    }
                    File f = File.createTempFile("_full", ".png", imgFolder);

                    count++;

                    String prevPath = f.getAbsolutePath();
                    prevPath = prevPath.replace("/_full", "/_prev");
                    File previewPath = new File(prevPath);

                    InputStream is = item.getInputStream();
                    request.getContentLength();
                    BufferedImage img = ImageUtils.loadImage(is);
                    BufferedImage resized = ImageUtils.resizeImage(img, 400, 300);
                    ImageUtils.saveImage(resized, f);
                    props.setProperty("img" + count, f.getName());

                    BufferedImage preview = ImageUtils.resizeImage(img, 200, 120);
                    ImageUtils.saveImage(preview, previewPath);
                    props.setProperty("prev" + count, previewPath.getName());

                    BufferedImage icon = ImageUtils.resizeImage(img, 75, 60);
                    File iconPath = new File(prevPath.replace("_prev", "_icon"));
                    ImageUtils.saveImage(icon, iconPath);
                    props.setProperty("icon" + count, iconPath.getName());
                }
            }
            return props;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
