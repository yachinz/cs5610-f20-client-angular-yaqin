import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/CourseService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  course = {title: ''};

  constructor(private courseService: CourseService,
              private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const courseId = params.cid;
      if (typeof courseId !== 'undefined') {
        this.courseService.findCourseById(courseId).then(c => this.course = c);
      }
    });
  }

}
