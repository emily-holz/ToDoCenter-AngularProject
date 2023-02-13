import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kid-tasks',
  templateUrl: './kid-tasks.component.html',
  styleUrls: ['./kid-tasks.component.css']
})
export class KidTasksComponent implements OnInit {
  title: string = "Kid-related Tasks"
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
