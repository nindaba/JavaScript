import { 
  Component,
  OnChanges,
  OnInit ,
  ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import {QuestionFormComponent} from '../question-form/question-form.component'
import { FormStateService } from '../services/form-state.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {
  adder:any;
  loggedName:string =''
  constructor(private formState: FormStateService,private router:Router,public userService:UserService) { 
  }

  ngOnChanges(): void {
    let token:string = localStorage.getItem('Access-token')||'';
    if(token){
      this.loggedName = jwtDecode<{Roles: string[],exp: number,iat: number,iss: string,sub: string}>
      (token).sub.split(' ')[0];
    }
  }
  openQuestion(){
    this.formState.onChange.emit({
      open:true,
      type:'Add',
    });
  }
  logout(){
    this.userService.logout();
  }
}
