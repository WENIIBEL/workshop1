import { Direccion } from "./interfaces";
import { Vehiculo } from "./vehiculo";

export class Persona {
    vehiculos: Vehiculo[] 
    direccion:Direccion
    nombre:string
    private edad:number
   
    
    constructor(nombre:string, edad:number, direccion:Direccion,vehiculos:Vehiculo[]) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
        this.vehiculos = vehiculos 
    }

    public saludar():string {
        return `Tu nombre es ${this.nombre} y tienes ${this.edad} años` 
    }

    public getEdad(): number {
        return this.edad 
    }
}




