import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Services } from '../../services/services';
import { Test } from '../../services/test';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-another-comp',
  imports: [FormsModule],
  templateUrl: './another-comp.html',
  styleUrl: './another-comp.css',
})
export class AnotherComp {
  // d: Services;
  // constructor(protected data: Services) {
  //   this.d=data;
  // }
  // service = inject(Services); //recommendded way to inject services in Angular 16 and above
  test = inject(Test);
  namesArr:string[]=this.test.namesArr;
  cdr = inject(ChangeDetectorRef);
  addName(name:string){
    this.namesArr.push(name);
  }

  ngOnInit(){
    this.test.namesArr=this.namesArr;
  }

}
