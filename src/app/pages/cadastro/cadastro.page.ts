import { Component} from '@angular/core';
import { EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { ButtonComponent} from '../../components/button/button.component';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [ButtonComponent]
})

export class CadastroPage {
  public environmentInjector = inject(EnvironmentInjector);

  selectedUserType: string = '';

  constructor(private router: Router) { }

  goToCadastro() {
    const userTypeSelect = document.getElementById('user-type') as HTMLSelectElement;
    this.selectedUserType = userTypeSelect.value;

    switch (this.selectedUserType) {
      case 'estudante':
        this.router.navigate(['/cadastro/estudante']).finally(() => {
        });
        break;
      case 'professor':
        this.router.navigate(['/cadastro/professor']).finally(() => {
        });
        break;
      case 'responsavel':
        this.router.navigate(['/cadastro/responsavel']).finally(() => {
        });
        break;
    }
  }

  onChangeUserType() {
  }
}
