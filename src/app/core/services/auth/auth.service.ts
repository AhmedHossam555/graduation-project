import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Signup } from '../../interfaces/signup';
import { environment } from '../../../shared/Enviroment/enviroment';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: BehaviorSubject <any> = new BehaviorSubject<any>(null); 
  private platform_id = inject(PLATFORM_ID);

  constructor(private _http:HttpClient) { 
    if(isPlatformBrowser(this.platform_id)){{
         this.saveUserData();
    }
  }
}

  signup(value:Signup){
    return this._http.post(`${environment.apiUrl}/auth/sign-up`,value);
  }
  signIn(value:Signup){
    return this._http.post(`${environment.apiUrl}/auth/sign-in`,value);
  }

  saveUserData(){
    const token = JSON.stringify(localStorage.getItem('token'));

    if(token){
      const userdata = jwtDecode(token);

      console.log(userdata);
      this.userData.next(userdata);
    }
  }
}
