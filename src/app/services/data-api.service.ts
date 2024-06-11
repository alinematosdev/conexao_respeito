import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private httpClient: HttpClient) { }
  getDataAPIService(url: string): Observable<any> {
    const apiUrl = url; // Prepend '/api' to the URL
    console.log('In getDataAPIService', apiUrl);
    return this.httpClient.get(apiUrl);
  }

  postDataAPIService(url: string, data: any): Observable<any> {

    const headers = new HttpHeaders();

    return this.httpClient.post(url, data, { headers });

    const apiUrl = url; // No need to prepend '/api' // Prepend '/api' to the URL
    /*console.log('In postDataAPIService', apiUrl, data);
    return this.httpClient.post(url, data, options);*/
  }

}
