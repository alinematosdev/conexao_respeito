import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { ButtonComponent} from '../../components/button/button.component';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ComplaintModalComponent } from './../../components/complaint-modal/complaint-modal.component'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-conteudo-denuncia',
  templateUrl: './conteudo-denuncia.page.html',
  styleUrls: ['./conteudo-denuncia.page.scss'],
  standalone: true,
  providers: [ModalController],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonComponent, ComplaintModalComponent]
})

export class ConteudoDenunciaPage implements OnInit {

  constructor(private location: Location, private modalController: ModalController) { }

  ngOnInit() {
  }

  async mostrarDenuncia() {
    const modal = await this.modalController.create({
      component: ComplaintModalComponent,
      componentProps: {
        educationalInstitution: 'Escola ABC',
        nameAggressor: 'João',
        placeViolationOccurred: 'Facebook',
        complaintReason: 'Cyberbullying'
      }
    });
    return await modal.present();
  }

   // Vai para a página anterior
   goBack() {
    this.location.back();
  }

}
