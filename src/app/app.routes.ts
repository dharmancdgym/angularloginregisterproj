import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'register', component: RegistrationComponent }  // Add route for RegistrationComponent

];
