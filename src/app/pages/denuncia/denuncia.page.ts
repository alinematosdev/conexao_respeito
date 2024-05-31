import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTabButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
  standalone: true,
  imports: [IonContent, IonTabButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonComponent]
})
export class DenunciaPage implements OnInit {

  constructor(private location: Location) {
   }

   // Go to previous page
   goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
