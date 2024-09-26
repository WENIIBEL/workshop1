import { Persona } from "./Persona";

//hacer la deserializacion
const jsonPersona = {"nombre": "wendy" , "edad":23 ,
     "direccion":{"calle": "cr 25 # 26", "ciudad": "medellin", "pais": "colombia"}
     }

const deserializacion = (objetoJson:any) => {
const persona = new Persona(objetoJson.nombre, objetoJson.edad, objetoJson.direccion)
console.log (persona.saludar())
}

const funcion = (objetoJson:any):void => {

    deserializacion(objetoJson)
}
 
funcion(jsonPersona)


