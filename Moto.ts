import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo {
    constructor(marca:string, modelo:string, anio:number) {
        super(marca,modelo,anio)
        
    }
    arrancar(): void {
        console.log("acelera mientras sueltas suavemente el closh")
    }
    

}