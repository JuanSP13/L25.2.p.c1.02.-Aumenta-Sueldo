import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Empleado from "./Cl_Empleado.js";

const empresa = new Cl_Empresa()

const emp1 = new Cl_Empleado("555", 200, 2)
const emp2 = new Cl_Empleado("888", 500, 1)
const emp3 = new Cl_Empleado("777", 400, 2)
const emp4 = new Cl_Empleado("666", 600, 1)
const emp5 = new Cl_Empleado("444", 800, 1)

empresa.procesarEmpleado(emp1)
empresa.procesarEmpleado(emp2)
empresa.procesarEmpleado(emp3)
empresa.procesarEmpleado(emp4)
empresa.procesarEmpleado(emp5)

console.log(`La cédula ${emp1.cedula} tiene nuevo sueldo de $${emp1.sueldoFinal()}`);
console.log(`La cédula ${emp2.cedula} tiene nuevo sueldo de $${emp2.sueldoFinal()}`);
console.log(`La cédula ${emp3.cedula} tiene nuevo sueldo de $${emp3.sueldoFinal()}`);
console.log(`La cédula ${emp4.cedula} tiene nuevo sueldo de $${emp4.sueldoFinal()}`);
console.log(`La cédula ${emp5.cedula} tiene nuevo sueldo de $${emp5.sueldoFinal()}`);

console.log(`Total a pagar solo por aumento de sueldo: $${empresa.montoTotalAum()}`);
console.log(`Porcentaje de personal obrero: ${empresa.porcentajeObreros()}%`)

let salida: HTMLElement | null = document.getElementById("salida");
if (salida)
    salida.innerHTML +=
        `La cédula ${emp1.cedula} tiene nuevo sueldo de $${emp1.sueldoFinal()} <br>` +
        `La cédula ${emp2.cedula} tiene nuevo sueldo de $${emp2.sueldoFinal()} <br>` +
        `La cédula ${emp3.cedula} tiene nuevo sueldo de $${emp3.sueldoFinal()} <br>` +
        `La cédula ${emp4.cedula} tiene nuevo sueldo de $${emp4.sueldoFinal()} <br>` +
        `La cédula ${emp5.cedula} tiene nuevo sueldo de $${emp5.sueldoFinal()} <br>` +
        `Total a pagar solo por aumento de sueldo: $${empresa.montoTotalAum()} <br>` +
        `Porcentaje de personal obrero: ${empresa.porcentajeObreros()}%`;
else
    console.log("No se encontró la Etiqueta");
