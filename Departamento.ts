import { Empleado } from "./Empleado";
import { empleado } from "./objetoEmpleado";


export class Departamento {
    nombreDepartamento:string
    empleados:Empleado[]

    constructor(nombreDepartamento:string, empleados:Empleado[]){
        this.nombreDepartamento = nombreDepartamento
        this.empleados = empleados
        
    }

    añadirEmpleados(empleado:Empleado){
        this.empleados.push(empleado)
    }

    eliminarEmpleado(departamento:string){
       const buscaEmpleado = this.empleados.findIndex((empleado) => empleado.departamento === departamento)
       if (buscaEmpleado !== -1 ) {
        const infoEmpleado =  this.empleados.map(index => `${index.nombre}`).join( ", ")
        this.empleados.splice(buscaEmpleado,1)
        console.log(`el empleado  que peretenece al departamento${departamento} Se eliminó `)
        console.log (`total empleados eliminados son : ${infoEmpleado}`)
       }else {
        console.log(`El departamentos ${buscaEmpleado} no se encontró `)
       }
    }
    
    listarEmpleados() {
        this.empleados.forEach(empleado => {
            console.log (` los empleados son: ${empleado.nombre}`)
        })
    }
        
}