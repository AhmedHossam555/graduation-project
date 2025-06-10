import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tenant',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.scss'
})
export class TenantComponent {

  tenantForm = new FormGroup({
    "tenant": new FormGroup({
     "name": new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
     "description": new FormControl(null,[Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
   })
  })

  getTenantForm(){
    console.log(this.tenantForm.value);
  }
}
