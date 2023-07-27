import { Usuario } from "../models/usuario-model";

export class Constantes {

    static RotasHttp = class 
    {
        static CADASTRO(CADASTRO: any, usuario: Usuario): import("rxjs").Observable<any> | null {
          throw new Error('Method not implemented.');
        } 
        static IP: string = 'https://reqres.in/api';
        static LOGIN: string = this.IP + '/login';

    
    }

}