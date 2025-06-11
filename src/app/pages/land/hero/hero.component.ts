import { Component, inject } from '@angular/core';
import { ScrollDirective } from '../../../shared/directives/scroll/scroll.directive';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private router = inject(Router);
  private auth =inject(AuthService);
  
  onStart(){
    this.auth.userData.subscribe((res)=>{
      if(res){
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/register']);
      }
    })
  }
}
