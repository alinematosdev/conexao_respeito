import { UserDataService } from '../../services/user-data.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataApiService } from './../../services/data-api.service';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LoadingController } from '@ionic/angular';

//Defines interface for pessoa
interface Student {
  nome: string;
  date: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [DataApiService],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PessoasPage implements OnInit {

  studentsData: any[] = [];
  submittedDate: string = ''; // Guarda o valor da data inserida.
  educationalInstitution: string = ''; //Variável que define a instituição.
  student: any;
  showAvaliarButton: boolean = false;

  constructor(private userDataService: UserDataService, private dataApiService: DataApiService, private loadingController: LoadingController) {
  }

  ngOnInit() {
    if (this.userDataService.userType == 'teacher') {
      this.showAvaliarButton = true;
      } else if (this.userDataService.userType == 'student') {
      this.showAvaliarButton = false;
      } else if (this.userDataService.userType == 'responsible') {
      this.showAvaliarButton = false;
      } else {
      this.showAvaliarButton = false;
      }

    console.log(this.userDataService.educationalInstitution);
    this.educationalInstitution = this.userDataService.educationalInstitution;
    this.fetchStudents();
  }

  async fetchStudents() {
    const url = `http://193.203.174.161:8082/v1/bff/involved/student/educational-institution?educationalInstitution=${this.educationalInstitution}&size=10&page=0`;
    // Pass educationalInstitution parameter for filtering
    this.dataApiService.getDataAPIService(url).subscribe({
      next: (data) => {
        console.log('Students received successfully:', data);
        this.studentsData = data.map((student: any) => student.fullname);
        console.log('Full names:', this.studentsData);
        // Handle successful response
      },
      error: (error) => {
        console.error('Error fetching complaints:', error);
        // Handle error
      }
    });
  }

  //Esconde a data de avaliação e retorna para visível o botão de avaliação.
  onClickConcluir(){
    document.getElementById('assessmentDate')!.style.display = "none";
    document.getElementById('avaliarButton')!.style.display = "block";
    document.getElementById('concluirButton')!.style.display = "none";
  }

  //Disponibiliza o campo de inserir a data de avaliação.
  onClickAvaliar(dateInput: string, dateSubmit: string){
    if (document.getElementById(dateInput)!.style.display === "none") {
      document.getElementById(dateInput)!.style.display = "block";
      document.getElementById(dateSubmit)!.style.display = "block";
    } else {
      document.getElementById(dateInput)!.style.display = "none";
      document.getElementById(dateSubmit)!.style.display = "none";
    }
    }

  //Torna visível a data de avaliação e botão de conclusão.
  iniciarAvaliacao(event: Event, assessmentDate: string){
    //Remove o comportamento padrão após submit no formulário.
    event.preventDefault();

    //Valida se a data está indefinida.
    const dateInput = (document.getElementById('dateInput') as HTMLInputElement).value;
    if (!dateInput) {
      //Data está indefinida.
      alert('Data inválida.');
      return;
    } else {
      document.getElementById(assessmentDate)!.style.display = "block";
      document.getElementById('avaliarButton')!.style.display = "none";
      document.getElementById('dateInput')!.style.display = "none";
      document.getElementById('dateSubmit')!.style.display = "none";
      document.getElementById('concluirButton')!.style.display = "block";
      const rawDate = (document.getElementById('dateInput') as HTMLInputElement).value;
      const [year, month, day] = rawDate.split('-');
      this.submittedDate = `${day}-${month}-${year}`;
    }
  }

  createStudentBox(student: Student) {
    // Create a new div element with the class "student-box"
    const studentBox = document.createElement("div");
    studentBox.className = "pessoa-box";
    studentBox.classList.add('pessoa-box');

    // Populate the content of the activity box
    studentBox.innerHTML = `
      <div class="student-name">
      <h1>${student.nome}</h1>
      <div class="start-assessment">
        <button (click)="onClick('dateInput','dateSubmit')">Avaliar</button>
        <form (submit)="iniciarAvaliacao($event, 'assessmentDate')">
          <p id="assessmentDate">Em avaliação até ${student.date}</p>
          <input type="date" name="dateInput" pattern="\d{2}\/\d{2}\/\d{4}" title="Data no formato dd/mm/yyyy" id="dateInput" required/>
          <input type="submit" name="dateSubmit" value="OK" id="dateSubmit">
        </form>
        <!--<input id="dateInput" type="text" name="dateInput" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" title="Data no formato dd/mm/yyyy"/>-->
      </div>
      `;

    // Append the new student box to the students container
    const studentsContainer = document.querySelector(".students-container");
    if (studentsContainer) {
      studentsContainer.appendChild(studentBox);
    }
  }

}
