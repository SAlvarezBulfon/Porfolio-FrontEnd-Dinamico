export class Perfil {
    id?: number;
    nombre: string;
    puesto: string;


    constructor(nombre: string, puesto: string) {
        this.nombre = nombre;
        this.puesto = puesto;
    }
}
