 import { Empleado } from "./Empleado";
 
 
 export class Proyecto {
    nombreP:string
    cantidadPeronas: number
    tiempoLimiteP: number
    empleado: Empleado[]

    constructor(nombreP:string, cantidadPersonas:number, tiempoLimiteP:number, empleado:Empleado[]) {
        this.nombreP = nombreP
        this.cantidadPeronas = cantidadPersonas
        this.tiempoLimiteP = tiempoLimiteP
        this.empleado = empleado 
    }
    ImprimirProyecto():string {
        const empleado_ =  this.empleado.map(i => `${i.nombre}`).join( ", ")
        return `el proyecto ${this.nombreP} tiene ${this.cantidadPeronas}  integrantes dentro y su tiempo limite es de ${this.tiempoLimiteP} días y ${empleado_} hará parte de este proyecto` 
    }

} 