import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ButtonComponent]
})

export class LoginPage {

  constructor(private router: Router) { }

  goToCadastro() {
    this.router.navigate(['/cadastro']); // Navegue para a página de cadastro ao clicar no botão
  }

}

