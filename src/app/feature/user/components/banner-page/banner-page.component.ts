import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-page',
  templateUrl: './banner-page.component.html',
  styleUrls: ['./banner-page.component.css']
})
export class BannerPageComponent {
constructor(private router:Router){}

  toNavigate(){
    this.router.navigate(['/new-collection'])
  }
}
