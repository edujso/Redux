import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
//import { FilterTextComponent, FilterService } from '../blocks/filter-text';
import { FilterTextComponent } from '../blocks/filter-text';
import { store, filterCourses, IAppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<Course>
  //courses: Course[];
  //filteredCourses = this.courses;
  filteredCourses = [];

/*  constructor(private _courseService: CourseService, private _filterService: FilterService) {
  }*/
    constructor(
      private NgRedux: NgRedux<IAppState>
      ) { }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    //this.filteredCourses = this._filterService.filter(searchText, ['id', 'name', 'topic'], this.courses);
    store.dispatch(filterCourses(searchText));
  }

/*  getCourses() {
    this._courseService.getCourses()
      .subscribe(courses => {
        this.courses = this.filteredCourses = courses;
      });
  }*/

  ngOnInit() {
    componentHandler.upgradeDom();
  }
}
