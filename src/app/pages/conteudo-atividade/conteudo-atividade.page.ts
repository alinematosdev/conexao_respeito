import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-conteudo-atividade',
  templateUrl: './conteudo-atividade.page.html',
  styleUrls: ['./conteudo-atividade.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonComponent]
})
export class ConteudoAtividadePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  // Retorna para a página anterior
  goBack() {
    this.location.back();
  }

}
