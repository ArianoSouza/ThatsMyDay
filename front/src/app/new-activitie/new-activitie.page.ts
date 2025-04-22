import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonSelect, IonTitle, IonToolbar, IonCheckbox, IonSelectOption, NavController } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-activitie',
  templateUrl: './new-activitie.page.html',
  styleUrls: ['./new-activitie.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonLabel,IonInput,IonButton,IonIcon,IonImg,RouterModule, IonSelect, IonCheckbox, IonSelectOption],
})
export class NewActivitiePage implements OnInit {

  goToNewActivitie() {
    this.navCtrl.navigateForward('/page/new-activitie',{animated:false}); // Navega para a rota '/home'
  }

  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

}
