import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent} from '../../components/button/button.component';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  providers: [DataApiService],
  imports: [ButtonComponent, ReactiveFormsModule]
})

export class LoginPage {

  loginForm: FormGroup;

  constructor(private dataApiService: DataApiService, private fb: FormBuilder, private router: Router, private loadingController: LoadingController) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      console.log('form valido');
      const formData = this.loginForm.value;
      const url = 'http://193.203.174.161:8082/v1/bff/involved/auth/login';

      const loading = await this.loadingController.create({
        message: 'Please wait...',
        spinner: 'circles'
      });

      await loading.present();

      this.dataApiService.postDataAPIService(url, formData).subscribe({
        next: async (response) => {
          console.log('Form submitted successfully:', response);
          await loading.dismiss();
          this.router.navigate(['/tabs/home']);
          // Handle successful response
        },
        error: async (error) => {
          console.error('An error occurred:', error);
          await loading.dismiss();
          (document.getElementsByClassName('login-alert')[0]as HTMLElement).style.display = "block";
          // Handle error
        }
      });
    } else {
      this.validateAllFormFields(this.loginForm); // Chama a vaidação em todos os campos
      this.logValidationErrors(this.loginForm); // Loga erros de validação
      (document.getElementsByClassName('login-alert')[0]as HTMLElement).style.display = "block";
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

  goToCadastro() {
    this.router.navigate(['/cadastro']); // Navegue para a página de cadastro ao clicar no botão
  }

}

