import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
})
export class ChildComp {
  @Input() nameP: string = '';

  @Input() buttonText: string = '';

  @Output() notify = new EventEmitter<string>();

  childgive: string='coming from child'
  sendData(){
    this.notify.emit(this.childgive);
  }
}
