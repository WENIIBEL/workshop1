import { EstadoCivil } from "./estadoCivil";
import { Direccion } from "./interfaces";
import { Persona } from "./Persona";
import { Vehiculo } from "./vehiculo";


export class Empleado extends Persona {
  salario: number


  constructor(salario: number, nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[],estadoCivil:EstadoCivil) {
    // hace llamado al constructor de la clase principal
    super(nombre, edad, direccion, vehiculos,estadoCivil)
    this.salario = salario
  }

  trabajar(horas: number): string {
    return `El empleado ha trabajado ${horas} horas al día` + this.saludar()
  }

  override  saludar(): string {
    const InfoVehiculo = this.vehiculos
      .map((vehiculo) => `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.anio}`)
      .join(', ')
    return `Hola ${this.nombre} tu edad es ${this.getEdad()} años y tu salario es de ${this.salario} y vives en la ciudad de ${this.direccion.ciudad} y tus vehiculo son: ${InfoVehiculo} 
    y tu estado civil es ${EstadoCivil.CASADO}`

  }

  // método para devolver el array empleado a json

  

}