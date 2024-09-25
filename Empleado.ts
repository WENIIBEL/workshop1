import { Direccion } from "./interfaces";
import { Persona } from "./Persona";


export class Empleado extends Persona {
    salario:number

    
    constructor(salario:number, nombre:string, edad:number, direccion:Direccion) {
        // hace llamado al constructor de la clase principal
        super(nombre,edad,direccion)
        this.salario = salario  
    }

   trabajar(horas:number):string {
    return `El empleado ha trabajado ${horas} horas al día` + this.saludar()
   }

   override  saludar(): string {
       return `Hola ${this.nombre} tu edad es ${this.getEdad()} años y tu salario es de ${this.salario} y vives en la ciudad de ${this.direccion.ciudad}`
   }

   

}