import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonButton, IonInput, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-translate-numbers',
  templateUrl: './translate-numbers.page.html',
  styleUrls: ['./translate-numbers.page.scss'],
  standalone: true,
  imports: [ IonItem, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonButton, IonLabel, IonInput, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel]
})
export class TranslateNumbersPage implements OnInit {
  inputNumber?: number;
  outputText?: string;

  constructor() { }

  ngOnInit() {
  }

  convertNumberToWords(number: number): string {
    const ones = ["", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez", "Once", "Doce", "Trece", "Catorce", "Quince", "Dieciséis", "Diecisiete", "Dieciocho", "Diecinueve"];
    const tens = ["", "", "Veinte", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];
    const hundreds = ["", "Ciento", "Doscientos", "Trescientos", "Cuatrocientos", "Quinientos", "Seiscientos", "Setecientos", "Ochocientos", "Novecientos"];

    if (number === 100) return "Cien";
    if (number === 1000) return "Mil";
    
    if (number < 20) {
      return ones[number];
    } else if (number < 100) {
      let tenPart = tens[Math.floor(number / 10)];
      let onePart = ones[number % 10];
      return number % 10 === 0 ? tenPart : `${tenPart} y ${onePart}`;
    } else if (number < 1000) {
      let hundredPart = hundreds[Math.floor(number / 100)];
      let restPart = number % 100;
      return restPart === 0 ? hundredPart : `${hundredPart} ${this.convertNumberToWords(restPart)}`;
    } else {
      return "Numero fuera de rango";
    }
  }
  translate() {
    if (this.inputNumber !== undefined) {
      this.outputText = this.convertNumberToWords(this.inputNumber);
    }
  }
}
