import { Component } from '@angular/core';
import { redirectUrl } from '../constants/redirect';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  redirect(){
    window.location.href = redirectUrl();
  }
}
