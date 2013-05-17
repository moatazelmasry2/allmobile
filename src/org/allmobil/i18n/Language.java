package org.allmobil.i18n;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.text.MessageFormat;
import java.util.Properties;

public class Language {

    private Properties props = new Properties();
    private LangCode code;

    public Language() {
        this(LangCode.en);
        this.code = LangCode.en;
    }

    public Language(LangCode lang) {

        try {

            String fileName = lang + ".properties";
            InputStream is = Language.class.getResourceAsStream(fileName);
            InputStreamReader reader;
            Charset cs = Charset.forName("UTF-8");
            this.code = lang;
            if (is == null) {
                System.err.println("error");
                fileName = "en.properties";
                is = Language.class.getResourceAsStream(fileName);
                this.code = LangCode.en;
            }

            reader = new InputStreamReader(is, cs);
            this.props.load(reader);
            is.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private static String get(Properties props, String key, Object... args) {
        String s = (String) props.get(key);
        if (s != null) {
            return MessageFormat.format(s, args);
        }

        return "$Message with key: " + key + " not found$";
    }

    /**
     * Returns the message assigned to the passed key. If no message is
     * assigned, an error message will be returned that indicates the missing
     * key.
     * 
     * @see MessageFormat for conventions on string formatting and escape
     *      characters.
     * 
     * @param key
     * @param arguments
     * @return the message assigned to the passed key
     */
    public String getMessage(String key, Object... arguments) {
        return get(this.props, key, arguments);
    }

    public Properties getProperties() {
        return this.props;
    }

    public LangCode getCode() {
        return this.code;
    }
}
