import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem ,IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';


@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.page.html',
  styleUrls: ['./my-info.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonImg,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class MyInfoPage {}
