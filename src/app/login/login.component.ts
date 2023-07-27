import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Usuario } from '../models/usuario-model';
import { __values } from 'tslib';

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

  constructor(private autenticacaoService : AutenticacaoService){



  }
  login() {

    let usuario : Usuario = {};
    usuario.email = this.loginform.get('email')?.value!;
    usuario.password = this.loginform.get('senha')?.value!;

    this.autenticacaoService.login(usuario)?.subscribe((value) =>{
      console.log(value)
    })

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
