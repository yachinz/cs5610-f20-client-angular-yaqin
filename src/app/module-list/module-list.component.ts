import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../services/ModuleService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules = [];
  courseId = '';
  moduleId = '';

  constructor(private moduleService: ModuleService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const cid = params.cid;
      const mid = params.mid;
      if (typeof cid !== 'undefined') {
        this.courseId = cid;
        this.moduleService.findModulesForCourse(cid)
        .then(modules => this.modules = modules);
      }
      if (typeof mid !== 'undefined') {
        this.moduleId = mid;
      }
    });
  }

}
