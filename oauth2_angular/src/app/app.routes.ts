import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

const redirectToUrl = '';

const routes: Routes = [
    {path: 'Home', component: HomeComponent, pathMatch: 'full'},
    {path: 'auth', component: AuthComponent, pathMatch: 'full'},
    {path: '', redirectTo: "auth", pathMatch: 'full'},
    {path: 'authorized', redirectTo: "auth", pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
]

export default routes;