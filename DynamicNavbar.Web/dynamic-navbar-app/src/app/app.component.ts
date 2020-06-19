import { NavbarService } from 'src/app/services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { MenuDto } from './models/MenuDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'dynamic-navbar-app';

  menuList: MenuDto[] = [];

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.getNavbars();
  }

  getNavbars() {
    this.navbarService.getNavbarInfo()
      .subscribe(data => {
        if (data) {
          this.menuList = data;
        }
      });
  }
}
