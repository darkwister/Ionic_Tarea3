
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, personOutline, personSharp, calculatorOutline, calculatorSharp, shuffleOutline, shuffleSharp, analyticsOutline, analyticsSharp, videocam, videocamOutline, videocamOffSharp, cameraOutline, videocamSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Mi informacion', url: '/folder/my-info', icon: 'person' },
    { title: 'Sumadora', url: '/folder/adder', icon: 'calculator' },
    { title: 'Traductor de numeros', url: '/folder/translate-numbers', icon: 'shuffle' },
    { title: 'Tabla de multiplicar', url: '/folder/multiply', icon: 'analytics' },
    { title: 'Video', url: '/folder/video', icon: 'videocam' },
    { title: 'Bromita', url: '/folder/joke', icon: 'warning' },
  ];
  constructor() {
    addIcons({ personOutline, personSharp, calculatorOutline, calculatorSharp, shuffleOutline, shuffleSharp, analyticsOutline, analyticsSharp, videocamSharp, videocamOutline, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
