import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { NgClass } from "@angular/common";

@Component({
  selector: "course-card",
  imports: [NgClass],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  @Input({
    required: true,
  })
  courseNumber: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onViewCourse() {
    console.log("Course viewed");
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }
  }
}
