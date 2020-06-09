import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {

  MenuName;
  constructor() { }

  ngOnInit(): void {
  }
}
