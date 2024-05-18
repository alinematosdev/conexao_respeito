import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, duplicateOutline, heart } from 'ionicons/icons';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { IonCol, IonRow } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'materiais.page.html',
  styleUrls: ['materiais.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon]
})
export class MateriaisPage {

  constructor(private router: Router) {
    addIcons({ addCircleOutline, heart, duplicateOutline });
  }

  onClick(route: string){
    this.router.navigate([route]).finally(() => {
    });
  }

}
