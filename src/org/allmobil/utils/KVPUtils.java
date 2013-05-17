package org.allmobil.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.text.ParseException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

/**
 * 
 * @author elmasry
 * 
 *         Parse parameters from HTTPSSErvletRequest or string to a hash map
 * 
 */
public class KVPUtils {

    public static Map parseRequest(String params) throws ParseException {
        params.replace("\\n", "");
        Map retMap = new HashMap();
        String[] tokens = params.split("&");
        for (String token : tokens) {
            String[] entries = token.split("=");
            if (entries.length != 2) {
                if ((entries.length == 0) || entries[0].equals("\\n")) {
                    // throw new ParseException("A token is empty", 0);
                    continue;
                } else {
                    throw new ParseException("This key has no value: " + entries[0], 0);
                }
            }

            String value = entries[1];
            // parse boolean
            if ("true".equals(value) || "false".equals(value)) {
                retMap.put(entries[0], Boolean.valueOf(value));
            } else {
                retMap.put(entries[0], entries[1]);
            }

        }
        return retMap;
    }

    /**
     * Parses the body of an HttpServletRequest
     * 
     * @param request
     * @return
     * @throws ParseException
     * @throws IOException
     */
    public static Map parseRequestBody(HttpServletRequest request) throws ParseException, IOException {

        BufferedReader reader = request.getReader();
        StringBuffer buffer = new StringBuffer(500);

        String line = reader.readLine();

        while (line != null) {
            buffer.append(line);
            line = reader.readLine();
        }

        return KVPUtils.parseRequest(buffer.toString());
    }

    public static int parseInt(String key, String errorMsg) throws NumberFormatException {
        try {
            return Integer.parseInt(key);
        } catch (Exception e) {
            throw new NumberFormatException(errorMsg);
        }
    }

    public static int parseIntDefault(String key, Integer defaultValue) {
        try {
            return Integer.parseInt(key);
        } catch (Exception e) {
            return defaultValue;
        }
    }

    public static int parseIntDefault(String[] key, Integer defaultValue) {
        try {
            return Integer.parseInt(key[0]);
        } catch (Exception e) {
            return defaultValue;
        }
    }

    public static Boolean parseBoolean(String boolS, boolean defaultValue) {

        boolean retValue = defaultValue;
        try {
            retValue = Boolean.parseBoolean(boolS);
        } catch (Exception e) {
            // nothing, we have already default value
        }
        return retValue;
    }

    public static Boolean parseBoolean(String[] boolS, boolean defaultValue) {

        boolean retValue = defaultValue;
        try {
            retValue = Boolean.parseBoolean(boolS[0]);
        } catch (Exception e) {
            // nothing, we have already default value
        }
        return retValue;
    }

    public static Boolean parseBoolean(String boolS) {

        try {
            return Boolean.parseBoolean(boolS);
        } catch (Exception e) {
            // nothing, we have already default value
        }
        return null;
    }

    /**
     * Checks if a boolean exists in a map and if not insert it with the default
     * value
     * 
     * @param params
     * @param key
     * @param defaultValue
     * @return
     */
    public static boolean verifyBoolean(Map params, String key, boolean defaultValue) {
        Object value = params.get(key);
        boolean boolValue;
        try {

            if (value != null) {
                if (value instanceof Boolean) {
                    return ((Boolean) value).booleanValue();
                } else if (value instanceof String) {
                    boolValue = Boolean.parseBoolean((String) value);
                    params.put(key, boolValue);
                    return boolValue;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        params.put(key, defaultValue);
        return defaultValue;
    }

    public static String verifyString(Map params, String key, String defaultValue) {
        String value = (String) params.get(key);
        if (value == null) {
            if (defaultValue != null) {
                value = defaultValue;
                params.put(key, value);
            }
        }
        return value;
    }

    public static int verifyInteger(Map params, String key, String errorMsg) throws NumberFormatException {
        Object value = params.get(key);
        if (value instanceof Integer) {
            return ((Integer) value).intValue();
        } else {
            try {
                Integer intValue = Integer.parseInt((String) value);
                params.put(key, intValue);
                return intValue.intValue();
            } catch (Exception e) {
                throw new NumberFormatException(errorMsg);
            }
        }
    }

    public static String kvpTpString(Map<String, String[]> map) {
        StringBuffer buff = new StringBuffer(1000);
        Set<String> keys = map.keySet();
        for (String key : keys) {
            if (buff.length() > 0) {
                buff.append("&");
            }
            buff.append(key).append("=").append(map.get(key)[0]);
        }
        return buff.toString();
    }
}
