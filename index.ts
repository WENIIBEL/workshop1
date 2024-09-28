import { Persona } from "./Persona";
import { Empleado } from "./Empleado";
import { Coche } from "./Coche";
import { empleado } from "./objetoEmpleado";
import { EstadoCivil } from "./estadoCivil";
import { Empresa } from "./Empresa";
import { Proyecto } from "./Proyecto";



 
// const personas:Persona [] = [
//     new Persona ("wendy", 22, {"calle": 34,"ciudad": "cali", "pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),                  
//     new Persona ("Juan",32, {"calle": 34,"ciudad": "medellin","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),    
//     new Persona ("Kely",21, {"calle": 23,"ciudad": "bogota","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
//     new Persona ( "Noha",18,{"calle": 1,"ciudad": "cartagena","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
//     new Persona ("Vilet",15,{"calle": 64,"ciudad": "pereira","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
//     new Persona ("Jhona",24,{"calle": 52,"ciudad": "santa marta","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
//     new Persona ("Dante",46,{"calle": 65,"ciudad": "medellin","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
//     new Persona ("Lilo",23,{"calle": 42,"ciudad": "valle","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
//     new Persona ("Maili",20,{"calle": 21,"ciudad": "cartagena","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
//     new Persona ("Fredy",19,{"calle": 8,"ciudad": "bogota","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO)
// ]
// personas.forEach(persona => console.log(persona.saludar()));
 const empleados:Empleado [] = [
    new Empleado (350,"juan",25,{"calle": 65,"ciudad": "medellin","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (250,"Kely",28,{"calle": 52,"ciudad": "bogota","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (150,"Vilet",18,{"calle": 24,"ciudad": "pereira","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (526,"Jhona",36,{"calle": 14,"ciudad": "santa elena","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (365,"Fredy",45,{"calle": 63,"ciudad": "bucaramanga","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (785,"Maili",23,{"calle": 22,"ciudad": "ibagué","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (265,"Noha",36,{"calle": 64,"ciudad": "armenia","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (456,"Dante",30,{"calle": 9,"ciudad": "pasto","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (457,"Nicol",21,{"calle": 10,"ciudad": "manizales","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO),
    new Empleado (654,"Nicolas",20,{"calle": 32,"ciudad": "villavicencio","pais": "Colombia"},[new Coche("carro1","modelo1",2018)],EstadoCivil.CASADO)
]
empleados.forEach(empleado => console.log(empleado.saludar()));

const json = JSON.stringify(empleado)
console.log(json)

const objeto = JSON.parse(json)
console.log(objeto)


const gestionEmpleado = new Empresa()
gestionEmpleado.agregarEmpleados(empleados[1])
gestionEmpleado.agregarEmpleados(empleados[2])
console.log(gestionEmpleado)
gestionEmpleado.EliminarEmpleados("Kely")
gestionEmpleado.calcularTotalSalario()


const proyecto1 =  new Proyecto ("proyecto1", 5 , 3,[empleados[0], empleados[1], empleados[2] ])
console.log(proyecto1.ImprimirProyecto())



  




