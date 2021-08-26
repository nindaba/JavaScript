import { Component, Input, OnInit } from '@angular/core';
import { Trainee } from 'src/app/services/models';
import { PersonService } from 'src/app/services/person.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.css']
})
export class PetformComponent implements OnInit {
  image:string='';
  trainee:Trainee|undefined;
  private _traineeSearch:string ='';
  set traineeSearch(@Input('traineeSearch') search){
    this._traineeSearch = search;
  }
  get traineeSearch():string{
    return this._traineeSearch;
  }
  constructor(private petService:PetService,private personService:PersonService) { }
  
  ngOnInit(): void {
  }
  fileChanged(event:any){
    let reader:FileReader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (imageEvent:any)=>{
      this.image = imageEvent.target.result;
      console.log(this.image)
    }
  }

}
