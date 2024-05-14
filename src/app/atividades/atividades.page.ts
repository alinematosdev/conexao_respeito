import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, duplicateOutline, heart } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'atividades.page.html',
  styleUrls: ['atividades.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon],
})
export class AtividadesPage {
  constructor(private router: Router) {
    addIcons({ addCircleOutline, heart, duplicateOutline });
  }

  onClick(route: string){
    this.router.navigate([route]).finally(() => {
    });
  }
}
