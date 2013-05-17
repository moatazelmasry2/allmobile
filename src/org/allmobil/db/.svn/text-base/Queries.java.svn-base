package org.allmobil.db;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.allmobil.entities.ImageEntity;
import org.allmobil.entities.ImageEntity.ImageType;
import org.allmobil.entities.PKW;
import org.allmobil.entities.PKWSearch;
import org.allmobil.entities.SimpleEntity;
import org.allmobil.i18n.LangCode;
import org.allmobil.utils.ImageUtils;
import org.allmobil.utils.KVPUtils;
import org.allmobil.utils.NumberUtils;
import org.allmobil.utils.ServletUtils;
import org.allmobil.utils.StringUtils;

import flexjson.JSONSerializer;

public class Queries {

    private static final String PATH = "queries.properties";
    private static Properties props = new Properties();
    private static final JSONSerializer serializer = new JSONSerializer();
    private static Queries queries;

    static {
        try {
            InputStream is = Queries.class.getResourceAsStream(PATH);
            InputStreamReader reader;
            Charset cs = Charset.forName("UTF-8");

            reader = new InputStreamReader(is, cs);
            props.load(reader);
            is.close();

            serializer.exclude("class");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private Queries() {

    }

    public static Queries getInstance() {
        if (queries == null) {
            queries = new Queries();
        }
        return queries;
    }

    public static String getQ(String key, Object... args) {
        String s = (String) props.get(key);
        if (s != null) {
            return MessageFormat.format(s, args);
        }

        return null;
    }

    /**
     * An entity that only contains id and a name
     * 
     * @param queryKey
     * @param lang
     * @param fk
     *            : foreign key if exists (0 means don't query)
     * @return
     */
    public List<SimpleEntity> getSimpleEntity(String queryKey, LangCode lang) {
        String q = Queries.getQ(queryKey, lang.name());
        List<SimpleEntity> list = null;
        try {
            Connection conn = ConnectionPooling.getConnection();
            PreparedStatement s = conn.prepareStatement(q);

            boolean result = s.execute();
            if (!result) {
                throw new SQLException("result could not be retrieved");
            }
            ResultSet rs = s.getResultSet();

            list = new ArrayList<SimpleEntity>();
            while (rs.next()) {
                int id = rs.getInt(1);
                String name = rs.getString(2);
                list.add(new SimpleEntity(id, name));
            }
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    /**
     * Insert a pkw offer
     * 
     * @param params
     * @return offer_uid
     * @throws SQLException
     * @throws FileNotFoundException
     */
    public double addPkwOffer(Map params) throws SQLException, FileNotFoundException {
        int category = (Integer) params.get("category");
        int brand = (Integer) params.get("brand");
        Integer model = KVPUtils.parseIntDefault((String) params.get("model"), null);
        int manuDate = (Integer) params.get("manuDate");
        int numDoors = (Integer) params.get("numDoors");
        int numSeats = (Integer) params.get("numSeats");
        int oilType = (Integer) params.get("oilType");
        int status = (Integer) params.get("status");
        int country = (Integer) params.get("country");
        int gearType = (Integer) params.get("gearType");
        int price = (Integer) params.get("price");
        int meter = (Integer) params.get("meter");
        int color = (Integer) params.get("color");
        boolean conditioner = (Boolean) params.get("conditioner");
        boolean leather = (Boolean) params.get("leather");
        boolean power = (Boolean) params.get("powerSteering");
        boolean navi = (Boolean) params.get("navigator");
        boolean windshield = (Boolean) params.get("windshield");
        boolean abs = (Boolean) params.get("abs");
        boolean fourx4 = (Boolean) params.get("fourx4");
        boolean alarm = (Boolean) params.get("alarm");
        boolean xenon = (Boolean) params.get("xenon");
        boolean airbags = (Boolean) params.get("airbags");
        boolean central_locks = (Boolean) params.get("central_locks");
        String desc = (String) params.get("desc");
        List<ImageEntity> imgs = (List<ImageEntity>) params.get("images");
        double uid = NumberUtils.rand();

        Connection conn = ConnectionPooling.getConnection();
        conn.setAutoCommit(false);

        try {

            String s = Queries.getQ("Q.InsertPkw");
            PreparedStatement ps = conn.prepareStatement(s);
            ps.setDouble(1, uid);
            ps.setInt(2, category);
            ps.setInt(3, brand);
            ps.setInt(4, model);
            ps.setInt(5, oilType);
            ps.setInt(6, manuDate);
            ps.setInt(7, gearType);
            ps.setInt(8, color);
            ps.setInt(9, country);
            // city
            ps.setNull(10, java.sql.Types.INTEGER);
            ps.setInt(11, status);
            ps.setInt(12, 1);
            ps.setInt(13, meter);
            ps.setInt(14, price);

            ps.setBoolean(15, windshield);
            ps.setBoolean(16, central_locks);
            ps.setBoolean(17, leather);
            ps.setBoolean(18, conditioner);
            ps.setBoolean(19, navi);
            ps.setBoolean(20, power);
            ps.setInt(21, numDoors);
            ps.setInt(22, numSeats);
            ps.setBoolean(23, abs);
            ps.setBoolean(24, fourx4);
            ps.setBoolean(25, alarm);
            ps.setBoolean(26, xenon);
            ps.setBoolean(27, airbags);
            ps.setString(28, desc);
            ps.execute();
            this.insertImgs(conn, uid, imgs, false);
            conn.commit();
            return uid;
        } catch (Exception e) {
            conn.rollback();
            throw new SQLException(e.getLocalizedMessage());
        }
    }

    protected PreparedStatement insertImgs(Connection conn, double offer_uid, List<ImageEntity> imgs, boolean commit)
            throws SQLException, IOException {

        String s = Queries.getQ("Q.InsertImages");
        PreparedStatement ps = conn.prepareStatement(s);
        FileInputStream fis;
        for (ImageEntity img : imgs) {
            ps.setString(1, img.getImagePath().getName());
            ps.setString(2, img.getImgType().name());
            fis = new FileInputStream(img.getImagePath());
            ps.setBinaryStream(3, fis, (int) img.getImagePath().length());
            ps.setDouble(4, offer_uid);
            ps.addBatch();
        }

        if (imgs.size() > 0) {
            int[] res = ps.executeBatch();
            if (commit) {
                conn.commit();
            }
        }
        return ps;
    }

    /**
     * An entity that only contains id and a name
     * 
     * @param queryKey
     * @param lang
     * @param fk
     *            : foreign key if exists (0 means don't query)
     * @return
     */
    public List<SimpleEntity> getModels2(String queryKey, LangCode lang, int fk) {
        String q = Queries.getQ(queryKey, lang.name());
        List<SimpleEntity> list = null;
        try {
            Connection conn = ConnectionPooling.getConnection();
            PreparedStatement s = conn.prepareStatement(q);
            if (fk != 0) {
                s.setInt(1, fk);
            }

            boolean result = s.execute();
            if (!result) {
                throw new SQLException("result could not be retrieved");
            }
            ResultSet rs = s.getResultSet();

            list = new ArrayList<SimpleEntity>();
            while (rs.next()) {
                int id = rs.getInt(1);
                String name = rs.getString(2);
                list.add(new SimpleEntity(id, name));
            }
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public List<SimpleEntity> getBrands(LangCode lang) {
        return this.getSimpleEntity("Q.GetPKWBrands", lang);
    }

    public List<SimpleEntity> getModels(int fk) {
        String q = Queries.getQ("Q.GetPKWModel", fk);
        List<SimpleEntity> list = null;
        try {
            Connection conn = ConnectionPooling.getConnection();
            PreparedStatement s = conn.prepareStatement(q);
            if (fk != 0) {
                s.setInt(1, fk);
            }

            boolean result = s.execute();
            if (!result) {
                throw new SQLException("result could not be retrieved");
            }
            ResultSet rs = s.getResultSet();

            list = new ArrayList<SimpleEntity>();
            while (rs.next()) {
                int id = rs.getInt(1);
                String name = rs.getString(2);
                list.add(new SimpleEntity(id, name));
            }
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public List<SimpleEntity> getOilTypes(LangCode lang) {
        return this.getSimpleEntity("Q.GetOilTypes", lang);
    }

    public List<SimpleEntity> getCountries(LangCode lang) {
        return this.getSimpleEntity("Q.GetCountries", lang);
    }

    public List<SimpleEntity> getStatus(LangCode lang) {
        return this.getSimpleEntity("Q.GetStatus", lang);
    }

    public List<SimpleEntity> getCategories(LangCode lang) {
        return this.getSimpleEntity("Q.GetCategories", lang);
    }

    public List<SimpleEntity> getColors(LangCode lang) {
        return this.getSimpleEntity("Q.GetColors", lang);
    }

    public List<SimpleEntity> getGearTypes(LangCode lang) {
        return this.getSimpleEntity("Q.GetGearTypes", lang);
    }

    public BufferedImage getImageByName(String name) throws SQLException {
        // TODO implement
        String q = Queries.getQ("Q.GetImageByName");
        try {
            Connection conn = ConnectionPooling.getConnection();
            PreparedStatement s = conn.prepareStatement(q);
            s.setString(1, name);
            boolean result = s.execute();
            if (!result) {
                throw new SQLException("result could not be retrieved");
            }
            ResultSet rs = s.getResultSet();

            BufferedImage image = null;
            while (rs.next()) {
                InputStream is = rs.getBinaryStream(2);
                image = ImageUtils.loadImage(is);
                break;
            }
            conn.close();
            return image;
        } catch (Exception e) {
            throw new SQLException(StringUtils.appendStrings("The image could not be loaded: ", name, ". ",
                    e.getLocalizedMessage()));
        }
    }

    public PKW getPKWByUid(String uid, LangCode code, String imgFolder) throws SQLException {
        String q = Queries.getQ("Q.GetPKW", code, "offer_uid");
        Connection conn = ConnectionPooling.getConnection();
        PreparedStatement s = conn.prepareStatement(q);
        s.setString(1, uid);
        PKW pkw = this.getPKW(s, code, imgFolder);
        conn.close();
        return pkw;
    }

    public PKW getPKWByid(int id, LangCode code, String imgFolder) throws SQLException {
        String q = Queries.getQ("Q.GetPKW", code, "id");
        Connection conn = ConnectionPooling.getConnection();
        PreparedStatement s = conn.prepareStatement(q);
        s.setInt(1, id);
        PKW pkw = this.getPKW(s, code, imgFolder);
        conn.close();
        return pkw;
    }

    protected PKW getPKW(PreparedStatement s, LangCode code, String imgFolder) throws SQLException {

        PKW pkw = new PKW();

        try {

            boolean result = s.execute();
            if (!result) {
                throw new SQLException("result could not be retrieved");
            }
            ResultSet rs = s.getResultSet();

            while (rs.next()) {
                pkw.id = rs.getInt("id");
                pkw.offer_uid = rs.getString("offer_uid");
                pkw.category = rs.getString("category");
                pkw.brand = rs.getString("brand");
                pkw.model = rs.getString("model");
                pkw.oilType = rs.getString("oilType");
                pkw.manuYear = rs.getInt("manufacture_year");
                pkw.gearType = rs.getString("gearType");
                pkw.color = rs.getString("color");
                pkw.country = rs.getString("country");
                pkw.status = rs.getString("status");
                pkw.offerStatus = rs.getString("offer_status");
                pkw.numKm = rs.getInt("num_km");
                pkw.price = rs.getString("price");
                pkw.automaticWindshield = rs.getBoolean("automatic_windshield");
                pkw.centralLocks = rs.getBoolean("central_locks");
                pkw.leatherSeats = rs.getBoolean("leather_seats");
                pkw.airconditioner = rs.getBoolean("airconditioner");
                pkw.navigator = rs.getBoolean("navigator");
                pkw.powerSteering = rs.getBoolean("power_steering");
                pkw.numDoors = rs.getInt("num_doors");
                pkw.numSeats = rs.getInt("num_seats");
                pkw.abs = rs.getBoolean("abs");
                pkw.fourx4 = rs.getBoolean("fourx4");
                pkw.alarm = rs.getBoolean("alarm");
                pkw.xenon = rs.getBoolean("xenon");
                pkw.airbags = rs.getBoolean("airbags");
                pkw.created = rs.getDate("created");
                pkw.lastVisited = rs.getDate("last_visited");
                pkw.hits = rs.getInt("hits");
                pkw.description = rs.getString("description");
                pkw.imgs = this.formatFullImagesAsString(this.getImages(pkw.offer_uid, imgFolder));
                return pkw;
            }

        } catch (Exception e) {
            e.printStackTrace();
            throw new SQLException(e.getMessage());

        }
        throw new SQLException("Get pkw query returned empty result");
    }

    public BufferedImage getImageByUid(double uid) {
        // TODO implement
        return null;
    }

    public void getImagesByType(ImageEntity.ImageType type, double uid) {
        // TODO implement
    }

    public List<ImageEntity> getImages(String uid, String imgFolder) throws SQLException {

        try {
            String q = Queries.getQ("Q.GetImages");
            Connection conn = ConnectionPooling.getConnection();
            PreparedStatement s = conn.prepareStatement(q);
            s.setString(1, uid);
            boolean result = s.execute();
            if (!result) {
                throw new SQLException("result could not be retrieved");
            }
            ResultSet rs = s.getResultSet();
            return this.fillImagesfromResultSet(rs, imgFolder);
        } catch (Exception e) {
            e.printStackTrace();
            throw new SQLException(e.getMessage());
        }
    }

    protected String buildSearchPKWString(Map<String, String[]> params) {
        StringBuffer buffer = new StringBuffer(500);

        this.addTokenToWhere(buffer, "o.category_id", KVPUtils.parseIntDefault(params.get("category"), 0), "=");
        this.addTokenToWhere(buffer, "o.brand_id", KVPUtils.parseIntDefault(params.get("brand"), 0), "=");
        this.addTokenToWhere(buffer, "o.model_id", KVPUtils.parseIntDefault(params.get("model"), 0), "=");
        this.addTokenToWhere(buffer, "o.country_id", KVPUtils.parseIntDefault(params.get("country"), 0), "=");
        this.addTokenToWhere(buffer, "o.status", KVPUtils.parseIntDefault(params.get("status"), 0), "=");
        this.addTokenToWhere(buffer, "o.manufacture_year", KVPUtils.parseIntDefault(params.get("manuDateFrom"), 0),
                ">=");
        this.addTokenToWhere(buffer, "o.manufacture_year", KVPUtils.parseIntDefault(params.get("manuDateTo"), 0), "<=");
        this.addTokenToWhere(buffer, "o.num_km", KVPUtils.parseIntDefault(params.get("priceFrom"), 0), ">=");
        this.addTokenToWhere(buffer, "o.num_km", KVPUtils.parseIntDefault(params.get("priceTo"), 0), "<=");

        this.addTokenToWhere(buffer, "o.num_doors", KVPUtils.parseIntDefault(params.get("numDoorsFrom"), 0), ">=");
        this.addTokenToWhere(buffer, "o.num_doors", KVPUtils.parseIntDefault(params.get("numDoorsTo"), 0), "<=");
        this.addTokenToWhere(buffer, "o.num_seats", KVPUtils.parseIntDefault(params.get("numSeats"), 0), ">=");
        this.addTokenToWhere(buffer, "o.num_seats", KVPUtils.parseIntDefault(params.get("numSeats"), 0), "<=");

        this.addTokenToWhere(buffer, "o.oiltypes_id", KVPUtils.parseIntDefault(params.get("oilType"), 0), "=");
        this.addTokenToWhere(buffer, "o.geartype_id", KVPUtils.parseIntDefault(params.get("gearType"), 0), "=");
        this.addTokenToWhere(buffer, "o.color_id", KVPUtils.parseIntDefault(params.get("color"), 0), "=");
        this.addTokenToWhere(buffer, "o.price", KVPUtils.parseIntDefault(params.get("priceFrom"), 0), ">=");
        this.addTokenToWhere(buffer, "o.price", KVPUtils.parseIntDefault(params.get("priceTo"), 0), "<=");

        this.addTokenToWhere(buffer, "o.airconditioner", KVPUtils.parseBoolean("conditioner", false));
        this.addTokenToWhere(buffer, "o.automatic_windshield", KVPUtils.parseBoolean("windshield", false));
        this.addTokenToWhere(buffer, "o.central_locks", KVPUtils.parseBoolean("central_locks", false));
        this.addTokenToWhere(buffer, "o.leather_seats", KVPUtils.parseBoolean("leather", false));
        this.addTokenToWhere(buffer, "o.navigator", KVPUtils.parseBoolean("navigator", false));
        this.addTokenToWhere(buffer, "o.power_steering", KVPUtils.parseBoolean("powerSteering", false));
        this.addTokenToWhere(buffer, "o.abs", KVPUtils.parseBoolean("abs", false));
        this.addTokenToWhere(buffer, "o.fourx4", KVPUtils.parseBoolean("fourx4", false));
        this.addTokenToWhere(buffer, "o.alarm", KVPUtils.parseBoolean("alarm", false));
        this.addTokenToWhere(buffer, "o.xenon", KVPUtils.parseBoolean("xenon", false));
        this.addTokenToWhere(buffer, "o.airbags", KVPUtils.parseBoolean("airbags", false));

        if (buffer.length() > 0) {
            buffer.insert(0, " where ");
        }
        return buffer.toString();
    }

    private StringBuffer addTokenToWhere(StringBuffer buffer, String key, int value, String operator) {
        if (value > 0) {
            if (buffer.length() > 0) {
                buffer.append(" AND ");
            }
            buffer.append(key).append(operator).append(value);
        }
        return buffer;
    }

    private StringBuffer addTokenToWhere(StringBuffer buffer, String key, boolean value) {
        if (value) {
            if (buffer.length() > 0) {
                buffer.append(" AND ");
            }
            buffer.append(key).append("=").append(value);
        }
        return buffer;
    }

    /**
     * Searches for PKW according to the search query
     * 
     * @param params
     * @param code
     * @param imgFolder
     * @param page
     * @return
     */
    public PKWSearch searchPKW(Map<String, String[]> params, LangCode code, String imgFolder)
            throws SQLException {
        PKWSearch pkwsearch = new PKWSearch();
        String where = this.buildSearchPKWString(params);
        String [] val = params.get("page");
        
        int page = val != null? ServletUtils.getInt(val[0], 1) : 1;
        int offset = page > 1 ? page * 20 + 1 : 1;
        String limit = StringUtils.appendStrings(" limit ", offset, ", 20;");
        String q = Queries.getQ("Q.SearchPKW", code.name(), where, limit);
        List<PKW> list = null;
        Connection conn = ConnectionPooling.getConnection();
        PreparedStatement s = conn.prepareStatement(q);

        int count = this.countSearchPKW(params);
        boolean result = s.execute();
        if (!result) {
            throw new SQLException("result could not be retrieved");
        }
        ResultSet rs = s.getResultSet();

        list = new ArrayList<PKW>();

        while (rs.next()) {
            PKW pkw = new PKW();
            pkw.id = rs.getInt("id");
            pkw.offer_uid = rs.getString("offer_uid");
            pkw.category = rs.getString("category");
            pkw.brand = rs.getString("brand");
            pkw.model = rs.getString("model");
            pkw.manuYear = rs.getInt("manufacture_year");
            pkw.country = rs.getString("country");
            pkw.status = rs.getString("status");
            pkw.numKm = rs.getInt("num_km");
            pkw.price = rs.getString("price");

            // pkw.imgs =
            // this.formatFullImagesAsString(this.getImages(pkw.offer_uid,
            // imgFolder));
            list.add(pkw);
        }
        conn.close();
        pkwsearch.currentPage = page;
        pkwsearch.numPages = count / 20 + 1;
        pkwsearch.result = list;
        pkwsearch.hasPrevious = ((page > 1) && (pkwsearch.numPages > 1) && (pkwsearch.currentPage > 1) && (offset < count)) ? true
                : false;
        pkwsearch.hasNext = ((page > 1) && (pkwsearch.numPages > 1) && (offset < count) && (page < pkwsearch.numPages)) ? true
                : false;
        return pkwsearch;
    }

    public int countSearchPKW(Map<String, String[]> params) throws SQLException {
        String where = this.buildSearchPKWString(params);
        String q = Queries.getQ("Q.SearchPKWCount", where);
        Connection conn = ConnectionPooling.getConnection();
        PreparedStatement s = conn.prepareStatement(q);

        boolean result = s.execute();
        if (!result) {
            throw new SQLException("count pkw could not be retrieved");
        }
        ResultSet rs = s.getResultSet();

        int count = -1;
        while (rs.next()) {
            count = rs.getInt(1);
            break;
        }
        conn.close();
        if (count < 0) {
            throw new SQLException("count pkw could not be retrieved");
        }
        return count;
    }

    public String getBrandsAsJson(LangCode lang) {
        List<SimpleEntity> brands = this.getBrands(lang);
        return serializer.deepSerialize(brands);
    }

    public String getCategoriesAsJson(LangCode lang) {
        List<SimpleEntity> cats = this.getCategories(lang);
        return serializer.deepSerialize(cats);
    }

    public String getModelsAsJson(int fk) {
        List<SimpleEntity> models = this.getModels(fk);
        return serializer.deepSerialize(models);
    }

    public String getOilTypesAsJson(LangCode lang) {
        List<SimpleEntity> list = this.getOilTypes(lang);
        return serializer.deepSerialize(list);
    }

    public String getCountriesAsJson(LangCode lang) {
        List<SimpleEntity> list = this.getCountries(lang);
        return serializer.deepSerialize(list);
    }

    public String getStatusAsJson(LangCode lang) {
        List<SimpleEntity> list = this.getStatus(lang);
        return serializer.deepSerialize(list);
    }

    public String getColorsAsJson(LangCode lang) {
        List<SimpleEntity> list = this.getColors(lang);
        return serializer.deepSerialize(list);
    }

    public String getGearTypesAsJson(LangCode lang) {
        List<SimpleEntity> list = this.getGearTypes(lang);
        return serializer.deepSerialize(list);
    }

    public void bla() {
//        EntityManagerFactory emf;

    }

    private List<ImageEntity> fillImagesfromResultSet(ResultSet rs, String imgFolder) throws SQLException, IOException {

        List<ImageEntity> list = new ArrayList<ImageEntity>();

        while (rs.next()) {
            ImageEntity entity = new ImageEntity();
            entity.id = rs.getInt("id");
            entity.name = rs.getString("name");
            entity.imgType = ImageType.valueOf(rs.getString("imgType"));
            InputStream is = rs.getBinaryStream("image");
            File path = new File(imgFolder + entity.name);
            ImageUtils.saveImage(ImageUtils.loadImage(is), path);
            entity.offer_uid = rs.getDouble("offer_uid");
            list.add(entity);
        }
        return list;
    }

    private String formatFullImagesAsString(List<ImageEntity> images) {

        StringBuffer buff = new StringBuffer(500);
        for (ImageEntity e : images) {
            if (e.imgType == ImageType.full) {
                if (buff.length() > 0) {
                    buff.append(",");
                }
                buff.append(e.name);
            }
        }
        return buff.toString();

    }
}
