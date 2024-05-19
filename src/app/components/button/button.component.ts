import { Component, Input, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {'class': 'register-button'}
})
export class ButtonComponent  implements OnInit {

  @Input() btnType: 'primary' = 'primary';

  @Input() btnMargin: 'top' = 'top';

  @Input() btnText: string = '';

  constructor() {
    //do nothing.
  }
  ngOnInit() {
  }

}
