
export abstract class Vehiculo {
    marca: string
    modelo: string
    anio: number
    constructor(marca:string, modelo:string, anio:number) {
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
    }
   abstract arrancar ():void

    
}



