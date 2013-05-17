/*--
 * Portions of this code is taken from deegree, www.deegree.org. License:
 *  This file is part of deegree, http://deegree.org/
 Copyright (C) 2001-2009 by:
 Department of Geography, University of Bonn
 and
 lat/lon GmbH

 This library is free software; you can redistribute it and/or modify it under
 the terms of the GNU Lesser General Public License as published by the Free
 Software Foundation; either version 2.1 of the License, or (at your option)
 any later version.
 This library is distributed in the hope that it will be useful, but WITHOUT
 ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 details.
 You should have received a copy of the GNU Lesser General Public License
 along with this library; if not, write to the Free Software Foundation, Inc.,
 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA

 Contact information:

 lat/lon GmbH
 Aennchenstr. 19, 53177 Bonn
 Germany
 http://lat-lon.de/

 Department of Geography, University of Bonn
 Prof. Dr. Klaus Greve
 Postfach 1147, 53001 Bonn
 Germany
 http://www.geographie.uni-bonn.de/deegree/

 e-mail: info@deegree.org
 * 
 */

package org.allmobil.utils;

/**
 * @author elmasry
 * 
 */
public class StringUtils {

    /**
     * transforms an array of StackTraceElements into a String
     * 
     * @param se
     *            to put to String
     * @return a String representation of the given Stacktrace.
     */
    public static String stackTraceToString(StackTraceElement[] se) {

        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < se.length; i++) {
            sb.append(se[i].getClassName() + " ");
            sb.append(se[i].getFileName() + " ");
            sb.append(se[i].getMethodName() + "(");
            sb.append(se[i].getLineNumber() + ")\n");
        }
        return sb.toString();
    }

    /**
     * Get the message and the class, as well as the stack trace of the passed
     * Throwable and transforms it into a String
     * 
     * @param e
     *            to get information from
     * @return the String representation of the given Throwable
     */
    public static String stackTraceToString(Throwable e) {
        if (e == null) {
            return "No Throwable given.";
        }
        StringBuffer sb = new StringBuffer();
        sb.append(e.getMessage()).append("\n");
        sb.append(e.getClass().getName()).append("\n");
        sb.append(stackTraceToString(e.getStackTrace()));
        return sb.toString();
    }

    public static void isValid(String s, String error) {
        if ((s == null) || (s.length() == 0)) {
            throw new NullPointerException(error);
        }
    }

    /**
     * replaces occurences of a string fragment within a string by a new string.
     * 
     * @param target
     *            is the original string
     * @param from
     *            is the string to be replaced
     * @param to
     *            is the string which will used to replace
     * @param all
     *            if it's true all occurences of the string to be replaced will
     *            be replaced. else only the first occurence will be replaced.
     * @return the changed target string
     */
    public static String replace(String target, String from, String to, boolean all) {

        StringBuffer buffer = new StringBuffer(target.length());
        int copyFrom = 0;
        char[] targetChars = null;
        int lf = from.length();
        int start = -1;
        do {
            start = target.indexOf(from);
            copyFrom = 0;
            if (start == -1) {
                return target;
            }

            targetChars = target.toCharArray();
            while (start != -1) {
                buffer.append(targetChars, copyFrom, start - copyFrom);
                buffer.append(to);
                copyFrom = start + lf;
                start = target.indexOf(from, copyFrom);
                if (!all) {
                    start = -1;
                }
            }
            buffer.append(targetChars, copyFrom, targetChars.length - copyFrom);
            target = buffer.toString();
            buffer.delete(0, buffer.length());
        } while ((target.indexOf(from) > -1) && (to.indexOf(from) < 0));

        return target;
    }

    public static String appendStrings(Object... strings) {
        StringBuffer buffer = new StringBuffer();
        for (Object s : strings) {
            buffer.append(s);
        }
        return buffer.toString();
    }
}
