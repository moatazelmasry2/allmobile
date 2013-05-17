package org.allmobil.entities;

public class ComplexEntity extends SimpleEntity {

    private int fk;

    public ComplexEntity(int id, String name, int fk) {
        super(id, name);
        this.fk = fk;
    }

    public int getFk() {
        return this.fk;
    }

    public void setFk(int fk) {
        this.fk = fk;
    }

}
