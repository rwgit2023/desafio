import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio';
  anoAtual = new Date().getFullYear()
  alerta(){
    alert ('OIa eu aqui')
  }
}


