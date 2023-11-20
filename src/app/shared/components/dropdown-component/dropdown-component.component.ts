import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { User } from '../../models/userInterface.interface';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.css']
})
export class DropdownComponent {
  constructor(private authService: AuthService) {}
  public currentUser: User | null;

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((currentUser) => {
this.currentUser = currentUser;
    })
  }

  logout(): void {
    this.authService.logout();
  }
}
