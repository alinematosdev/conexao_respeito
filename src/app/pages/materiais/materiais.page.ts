import { AddBoxService } from '../../services/addbox.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, duplicateOutline, heart } from 'ionicons/icons';
import { ButtonComponent} from '../../components/button/button.component';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { IonCol, IonRow } from '@ionic/angular';

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
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, ButtonComponent],
})

export class MateriaisPage implements OnInit {

  constructor(private router: Router, private AddBoxService: AddBoxService) {
    addIcons({ addCircleOutline, heart, duplicateOutline });
  }

  ngOnInit() {
    console.log('Outside subscription');
    this.AddBoxService.addBox$.subscribe({
    next: () => {console.log('Inside subscription of material');
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
