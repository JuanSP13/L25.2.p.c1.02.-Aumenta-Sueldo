export default class Cl_Empresa {
    acAumentos;
    cntEmp;
    cntObr;
    constructor() {
        this.acAumentos = 0;
        this.cntEmp = 0;
        this.cntObr = 0;
    }
    procesarEmpleado(e) {
        this.acAumentos += e.aumentaSueldo();
        if (e.tipo == 1) {
            this.cntEmp++;
            this.cntObr++;
        }
        else {
            this.cntEmp++;
        }
    }
    montoTotalAum() {
        return this.acAumentos;
    }
    porcentajeObreros() {
        return this.cntObr / this.cntEmp * 100;
    }
}
