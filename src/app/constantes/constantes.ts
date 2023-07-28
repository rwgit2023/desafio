import { Usuario } from "../models/usuario-model";

export class Constantes {

    static RotasHttp = class 
    {
        static IP: string = 'https://reqres.in/api';
        static LOGIN: string = this.IP + '/login';
        static CADASTRAR: string = this.IP + '/register';
        static TINTAS: string = this.IP + '/unknown';

    
    }

}