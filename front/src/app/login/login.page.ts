import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonLabel,IonInput,IonButton,IonIcon,IonImg,RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPage implements OnInit {
  
  email = '';
  password = '';
  errorEmail ='';
  errorPassword='';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  async onLogin() {
    // Limpa mensagens de erro anteriores
    this.errorEmail = '';
    this.errorPassword = '';
  
    // Validação básica no front
    if (!this.email) {
      this.errorEmail = 'O email é obrigatório.';
      this.password = '';
    } else if (!this.email.includes('@')) {
      this.errorEmail = 'Email inválido.';
      this.password = '';
    }
  
    if (!this.password) {
      this.errorPassword = 'A senha é obrigatória.';
      this.password = '';
    }
  
    // Se tiver algum erro, não envia para o backend
    if (this.errorEmail || this.errorPassword) {
      return;
    }
  
    const credentials = {
      email: this.email,
      password: this.password,
    };
  
    this.authService.login(credentials).subscribe({
      next: (res) => {
        console.log('Usuário logado:', res);
        this.navCtrl.navigateForward('/page',{animated: false,}); // Navega para a rota '/home'
      },
      error: (err) => {
        console.error('Erro no login:', err);
  
        // Aqui você pode tratar erros específicos da API
        if (err.status === 401) {
          this.errorPassword = 'Senha incorreta.';
          this.password = '';
        } else if (err.status === 404) {
          this.errorEmail = 'Email não encontrado.';
        } else {
          this.errorEmail = 'Erro ao tentar logar. Tente novamente.';
        }
      },
    });
  }

  ngOnInit() {
  }

}
