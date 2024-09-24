import { Persona } from "./Persona";

class Empleado extends Persona {
    salario:number

    constructor(salario:number, nombre:string,edad:number) {
        // hace llamado al constructor de la clase principal
        super(nombre,edad)
        this.salario = salario
        
    }

   trabajar(horas:number):string {
    return `El empleado ha trabajado ${horas} horas al día`
   }

}