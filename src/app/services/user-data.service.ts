import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _userType: string = '';
  private _firstName: string = '';
  private _nameResponsible: string = '';
  private _nameTutoredStudent: string = '';
  private _educationalInstitution: string = '';

  // Getter and setter for userType
  get userType(): string {
    return this._userType;
  }

  set userType(value: string) {
    this._userType = value;
  }

  // Getter and setter for firstName
  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  // Getter and setter for nameResponsible
  get nameResponsible(): string {
    return this._nameResponsible;
  }

  set nameResponsible(value: string) {
    this._nameResponsible = value;
  }

  // Getter and setter for nameTutoredStudent
  get nameTutoredStudent(): string {
    return this._nameTutoredStudent;
  }

  set nameTutoredStudent(value: string) {
    this._nameTutoredStudent = value;
  }

  // Getter and setter for educationalInstitution
  get educationalInstitution(): string {
    return this._educationalInstitution;
  }

  set educationalInstitution(value: string) {
    this._educationalInstitution = value;
  }
}

