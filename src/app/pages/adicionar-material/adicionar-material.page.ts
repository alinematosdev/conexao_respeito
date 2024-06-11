import { DataApiService } from './../../services/data-api.service';
import { AddBoxService } from '../../services/addbox.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-adicionar-material',
  templateUrl: './adicionar-material.page.html',
  styleUrls: ['./adicionar-material.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ButtonComponent, ReactiveFormsModule]
})

export class AdicionarMaterialPage implements OnInit {

  materialForm: FormGroup;

  constructor(private dataApiService: DataApiService, private AddBoxService: AddBoxService, private location: Location, private fb: FormBuilder, private loadingController: LoadingController) {
    this.materialForm = this.fb.group({
      filePath: ['', Validators.required]
    });
   }

  async onSubmit() {
    if (this.materialForm.valid) {
      console.log('form valido');
      const filePath = this.materialForm.get('filePath')!.value;
      console.log('File path:', filePath);

      const formData = new FormData();
      formData.append('filePath', this.materialForm.get('filePath')!.value);
      const url = 'http://193.203.174.161:8080/v1/activities/upload'; // Absolute URL

      const loading = await this.loadingController.create({
        message: 'Adding...',
        spinner: 'circles'
      });

      await loading.present();

      // Set the Content-Type header to multipart/form-data manually
      const headers = {
        'Content-Type': 'multipart/form-data'
      };

      this.dataApiService.postDataAPIService(url, formData).subscribe({
        next: async (response) => {
          console.log('Form submitted successfully:', response);
          await loading.dismiss();
          //this.router.navigate(['/tabs/atividades']);
          // Handle successful response
        },
        error: (error) => {
          console.error('An error occurred:', error);
          // Handle error
        }
      });
    } else {
      this.validateAllFormFields(this.materialForm); // Chama a validação em todos os campos
      this.logValidationErrors(this.materialForm); // Loga erros de validação
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


  // Define a ação de clique do botão Adicionar Material
  onClick() {
    // Chama o método para criar um elemento na página de materiais
    this.AddBoxService.triggerAddBox();
  }

  // Retorna para a página anterior
  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
