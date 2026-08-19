import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private auth: Auth) {}

  user: string = ""
  email: string = ""
  password: string = ""
  passwordConfirmation: string = ""
  errorMessage:string = ""

  onRegister() {

    if (!this.user || !this.email || !this.password || !this.passwordConfirmation) {
      this.errorMessage = "Information provided is not valid"
      return

    } else if (this.password !== this.passwordConfirmation) {
      this.errorMessage = "The password should be the same"
      return
    }

    this.auth.register({ username: this.user, email: this.email, password: this.password})
    console.log("Account created succesfully!")
  }
}