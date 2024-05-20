import { Component, OnInit } from '@angular/core';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.page.html',
  styleUrls: ['./cadastro-professor.page.scss'],
  standalone: true,
  imports: [ButtonComponent]
})
export class CadastroProfessorPage {

  constructor() { }
}
