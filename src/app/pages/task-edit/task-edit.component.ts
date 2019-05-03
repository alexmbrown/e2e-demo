import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../core/services/task/task.service';
import { Task } from 'src/app/common/task';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  public form: FormGroup;
  public name: FormControl;
  public due: FormControl;
  public notes: FormControl;

  public uuid: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.due = new FormControl(new Date());
    this.notes = new FormControl('');

    this.form = this.formBuilder.group({
      name: this.name,
      due: this.due,
      notes: this.notes
    });

    this.route.params.subscribe((params: Params) => {
      const task = this.taskService.getTask(params.uuid);
      if (task) {
        this.uuid = task.uuid;
        delete task.uuid;
        this.form.setValue(task);
      } else {
        delete this.uuid;
      }
    });
  }

  public createTask(task: Task): Promise<boolean> {
    this.taskService.addTask(task);
    return this.router.navigate(['/']);
  }

  public saveTask(task: Task): Promise<boolean> {
    this.taskService.updateTask(this.uuid, task);
    return this.router.navigate(['/']);
  }

}
