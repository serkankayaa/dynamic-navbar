import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuDto } from '../models/MenuDto';
import { apiBaseUrl } from '../config';

@Injectable()
export class NavbarService {

  constructor(private http: HttpClient) { }

  getNavbarInfo(): Observable<MenuDto[]> {
    return this.http.get<MenuDto[]>(apiBaseUrl + '/Navbar');
  }
}
