import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';
  userName: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, public authService: AuthService) {}
  
  ngOnInit(): void {
    
  }

  async signup() {
    try {
      await this.authService.signUp(this.email, this.password).then((data)=> {
        this.router.navigate(['/']);
      })
    } catch (error:any) {
      this.error = error.message;
    }
  }

}
