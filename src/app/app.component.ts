import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log("course selected");
    console.log(course);
  }

  // courseTracker(index: number, course: Course) {
  //   return course.id;
  //   // For when you need to track multiple properties
  // }
}
