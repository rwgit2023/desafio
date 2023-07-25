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
    // Aqui irá chamar a tela de Home
  }
  btn2(){
    alert ('OIa eu aqui')
    // Aqui irá chamar a div de Cadastro
    
  }
  btn3(){
    alert ('OIa eu aqui')
    // Aqui irá cadastrar

  }
  btn4(){
    alert ('OIa eu aqui')
    // Aqui irá chamar a div de Acesso
  }
}
