import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Controls password visibility
  isVisible: boolean = false;

  // Inject Angular Router, AuthService, and HotToastService
  private router = inject(Router);
  private authService = inject(AuthService);
  private hotToast = inject(HotToastService);

  // Reactive login form with validation
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)
    ])
  });

  // Toggle password visibility
  isVisibleOrNot() {
    this.isVisible = !this.isVisible;
  }

  // Helper to get a form control by name
  recieveLoginForm(value: string): any {
    return this.loginForm.get(value);
  }

  // Handle login form submission
  getLogin() {
    if (this.loginForm.valid) {
      // Call AuthService to sign in
      this.authService
        .signIn(this.loginForm.value)
        .pipe(
          // Show toast notifications for loading, success, and error
          this.hotToast.observe({
            loading: 'Logging in',
            success: 'Welcome back!',
            error: (err) => `There was an error: ${err.error.message}`
          })
        )
        .subscribe({
          next: (res: any) => {
            // On success, navigate to overview and reset form
            if (res?.status === 'success') {
              
              window.localStorage.setItem('token', res.data.accessToken);
              this.authService.saveUserData();
              this.router.navigate(['/overview']);
              this.loginForm.reset();
            }
          },
          error: () => {
            // On error, reset form
            this.loginForm.reset();
          }
        });
    } else {
      // Mark all fields as touched to show validation errors
      this.loginForm.markAllAsTouched();
    }
  }
}



// ahmed1@gmail.com
// A12345a