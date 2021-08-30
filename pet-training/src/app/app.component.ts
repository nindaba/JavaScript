import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pet-training';
  _search:string=''; 
  set search(@Input('search') search1){
    this._search = search1;
    this.searchService.searchEvent.emit(search1);
    
  }
  get search(){
    return this._search;
  }
  constructor(private searchService:SearchService,private route :ActivatedRoute){}
}
