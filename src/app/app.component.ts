import { Component } from '@angular/core';
import { DataApiService } from './services/data-api.service';
import { UserDataService } from './services/user-data.service';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComplaintModalComponent } from './components/complaint-modal/complaint-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  providers: [UserDataService, DataApiService],
  imports: [IonApp, IonRouterOutlet, HttpClientModule, ComplaintModalComponent],
})

export class AppComponent {
  constructor(private http: HttpClient) {}

}
