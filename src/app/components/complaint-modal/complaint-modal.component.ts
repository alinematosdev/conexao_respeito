import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
import { IonTitle, IonHeader, IonToolbar, IonContent, IonLabel, IonText, IonButton, IonItem, IonList, IonIcon, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-complaint-modal',
  templateUrl: './complaint-modal.component.html',
  styleUrls: ['./complaint-modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonLabel, IonText, IonButton, IonItem, IonList, IonIcon, IonTextarea]
})

export class ComplaintModalComponent {
  @Input() educationalInstitution: string = '';
  @Input() nameAggressor: string = '';
  @Input() placeViolationOccurred: string = '';
  @Input() complaintReason: string = '';

  constructor(private modalController: ModalController) {
    addIcons({ closeOutline });
  }

  close() {
    this.modalController.dismiss();
  }
}
