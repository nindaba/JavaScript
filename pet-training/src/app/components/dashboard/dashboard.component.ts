import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pet } from 'src/app/services/models';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets:Pet[]=[];
   _search:string=''; 
  set search(@Input('search') search1){
    this._search = search1;
    if(this.search) this.pets = this.service.getAllPets().filter(pet => this.service.petMatches(pet,this.search));
  }
  get search(){
    return this._search;
  }
  constructor(private service:PetService) { }

  ngOnInit(): void {
    this.pets = this.service.getAllPets();
  }
}
