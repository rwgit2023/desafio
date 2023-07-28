import { Component } from '@angular/core';
import { TintasService } from '../services/tintas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'desafio';
  anoAtual = new Date().getFullYear()

  constructor( private tintasService: TintasService){

    

  }

  // INICIAR A API DE TINTAS ASSIM QUE ABRIR A PAGINA
  ngOnInit():void{


    this.tintasService.tintas()?.subscribe((value) =>{

      console.log(value)

    })


  }
}
