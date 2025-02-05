import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem} from '@ionic/angular/standalone';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.page.html',
  styleUrls: ['./joke.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonList, IonItem]
})
export class JokePage {}
