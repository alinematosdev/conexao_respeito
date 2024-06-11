import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { ButtonComponent} from '../../components/button/button.component';
import { addIcons } from 'ionicons';
import { shieldHalfOutline, documentText } from 'ionicons/icons';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ButtonComponent, IonIcon, CommonModule, IonSpinner],
})
export class HomePage implements OnInit {

  usuario: string = 'Usuário';
  showCheckComplaints: boolean = false;
  loading: boolean = false;

  constructor(private userDataService: UserDataService, private router: Router, private loadingController: LoadingController) {
    addIcons({ shieldHalfOutline, documentText });
  }

  ngOnInit() {
    if (this.userDataService.firstName) {
      this.usuario = this.userDataService.firstName;
    }
    if (this.userDataService.userType == 'teacher') {
    console.log(this.userDataService.userType);
    //this.showCheckComplaints = true;
    }
  }

   goToLogin () {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/login']);
    }, 1000);
  }

  goToDenuncia () {
    this.router.navigate(['/denuncia']);
  }

  goToConteudoDenuncia () {
    this.router.navigate(['/conteudodenuncia']);
  }

}
