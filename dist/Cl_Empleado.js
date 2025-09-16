export default class Cl_Empleado {
    _cedula;
    _sueldoA;
    _tipo;
    constructor(cedula, sueldoA, tipo) {
        this._cedula = cedula;
        this._sueldoA = sueldoA;
        this._tipo = tipo;
    }
    //Sets y Gets
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    set sueldoA(sA) {
        this._sueldoA = sA;
    }
    get sueldoA() {
        return this._sueldoA;
    }
    set tipo(t) {
        this._tipo = t;
    }
    get tipo() {
        return this._tipo;
    }
    aumentaSueldo() {
        if (this.tipo === 1) {
            return this.sueldoA * 20 / 100;
        }
        else {
            return this.sueldoA * 10 / 100;
        }
    }
    sueldoFinal() {
        return this.sueldoA + this.aumentaSueldo();
    }
}
