import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { HostBinding } from '@angular/core';
import { arrowBackOutline, alertCircleOutline, warningOutline } from 'ionicons/icons';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonIcon, IonLabel, CommonModule],
})
export class ButtonComponent  implements OnInit {

  @Input() btnType: 'primary' | 'secondary' | 'transparent' | 'back' | 'add' | 'complaint' = 'primary';

  @Input() btnText: string = '';

  constructor() {
    addIcons({ arrowBackOutline, alertCircleOutline, warningOutline });
  }
  ngOnInit() {
  }

}
