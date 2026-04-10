import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { Services } from '../services/services';
import { Test } from '../services/test';
import { AnotherComp } from './another-comp/another-comp';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, AnotherComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
