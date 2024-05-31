import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-conteudo-material',
  templateUrl: './conteudo-material.page.html',
  styleUrls: ['./conteudo-material.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonComponent]
})
export class ConteudoMaterialPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  // Retorna para a página anterior
  goBack() {
    this.location.back();
  }

}
