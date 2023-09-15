import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  doPost(url: string, body: any, options: { headers: HttpHeaders }) {
    // console.log(options);
    return this.httpClient.post(url, body, options);
  }

  doGet(url: string, options: { headers: HttpHeaders }) {
      const response =  this.httpClient.get<string>(url, options);
      console.log(response);
      return response;
  }
}
