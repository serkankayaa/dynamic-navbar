import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './services/navbar.service';
import { HttpClientModule } from '@angular/common/http';
import { DynamicMenuComponent } from './components/dynamic-menu/dynamic-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DynamicMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
