import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DatatransferService } from '../../services/datatransfer/datatransfer.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isVisibleConfirm: boolean = false;
  isVisiblePassword: boolean = false;

  private _dataTransfer = inject(DatatransferService);

  constructor(private router:Router){

  }



  registerForm: FormGroup = new FormGroup<any>({
   "username": new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
   "email": new FormControl(null,[Validators.required, Validators.email]),
   "password": new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
   "confirm_password": new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),

  },this.PasswordMatchValidator);

  isVisibleOrNot(){
    this.isVisiblePassword = !this.isVisiblePassword;
  }

  isVisibleOrNotConfirm(){
    this.isVisibleConfirm = !this.isVisibleConfirm;
  }
  recieveRegisterForm(value:string):any {
    return this.registerForm.get(value);
  }

  // get Register on submit
  getRegister(){

    if(this.registerForm.valid){
        this._dataTransfer.setData(this.registerForm.value);
        this.router.navigate(['/tenant']);
    }else{
      this.registerForm.markAllAsTouched();
    }
  }
  PasswordMatchValidator(form: any) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirm_password')?.value;

    if(password === confirmPassword) {
      return null; // Passwords match
    }else{
      return { 'passwordMismatch': true }; // Passwords do not match
    }
  }
}
