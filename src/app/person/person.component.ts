import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() employee:any;
@Output() employeeEvent = new EventEmitter<any>();
employeeCopy={};

updateObj(val,key){
  this.employeeCopy[key]=val;
}
update(){
  this.employeeEvent.emit(this.employeeCopy);
}
}
