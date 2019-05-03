import { NgModule } from '@angular/core';
import { BrowserStorageService } from './services/browser-storage/browser-storage.service';
import { TaskService } from './services/task/task.service';

@NgModule({
  providers: [
    BrowserStorageService,
    TaskService
  ]
})
export class CoreModule { }
