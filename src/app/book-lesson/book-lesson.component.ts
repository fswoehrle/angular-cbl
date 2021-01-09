import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LessonService } from "../lesson.service";
import { CblLesson } from '../core/model/cblLesson.model';

@Component({
  selector: "app-book-lesson",
  templateUrl: "./book-lesson.component.html",
  styleUrls: ["./book-lesson.component.css"]
})
export class BookLessonComponent implements OnInit {
  lessons: CblLesson[] = [];
  loading: Boolean = false;
  errorMessage: String = '';

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService
  ) { }

  ngOnInit() {
    this.loading = true;

    // Get parameters from current route
    const bookId = this.route.snapshot.paramMap.get("bookId");
    const lessonId = this.route.snapshot.paramMap.get("lessonId");

    // Get lesson content
    if (lessonId == "current") {
      this.lessonService.getCurrentLesson(bookId)
        .subscribe(
          (response) => {
            this.lessons = response;
            this.loading = false;
          },
          (error) => {
            this.errorMessage = error;
            this.loading = false;
          }
        )
    } else {
      this.lessonService.getLessons(bookId, lessonId)
        .subscribe(
          (response) => {
            this.lessons = response;
            this.loading = false;
          },
          (error) => {
            this.errorMessage = error;
            this.loading = false;
          }
        )
    }
  }
}