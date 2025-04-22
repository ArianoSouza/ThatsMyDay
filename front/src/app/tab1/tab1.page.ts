
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { min } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

interface activitie{
  name:string,
  startTime:string,
  spend:number,
  type:string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonButton,IonIcon,IonLabel,IonItem,NgIf,NgFor,RouterModule],
})
export class Tab1Page {

  

  activities: activitie[] = [
    {
      name:"Caminhada",
      startTime:"08:00:00",
      spend:1.5,
      type:"Exercício"
    },
    {
      name:"Caminhada",
      startTime:"08:00:00",
      spend:1.5,
      type:"Exercício"
    }
  ];

  calculateIntToTime =(number:number)=>{
    const rest = number%1
    const numberTransformed = (rest*60)
      return(Math.round(numberTransformed))
  }
  
  calculateTimeToInt =(time:string)=>{
    const hours = parseInt(time.substring(0, 2), 10);
    const minutes = parseInt(time.substring(3, 5), 10);

    const convert = minutes/60
    return hours+minutes
  }

  calculateTimeSpend =(st:string,spend:number)=>{
    const startTime = parseInt(st.substring(0, 2), 10);
    const fullTime = startTime+spend
    const minutes = fullTime%1
    const hours = fullTime-minutes
    const minutesString = this.calculateIntToTime(minutes) 
    if (fullTime < 10){
      return ("0"+hours+":"+minutesString+":00")
    }else{
      return (hours+":"+minutesString+":00")
    }
  }

  timeToShow =(st:string,time:string)=>{

    const start = st.substring(0, 5);
    const final = time.substring(0, 5);

    

    return (start + " - " + final)
  }

  goToNewActivitie() {
    this.router.navigateByUrl('/page/new-activitie'); // Navega para a rota '/home'
  }

  constructor(private router: Router) { }
}
