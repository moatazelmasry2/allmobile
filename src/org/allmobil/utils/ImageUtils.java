package org.allmobil.utils;

import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.media.jai.JAI;
import javax.media.jai.RenderedOp;

import com.sun.media.jai.codec.ImageCodec;
import com.sun.media.jai.codec.MemoryCacheSeekableStream;
import com.sun.media.jai.codec.PNGEncodeParam;
import com.sun.media.jai.codec.SeekableStream;

public class ImageUtils {

    private static final int IMG_WIDTH = 100;
    private static final int IMG_HEIGHT = 100;

    /**
     * 
     * 
     * @param out
     * @param img
     * 
     * @throws IOException
     */
    private static void encodePng(OutputStream out, BufferedImage img) throws IOException {
        PNGEncodeParam encodeParam = PNGEncodeParam.getDefaultEncodeParam(img);

        if (encodeParam instanceof PNGEncodeParam.Palette) {
            PNGEncodeParam.Palette p = (PNGEncodeParam.Palette) encodeParam;
            byte[] b = new byte[] { -127 };
            p.setPaletteTransparency(b);
        }

        com.sun.media.jai.codec.ImageEncoder encoder = ImageCodec.createImageEncoder("PNG", out, encodeParam);
        encoder.encode(img.getData(), img.getColorModel());
    }

    /**
     * reads an image from the passed <tt>InputStream</tt> using JAI mechanism
     * 
     * @param is
     * 
     * @return read image
     * 
     * @throws IOException
     */
    public static BufferedImage loadImage(InputStream is) throws IOException {
        SeekableStream fss = new MemoryCacheSeekableStream(is);
        RenderedOp ro = JAI.create("stream", fss);
        BufferedImage img = ro.getAsBufferedImage();
        fss.close();
        is.close();
        return img;
    }

    public static BufferedImage loadImage(File f) throws IOException {
        return loadImage(new FileInputStream(f));
    }

    /**
     * write an image into the passed output stream. after writing the image the
     * stream will be closed.
     * 
     * @param image
     * @param os
     * @param format
     * @param quality
     * @throws IOException
     */
    public static void saveImage(BufferedImage image, File path) throws IOException {

        FileOutputStream fos = null;
        try {
            fos = new FileOutputStream(path);
            encodePng(fos, image);
        } catch (IOException e) {
            throw e;
        } finally {
            fos.flush();
            fos.close();
        }

    }

    /**
     * @param originalImage
     * @param type
     * @return
     */
    public static BufferedImage resizeImage(BufferedImage originalImage) {
        return resizeImage(originalImage, IMG_WIDTH, IMG_HEIGHT);
    }

    /**
     * @param originalImage
     * @param type
     * @return
     */
    public static BufferedImage resizeImage(BufferedImage originalImage, int width, int height) {
        int type = BufferedImage.TYPE_INT_ARGB;
        BufferedImage resizedImage = new BufferedImage(width, height, type);
        Graphics2D g = resizedImage.createGraphics();
        g.drawImage(originalImage, 0, 0, width, height, null);
        g.dispose();
        return resizedImage;
    }
}
