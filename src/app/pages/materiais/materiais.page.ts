import { AddBoxService } from '../../services/addbox.service';
import { UserDataService } from '../../services/user-data.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, duplicateOutline, heart } from 'ionicons/icons';
import { ButtonComponent} from '../../components/button/button.component';

//Defines interface for material
interface Material {
  id: number;
  title: string;
  image: string;
}

@Component({
  selector: 'app-materiais',
  templateUrl: 'materiais.page.html',
  styleUrls: ['materiais.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, ButtonComponent, CommonModule],
})

export class MateriaisPage implements OnInit {

  containerMessage: string = '';
  showIcon: boolean = false;

  constructor(private userDataService: UserDataService, private router: Router, private AddBoxService: AddBoxService) {
    addIcons({ addCircleOutline, heart, duplicateOutline });
  }

  ngOnInit() {
    if (this.userDataService.userType == 'teacher') {
      this.containerMessage = 'Status do aluno(a) Yury Davis: Em avaliação até 20/06/2024';
      //this.showIcon = true;
      } else if (this.userDataService.userType == 'student') {
      this.containerMessage = 'Status do aluno(a) Yury Davis: Em avaliação até 20/06/2024';
      this.showIcon = false;
      } else if (this.userDataService.userType == 'responsible') {
      this.containerMessage = 'Status do aluno tutorado: OK';
      this.showIcon = false;
      } else {
      this.containerMessage = 'Status do aluno(a) Yury Davis: Em avaliação até 20/06/2024';
      this.showIcon = false;
      }

    this.AddBoxService.addBox$.subscribe({
    next: () => {
    this.createMaterialBox({
      id: 123,
      title: "Example Title",
      image: "../../assets/images/photorealistic-book-lawyer.jpg",
    });},
    error: (error) => {console.error('Error in subscription:', error);},
    });
  }

  onClick(route: string){
    this.router.navigate([route]).finally(() => {
    });
  }

  createMaterialBox(material: Material) {
    // Cria um elemento do tipo "a" com a classe "material-box"
    const materialBox = document.createElement("a");
    materialBox.className = "material-box";
    materialBox.classList.add('material-box');

    // Define o link do material pelo id
   materialBox.setAttribute("href", `materiais/conteudomaterial/${material.id}`);

    // Define o conteúdo do material na página de materiais
    materialBox.innerHTML = `
        <img src="${material.image}" alt="content-related-image">
        <h1 class="material-title">${material.title}</h1>
      `;

    // Coloca a atividade no container de atividades
    const materialsContainer = document.querySelector(".materials-container");
    if (materialsContainer) {
      materialsContainer.appendChild(materialBox);
    }
  }

}
