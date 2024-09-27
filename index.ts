import { Persona } from "./Persona";
import { Empleado } from "./Empleado";
import { Coche } from "./Coche";
import { empleado } from "./objetoEmpleado";



 
const personas:Persona [] = [
    new Persona ("wendy", 22, {"calle": 34,"ciudad": "cali", "pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),                  
    new Persona ("Juan",32, {"calle": 34,"ciudad": "medellin","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),    
    new Persona ("Kely",21, {"calle": 23,"ciudad": "bogota","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Persona ( "Noha",18,{"calle": 1,"ciudad": "cartagena","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Persona ("Vilet",15,{"calle": 64,"ciudad": "pereira","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Persona ("Jhona",24,{"calle": 52,"ciudad": "santa marta","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Persona ("Dante",46,{"calle": 65,"ciudad": "medellin","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Persona ("Lilo",23,{"calle": 42,"ciudad": "valle","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Persona ("Maili",20,{"calle": 21,"ciudad": "cartagena","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Persona ("Fredy",19,{"calle": 8,"ciudad": "bogota","pais": "Colombia"},[new Coche("carro1","modelo1",2018)])
]
personas.forEach(persona => console.log(persona.saludar()));
 const empleados:Empleado [] = [
    new Empleado (350,"juan",25,{"calle": 65,"ciudad": "medellin","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (250,"Kely",28,{"calle": 52,"ciudad": "bogota","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (150,"Vilet",18,{"calle": 24,"ciudad": "pereira","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (526,"Jhona",36,{"calle": 14,"ciudad": "santa elena","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (365,"Fredy",45,{"calle": 63,"ciudad": "bucaramanga","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (785,"Maili",23,{"calle": 22,"ciudad": "ibagué","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (265,"Noha",36,{"calle": 64,"ciudad": "armenia","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (456,"Dante",30,{"calle": 9,"ciudad": "pasto","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (457,"Nicol",21,{"calle": 10,"ciudad": "manizales","pais": "Colombia"},[new Coche("carro1","modelo1",2018)]),
    new Empleado (654,"NIcolas",20,{"calle": 32,"ciudad": "villavicencio","pais": "Colombia"},[new Coche("carro1","modelo1",2018)])
]
empleados.forEach(empleado => console.log(empleado.saludar()));


const json = JSON.stringify(empleado)
console.log(json)

const objeto = JSON.parse(json)
console.log(objeto)


  




