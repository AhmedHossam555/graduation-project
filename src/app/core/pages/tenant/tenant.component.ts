import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatatransferService } from '../../services/datatransfer/datatransfer.service';

import { AuthService } from '../../services/auth/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router, RouterLink } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-tenant',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.scss'
})
export class TenantComponent {
  private _dataTransfer = inject(DatatransferService);
  private _authService = inject(AuthService);
  private _hotToast = inject(HotToastService);  
  private router = inject(Router);

  errorMessage = signal<string>("");


  constructor(){
    
  }

  tenantForm = new FormGroup({
    "tenant": new FormGroup({
     "name": new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
     "description": new FormControl(null,[Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
     "logo": new FormControl(""),
   })
  })

  
  getTenantForm(){
    if(this.tenantForm.valid){
    let merge = Object.assign(this._dataTransfer.getData(), this.tenantForm.value);
    console.log(merge)
    this._authService.signup(merge).pipe(
      this._hotToast.observe({
        loading: 'Logging in',
        success:' Congrats ! You are signup successfully',
        error: (err)=>`There was an error: ${err.error.message}`
      }
    )).subscribe({
      next:(res:any)=>{
      if(res.status == 'success'){
          this.router.navigate(['/login']);
      }
    },
      error :(err)=>{
        this.errorMessage.set(err.error.message);
        this.router.navigate(['/register']);
      }
    })
    
    }
  

  }
}


