import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PessoasPage implements OnInit {

  constructor() {
   }

  ngOnInit() {

  }

  onClick(dateInput: string, dateSubmit: string){
  if (document.getElementById(dateInput)!.style.display === "none") {
    document.getElementById(dateInput)!.style.display = "block";
    document.getElementById(dateSubmit)!.style.display = "block";
  } else {
    document.getElementById(dateInput)!.style.display = "none";
    document.getElementById(dateSubmit)!.style.display = "none";
  }
  }

  iniciarAvaliacao(assessmentDate: string){
    document.getElementById(assessmentDate)!.style.display = "block";
    alert('teste');
  }
}
