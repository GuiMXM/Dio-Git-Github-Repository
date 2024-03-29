import { Component, OnInit } from "@angular/core";
import { Course } from './course';
@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html' 
})
export class CourseListComponent implements OnInit{ 
    courses: Course[] = [];
    ngOnInit(): void {
        this.courses = [
            {
              id:1,
              name:'Angular: Forms',
              imageUrl:'./assets/images/forms.png',
              price:99.99,
              code:'XPS-2354',
              duration:120,
              rating:4.5,
            },
            {
              id:2,
              name:'Angular: HTTP',
              imageUrl:'./assets/images/http.png',
               price:95.99,
              code:'XPK-2354',
              duration:50,
               rating:4.2,
            }
        ]
    }
}