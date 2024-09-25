import { Persona } from "./Persona";
import { Empleado } from "./Empleado";

const personas:Persona [] = [
    new Persona ("wendy",22),
    new Persona ("Juan",32),
    new Persona ("Kely",21),
    new Persona ( "Noha",18),
    new Persona ("Vilet",15),
    new Persona ("Jhona",24),
    new Persona ("Dante",46),
    new Persona ("Lilo",23),
    new Persona ("Maili",20),
    new Persona ("Fredy",19)
]
personas.forEach(persona => console.log(persona.saludar()));

const empleados:Empleado [] = [
    new Empleado (350,"juan",25),
    new Empleado (250,"Kely",28),
    new Empleado (150,"Vilet",18),
    new Empleado (526,"Jhona",36),
    new Empleado (365,"Fredy",45),
    new Empleado (785,"Maili",23),
    new Empleado (265,"Noha",36),
    new Empleado (456,"Dante",30),
    new Empleado (457,"Nicol",21),
    new Empleado (654,"NIcolas",20)
]
empleados.forEach(empleado => console.log(empleado.saludar()));


