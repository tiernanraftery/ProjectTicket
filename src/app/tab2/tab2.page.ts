import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg } from '@ionic/angular/standalone';
import { TicketmasterApiService } from '../services/ticketmaster-api.service';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton,IonImg],
})
export class Tab2Page implements OnInit {
  tickets:any = [];
  constructor(private ticketService:TicketmasterApiService, private router:Router) {

  }

  openTab3Page(){
    this.router.navigate(['/tab3',{item:this.tickets}])
  }


ngOnInit(): void {
  this.ticketService.GetTicketData().subscribe(
    (data)=>{
      this.tickets = data._embedded.events;
    }
  );
}

}