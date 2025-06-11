import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLogin = signal<boolean>(false);
  private auth = inject(AuthService);
  ngOnInit() {

    this.auth.userData.subscribe((res)=>{
      if(res){
        this.isLogin.set(true);
      }else{
        this.isLogin.set(false);
      }
    })
  

  }

}
