import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {
  country:string[]=[];
  source:string[]=[];
  category:string[]=[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
