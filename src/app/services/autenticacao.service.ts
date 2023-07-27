import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario-model';
import { Observable } from 'rxjs';
import { Constantes } from '../constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  // buscando na api....   o Observable serve para que se busque algo só que sem esperar um tempo fixo


  // API / ROTA
  login(usuario:Usuario):Observable<any>|null{   

    

    return this.http.post(Constantes.RotasHttp.LOGIN,usuario);
  }
}
