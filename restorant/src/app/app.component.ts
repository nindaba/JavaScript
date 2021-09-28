import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restorant';
  //TODO change to false after working on basket
  isBasketShown: boolean= true;
  hideBasketShow(){
    this.isBasketShown = !this.isBasketShown;
  }
}
