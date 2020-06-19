import { Dynamic3Component } from './../dynamic3/dynamic3.component';
import { Dynamic2Component } from './../dynamic2/dynamic2.component';
import { Dynamic1Component } from './../dynamic1/dynamic1.component';
import { MenuDto } from './../../models/MenuDto';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { Event, Router } from '@angular/router';
import { AdItem } from 'src/app/ad-item';
import { AdDirective } from 'src/app/ad.directive';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('menuContainer', { read: ViewContainerRef, static: false }) menuView: ViewContainerRef; //Container for created modules Components
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  interval: any;
  ContentHeader;
  menuList: MenuDto[] = [];
  currentAdIndex = -1;

  constructor(private navbarService: NavbarService, private vf: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
    this.getNavbars();
    this.next();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getNavbars() {
    this.navbarService.getNavbarInfo()
      .subscribe(data => {
        if (data) {
          this.menuList = data;
          this.loadComponent();

        }
      });
  }

  prepareData() {
    return [
      new AdItem(Dynamic1Component, { name: this.menuList[0].Name, bio: this.menuList[0].ContentHeader }),

      new AdItem(Dynamic2Component, {
        name: this.menuList[1].Name,
        bio: this.menuList[1].ContentHeader
      }),

      new AdItem(Dynamic3Component, {
        name: this.menuList[2].Name,
        bio: this.menuList[2].ContentHeader
      }),
    ]
  }



  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.menuList.length;
    const data = this.prepareData();
    const adItem = data[this.currentAdIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.vf;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  next() {
    let count = 0;
    this.interval = setInterval(() => {
      if (count == this.menuList.length - 1) {
        clearInterval(this.interval);
      } else {
        this.loadComponent();
        count++;
      }
    }, 100);
  }
}
