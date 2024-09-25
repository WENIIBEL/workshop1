import { Persona } from "./Persona";
import { Empleado } from "./Empleado";

 //nombre:string, edad:number, direccion:Direccion
const personas:Persona [] = [
    new Persona ("wendy", 22, {"calle": 34,"ciudad": "cali", "pais": "Colombia"}),                  
    new Persona ("Juan",32, {"calle": 34,"ciudad": "medellin","pais": "Colombia"}),    
    new Persona ("Kely",21, {"calle": 23,"ciudad": "bogota","pais": "Colombia"}),
    new Persona ( "Noha",18,{"calle": 1,"ciudad": "cartagena","pais": "Colombia"}),
    new Persona ("Vilet",15,{"calle": 64,"ciudad": "pereira","pais": "Colombia"}),
    new Persona ("Jhona",24,{"calle": 52,"ciudad": "santa marta","pais": "Colombia"}),
    new Persona ("Dante",46,{"calle": 65,"ciudad": "medellin","pais": "Colombia"}),
    new Persona ("Lilo",23,{"calle": 42,"ciudad": "valle","pais": "Colombia"}),
    new Persona ("Maili",20,{"calle": 21,"ciudad": "cartagena","pais": "Colombia"}),
    new Persona ("Fredy",19,{"calle": 8,"ciudad": "bogota","pais": "Colombia"})
]
personas.forEach(persona => console.log(persona.saludar()));

const empleados:Empleado [] = [
    new Empleado (350,"juan",25,{"calle": 65,"ciudad": "medellin","pais": "Colombia"}),
    new Empleado (250,"Kely",28,{"calle": 52,"ciudad": "bogota","pais": "Colombia"}),
    new Empleado (150,"Vilet",18,{"calle": 24,"ciudad": "pereira","pais": "Colombia"}),
    new Empleado (526,"Jhona",36,{"calle": 14,"ciudad": "santa elena","pais": "Colombia"}),
    new Empleado (365,"Fredy",45,{"calle": 63,"ciudad": "bucaramanga","pais": "Colombia"}),
    new Empleado (785,"Maili",23,{"calle": 22,"ciudad": "ibagué","pais": "Colombia"}),
    new Empleado (265,"Noha",36,{"calle": 64,"ciudad": "armenia","pais": "Colombia"}),
    new Empleado (456,"Dante",30,{"calle": 9,"ciudad": "pasto","pais": "Colombia"}),
    new Empleado (457,"Nicol",21,{"calle": 10,"ciudad": "manizales","pais": "Colombia"}),
    new Empleado (654,"NIcolas",20,{"calle": 32,"ciudad": "villavicencio","pais": "Colombia"})
]
empleados.forEach(empleado => console.log(empleado.saludar()));


