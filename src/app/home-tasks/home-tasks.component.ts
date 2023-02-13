import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrls: ['./home-tasks.component.css']
})
export class HomeTasksComponent implements OnInit {
  title: string = "Household Tasks"
  tasks: string[] = [];
  completedTasks: string[] = [];
  isCrossedOff:boolean = false;

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

  completeTask(task:string){
    this.completedTasks.push(task);
    
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

}
