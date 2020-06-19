import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-dynamic1',
  templateUrl: './dynamic1.component.html',
  styleUrls: ['./dynamic1.component.css']
})
export class Dynamic1Component  implements AdComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
