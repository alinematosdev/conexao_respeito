import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-conteudo-denuncia',
  templateUrl: './conteudo-denuncia.page.html',
  styleUrls: ['./conteudo-denuncia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConteudoDenunciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
