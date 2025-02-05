import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTextarea, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput, IonButton, IonList } from '@ionic/angular/standalone';


@Component({
  selector: 'app-adder',
  templateUrl: './adder.page.html',
  styleUrls: ['./adder.page.scss'],
  standalone: true,
  imports: [IonTextarea, IonItem, IonList, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel ]
})
export class AdderPage{
  num1?: number;  
  num2?: number;
  result?: number;

  sumar(num1: any, num2: any): number {
    this.result = Number(num1) + Number(num2); 
    return this.result;
  }
}
