import { Component, OnInit } from '@angular/core';
import { ButtonComponent} from '../../components/button/button.component';

@Component({
  selector: 'app-cadastro-estudante',
  templateUrl: './cadastro-estudante.page.html',
  styleUrls: ['./cadastro-estudante.page.scss'],
  standalone: true,
  imports: [ButtonComponent]
})
export class CadastroEstudantePage implements OnInit {

  constructor() { }

  //eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
