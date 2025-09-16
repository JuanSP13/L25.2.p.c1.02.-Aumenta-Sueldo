import Cl_Empleado from "./Cl_Empleado";
export default class Cl_Empresa {
    private acAumentos: number;
    private cntEmp: number;
    private cntObr: number;

    constructor() {
        this.acAumentos = 0;
        this.cntEmp = 0;
        this.cntObr = 0;
    }

    procesarEmpleado(e: Cl_Empleado) {
        this.acAumentos += e.aumentaSueldo();

        if (e.tipo == 1) {
            this.cntEmp++;
            this.cntObr++;}
        else {
            this.cntEmp++;}
    }
    montoTotalAum(): number{
        return this.acAumentos
    }

    porcentajeObreros(): number{
        return this.cntObr / this.cntEmp * 100
    }
}