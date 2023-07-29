import { Component } from '@angular/core';
import { TintasService } from '../services/tintas.service';
import { Tintas } from '../models/tintas.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'desafio';
  anoAtual = new Date().getFullYear()
  listaTintas : Tintas [] = []

  constructor(private tintasService: TintasService) {




  }

  // INICIAR A API DE TINTAS ASSIM QUE ABRIR A PAGINA
  ngOnInit(): void {


    this.tintasService.tintas()?.subscribe((value) => {

      // console.log(value)

      const listaDados: Tintas[] = value.data;

      this.listaTintas = listaDados
      console.log(listaDados)





    })


  }
}


