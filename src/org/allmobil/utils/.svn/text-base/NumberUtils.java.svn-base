package org.allmobil.utils;

import java.security.SecureRandom;

public class NumberUtils {

    private static SecureRandom prng;
    static {
        try {
            prng = SecureRandom.getInstance("SHA1PRNG");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 
     * Returns the next gaussian number
     * 
     * @return
     */
    public static double rand() {
        return prng.nextGaussian();
    }
}
