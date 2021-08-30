import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pet } from 'src/app/services/models';
import { PetService } from 'src/app/services/pet.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets:Pet[]=[];  
  constructor(private service:PetService,private searchService:SearchService) { }

  ngOnInit(): void {
    this.pets = this.service.getAllPets();
    this.searchService.searchEvent.subscribe((search:string)=>{
      if(search) this.pets = this.service.getAllPets().filter(pet => this.service.petMatches(pet,search));
      else this.pets = this.service.getAllPets();
    });
  }
}
