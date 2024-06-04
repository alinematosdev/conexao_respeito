import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { ButtonComponent} from '../../components/button/button.component';
import { addIcons } from 'ionicons';
import { shieldHalfOutline, documentText } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ButtonComponent, IonIcon],
})
export class HomePage {

  usuario: string = 'Usuário';

  constructor(private router: Router) {
    addIcons({ shieldHalfOutline, documentText });
  }

  goToDenuncia () {
    this.router.navigate(['/denuncia']);
  }

  goToConteudoDenuncia () {
    this.router.navigate(['/conteudodenuncia']);
  }

}
