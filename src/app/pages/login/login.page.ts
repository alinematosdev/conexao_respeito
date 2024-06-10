import { DataApiService } from './../../services/data-api.service';
import { UserDataService } from '../../services/user-data.service'
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
  imports: [ButtonComponent, ReactiveFormsModule]
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private userDataService: UserDataService, private dataApiService: DataApiService, private fb: FormBuilder, private router: Router, private loadingController: LoadingController) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.userDataService.userType = '';
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      console.log('form valido');
      const formData = this.loginForm.value;
      const url = 'https://193.203.174.161:8082/v1/bff/involved/auth/login';

      const loading = await this.loadingController.create({
        message: 'Please wait...',
        spinner: 'circles'
      });

      await loading.present();

      this.dataApiService.postDataAPIService(url, formData).subscribe({
        next: async (response) => {
          //Handle successful response
          (document.getElementsByClassName('login-alert')[0]as HTMLElement).style.display = "none";
          await loading.dismiss();

          // Checar o tipo de usuário

          if (response.hasOwnProperty('nameResponsible')) {
            this.userDataService.userType = 'student';
            this.userDataService.firstName = response.fullname.split(' ')[0];
            this.userDataService.nameResponsible = response.nameResponsible;
            this.userDataService.educationalInstitution = response.educationalInstitution;
            console.log(response.educationalIntitution);
          } else if (response.hasOwnProperty('nameTutoredStudent')) {
            this.userDataService.userType = 'responsible';
            this.userDataService.firstName = response.fullname.split(' ')[0];
            this.userDataService.nameTutoredStudent = response.nameTutoredStudent;
            this.userDataService.educationalInstitution = response.educationalIntitution;
            console.log(response.educationalIntitution);
          } else {
            this.userDataService.userType = 'teacher';
            this.userDataService.firstName = response.fullname.split(' ')[0];
            this.userDataService.educationalInstitution = response.educationalIntitution;
            console.log(response.educationalIntitution);
          }

          //Grava os dados do usuário
          console.log(response);
          const fullname = response.fullname;
          const birthDate = response.birthDate;
          const address = response.address;
          const city = response.city;
          const email = response.email;
          const neighborhood = response.neighborhood;
          const phoneNumber = response.phoneNumber;
          const postalCode = response.postalCode;


          console.log('Full Name:', fullname);
          console.log('Birth Date:', birthDate);
          console.log('Address:', address);
          console.log('City:', city);
          console.log('Email:', email);
          console.log('Neighborhood:', neighborhood);
          console.log('Phone Number:', phoneNumber);
          console.log('Postal Code:', postalCode);

          this.router.navigate(['/tabs/home']);

        },
        error: async (error) => {
           //Handle error
          console.error('An error occurred:', error);
          await loading.dismiss();
          (document.getElementsByClassName('login-alert')[0]as HTMLElement).style.display = "block";
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

