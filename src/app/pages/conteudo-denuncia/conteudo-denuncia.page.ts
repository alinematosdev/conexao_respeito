import { UserDataService } from '../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataApiService } from './../../services/data-api.service';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { ButtonComponent} from '../../components/button/button.component';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ComplaintModalComponent } from './../../components/complaint-modal/complaint-modal.component'
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-conteudo-denuncia',
  templateUrl: './conteudo-denuncia.page.html',
  styleUrls: ['./conteudo-denuncia.page.scss'],
  standalone: true,
  providers: [ModalController],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonComponent, ComplaintModalComponent]
})

export class ConteudoDenunciaPage implements OnInit {

  complaintsData: any[] = [];
  educationalInstitution: string = 'Uninassau';

  constructor(private userDataService: UserDataService, private location: Location, private modalController: ModalController, private dataApiService: DataApiService, private loadingController: LoadingController) { }

  async ngOnInit() {
    //this.educationalInstitution = this.userDataService.educationalInstitution;
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'circles'
    });
    await loading.present();
    this.fetchComplaints();
    await loading.dismiss();
  }



  /*async fetchComplaints() {
    const url = 'http://193.203.174.161:8082/v1/bff/complaint/id';
    // Pass educationalInstitution parameter for filtering
    this.dataApiService.getDataAPIService(url, this.educationalInstitution).subscribe({
      next: (data: any) => {
        this.complaintsData = data.filter((complaint: any) => complaint.educationalInstitution === this.educationalInstitution);
        console.log('Complaints received successfully:', data);
        // Handle successful response
      },
      error: (error) => {
        console.error('Error fetching complaints:', error);
        // Handle error
      }
    });
  }*/

// Update fetchComplaints method
async fetchComplaints() {
  console.log(this.educationalInstitution);
  const urlBase = `http://193.203.174.161:8082/v1/bff/complaint/educational-institution?educationalInstitution=${this.educationalInstitution}`;
  const complaintsData = await this.dataApiService.getDataAPIService(urlBase).toPromise();

  if (complaintsData) {
    this.complaintsData = complaintsData;
    console.log(this.complaintsData);
  } else {
    console.error('Error fetching complaints');
  }
}

  async mostrarDenuncia(complaint: any) {
    const modal = await this.modalController.create({
      component: ComplaintModalComponent,
      componentProps: {
        educationalInstitution: complaint.educationalInstitution,
        nameAggressor: complaint.nameAggressor,
        placeViolationOccurred: complaint.placeViolationOccurred,
        complaintReason: complaint.complaintReason
      }
    });
    return await modal.present();
  }

   // Vai para a página anterior
   goBack() {
    this.location.back();
  }

}
