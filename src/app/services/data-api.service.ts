import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private httpClient: HttpClient) { }
  getDataAPIService(url : string) {
    return this.httpClient.get(url);
  }

  postDataAPIService(url: string, data: any): Observable<any> {
    console.log('In postDataAPIService', url, data)
    return this.httpClient.post(url, data);
  }

}
