import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { LessonService } from "../lesson.service";

@Component({
  selector: "app-book-lesson",
  templateUrl: "./book-lesson.component.html",
  styleUrls: ["./book-lesson.component.css"]
})
export class BookLessonComponent implements OnInit {
  lesson: Observable<Object>;
  
  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService
  ) {}

  ngOnInit() {
    // Get parameters from current route
    const bookId = this.route.snapshot.paramMap.get("bookId");
    const lessonId = this.route.snapshot.paramMap.get("lessonId");

    // Get lesson content
    if (lessonId == "current") {
      this.lesson = this.lessonService.getCurrentLesson(bookId);
    } else {
      this.lesson = this.lessonService.getLesson(bookId, lessonId);
    }
  }
}
