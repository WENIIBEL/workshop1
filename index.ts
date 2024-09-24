import { Persona } from "./Persona";

const persona:Persona [] = [
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
persona.forEach(p => console.log(p.saludar()));



