package org.allmobil.utils;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Properties;

import org.allmobil.server.ServVars;

import flexjson.JSONSerializer;

public class ImageUploader {

    private static final JSONSerializer serializer = new JSONSerializer();
    private static ServVars consts = new ServVars();
    static {
        serializer.exclude("class");
    }

    static class ImageEntry {
        String name;
        String full;
        String preview;

        public String getName() {
            return this.name;
        }

        public String getFull() {
            return this.full;
        }

        public String getPreview() {
            return this.preview;
        }

        public ImageEntry(String name, String full, String preview) {
            super();
            this.name = name;
            this.full = full;
            this.preview = preview;
        }

    }

    /**
     * Converts a properties object containing images and its previews to json.
     * Name of the entry should be img1 or prev1 pr other numbers
     * 
     * @param props
     * @return
     */
    public static String imgPropsToJson(Properties props) {

        Enumeration keys = props.keys();
        String key;
        List<ImageEntry> list = new ArrayList<ImageUploader.ImageEntry>();
        while (keys.hasMoreElements()) {
            key = (String) keys.nextElement();
            if (!key.startsWith("img")) {
                continue;
            }
            String full = props.getProperty(key);
            String previewKey = key.replace("img", "prev");
            String preview = props.getProperty(previewKey);
            // String path = consts.getMessage("DIR.IMGS");
            ImageEntry entry = new ImageEntry(key, full, preview);
            list.add(entry);
        }
        return serializer.deepSerialize(list);
    }
}
