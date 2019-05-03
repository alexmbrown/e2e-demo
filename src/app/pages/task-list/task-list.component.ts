import { Component } from '@angular/core';
import { TaskService } from '../../core/services/task/task.service';
import { Observable } from 'rxjs';
import { Task } from 'src/app/common/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  public tasks$: Observable<Task[]> = this.taskService.getTasks();

  constructor(private taskService: TaskService) {}

}
