import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonContent, IonHeader, IonTabButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ButtonComponent} from '../../components/button/button.component';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
  standalone: true,
  providers: [DataApiService],
  imports: [IonContent, IonTabButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonComponent, ReactiveFormsModule]
})

export class DenunciaPage implements OnInit {

  cpf : string = '08874223064'
  complaintForm: FormGroup;

  constructor(private dataApiService: DataApiService, private fb: FormBuilder, private location: Location, private router: Router, private alertController: AlertController) {
    this.complaintForm = this.fb.group({
      educationalInstitution: ['', Validators.required],
      nameAggressor: ['', Validators.required],
      placeViolationOccurred: ['', Validators.required],
      complaintReason: ['', Validators.required]
    });
   }

   // Vai para a página anterior
   goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Denúncia realizada',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmit() {
    if (this.complaintForm.valid) {
      console.log('form valido');
      const formData = this.complaintForm.value;
      const url = `http://193.203.174.161:8082/v1/bff/complaint/${this.cpf}`;

      this.dataApiService.postDataAPIService(url, formData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          // Handle successful response
        },
        error: async (error) => {
          await this.showAlert();
          this.router.navigate(['/tabs/home']);
          console.error('An error occurred:', error);
          // Handle error
        }
      });
    } else {
      this.validateAllFormFields(this.complaintForm); // Chama a validação em todos os campos
      this.logValidationErrors(this.complaintForm); // Loga erros de validação
      console.error('Form is invalid');
    }
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  logValidationErrors(group: FormGroup) {
    Object.keys(group.controls).forEach((key: string) => {
      const controlErrors = group.get(key)!.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

}
