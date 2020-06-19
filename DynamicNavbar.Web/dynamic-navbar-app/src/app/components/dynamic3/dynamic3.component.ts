import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-dynamic3',
  templateUrl: './dynamic3.component.html',
  styleUrls: ['./dynamic3.component.css']
})
export class Dynamic3Component  implements AdComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
