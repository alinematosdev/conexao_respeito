import { AddBoxService } from '../../services/addbox.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-adicionar-atividade',
  templateUrl: './adicionar-atividade.page.html',
  styleUrls: ['./adicionar-atividade.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonComponent]
})

export class AdicionarAtividadePage implements OnInit {

  constructor(private AddBoxService: AddBoxService, private location: Location) { }

  // Define a ação de clique do botão Adicionar Atividade
  onClick() {
    // Chama o método para criar um elemento na página de atividades
    this.AddBoxService.triggerAddBox();
  }

  // Retorna para a página anterior
  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
