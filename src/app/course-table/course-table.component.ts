import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../services/CourseService';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  courses = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.findAllCourses()
    .then(courses => this.courses = courses);
  }

}
