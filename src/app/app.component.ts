import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComplaintModalComponent } from './components/complaint-modal/complaint-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HttpClientModule, ComplaintModalComponent],
})

export class AppComponent {
  constructor(private http: HttpClient) {}

}
