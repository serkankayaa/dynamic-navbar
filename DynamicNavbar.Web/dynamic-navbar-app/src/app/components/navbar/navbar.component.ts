import { MenuDto } from './../../models/MenuDto';
import { DynamicMenuComponent } from './../dynamic-menu/dynamic-menu.component';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuContainer', { read: ViewContainerRef, static: false }) menuView: ViewContainerRef; //Container for created modules Components

  menuList: MenuDto[] = [];

  constructor(private navbarService: NavbarService, private vf:ViewContainerRef, private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.getNavbars();
  }

  getNavbars() {
    this.navbarService.getNavbarInfo()
      .subscribe(data => {
        if (data) {
          this.menuList = data;

          this.initializeMenu();
        }
      });
  }

  initializeMenu() {
    this.menuList.forEach(module => {
      const moduleFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicMenuComponent);
      const moduleComponent = this.vf.createComponent(moduleFactory);

      moduleComponent.instance.MenuName = module.Name;
    });
  }
}
