import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'desafio';


  // primeira = document.querySelector(".primeiro-container");
  // segunda = document.querySelector(".segundo-container");

  login() {



  }

  goToSignUp() {
    // Aqui irá chamar a div de Cadastro
    const primeira = document.getElementById("primeira");
    const segunda = document.getElementById("segunda");

    console.log(primeira)

    primeira!.className = 'container segundo-container aberto'
    segunda!.className = 'fechado' // container segundo-container -> fechado
  }

  signUp() {



  }
  goToLogin() {
    // Aqui irá chamar a div de Cadastro
    const primeira = document.getElementById("primeira");
    const segunda = document.getElementById("segunda");

    console.log(primeira)

    primeira!.className = 'fechado';
    segunda!.className = 'container segundo-container';
  }
}
