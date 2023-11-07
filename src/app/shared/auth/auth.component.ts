import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  authObs: Observable<AuthResponse>;
  errorMessage: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(authForm: NgForm) {
    const {email, password} = authForm.value;

    if (this.isLoginMode) {
      this.authObs = this.authService.login(email, password);
    } else {
      this.authObs = this.authService.signUp(email, password);
    }

    this.authObs.subscribe(
      {
        next: (res) => {
          authForm.reset();
          this.router.navigate(['bookshelf']);
        },
        error: (error) => {
          this.errorMessage = error.message;
        }
      }
    );
  }
}
