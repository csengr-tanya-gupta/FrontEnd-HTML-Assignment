import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComp } from "./child-comp/child-comp";


@Component({
  selector: 'app-first-component',
  imports: [CommonModule, FormsModule, ChildComp],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {
  names: string[] = ['Tanya', 'Tanishq', 'gaurav', 'aarya', 'aditya'];
  currentIndex: number = 0;
  style:string = 'color: red';
  isHidden:boolean = false;
  name: string = 'Tanya';
  

  click(){
    this.isHidden = !this.isHidden;
  }

  prev(){
    this.currentIndex = (this.currentIndex - 1 + this.names.length) % this.names.length;
  }

  next(){
    this.currentIndex = (this.currentIndex + 1) % this.names.length;
  }

  get currentName(): string {
    return this.names[this.currentIndex];
  }

  ipVal:string=''
  inputValChange(str:string){
    console.log(str);
    this.ipVal=str;
  }

  nameP: string = 'This is a name given from parent'

  buttonText: string = 'Button from Parent'

  receivedFromChild: string = '';

  receiveData(data: string){
    this.receivedFromChild = data;
    console.log('Received from child:', this.receivedFromChild);
  }

  applyClass: boolean = false
  shouldApply(){
    this.applyClass=!this.applyClass;
  }
  arr:number[]=[1,2,3,4,5,6,7,8,9,10];
  
}
