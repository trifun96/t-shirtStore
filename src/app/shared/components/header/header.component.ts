import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/userInterface.interface';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart-service.service';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';
import { TranslateService } from '@ngx-translate/core';

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
  public isClicked:boolean;
  public mobileMenu:boolean = false;
  public isOpenSideCart:boolean = false

  constructor(
    private authService: AuthService,
    private cart: CartService,
    private favoriteService: FavoriteService,
    public translate:TranslateService,
  ) {
    translate.addLangs(['en', 'sr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|sr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.isLoggedIn = currentUser ? true : false;
      console.log(this.authService.isLoggedIn(), 'dal je pozvan');

      if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
    });
    this.isLoggedIn = this.authService.isLoggedIn();
    this.totalItem$ = this.cart.totalItem$;
    this.totalFavoriteItem$ = this.favoriteService.totalFavoriteItem$;
  }


  isAdmin(): boolean {
    return this.authService.getRole() === 'admin';
  }

  toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
}

  closeMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.style.display = "none"
  }

toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

  logout() {
    this.authService.logout();
    this.currentUser = null;
    this.isLoggedIn = false;
  }

  openSideCart() {
    this.isOpenSideCart = !this.isOpenSideCart
  }

  closeSideCart(){
    this.isOpenSideCart = false
  }
}
