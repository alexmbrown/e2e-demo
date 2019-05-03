import { Injectable } from '@angular/core';
import { BrowserStorageService } from '../browser-storage/browser-storage.service';
import { Task } from 'src/app/common/task';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

const TASK_KEY = 'tasks';

function generateUUID(): string {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  readonly subject: Subject<Task[]>;

  constructor(private browserStorageService: BrowserStorageService) {
    this.tasks = browserStorageService.get<Task[]>(TASK_KEY) || [];
    this.subject = new BehaviorSubject<Task[]>(this.tasks);
  }

  public addTask(task: Task) {
    task.uuid = generateUUID();
    this.tasks.push(task);
    this.browserStorageService.store(TASK_KEY, this.tasks);
    this.subject.next(this.tasks);
  }

  public updateTask(uuid: string, task: Task) {
    task.uuid = uuid;
    const index = this.tasks.findIndex((t: Task) =>  t.uuid === uuid);
    this.tasks[index] = task;
    this.browserStorageService.store(TASK_KEY, this.tasks);
    this.subject.next(this.tasks);
  }

  public getTask(uuid: string): Task {
    const task = this.tasks.find((t: Task) => t.uuid === uuid);
    if (task) {
      return Object.assign({}, task);
    }
  }

  public getTasks(): Observable<Task[]> {
    return this.subject;
  }

  public deleteTask(uuid: string) {
    this.tasks = this.tasks.filter((task: Task) => task.uuid !== uuid);
    this.browserStorageService.store(TASK_KEY, this.tasks);
    this.subject.next(this.tasks);
  }

}
