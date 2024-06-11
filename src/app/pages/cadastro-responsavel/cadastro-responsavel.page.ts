import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ButtonComponent} from '../../components/button/button.component';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-responsavel',
  templateUrl: './cadastro-responsavel.page.html',
  styleUrls: ['./cadastro-responsavel.page.scss'],
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule]
})
export class CadastroResponsavelPage implements OnInit {

  responsibleForm: FormGroup;

  constructor(private dataApiService: DataApiService, private fb: FormBuilder, private router: Router, private alertController: AlertController) {
    this.responsibleForm = this.fb.group({
      fullname: ['', Validators.required],
      birthDate: ['', Validators.required],
      nameTutoredStudent: ['', Validators.required],
      studentRegistration: ['', Validators.required],
      cpf: ['',Validators.required],
      postalCode: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      neighborhood: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      educationalIntitution: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
    //this.getData();
  }

  //Formatar a data para dd-mm-yyyy
  formatDate(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      input.type = 'text';
      return;
    }
    const dateParts = input.value.split('/');
    if (dateParts.length === 3) {
      const [day, month, year] = dateParts;
      input.value = `${day}-${month}-${year}`;
    }
    input.type = 'text';
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Cadastro realizado',
      buttons: ['OK']
    });

    await alert.present();
  }

  onFocus(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.type = 'date';
  }

  //Ao submeter o formulário
  onSubmit() {
    if (this.responsibleForm.valid) {
      console.log('form valido');
      const formData = this.responsibleForm.value;
      const url = 'http://193.203.174.161:8082/v1/bff/involved/responsible';

      this.dataApiService.postDataAPIService(url, formData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.router.navigate(['/login']);
          // Handle successful response
        },
        error: async (error) => {
          await this.showAlert();
          console.error('An error occurred:', error);
          this.router.navigate(['/login']);
          // Handle error
        }
      });
    } else {
      this.validateAllFormFields(this.responsibleForm); // Chama a validação em todos os campos
      this.logValidationErrors(this.responsibleForm); // Loga erros de validação
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

  goToLogin() {
    this.router.navigate(['/login']); // Navega para a página de login ao clicar no botão
  }

}
