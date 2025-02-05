import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonImg, IonInput, IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.page.html',
  styleUrls: ['./adder.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, IonLabel, IonImg]
})
export class AdderPage implements OnInit {
  num1?: number;  
  num2?: number;
  result?: number;

  constructor() { }

  ngOnInit() {
  }

  sumar(num1: any, num2: any): number {
    this.result = Number(num1) + Number(num2); 
    return this.result;
  }
}
