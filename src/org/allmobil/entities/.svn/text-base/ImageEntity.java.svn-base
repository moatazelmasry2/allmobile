package org.allmobil.entities;

import java.io.File;

public class ImageEntity extends SimpleEntity {

    public ImageType imgType;
    public double offer_uid;
    public File imagePath;

    public static enum ImageType {
        full, preview, icon
    }

    public ImageEntity() {
        // TODO Auto-generated constructor stub
    }

    public ImageEntity(int id, ImageType imgType, double offer_uid, File imagePath) {
        super(id, imagePath.getName());
        this.imgType = imgType;
        this.offer_uid = offer_uid;
        this.imagePath = imagePath;
    }

    public ImageType getImgType() {
        return this.imgType;
    }

    public void setImgType(ImageType imgType) {
        this.imgType = imgType;
    }

    public double getOffer_uid() {
        return this.offer_uid;
    }

    public void setOffer_uid(double offer_uid) {
        this.offer_uid = offer_uid;
    }

    public File getImagePath() {
        return this.imagePath;
    }

    public void setImagePath(File imagePath) {
        this.imagePath = imagePath;
    }
}
