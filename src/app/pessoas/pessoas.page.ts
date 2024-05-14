import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PessoasPage implements OnInit {

  constructor() { }

  //eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

  }

}
