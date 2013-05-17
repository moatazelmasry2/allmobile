package org.allmobil.entities;

import java.util.List;

import flexjson.JSONSerializer;

public class PKWSearch implements JsonSerializer {

    private static final JSONSerializer serializer = new JSONSerializer();
    static {
        serializer.exclude("class");
    }

    public List<PKW> result;
    public int currentPage = 1;
    public boolean hasPrevious = false;
    public boolean hasNext;
    public int numPages;

    @Override
    public String serialize() {
        return serializer.deepSerialize(this);
    }
}
