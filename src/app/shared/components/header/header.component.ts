import { Component, OnInit } from '@angular/core';
import { User } from '../../models/userInterface.interface';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart-service.service';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  currentUser: User | null;
  totalItem$: Observable<number> = new Observable<number>();
  totalFavoriteItem$: Observable<number> = new Observable<number>();

  constructor(private authService: AuthService, private cart:CartService, private favoriteService:FavoriteService) {}

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
    this.totalItem$ = this.cart.totalItem$
    this.totalFavoriteItem$ = this.favoriteService.totalFavoriteItem$

  }

  logout() {
    this.authService.logout();
    this.currentUser = null;
    this.isLoggedIn = false;
  }
}
