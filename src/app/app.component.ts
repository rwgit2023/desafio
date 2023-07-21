import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio';
  anoAtual = new Date().getFullYear()
  btn1(){
    alert ('OIa eu aqui')
  }
  btn2(){
    alert ('OIa eu aqui')
  }
  btn3(){
    alert ('OIa eu aqui')
  }
}


