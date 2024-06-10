import { AddBoxService } from '../../services/addbox.service';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, duplicateOutline, heart, trashOutline } from 'ionicons/icons';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';


//Defines interface for activity
interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'atividades.page.html',
  styleUrls: ['atividades.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, CommonModule],
})

export class AtividadesPage implements OnInit {

  activity: any = {
    //Mock status
    status: "A fazer"
  };
  containerMessage: string = '';
  showIcon: boolean = false;

  constructor(private userDataService: UserDataService, private router: Router, private AddBoxService: AddBoxService, private cdr: ChangeDetectorRef) {
    addIcons({ addCircleOutline, heart, duplicateOutline, trashOutline });
  }

  ngOnInit() {
    this.userDataService.userType = 'teacher';

    if (this.userDataService.userType == 'teacher') {
      this.containerMessage = 'Adicionar Atividade';
      this.showIcon = true;
      } else if (this.userDataService.userType == 'student') {
      this.containerMessage = 'Status do aluno: OK';
      this.showIcon = false;
      } else if (this.userDataService.userType == 'responsible') {
      this.containerMessage = 'Status do aluno tutorado: OK';
      this.showIcon = false;
      } else {
      this.containerMessage = 'Status do aluno: OK';
      this.showIcon = false;
      }

    this.AddBoxService.addBox$.subscribe({
    next: () => {
    this.createActivityBox({
      id: 123,
      title: "Example Title",
      description: "Example Description",
      date: "2024-05-27",
      status: "A fazer"
    });
  },
    error: (error) => {console.error('Error in subscription:', error);},
    });
  }

  onClick(route: string){
    this.router.navigate([route]).finally(() => {
    });
  }

  createActivityBox(activity: Activity) {
    // Cria um elemento do tipo "a" com a classe "activity-box"
    const activityBox = document.createElement("div");
    activityBox.className = "activity-box";
    activityBox.classList.add('activity-box');

    // Define o conteúdo da atividade na página de atividades
    activityBox.innerHTML = `
      <div class="activity-title">
        <h1>${activity.title}</h1>
      </div>
      <div class="activity-description">
        <p>${activity.description}</p>
      </div>
      <div class="activity-status">
        <p>${activity.status}</p>
      </div>
      <div class="start-activity">
        <button class="start-button">Iniciar</button>
      </div>
    `;

    // Coloca a atividade no container de atividades
    const activitiesContainer = document.querySelector(".activities-container");
    if (activitiesContainer) {
      activitiesContainer.appendChild(activityBox);
    }

    // Define evento de clique para o botão iniciar
    const startButton = activityBox.querySelector(".start-button");
    if (startButton) {
      startButton.addEventListener('click', () => {
        this.onClick(`atividades/conteudoatividade/${activity.id}`);
      }
      );
    }
  }
}
