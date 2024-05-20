import { Component, Input, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],

})
export class ButtonComponent  implements OnInit {

  @Input() btnType: 'primary' | 'secondary' | 'transparent' = 'primary';

  @Input() btnText: string = '';

  constructor() {
    //do nothing.
  }
  ngOnInit() {
  }

}
