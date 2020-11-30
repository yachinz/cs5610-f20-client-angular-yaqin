import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseService} from '../services/CourseService';
import {LessonService} from '../services/LessonService';
import {ModuleService} from '../services/ModuleService';
import { NavComponent } from './nav/nav.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {CourseTableComponent} from './course-table/course-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    LessonService,
    ModuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
