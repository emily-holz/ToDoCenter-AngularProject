import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-tasks',
  templateUrl: './self-tasks.component.html',
  styleUrls: ['./self-tasks.component.css']
})
export class SelfTasksComponent implements OnInit {
  title: string = "Self Tasks"
  tasks: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTask(newTask:string) {
    if(!this.tasks.includes(newTask) && newTask != ""){
      this.tasks.push(newTask)
    }
  }

  removeTask(task:string){
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

}
