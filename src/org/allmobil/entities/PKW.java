package org.allmobil.entities;

import java.io.Serializable;
import java.sql.Date;

import flexjson.JSONSerializer;

//@Entity
public class PKW implements Serializable, JsonSerializer {

    private static final JSONSerializer serializer = new JSONSerializer();
    static {
        serializer.exclude("class");
    }

    /**
     * 
     */
    private static final long serialVersionUID = -6718487088377995833L;
//    @Id
//    @GeneratedValue
    public int id;
    public String offer_uid;
    public String category;
    public String brand;
    public String model;
    public String oilType;
    public int manuYear;
    public String gearType;
    public String color;
    public String country;
    // @Basic
    // public String city;
    public String status;
    public String offerStatus;
    public int numKm;
    public String price;
    public boolean automaticWindshield = false;
    public boolean centralLocks = false;
    public boolean leatherSeats = false;
    public boolean airconditioner = false;
    public boolean navigator = false;
    public boolean powerSteering = false;
    public int numDoors;
    public int numSeats;
    public boolean abs = false;
    public boolean fourx4;
    public boolean alarm;
    public boolean xenon;
    public boolean airbags;
    public Date created;
    public Date lastVisited;
    public int hits;
    public String description;
    public String imgs;

    public PKW() {

    }

    @Override
    public String serialize() {
        return serializer.deepSerialize(this);
    }

}
