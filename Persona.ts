export class Persona {
    nombre:string
    private edad:number

    
    constructor(nombre:string, edad:number) {
        this.nombre = nombre
        this.edad = edad
    }

    public saludar():string {
        return `Tu nombre es ${this.nombre} y tienes ${this.edad} años`
    }

    public getEdad(): number {
        return this.edad 
    }
}




