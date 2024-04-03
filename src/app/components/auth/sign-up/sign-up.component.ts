import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, public authService: AuthService) {}
  
  ngOnInit(): void {
    
  }

  async signup() {
    try {
      await this.authService.signUp(this.email, this.password);
      this.router.navigate(['/']);
    } catch (error:any) {
      this.error = error.message;
    }
  }

}
