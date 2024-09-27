import { Direccion } from "./interfaces";
import { Vehiculo } from "./vehiculo";
import { EstadoCivil } from "./estadoCivil";

export class Persona {
    estadoCivil: EstadoCivil
    vehiculos: Vehiculo[] 
    direccion:Direccion
    nombre:string
    private edad:number
   
    
    constructor(nombre:string, edad:number, direccion:Direccion,vehiculos:Vehiculo[], estadoCivil:EstadoCivil) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
        this.vehiculos = vehiculos 
        this.estadoCivil = estadoCivil
    }

    public saludar():string {
        return `Tu nombre es ${this.nombre} y tienes ${this.edad} años` 
    }

    public getEdad(): number {
        return this.edad 
    }
}




