// CADASTRO

// {
//   "email": "eve.holt@reqres.in",
//   "password": "pistol"
// }

// LOGIN
// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }




import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Usuario } from '../models/usuario-model';
import { __values } from 'tslib';

import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  
export class LoginComponent {
  title = 'desafio';

    
  loginform = new FormGroup ({

    email : new FormControl(''),
    senha : new FormControl(''),

  });


  cadastroform = new FormGroup ({

    nome : new FormControl(''),
    email : new FormControl(''),
    senha : new FormControl(''),

  });

      // ------------------------------------------------------------LOGIN------------------------------------------------------------
  constructor(private autenticacaoService : AutenticacaoService, private navigationService: NavigationService){


  }
  login() {

    let usuario : Usuario = {};
    usuario.email = this.loginform.get('email')?.value!;
    usuario.password = this.loginform.get('senha')?.value!;

    this.autenticacaoService.login(usuario)?.subscribe((value) =>{
      // console.log(value)

      localStorage.setItem('user',JSON.stringify(value))

      this.navigationService.goToHome();
            
    })

  }
  
  goToSignUp() {
    // Aqui irá chamar a div de Cadastro
    const primeira = document.getElementById("primeira");
    const segunda = document.getElementById("segunda");

    primeira!.className = 'container segundo-container aberto'
    segunda!.className = 'fechado' // container segundo-container -> fechado
  }


     // ------------------------------------------------------------CADASTRO------------------------------------------------------------

  signUp() {

    let usuario : Usuario = {};
    usuario.nome = this.cadastroform.get('nome')?.value!;
    usuario.email = this.cadastroform.get('email')?.value!;
    usuario.password = this.cadastroform.get('senha')?.value!

    this.autenticacaoService.cadastro(usuario)?.subscribe((value) =>{
      // console.log(value)

      localStorage.setItem('user',JSON.parse(JSON.stringify(value)).token)

      window.location.reload();

      const objeto = JSON.parse(value);


      
      console.log(objeto.name);
      console.log(objeto.year);

    })

  }


  goToLogin() {
    // Aqui irá chamar a div de Cadastro
    const primeira = document.getElementById("primeira");
    const segunda = document.getElementById("segunda");


    primeira!.className = 'fechado';
    segunda!.className = 'container segundo-container';
  }
}
