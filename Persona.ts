import { Direccion } from "./interfaces";

export class Persona {
    
    direccion:Direccion
    nombre:string
    private edad:number
   
    
    constructor(nombre:string, edad:number, direccion:Direccion) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
    }

    public saludar():string {
        return `Tu nombre es ${this.nombre} y tienes ${this.edad} años` 
    }

    public getEdad(): number {
        return this.edad 
    }
}




