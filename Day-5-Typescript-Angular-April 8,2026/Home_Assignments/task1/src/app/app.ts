import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'taskapp';
  currview = 'question';
  quesindex = 0;
  taskindex = 0;
  
  questions = [
    'q1',
    'q2',
    'q3',
    'q4',
    'q5'
  ];
  
  tasks = [
    'task 1',
    'task 2',
    'task 3',
    'task 4',
    'task 5'
  ];
  
  nextques() {
    this.currview = 'question';
    this.quesindex = (this.quesindex + 1) % this.questions.length;
  }
  
  nexttask() {
    this.currview = 'task';
    this.taskindex = (this.taskindex + 1) % this.tasks.length;
  }
}