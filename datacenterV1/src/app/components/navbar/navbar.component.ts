import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles:['.btn{background-color:#999999;}']
})
export class NavbarComponent {
  @Output('reload') onReload: EventEmitter<null> = new EventEmitter<null>();
  constructor() { }

  reload():void{
    this.onReload.emit();
  }
}
