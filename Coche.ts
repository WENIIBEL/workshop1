import { Vehiculo } from "./vehiculo";

 export class Coche extends Vehiculo {
    constructor(marca:string, modelo:string, anio:number) {
        super(marca,modelo,anio)
    }
    arrancar():void{
        console.log("acelera de 0 km a 100 km en 10 segundos")
    }
}