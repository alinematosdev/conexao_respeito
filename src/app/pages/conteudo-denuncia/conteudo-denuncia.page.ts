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
  educationalInstitution: string = '';

  constructor(private userDataService: UserDataService, private location: Location, private modalController: ModalController, private dataApiService: DataApiService, private loadingController: LoadingController) { }

  async ngOnInit() {
    this.educationalInstitution = this.userDataService.educationalInstitution;
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
  const urlBase = 'http://193.203.174.161:8082/v1/bff/complaint/';
  const limit = 10; // Maximum complaint ID to fetch
  const complaintsPromises: Promise<any>[] = [];

  for (let i = 1; i <= limit; i++) {
    const url = urlBase + i;
    const promise = this.dataApiService.getDataAPIService(url).toPromise();
    complaintsPromises.push(promise);
  }

  Promise.all(complaintsPromises.map(p => p.catch(e => undefined)))
  .then(complaintsData => {
    // Remove undefined values (rejected promises) from the array
    complaintsData = complaintsData.filter(data => data !== undefined);
    // Concatenate arrays using spread operator
    this.complaintsData = [].concat(...complaintsData);
    // Filter complaints based on the selected educational institution
    this.complaintsData = this.complaintsData.filter((complaint: any) => complaint.educationalInstitution === this.educationalInstitution);
    console.log(this.complaintsData);
    }).catch(error => {
    // Log rejected promises
    console.error('Rejected promises:', error);
  });
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
