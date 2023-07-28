import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class TintasService {

  constructor(private http: HttpClient) { }

  // buscando na api....   o Observable serve para que se busque algo só que sem esperar um tempo fixo


  // API / ROTA / LOGIN
  tintas():Observable<any>|null{  
    return this.http.get(Constantes.RotasHttp.TINTAS);

  }

}

