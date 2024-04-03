import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { CreationFormComponent } from './components/creation-form/creation-form.component';

const routes: Routes = [
  {
    path: '', component: SignInComponent, pathMatch: 'full'
  },
  {
    path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'creation-form', component: CreationFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'sign-up', component: SignUpComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  { path: 'verify-email-address', component: VerifyEmailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
