import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddBoxService {
  private addBoxSubject = new Subject<void>();

  // Log a message when the addBox$ observable is created
  constructor() {
  }

  addBox$ = this.addBoxSubject.asObservable();

  triggerAddBox() {
    //setTimeout(() => this.addBoxSubject.next(), 0)
    this.addBoxSubject.next();
  }
}
