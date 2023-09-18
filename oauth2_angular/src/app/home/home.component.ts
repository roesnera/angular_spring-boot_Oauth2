import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { demo } from '../constants/demo';
import { gmail } from '../constants/gmail';
import { gmailDrafts } from '../constants/gmailDrafts';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private httpService: HttpService){}

  public demoContent: any = '';
  public emailDrafts: any = '';
  public userID: any = '';

  ngOnInit() {
    this.getDemoInformation();
  }

  getDemoInformation() {
    // const token = sessionStorage.getItem('id_token');
    const token = sessionStorage.getItem('access_token');
    if(!token) return;
    const bearerToken = 'Bearer '+token;
    const options = {
      headers: new HttpHeaders({
        'Authorization': bearerToken
      }),
      // responseType: 'text'
    }
    // const response = this.httpService.doGet(demo(), options);
    const response = this.httpService.doGet(gmail(token));
    // const response = this.httpClient.get<string>(demo(), options);
    const firstResponse = response.pipe(take(1));
    console.log(firstResponse);
    firstResponse.subscribe((content) => {
      console.log(content);
      this.demoContent = (content as any)?.email;
      // this.userID = (content as any)?.user_id;
      // console.log(this.userID);
    })

    
    const emailDrafts = this.httpService.doGet(gmailDrafts(token, "me"), options);
    const firstDraft = emailDrafts.pipe(take(1));
    firstDraft.subscribe((content) => {
     console.log(content); 
    })
  }
}
