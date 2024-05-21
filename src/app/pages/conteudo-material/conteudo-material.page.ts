import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-conteudo-material',
  templateUrl: './conteudo-material.page.html',
  styleUrls: ['./conteudo-material.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConteudoMaterialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
