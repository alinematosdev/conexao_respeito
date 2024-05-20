import { Component, OnInit } from '@angular/core';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-cadastro-responsavel',
  templateUrl: './cadastro-responsavel.page.html',
  styleUrls: ['./cadastro-responsavel.page.scss'],
  standalone: true,
  imports: [ButtonComponent]
})
export class CadastroResponsavelPage {

  constructor() { }
}
