import { Component, Input } from '@angular/core';
import { Task } from '../../../common/task';
import { TaskService } from '../../../core/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  public task: Task;
  constructor(private taskService: TaskService) {}

  public deleteTask() {
    this.taskService.deleteTask(this.task.uuid);
  }

}
