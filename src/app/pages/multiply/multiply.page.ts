import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.page.html',
  styleUrls: ['./multiply.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, IonLabel, IonItem, 
    IonList, IonButton, IonCard, IonCardContent, 
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput
  ]
})
export class MultiplyPage {
  inputNumber: number = 0;
  lastNumber: number = 0;
  resultados: { num: number, resultado: number }[] = [];

  multiplicar() {
    this.resultados = [];
    if (this.inputNumber) {
      this.lastNumber = this.inputNumber;
      for (let i = 1; i <= 13; i++) {
        this.resultados.push({ num: i, resultado: this.lastNumber * i });
      }
    }
  }
}