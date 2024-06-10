import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private storageKey = 'userData';

  constructor() {
    this.loadUserData();
  }

  private _userType: string = '';
  private _firstName: string = '';
  private _nameResponsible: string = '';
  private _nameTutoredStudent: string = '';
  private _educationalInstitution: string = '';

  private saveUserData() {
    const data = {
      userType: this._userType,
      firstName: this._firstName,
      nameResponsible: this._nameResponsible,
      nameTutoredStudent: this._nameTutoredStudent,
      educationalInstitution: this._educationalInstitution
    };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  private loadUserData() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      const parsedData = JSON.parse(data);
      this._userType = parsedData.userType || '';
      this._firstName = parsedData.firstName || '';
      this._nameResponsible = parsedData.nameResponsible || '';
      this._nameTutoredStudent = parsedData.nameTutoredStudent || '';
      this._educationalInstitution = parsedData.educationalInstitution || '';
    }
  }

  // Getter and setter for userType
  get userType(): string {
    return this._userType;
  }

  set userType(value: string) {
    this._userType = value;
    this.saveUserData();
  }

  // Getter and setter for firstName
  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
    this.saveUserData();
  }

  // Getter and setter for nameResponsible
  get nameResponsible(): string {
    return this._nameResponsible;
  }

  set nameResponsible(value: string) {
    this._nameResponsible = value;
    this.saveUserData();
  }

  // Getter and setter for nameTutoredStudent
  get nameTutoredStudent(): string {
    return this._nameTutoredStudent;
  }

  set nameTutoredStudent(value: string) {
    this._nameTutoredStudent = value;
    this.saveUserData();
  }

  // Getter and setter for educationalInstitution
  get educationalInstitution(): string {
    return this._educationalInstitution;
  }

  set educationalInstitution(value: string) {
    this._educationalInstitution = value;
    this.saveUserData();
  }
}

