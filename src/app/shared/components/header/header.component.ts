import { Component, OnInit } from '@angular/core';
import { User } from '../../models/userInterface.interface';
import { AuthService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  currentUser: User | null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.isLoggedIn = currentUser? true : false
      console.log(this.authService.isLoggedIn(), 'dal je pozvan')

      if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
      
    });
    this.isLoggedIn = this.authService.isLoggedIn();

  }

  logout() {
    this.authService.logout();
    this.currentUser = null;
    this.isLoggedIn = false;
  }
}
