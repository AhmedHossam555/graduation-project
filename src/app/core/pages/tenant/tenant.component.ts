import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatatransferService } from '../../services/datatransfer/datatransfer.service';
import { Console } from 'console';

@Component({
  selector: 'app-tenant',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.scss'
})
export class TenantComponent {

  constructor(private dataTransfer:DatatransferService){
    console.log(this.dataTransfer.getData());
  }

  tenantForm = new FormGroup({
    "tenant": new FormGroup({
     "name": new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
     "description": new FormControl(null,[Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
     "role": new FormControl(null),
   })
  })

  
  getTenantForm(){
    // console.log(this.tenantForm.value);
    let merge = Object.assign(this.dataTransfer.getData(), this.tenantForm.value);
    console.log(merge);
  }
}
