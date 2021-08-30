import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchEvent : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  
}
