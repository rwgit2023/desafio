import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  constructor(private router: Router) { }

  // Método para navegar para a página "home"
  goToHome() {
    this.router.navigate(['/home']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  // Você pode adicionar mais métodos conforme necessário para outras páginas
}