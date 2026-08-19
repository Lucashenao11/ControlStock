import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private auth: Auth, private router: Router) {}

  email: string = ""
  password: string = ""
  errorMessage: string = ""

  onLogin() {

    if (!this.email || !this.password) {
      this.errorMessage = "email or password is not valid"
      return
    }

   const result = this.auth.login(this.email, this.password)

    if (result) {
      this.router.navigate(['/dashboard'])
      console.log("Log in succesful!")
    } else {
      console.log("User does not exits")
    }
  }
}