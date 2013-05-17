package org.allmobil.utils;

import java.util.List;

import flexjson.JSONSerializer;

public class Json {

    private static final JSONSerializer serializer = new JSONSerializer();

    public static String serialize(List list) {
        return serializer.deepSerialize(list);
    }
}
