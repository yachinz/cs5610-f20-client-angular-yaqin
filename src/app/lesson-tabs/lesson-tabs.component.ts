import { Component, OnInit } from '@angular/core';
import {LessonService} from '../../services/LessonService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  lessons = [];
  courseId = '';
  moduleId = '';
  lessonId = '';

  constructor(private lessonService: LessonService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const mid = params.mid;
      const cid = params.cid;
      const lid = params.lid;
      if (typeof lid !== 'undefined') {
        this.lessonId = lid;
      }
      if (typeof cid !== 'undefined') {
        this.courseId = cid;
      }
      if (typeof mid !== 'undefined') {
        this.moduleId = mid;
        this.lessonService.findLessonsForModule(mid)
        .then(lessons => this.lessons = lessons);
      }
    });
  }

}
