import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './services/navbar.service';
import { HttpClientModule } from '@angular/common/http';
import { Dynamic1Component } from './components/dynamic1/dynamic1.component';
import { Dynamic2Component } from './components/dynamic2/dynamic2.component';
import { Dynamic3Component } from './components/dynamic3/dynamic3.component';
import { AdDirective } from './ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Dynamic1Component,
    Dynamic2Component,
    Dynamic3Component,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  entryComponents: [ Dynamic1Component, Dynamic2Component, Dynamic3Component ],

  providers: [NavbarService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
