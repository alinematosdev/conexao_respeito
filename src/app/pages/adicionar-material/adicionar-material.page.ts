import { AddBoxService } from '../../services/addbox.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-adicionar-material',
  templateUrl: './adicionar-material.page.html',
  styleUrls: ['./adicionar-material.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ButtonComponent]
})

export class AdicionarMaterialPage implements OnInit {

  constructor(private AddBoxService: AddBoxService, private location: Location) { }

  // Define a ação de clique do botão Adicionar Material
  onClick() {
    // Chama o método para criar um elemento na página de materiais
    this.AddBoxService.triggerAddBox();
  }

  // Retorna para a página anterior
  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
