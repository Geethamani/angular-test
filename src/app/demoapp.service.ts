import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoappService {

  constructor() {}
  getwelcomestring(){
    console.log("welcome to services")
  }
   }
