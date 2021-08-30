import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { LOGIN_URL, USER_URL } from './Url.model';
import { UserModel } from './User.model';
interface TokenModule{Roles: string[],exp: number,iat: number,iss: string,sub: string}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser:string ='';
  constructor(private http:HttpClient,private router:Router) { }
  register(user:UserModel){
    return this.http.post(USER_URL,user);
  }
  checkUsername(username:string):{username_exist:boolean}{
    let exist = {username_exist:false};
    this.http.get<{username_exist:boolean}>(USER_URL+`/${username}`)
    .subscribe(response=> exist=response);
    return exist;
  }
  login(credentials :{username:string,password:string}){
    let body:string = `username=${credentials.username}&password=${credentials.password}`;
    let headers:HttpHeaders= new HttpHeaders({'Content-type':'application/x-www-form-urlencoded'})
    return this.http.post<{Access_token:string}>(LOGIN_URL,body,{headers:headers});        
  }
  logout(){
    localStorage.setItem('Access-token','');
    this.router.navigate(['user']);
    this.loggedUser='';
  }
  get isLogin():boolean{
    let token:string = localStorage.getItem('Access-token')||'';
    if(token){
      let decoded_token:TokenModule = jwtDecode<TokenModule>(token);
      this.loggedUser = decoded_token.sub.split(' ')[0];
      let expDate:Date = new Date(decoded_token.exp*1000);
      return expDate > new Date();
    }
    return false;
  }
}
