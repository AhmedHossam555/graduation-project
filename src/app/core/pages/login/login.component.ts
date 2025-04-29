import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isVisible: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)])
  })

  isVisibleOrNot(){
    this.isVisible = !this.isVisible;
  }
  recieveLoginForm(value:string):any {
    return this.loginForm.get(value);
  }
  getLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }else{
      this.loginForm.markAllAsTouched();
    }
  }
}
