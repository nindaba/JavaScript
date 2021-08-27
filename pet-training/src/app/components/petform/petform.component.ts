import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person, Trainer } from 'src/app/services/models';
import { PersonService } from 'src/app/services/person.service';
import { PetService } from 'src/app/services/pet.service';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.css']
})
export class PetformComponent implements OnInit {
  @ViewChild('newPerson',{read: ViewContainerRef})
  newPersonContainerRef: ViewContainerRef|any;
  newPersonRef: ComponentRef<PersonFormComponent>|any;
  subjectsChips:string[]=[];
  trainers:Trainer[] = []
  owners:Person[] = [];
  petForm :FormGroup;
  image:string='https://www.google.com/search/static/gs/animal/cover_images/m0bt9lr_cover.png';
  trainer:Trainer|undefined;
  private _trainerSearch:string ='';
  set trainerSearch(@Input('trainerSearch') search){
    this._trainerSearch = search;
  }
  get trainerSearch():string{
    return this._trainerSearch;
  }
  constructor(
    private petService:PetService,
    private personService:PersonService,
    private formBuilder : FormBuilder,
    private resolver: ComponentFactoryResolver) {
    this.petForm = this.formBuilder.group({
    name:['',Validators.required],
    age:['',Validators.required],
    owner:['',Validators.required],
    trainer:['',Validators.required],
    breed:['',Validators.required],
    subjects:['',Validators.required],
    image :['']
    })
  }

  
  ngOnInit(): void {
    // as the user types we check if the username is looking for is available
    // if not available we set the form to ivalid 

    this.petForm.get('owner')?.valueChanges.subscribe((name:string)=>{
       // condition as when saved values will change and come empty causing errors
      if(name){
        this.owners = this.personService.getPeopleByName(name);
        if(this.owners) this.petForm.get('owner')?.setErrors(null);
        else this.petForm.get('owner')?.setErrors({nowners:true})
      }
    });
    this.petForm.get('trainer')?.valueChanges.subscribe((name:string)=>{
      // condition as when saved values will change and come empty causing errors
      if(name){
        this.trainers = this.personService.getTrainersByName(name);
        if(this.trainers) this.petForm.get('trainer')?.setErrors(null);
        else this.petForm.get('trainer')?.setErrors({notrainer:true})
        console.log(this.petForm.get('trainer')?.getError('notrainer'))
      }
    })
    //add a subject as a chip using ,
    this.petForm.get('subjects')?.valueChanges.subscribe((subject:string)=>{
      if(subject?.endsWith(',') && subject) {
        this.subjectsChips.push(subject.substring(0,subject.length-1));
        this.petForm.get('subjects')?.setValue ('');
        // then we clear validators because we nolonger need them 
        this.petForm.get('subjects')?.clearValidators();
        this.petForm.get('subjects')?.clearAsyncValidators();
      }
    });
  }
  fileChanged(event:any){
    let reader:FileReader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (imageEvent:any)=>{
      this.image = imageEvent.target.result;
      console.log(this.image)
    }
  }
  addPet(){
    if(this.newPersonRef){
      let username:string = this.newPersonRef.instance.personForm.value.username;
      this.petForm.get('owner')?.setValue(username);
      this.personService.addPerson(this.newPersonRef.instance.personForm.value);
    }
    //we add the image
    this.petForm.value.image = this.image;
    //Submit
    this.petService.addPet(this.petForm.value,this.subjectsChips);
    // console.log(this.petService.getAllPets())

    // clean Values;
    this.reset();
  }
  newPersonForm(){
    let component = this.resolver.resolveComponentFactory(PersonFormComponent);
    this.newPersonRef = this.newPersonContainerRef.createComponent(component);
    this.petForm.get('owner')?.setErrors(null);
  }
  get personInvalid():boolean{
    if(this.newPersonRef){
      return this.newPersonRef.instance.personForm.invalid;
    }
    return false;
  }
  reset(){
    if(this.newPersonRef){
      this.newPersonRef.destroy();
    }
    this.petForm.reset();
    this.subjectsChips = [];
  }
}
