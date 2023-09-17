import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { tokenUrl } from '../constants/token';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public code: string = '';

  constructor(private httpService: HttpService) { }

  getToken(){
    const mockUserClient = '446969406485-c4rqf035se27h2q34n9upkbs7vbg83du.apps.googleusercontent.com';
    const mockUserSecret = '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';
    const basicAuth = 'Basic '+Buffer.from(`${mockUserClient}:${mockUserSecret}`).toString('base64');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': basicAuth
    });
    const options = {
      headers: headers
    }

    return this.httpService.doPost(tokenUrl(this.code), null, options);
  }
}
