import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    
  }

  async login() {
    try {
      const userCredential = await this.authService.signIn(this.email, this.password);
      const user = userCredential;
      console.log('Firebase user:', user);
      // this.router.navigate(['/dashboard']);
      
    } catch (error: any) {
      this.error = error.message;
    }
  }
}
