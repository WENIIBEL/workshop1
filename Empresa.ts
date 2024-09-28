import { Empleado } from "./Empleado";


export class Empresa {
    empleados: Empleado[] = []
    // constructor(empleados:Empleado[]) {
    //     this.empleados = empleados
    // }

    agregarEmpleados(empleado: Empleado) {
        this.empleados.push(empleado)
    }

    EliminarEmpleados(nombre: string) {

        const buscarObj = this.empleados.findIndex((empleado) => empleado.nombre === nombre) // obtener el indice del objeto buscado
        if (buscarObj !== -1) {
            this.empleados.splice(buscarObj, 1) // el # 1 indica que elimina un solo elemento
            console.log(` el empleado  ${nombre} se eliminó de la lista`)
        } else {
            console.log(`empleado ${nombre} no ha sido encontrado`)
        }
    }

    calcularTotalSalario():void {
       const totalSalario =  this.empleados.reduce((total, empleado) => total + empleado.salario, 0)
       console.log("El salario en total es: ",totalSalario)
            
    }
}