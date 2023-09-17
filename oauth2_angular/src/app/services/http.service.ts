import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  doPost(url: string, body: any, options: { headers: HttpHeaders }) {
    // console.log(options);
    return this.httpClient.post(url, body, options);
  }

  doGet(url: string, options: { headers: HttpHeaders } | void) {
      let response;
      if(!!options){
        response =  this.httpClient.get(url, options);
      } else {
        response = this.httpClient.get(url);
      }
      console.log(response);
      return response;
  }
}
