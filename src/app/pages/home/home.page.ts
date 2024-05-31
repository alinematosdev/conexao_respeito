import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ButtonComponent],
})
export class HomePage {

  usuario: string = 'Usuário';

  constructor(private router: Router) {}

  goToDenuncia () {
    this.router.navigate(['/denuncia']);
  }

}
