export default class Cl_Empleado {
    private _cedula: string;
    private _sueldoA: number;
    private _tipo: number;
    constructor(cedula: string, sueldoA: number, tipo: number) {
        this._cedula = cedula;
        this._sueldoA = sueldoA;
        this._tipo = tipo;
    }

    //Sets y Gets
    public set cedula(c:string) {
        this._cedula = c;
    }

    public get cedula(): string {
        return this._cedula;
    }

    public set sueldoA(sA: number) {
        this._sueldoA = sA;
    }

    public get sueldoA(): number {
        return this._sueldoA;
    }

    public set tipo(t: number) {
        this._tipo = t;
    }

    public get tipo(): number {
        return this._tipo;
    }
    aumentaSueldo(): number{
        if (this.tipo === 1) {
            return this.sueldoA*20/100
        }
        else { return this.sueldoA*10/100}

    }
    sueldoFinal(): number {
        return this.sueldoA + this.aumentaSueldo();
    }
}