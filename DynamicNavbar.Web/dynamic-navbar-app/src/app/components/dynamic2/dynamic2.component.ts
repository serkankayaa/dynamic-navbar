import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-dynamic2',
  templateUrl: './dynamic2.component.html',
  styleUrls: ['./dynamic2.component.css']
})
export class Dynamic2Component  implements AdComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
