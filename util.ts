import { Persona } from "./Persona";

//hacer la deserializacion
const jsonPersona = `{"nombre": "wendy" , "edad":23 , "direccion":{"calle": "cr 25 # 26", "ciudad": "medellin", "pais": "colombia"} }`

const deserializacion = (objetoJson:string) => {
const objetoPersona = JSON.parse(objetoJson) 
const persona = new Persona(objetoPersona.nombre, objetoPersona.edad,objetoPersona.direccion)
console.log (persona.saludar())

}
 
deserializacion(jsonPersona)

