import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChild("card1", { read: ElementRef })
  card1: CourseCardComponent;

  @ViewChild("card2", { read: ElementRef })
  card2: CourseCardComponent;

  @ViewChild("container")
  containerDiv: ElementRef;

  @ViewChildren(CourseCardComponent)
  coursesView: QueryList<CourseCardComponent>;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  coursesViewRef: QueryList<ElementRef>;

  onCourseSelected() {
    console.log(this.card1);
    console.log(this.card2);
    console.log(this.containerDiv);
    console.log(this.courses[0].iconUrl);
  }

  ngAfterViewInit(): void {
    console.log(this.card1);
    console.log(this.card2);
    console.log(this.containerDiv);
    console.log(this.coursesViewRef);

    this.coursesView.changes.subscribe((newList) => console.log(newList));
  }

  addCourse() {
    let newCourse = { ...this.coursesView.first.course };
    newCourse.id = this.coursesView.last.course.id + 1; // doesn't work right because of the 2 course cards manually added at the bottom of app.component.html
    this.courses.push(newCourse);
  }

  // courseTracker(index: number, course: Course) {
  //   return course.id;
  //   // For when you need to track multiple properties
  // }

  cardStyles(course: Course) {
    if (course.category === "BEGINNER") {
      return { "margin-left": "-30%", "margin-right": "30%" };
    } else if (course.category === "ADVANCED") {
      return { "margin-right": "-30%", "margin-left": "30%" };
    }
  }
}
