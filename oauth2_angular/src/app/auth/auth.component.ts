import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public data: string = 'some data here!';

  constructor(private authService: AuthService, private activateRoute: ActivatedRoute) {
    this.getAuthorizationCode();
  }

  ngOnInit() {
    this.authService.getToken().pipe(take(1)).subscribe((tokens) => {
      console.log('tokens === '+tokens);
      if((tokens as any)?.id_token){
        sessionStorage.setItem('id_token', (tokens as any).id_token);
        sessionStorage.setItem('refresh_token', (tokens as any).refresh_token);
      }
    })
  }

  getAuthorizationCode() {
    this.activateRoute.queryParams.subscribe((params) => {
      if(params?.['code']){
        this.authService.code = params['code'];
        console.log('this.code = '+this.authService.code)
      }
    })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
