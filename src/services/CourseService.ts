import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yaqin/courses`)
    .then(response => response.json())

  findCourseById = (cid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yaqin/courses/${cid}`)
    .then(response => response.json())

}
