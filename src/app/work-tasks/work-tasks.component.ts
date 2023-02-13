import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-tasks',
  templateUrl: './work-tasks.component.html',
  styleUrls: ['./work-tasks.component.css']
})
export class WorkTasksComponent implements OnInit {
  title: string = "Work Tasks"
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
