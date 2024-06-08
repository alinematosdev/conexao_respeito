import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent} from '../../components/button/button.component';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-estudante',
  templateUrl: './cadastro-estudante.page.html',
  styleUrls: ['./cadastro-estudante.page.scss'],
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule]
})
export class CadastroEstudantePage implements OnInit {

  studentForm: FormGroup;

  constructor(private dataApiService: DataApiService, private fb: FormBuilder, private router: Router) {
      this.studentForm = this.fb.group({
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        postalCode: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        neighborhood: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        educationalInstitution: ['', Validators.required],
        registration: ['', Validators.required],
        cpf: ['',Validators.required],
        birthDate: ['', Validators.required],
        nameResponsible: ['', Validators.required]
      });
   }

  ngOnInit() {
    //this.getData();
  }

  /*getData() {
    const url = 'http://193.203.174.161:8082/v1/bff/involved/student'; // Example URL, replace with your API URL
    this.dataApiService.getDataAPIService(url)
      .subscribe(data => {
        console.log(data);
        // Do something with the data
      }, error => {
        console.error('An error occurred:', error);
        // Handle error
      });
  }*/

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

  onFocus(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.type = 'date';
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('form valido');
      const formData = this.studentForm.value;
      const url = 'http://193.203.174.161:8082/v1/bff/involved/student';

      this.dataApiService.postDataAPIService(url, formData).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.router.navigate(['/login']);
          // Handle successful response
        },
        error: (error) => {
          console.error('An error occurred:', error);
          // Handle error
        }
      });
    } else {
      this.validateAllFormFields(this.studentForm); // Chama a vaidação em todos os campos
      this.logValidationErrors(this.studentForm); // Loga erros de validação
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
    this.router.navigate(['/login']); // Navegue para a página de login ao clicar no botão
  }

}
