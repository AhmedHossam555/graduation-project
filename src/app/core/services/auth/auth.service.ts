import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Signup } from '../../interfaces/signup';
import { environment } from '../../../shared/Enviroment/enviroment';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Holds the current user data as an observable
  userData: BehaviorSubject<any> = new BehaviorSubject<any>(null); 

  // Used to check if code is running in the browser (for SSR compatibility)
  private platform_id = inject(PLATFORM_ID);

  // Router instance to navigate after logout
  private router = inject(Router);

  constructor(private _http: HttpClient) { 
    // On service creation, if in browser, load user data from localStorage
    if (isPlatformBrowser(this.platform_id)) {
      this.saveUserData();
    }
  }

  // Register a new user
  signup(value: Signup) {
    return this._http.post(`${environment.apiUrl}/auth/sign-up`, value);
  }

  // Sign in an existing user
  signIn(value: Signup) {
    return this._http.post(`${environment.apiUrl}/auth/sign-in`, value);
  }

  // Load user data from token in localStorage and update userData observable
  saveUserData() {
    const token = localStorage.getItem('token');
    if (token) {
      const userdata = jwtDecode(token);
      this.userData.next(userdata);
    }
  }

  logout(){
    // Clear user data and token from localStorage
    this.userData.next(null);


    localStorage.removeItem('token');
    
    // Navigate to login page
    this.router.navigate(['/login']);
  }
}