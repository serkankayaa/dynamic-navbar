import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicMenuComponent } from '../dynamic-menu/dynamic-menu.component';
import { NavbarRoutingModule } from './navbar-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ]
})
export class NavbarModule { }
