import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTask } from "./task/task.model";


@Injectable({providedIn:'root'

})
export class TasksService{
    private rndZadaci = dummyTasks;

    constructor (){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.rndZadaci = JSON.parse(tasks);
        }
    }

    getUserTasks(userId:string){
        return this.rndZadaci.filter(item=>item.userId===userId);
    }

    addTask(task:NewTask, userId:string){
        this.rndZadaci.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: task.title,
            summary:task.summary,
            dueDate: task.dueDate,
          });
          this.saveTasks();
    }

    removeTask(taskId:string){
        this.rndZadaci= this.rndZadaci.filter(item=>item.id!==taskId);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.rndZadaci));
    }
}