import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: NavComponent},
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'courses/:cid/modules', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent},
  {path: 'courses/:cid/quizzes', component: QuizzesComponent},
  { path: 'courses/:cid/quizzes/:quizId', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
