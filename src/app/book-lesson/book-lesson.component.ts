import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { LessonService } from "../lesson.service";

@Component({
  selector: "app-book-lesson",
  templateUrl: "./book-lesson.component.html",
  styleUrls: ["./book-lesson.component.css"]
})
export class BookLessonComponent implements OnInit {
  lesson;
  
  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService
  ) {}

  ngOnInit() {
    // First get the book id from the current route.
    const bookIdFromRoute = this.route.snapshot.paramMap.get("bookId");
    const lessonIdFromRoute = this.route.snapshot.paramMap.get("lessonId");

    let bookId: number = Number(bookIdFromRoute);

    if (lessonIdFromRoute == "current") {
      this.lesson = this.lessonService.getCurrentLesson(bookId);
    } else {
      let lessonId: number = Number(lessonIdFromRoute);
      this.lesson = this.lessonService.getLesson(bookId, lessonId);
    }
  }
}
