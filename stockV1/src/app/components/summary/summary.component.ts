import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() stock: any;
  constructor() { }

  ngOnInit(): void {
  }

}
