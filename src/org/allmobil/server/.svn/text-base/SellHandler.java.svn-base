package org.allmobil.server;

import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.allmobil.db.Queries;
import org.allmobil.utils.KVPUtils;
import org.allmobil.utils.ServletUtils;

public class SellHandler {

    volatile private Queries q = Queries.getInstance();

    synchronized public void handle(HttpServletRequest request, HttpServletResponse response) {
        String req = request.getParameter("request");
        if (req != null) {
            req = req.toLowerCase();
        }

        if ("sellpkw".equals(req)) {
            this.handlePkw(request, response);
        }
    }

    synchronized protected void handlePkw(HttpServletRequest request, HttpServletResponse response) {
        try {
            try {
                Map params = this.parseSellPkw(request);
                double result = this.q.addPkwOffer(params);
                ServletUtils.writeStringAnswer(response, String.valueOf(result));
            } catch (ParseException e) {
                // TODO write meaningful errors
                response.sendError(HttpServletResponse.SC_BAD_REQUEST, e.getLocalizedMessage());
                e.printStackTrace();
            } catch (NumberFormatException e) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST, e.getLocalizedMessage());
                e.printStackTrace();
            } catch (IOException e) {
                response.sendError(HttpServletResponse.SC_NOT_FOUND, e.getLocalizedMessage());
                e.printStackTrace();
            } catch (SQLException e) {
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getLocalizedMessage());
                e.printStackTrace();
            } catch (ServletException e) {
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getLocalizedMessage());
                e.printStackTrace();
            } catch (Exception e) {
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getLocalizedMessage());
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * @param request
     * @return
     * @throws ParseException
     * @throws IOException
     */
    protected Map parseSellPkw(HttpServletRequest request) throws ParseException, IOException {

        Map params = KVPUtils.parseRequestBody(request);
        KVPUtils.verifyInteger(params, "category", "Category cannot be empty");
        KVPUtils.verifyInteger(params, "brand", "Brand cannot be empty");
        KVPUtils.verifyInteger(params, "manuDate", "Manufacture date cannot be empty");
        KVPUtils.verifyInteger(params, "numDoors", "Number doors cannot be empty");
        KVPUtils.verifyInteger(params, "numSeats", "Number of seats cannot be empty");
        KVPUtils.verifyInteger(params, "oilType", "Oil type cannot be empty");
        KVPUtils.verifyInteger(params, "status", "Status cannot be empty");
        KVPUtils.verifyInteger(params, "country", "Country cannot be empty");
        KVPUtils.verifyInteger(params, "gearType", "Gear type cannot be empty");
        KVPUtils.verifyInteger(params, "price", "Price cannot be empty");
        KVPUtils.verifyInteger(params, "meter", "Number of Km cannot be empty");
        KVPUtils.verifyInteger(params, "color", "Color cannot be empty");

        KVPUtils.verifyBoolean(params, "conditioner", false);
        KVPUtils.verifyBoolean(params, "leather", false);
        KVPUtils.verifyBoolean(params, "powerSteering", false);
        KVPUtils.verifyBoolean(params, "navigator", false);
        KVPUtils.verifyBoolean(params, "windshield", false);
        KVPUtils.verifyBoolean(params, "abs", false);
        KVPUtils.verifyBoolean(params, "fourx4", false);
        KVPUtils.verifyBoolean(params, "alarm", false);
        KVPUtils.verifyBoolean(params, "xenon", false);
        KVPUtils.verifyBoolean(params, "conditioner", false);
        KVPUtils.verifyBoolean(params, "airbags", false);
        KVPUtils.verifyBoolean(params, "central_locks", false);
        KVPUtils.verifyString(params, "desc", null);
        params.put("images", ServletUtils.getImages((String) params.get("imgs"), ServletUtils.getImagesFolder(request)));
        return params;
    }
}
